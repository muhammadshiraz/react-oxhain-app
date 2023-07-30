import React from "react";
import { useSelector } from 'react-redux';

const MarketTrades = () => {
	const data = useSelector(state => state.trade.marketTrades);

	// const marketData = [
	// 	{
	// 		price: 368.756,
	// 		amount: 0.000194341,
	// 		time: "12:44:04",
	// 	},
	// ];

	// for (var i = 0; i < 100; i++) {
	// 	marketData.push(marketData[0]);
	// }


	return (
		<div className="px-2 mb-4">
			<div className="market flex flex-col text-xs font-prompt -mt-3 h-[415px]">
				{/* Market Trades Label */}
				<div className="mt-6 pt-2 mb-3">
					<div className="flex flex-row items-center divider px-2">
						<span className="text-left text53 text-xs font-semibold">Market Trades</span>
						<span className={"text-xxs text-left ml-8"}>My Trades</span>
					</div>

					<div className="flex flex-row justify-between px-2 pt-1 pb-2">
						<span className="flex-1 text-left">Price(USDT)</span>
						<span className="flex-1 text-right">Amount(BTC)</span>
						<span className="flex-1 text-right">Time</span>
					</div>
				</div>

				<div className="overflow-y-auto">
					{data.map((market, i) => (
						<div
							className="market-item flex flex-row items-center justify-between py-1 font-light px-2"
							key={"market-trades-" + i}
						>
							<span className={`flex-1 text-left ${market.direction === 'up' ? 'text52' : 'text51'}`}>{market.limit}</span>
							<span className="flex-1 text-right">{market.amount}</span>
							<span className="flex-1 text-right">{market.time}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MarketTrades;
