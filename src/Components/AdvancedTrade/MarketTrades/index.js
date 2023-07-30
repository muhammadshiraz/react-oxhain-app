import React from "react";

const MarketTrades = ({ y }) => {
	const marketData = [
		{
			price: 368.756,
			amount: 0.000194341,
			total: 0.00194341,
		},
	];

	for (var i = 0; i < 100; i++) {
		marketData.push(marketData[0]);
	}

	return (
		<div
			className="market flex flex-col text-xs font-prompt h-[210px] flex-auto px-1"
			style={{ height: y ? y + "px" : "" }}
		>
			{/* Market Trades Label */}
			<div className="header-bg">
				<div className="market-tabs-header flex flex-row items-center divider px-3">
					<span className="text-left text53 text-xs font-semibold">
						Market Trades
					</span>
					<span className={"text-[11px] text-left ml-2 text55 font-normal"}>
						My Trades
					</span>
				</div>

				<div
					className={`market-table-header flex flex-row py-2 text-xxs px-3`}
				>
					<span className="mr-9">Price(USDT)</span>
					<span className="mr-9">Amount(BTC)</span>
					<span className="">Total</span>
				</div>
			</div>

			<div className="overflow-y-auto px-1">
				{marketData.map((market, i) => (
					<div
						className="market-item flex flex-row items-center justify-between py-1 font-light px-2"
						key={"market-trades-" + i}
					>
						<span className="flex-1 text-left text52">{market.price}</span>
						<span className="flex-1 text-right">{market.amount}</span>
						<span className="flex-1 text-right">{market.total}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default MarketTrades;
