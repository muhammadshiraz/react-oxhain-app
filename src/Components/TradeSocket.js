import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMarketTrade, setItemMarketData, setOrderBooks, setPair, setPrice } from '../Store/Slices/TradeSlice';

const TradeSocket = ({ pair }) => {
    let ws;

    // This lines is options
    const ORDER_BOOK_INTERVAL = 1500;
    const PRICE_INTERVAL = 500;

    let price = '0';
    const orderBooks = { asks: [{ amount: 0, limit: 0 }], bids: [{ amount: 0, limit: 0 }] };
    let virtualMarketTrades = [];

    // usable pairs from the server
    let usablePairs = [];

    const dispatch = useDispatch();

    useEffect(() => {
        // BTC_USDT convert to BTC/USDT
        dispatch(setPair(pair.replace('_', '/')));

        initGetPairs();
        initSocket();
        listenSocket();

        // this interval for refresh book tickers -> redux
        setInterval(() => {
            console.log('re-render tradesocket component');

            // This variable is sort variable by limit
            const renderOrderBooks = orderBooks;
            renderOrderBooks.asks = renderOrderBooks.asks.slice(-25)
            renderOrderBooks.bids = renderOrderBooks.bids.slice(-25)
            // Sort from largest to smallest
            renderOrderBooks.asks = renderOrderBooks.asks.sort(function (a, b) {
                if (a.limit > b.limit) return -1;
                return 0;
            });
            renderOrderBooks.bids = renderOrderBooks.bids.sort(function (a, b) {
                if (a.limit > b.limit) return -1;
                return 0;
            });

            if (renderOrderBooks.asks.length >= 25 && renderOrderBooks.bids.length >= 25) {
                // Put sort data to store/orderBooks 
                dispatch(setOrderBooks(renderOrderBooks));
                orderBooks.asks = [];
                orderBooks.bids = [];
            }

            dispatch(addMarketTrade(virtualMarketTrades.slice(-30).reverse()));
            if (virtualMarketTrades.length >= 60) {
                virtualMarketTrades = virtualMarketTrades.slice(-30);
            }
        }, ORDER_BOOK_INTERVAL);

        // this interval for refresh price -> redux
        setInterval(() => {
            dispatch(setPrice(price));
            // if page name is basic trade, you can use below code
            // document.title = `Oxhain Exchange | $${price} ${pair}`;
        }, PRICE_INTERVAL);
    }, [pair]);

    const initGetPairs = () => {
        const requestObj = {
            apikey: "28b4b56939b14fdf30bcefeb3e935193b0f07ce22523ab5d32afcf3f4151edc0"
        }

        axios.post('http://18.118.138.191:9595/getPairs', requestObj)
            .then((res) => {
                if (res.data.status === 'success') {
                    const pairs = res.data.data.map((coin) => {
                        return coin.symbolOne + '_' + coin.symbolTwo;
                    });

                    usablePairs = pairs;
                }
            });
    }

    const initSocket = () => {
        ws = new WebSocket("wss://stream.binance.com/stream");

        // BNB_USDT => bnbusdt
        const noSlashPair = pair.replace('_', '').toLowerCase();

        const initSocketMessage = {
            method: "SUBSCRIBE",
            params: [`${noSlashPair}@aggTrade`, `${noSlashPair}@bookTicker`, `${noSlashPair}@trade`, "!miniTicker@arr"],
            // params: ["!miniTicker@arr"],
            id: 1,
        };

        ws.onopen = (event) => {
            ws.send(JSON.stringify(initSocketMessage));
        };

        // Reconnect connection when disconnect connection
        ws.onclose = () => {
            ws.send(JSON.stringify(initSocketMessage));
        }
    }

    const listenSocket = () => {
        ws.onmessage = function (event) {
            const data = JSON.parse(event.data).data;

            if (data.A && data.a && data.b && data.B && !data.e) {
                listenOrderBooks(data);
            } else if (data.e === 'aggTrade') {
                listenPrice(data);
            } else if (data.e === 'trade') {
                listenTrade(data);
            } else if (data[0].e === '24hrMiniTicker') {
                // console.log(data);
                listenMarket(data);
            }
        }
    }

    const listenOrderBooks = (data) => {
        const askAmount = String(data.A).slice(0, 6);
        const askLimit = String(data.a).slice(0, 8);

        const bidAmount = String(data.B).slice(0, 6);
        const bidLimit = String(data.b).slice(0, 8);

        // orderBooks.bids = orderBooks.bids.slice(-50);
        // orderBooks.asks = orderBooks.asks.slice(-50);

        if (!orderBooks.asks.find((ask) => ask.amount === askAmount && ask.limit === askLimit)) {
            orderBooks.asks.push({ amount: askAmount, limit: askLimit });
        }
        if (!orderBooks.bids.find((bid) => bid.amount === bidAmount && bid.limit === bidLimit)) {
            orderBooks.bids.push({ amount: bidAmount, limit: bidLimit });
        }

        // console.log(orderBooks);
        // console.log(orderBooks);
    }

    const listenPrice = (data) => {
        price = data.p.slice(0, 8);
    }

    const listenTrade = (data) => {
        const direction = data.m ? 'up' : 'down'; // true or false
        const amount = String(data.q).slice(0, 6);
        const limit = String(data.p).slice(0, 8);

        const marketTradeData = { direction, amount, limit };
        virtualMarketTrades.push(marketTradeData);
    }

    const listenMarket = (data) => {
        data.forEach((item) => {
            const _pair = item.s;
            const price = String(item.c).slice(0, 8);

            const findedPair = usablePairs.find(x => x.replace('_', '') === _pair);
            if (findedPair) {
                const open = item.o;
                const close = item.c;
                dispatch(setItemMarketData({ pair: findedPair, price, open, close }));
            }
        });
    }
}

export default TradeSocket;