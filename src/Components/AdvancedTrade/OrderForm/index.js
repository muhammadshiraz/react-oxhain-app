import React, { useState } from "react";
import Button02 from "../../Button/Button02";
import PriceField from "../../TradePriceField";
import { TradePriceSlider } from "../../TradePriceSlider";

const OrderForm = () => {
	// 0 is the Spot, 1 is the Cross 3x, 2 is the Isolated 10x
	const [processType, setProcessType] = useState(0);

	// 0 is the Limit, 1 is the Market, 2 is the Stop-Limit
	const [buyOrSellType, setBuyOrSellType] = useState(0);

	// Buy or sell button
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<div className="orderForm font-normal px-3">
			<div className="process-types flex flex-row items-center mt-2 text-sm">
				<button
					onClick={() => setProcessType(0)}
					className={`process-types-item mr-auto ${
						processType === 0 ? "active" : ""
					}`}
				>
					<span className="text55">Spot</span>
				</button>
				<button
					onClick={() => setProcessType(1)}
					className={`process-types-item divider px-3 ${
						processType === 1 ? "active" : ""
					}`}
				>
					<span className="text55">Cross 3x</span>
				</button>
				<button
					onClick={() => setProcessType(2)}
					className={`process-types-item ml ml-auto ${
						processType === 2 ? "active" : ""
					}`}
				>
					<span className="text55">Isolated 10x</span>
				</button>
			</div>

			<div className="orderForm-content mt-[22px]">
				{/* This section is Limit / Market / Stop-limit */}
				<div className="flex flex-row text-xs">
					<button onClick={() => setBuyOrSellType(0)} className={`mr-6`}>
						<span
							className={`${buyOrSellType === 0 ? "text53 font-semibold" : ""}`}
						>
							Limit
						</span>
					</button>
					<button onClick={() => setBuyOrSellType(1)} className={`mr-6`}>
						<span
							className={`${buyOrSellType === 1 ? "text53 font-semibold" : ""}`}
						>
							Market
						</span>
					</button>
					<button onClick={() => setBuyOrSellType(2)} className={``}>
						<span
							className={`${buyOrSellType === 2 ? "text53 font-semibold" : ""}`}
						>
							Stop-Limit
						</span>
					</button>
				</div>

				<div className="orderForm-tab-items flex flex-row items-center mt-3 rounded-sm font-medium">
					<div
						className={`orderForm-tab-items-rect buy ${
							tabIndex === 0 ? "buy" : "sell"
						}`}
					></div>

					<button onClick={() => setTabIndex(0)} className="flex-1 z-10">
						<span
							className={`!text-white text-sm ${tabIndex === 0 ? "font-semibold" : ""}`}
						>
							BUY
						</span>
					</button>
					<button onClick={() => setTabIndex(1)} className="flex-1 z-10">
						<span
							className={`!text-white text-sm ${tabIndex === 1 ? "font-semibold" : ""}`}
						>
							SELL
						</span>
					</button>
				</div>

				<div className="flex flex-row mt-6">
					<div className="flex flex-row text-xs font-medium">
						<span>Avbl</span>
						<span className="mx-2">0.000000000</span>
						<span>USDT</span>
					</div>
				</div>

				<div className="flex flex-col mt-3">
					{/* Two input for only stop-limit */}
					{buyOrSellType === 2 ? (
						<PriceField
							disabled={buyOrSellType === 1}
							y={30}
							type="number"
							label={"Stop"}
							labelsClassName="font-medium mb-1"
							inputClassName={`flex-1 px-2 text-sm background60 mb-2 ${
								buyOrSellType === 1 ? "opacity-30" : ""
							}`}
							inputSpoiler="TRY"
						/>
					) : ""}

					<PriceField
						disabled={buyOrSellType === 1}
						y={30}
						type="number"
						label={"Limit"}
						labelsClassName="font-medium mb-1"
						inputClassName={`flex-1 px-2 text-sm background60 ${
							buyOrSellType === 1 ? "opacity-30" : ""
						}`}
						inputSpoiler="TRY"
					/>

					<PriceField
						y={30}
						type="number"
						label={"Amount"}
						labelsClassName="font-medium mb-1 mt-2"
						inputClassName="flex-1 px-2 text-sm background60"
						inputSpoiler="TRY"
					/>

					<div className="mt-6 pl-2 pr-1">
						<TradePriceSlider />
					</div>

					{/* <div className="flex flex-row items-center justify-center mt-16 font-medium text-xs">
						<a href="#" className="text53 mr-1">
							Log In
						</a>
						<span>or</span>
						<a href="#" className="text53 ml-1">
							Register Now
						</a>
					</div> */}

					{/* Action Button */}
					<Button02
						skew={false}
						y={30}
						buttonClass={`mt-[30px] ${
							tabIndex === 0 ? "background54" : "background55"
						}`}
					>
						<span className="font-medium !text-white text-sm">BUY</span>
					</Button02>
				</div>
			</div>
		</div>
	);
};

export default OrderForm;
