import React, { useState } from "react";
import MarketTrades from "../../Components/AdvancedTrade/MarketTrades";
import OrderBooks from "../../Components/AdvancedTrade/OrderBooks";
import SubHeader from "../../Components/AdvancedTrade/SubHeader";
import ClientInfo from "../../Components/TradeClientInfo";
import Icon from "../../Components/Icon";
import Select04 from "../../Components/Select/Select04";
import TradeStickyFooter from "../../Components/TradeStickyFooter";
import { OxhainFixedTrade } from "./FixedTrade.styled";
import OrderForm from "../../Components/BasicTrade/OrderForm";

const FixedTrade = () => {
	const { innerHeight } = window;

	const SELL_ORDER_BOOK_HEIGHT = innerHeight / 100 * 1;
	const BUY_ORDER_BOOK_HEIGHT = innerHeight / 100 * 1;
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
			<OxhainFixedTrade
				id="fixedTradePage"
				className="flex flex-col items-start w-full font-prompt h-screen"
			>
				<SubHeader />

				<div className="flex flex-col w-full pt-[5px] h-full">
					<div className="flex flex-row w-full h-full">
						{/* Left Side */}
						<div className="layout-left flex flex-col flex-1 pr-1 h-full">
							<div className="w-full bg-[#323232] flex-auto mb-[5px] min-h-[300px]"></div>
							<ClientInfo />
						</div>
						<div className="flex flex-col">
							<div className="flex flex-row flex-1">
								<div className="layout-middle flex flex-col py-3 px-1 mr-[5px]">
									<div className="px-3">
										<span className="text-sm font-semibold text-left block">
											Order Book
										</span>

										<div className="flex flex-row">
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
											<Select04
												className="ml-auto mr-2"
												items={pairDropdownItems}
											/>

											<button>
												<Icon name="verticalThreeDot" />
											</button>
										</div>
									</div>

									<div className={`flex flex-row pb-2 text-xxs px-3`}>
										<span className="mr-9">Price(USDT)</span>
										<span className="mr-10">Amount(BTC)</span>
										<span className="">Total</span>
									</div>

									{orderBooksType === 0 || orderBooksType === 2 ? (
										<OrderBooks
											action={"sell"}
											y={
												orderBooksType === 0
													? SELL_ORDER_BOOK_HEIGHT
													: ORDER_BOOK_TOTAL_HEIGHT
											}
										/>
									) : (
										""
									)}

									{/* Coin Price Info */}
									<div className="coin-price-info flex flex-row items-center justify-between px-3 my-2 h-8">
										<span className="flex-1 text-base text-left font-medium">
											19.151.06
										</span>
										<span className="mx-auto text55 text-xxs font-medium">
											19.151.06
										</span>
										<span className="flex-1 text53 text-xxs text-right">More</span>
									</div>

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
								<div className="layout-right flex flex-col">
									<MarketTrades />
								</div>
							</div>

							<OrderForm className={'mt-[5px]'} />
						</div>
					</div>
				</div>
			</OxhainFixedTrade>

			<TradeStickyFooter />
		</>
	);
};

export default FixedTrade;
