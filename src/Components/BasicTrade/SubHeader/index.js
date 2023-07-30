import React from "react";
import { useSelector } from "react-redux";
import Icon from "../../Icon";

const SubHeader = () => {
	const pair = useSelector(state => state.trade.pair);
	const priceObj = useSelector(state => state.trade.priceObj);


	return (
		<div className="basicTradeHeader flex flex-row w-full justify-start items-center text-xs mb-[5px]">
			<div className="left flex flex-row flex-1 px-4 py-3">
				<div className="flex flex-row justify-between items-center px-6 font-medium">
					<div className="price-primary flex flex-col text-left mr-5 pr-5">
						<span className="font-medium text-2xl">{pair}</span>
						<span className="text-sm font-normal">Bitcoin Price</span>
					</div>
					<div className="flex flex-col text-left mr-10">
						<span className="text-lg text52 mb-2">{priceObj.price}</span>
						<span className="w-20">{priceObj.price}</span>
					</div>
					<div className="flex flex-col text-left mr-10">
						<span className="text4 mb-2">24H Change</span>
						<span className="text51">-995.28 -4.67%</span>
					</div>
					<div className="flex flex-col text-left mr-10">
						<span className="text4 mb-2">24H High</span>
						<span>21,723.00</span>
					</div>
					<div className="flex flex-col text-left mr-10">
						<span className="text4 mb-2">24H Low</span>
						<span>19,950.34</span>
					</div>
					<div className="flex flex-col text-left mr-10">
						<span className="text4 mb-2">24H Volume(BTC)</span>
						<span>92,642.30</span>
					</div>
					<div className="flex flex-col text-left mr-10">
						<span className="text4 mb-2">24H Volume (USDT)</span>
						<span>1,937,106,047.21</span>
					</div>
				</div>
				<div className="flex flex-row items-center text-left ml-auto mr-2">
					<Icon name={'playVideo'} />
					<span className="text-sm ml-3">Spot Tutorial</span>
				</div>
			</div>

			{/* Header Right */}
			<div className="right">
				<input
					type="text"
					className="search-input px-2 rounded-sm h-8 w-11/12"
					placeholder="Search"
				/>
			</div>
		</div>
	);
};

export default SubHeader;
