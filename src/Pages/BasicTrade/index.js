import React, { useState } from "react";
import { OxhainBasicTrade } from "./BasicTrade.styled";
import OrderBooks from "../../Components/BasicTrade/OrderBooks";
import Market from "../../Components/BasicTrade/Market";
import MarketTrades from "../../Components/BasicTrade/MarketTrades";
import SubHeader from "../../Components/BasicTrade/SubHeader";
import OrderForm from "../../Components/BasicTrade/OrderForm";

import Button02 from "../../Components/Button/Button02";
import ClientInfo from "../../Components/TradeClientInfo";
import Icon from "../../Components/Icon";
import Select04 from "../../Components/Select/Select04";
import TradeStickyFooter from "../../Components/TradeStickyFooter";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCallback } from "react";
import { AdvancedChart } from "react-tradingview-embed";
import TradeSocket from "../../Components/TradeSocket";
import TradeOrderBookTicker from "../../Components/TradeOrderBookTicker";

const BasicTrade = () => {
	const { pair } = useParams();

	const SELL_ORDER_BOOK_HEIGHT = 400;
	const BUY_ORDER_BOOK_HEIGHT = 335;
	const ORDER_BOOK_TOTAL_HEIGHT =
		SELL_ORDER_BOOK_HEIGHT + BUY_ORDER_BOOK_HEIGHT;

	// 0 = all & 1 = only buy & 2 = only sell
	const [orderBooksType, setOrderBooksType] = useState(0);

	const pairDropdownItems = [
		{ value: 0.01, label: "0.01" },
		{ value: 0.1, label: "0.1" },
		{ value: 1, label: "1" },
		{ value: 10, label: "10" },
		{ value: 50, label: "50" },
		{ value: 1000, label: "100" },
	];

	return (
		<>
			<TradeSocket pair={pair} />
			<OxhainBasicTrade
				id="basicTrade"
				className="flex flex-col items-start w-full mt-24 font-prompt"
			>
				{/* Basic Trade Header */}
				<SubHeader />

				<div className="flex flex-row w-full">
					{/* Left Side - Ordersbooks */}
					<div className="left flex flex-col">
						<div className="flex flex-row  pl-6 pr-2">
							<button onClick={() => setOrderBooksType(0)} className="mr-4">
								<Icon name="orderBook" />
							</button>
							<button onClick={() => setOrderBooksType(1)} className="mr-4">
								<Icon name="buyOrder" />
							</button>
							<button onClick={() => setOrderBooksType(2)}>
								<Icon name="sellOrder" />
							</button>

							{/* <span className="ml-auto text-xs font-semibold mr-4">0.01</span> */}
							<Select04 className="ml-auto" items={pairDropdownItems} />
							<button>
								<Icon name="verticalThreeDot" />
							</button>
						</div>

						<div
							className={`flex flex-row justify-between py-2 pl-4 pr-3 text-xs`}
						>
							<span className="flex-1 text-left">Price(USDT)</span>
							<span className="">Amount(BTC)</span>
							<span className="flex-1 text-right">Total</span>
						</div>

						{/* Buy orderbooks - Dynamic = I will add data prop. For example, <OrderBooks data="buyOrdersData" /> */}
						{orderBooksType === 0 || orderBooksType === 2 ? (
							<OrderBooks
								action={"sell"}
								y={
									orderBooksType === 0
										? SELL_ORDER_BOOK_HEIGHT
										: ORDER_BOOK_TOTAL_HEIGHT - 60
								}
							/>
						) : (
							""
						)}

						{/* Coin Price Info */}
						<TradeOrderBookTicker />

						{/* Sell orderbooks - Dynamic = I will add data prop. For example, <OrderBooks data="sellOrdersData" /> */}
						{orderBooksType === 0 || orderBooksType === 1 ? (
							<OrderBooks
								action={"buy"}
								y={
									orderBooksType === 0
										? BUY_ORDER_BOOK_HEIGHT
										: ORDER_BOOK_TOTAL_HEIGHT
								}
							/>
						) : (
							""
						)}
					</div>

					{/* Middle Side - Chart and Buy/Sell Form*/}
					<div className="flex flex-col flex-1">
						{/* <div className="w-full h-[570px] bg-[#323232]"></div> */}
						<AdvancedChart
							widgetProps={{
								symbol: pair.replace('_', ''),
								theme: localStorage.getItem('theme'),
								autosize: false,
							}}
						/>

						<OrderForm />
					</div>

					{/* Right Side - Market and Market Trades */}
					<div className="right flex flex-col">
						<Market />
						<MarketTrades />
					</div>
				</div>

				<ClientInfo />
			</OxhainBasicTrade>

			<TradeStickyFooter />
		</>
	);
};

export default BasicTrade;
