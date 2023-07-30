// See for createSlice: https://redux-toolkit.js.org/api/createSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pair: '',
    priceObj: {
        direction: '', // up or down = buy or sell
        price: ''
    },
    orderBooks: { asks: [], bids: [] },
    marketData: [],
    marketTrades: [],
    //orderBooks: { asks: [{ amount: 0, limit: 0 }], bids: [{ amount: 0, limit: 0 }] },
    // marketData: [{ pair: '', price: '' }],
    //marketTrades: [{ buy: false, amount: 0, limit: 0, }],
}

export const TradeSlice = createSlice({
    name: 'trade',
    initialState,
    reducers: {
        setPair(state, action) {
            state.pair = action.payload;
        },
        setPrice(state, action) {
            if (action.payload > state.priceObj.price) {
                state.priceObj.direction = 'up';
            } else {
                state.priceObj.direction = 'down';
            }
            state.priceObj.price = action.payload;
        },
        setOrderBooks(state, action) {
            state.orderBooks.asks = action.payload.asks.map((value) => {
                return value;
            });
            state.orderBooks.bids = action.payload.bids.map((value) => {
                return value;
            });
        },
        addMarketTrade(state, action) {
            state.marketTrades = action.payload.map((value) => {
                return value;
            });
            // state.marketTrades.unshift(action.payload);
            // if (state.marketTrades.length >= 51) {
            //     state.marketTrades.pop();
            // }
        },
        setItemMarketData(state, action) {
            const { pair, price, open, close } = action.payload;

            const data = state.marketData.find(x => x.pair === pair);
            if (data) {
                data.price = price;
            } else {
                state.marketData.push({ pair, price, open, close });
            }
        }
    }
});

export const { setPair, setPrice, setOrderBooks, addMarketTrade, setItemMarketData } = TradeSlice.actions;
export default TradeSlice.reducer;