import React from "react";
import Icon from "../../Icon";

const SubHeader = ({ y }) => {
	return (
		<div className="advancedTradeHeader flex flex-row w-full justify-start items-center text-xs">
			<div className="flex flex-row justify-between items-center w-full pl-11 font-medium py-2" style={{ height: y ? y : '' }}>
				<div className="price-primary flex flex-row items-center text-left mr-5 pr-2">
					<div className="flex flex-col  mr-6">
						<span className="font-medium text-base">AAVE/TRY</span>
						<span className="text-xs font-normal text53">Bitcoin</span>
					</div>
					<Icon name="rightArrow" className="rotate-90 w-[7px] mr-1" />
				</div>
				<div className="flex flex-row justify-between w-full">
					<div className="flex flex-col text-right ml-6 mr-10">
						<span className="text4 mb-1 text-xs text55">Last Price</span>
						<span className="text-sm">368,752 TRY</span>
					</div>
					<div className="flex flex-col text-right mr-10">
						<span className="text4 mb-1 text-xs text55">Bid</span>
						<span className="text-sm font-semibold">368,486</span>
					</div>
					<div className="flex flex-col text-right mr-10">
						<span className="text4 mb-1 text-xs text55">Ask</span>
						<span className="text-sm font-semibold">368,760</span>
					</div>
					<div className="flex flex-col text-right mr-10">
						<span className="text4 mb-1 text-xs text55">24h Change</span>
						<span className="text-sm font-semibold text52">8,550 (%2.37)</span>
					</div>
					<div className="flex flex-col text-right mr-10">
						<span className="text4 mb-1 text-xs text55">24h High</span>
						<span className="text-sm font-semibold">373,300</span>
					</div>
					<div className="flex flex-col text-right mr-10">
						<span className="text4 mb-1 text-xs text55">24h Low</span>
						<span className="text-sm font-semibold">346,500</span>
					</div>
					<div className="flex flex-col text-right mr-10">
						<span className="text4 mb-1 text-xs text55">24h Average</span>
						<span className="text-sm font-semibold">359,746</span>
					</div>
					<div className="flex flex-col text-right mr-10">
						<span className="text4 mb-1 text-xs text55">24h Oxhain Volume</span>
						<span className="text-sm font-semibold">393</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubHeader;
