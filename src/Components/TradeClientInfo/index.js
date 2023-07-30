import React from "react";
import Funds from "../../Pages/BasicTrade/ClientInfoTabs/Funds";
import OpenOrders from "../../Pages/BasicTrade/ClientInfoTabs/OpenOrders";
import OpenHistory from "../../Pages/BasicTrade/ClientInfoTabs/OrderHistory";
import TradeHistory from "../../Pages/BasicTrade/ClientInfoTabs/TradeHistory";
import MarginHistory from "../../Pages/BasicTrade/ClientInfoTabs/MarginHistory";
import Button02 from "../Button/Button02";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabIndex } from "../../Store/Slices/ClientInfoSlice";

const TradeClientInfo = () => {
	const activeTabIndex = useSelector((state) => state.clientInfo.activeTabIndex);
	const contentDataLength = useSelector((state) => state.clientInfo.contentDataLength);
	const dispatch = useDispatch();

	function renderTabsContent() {
		if (activeTabIndex === 0) return <OpenOrders />;
		if (activeTabIndex === 1) return <OpenHistory />;
		if (activeTabIndex === 2) return <TradeHistory />;
		if (activeTabIndex === 3) return <MarginHistory />;
		if (activeTabIndex === 4) return <Funds />;
	}
	return (
		<div className="client-info flex flex-col w-full px-4">
			<div className="flex flex-row text-xs pt-2 mb-3">
				<button onClick={() => dispatch(setActiveTabIndex(0))} className="mr-9">
					<span className={`${activeTabIndex === 0 ? 'text53 font-semibold' : 'text55'}`}>Open Orders ({contentDataLength})</span>
				</button>
				<button onClick={() => dispatch(setActiveTabIndex(1))} className="mr-9">
					<span className={`${activeTabIndex === 1 ? 'text53 font-semibold' : 'text55'}`}>Order History</span>
				</button>
				<button onClick={() => dispatch(setActiveTabIndex(2))} className="mr-9">
					<span className={`${activeTabIndex === 2 ? 'text53 font-semibold' : 'text55'}`}>Trade History</span>
				</button>
				<button onClick={() => dispatch(setActiveTabIndex(3))} className="mr-9">
					<span className={`${activeTabIndex === 3 ? 'text53 font-semibold' : 'text55'}`}>Margin History</span>
				</button>
				<button onClick={() => dispatch(setActiveTabIndex(4))} className="mr-9">
					<span className={`${activeTabIndex === 4 ? 'text53 font-semibold' : 'text55'}`}>Funds</span>
				</button>
				{activeTabIndex !== 4 ? (
					<button className="mr-9 absolute right-0">
						<span className="text55">Hide Other Pairs</span>
					</button>
				) : (
					<button className="mr-9 absolute right-0">
						<span className="text55">This label for fund</span>
					</button>

				)}
			</div>
			{renderTabsContent()}

			{/* <Button02 y={40} buttonClass="w-[350px] mx-auto my-20">
				<span className="font-semibold !text-white">Log In </span>
				<span className="font-normal !text-white opacity-60">or</span>
				<span className="font-semibold !text-white"> Register Now</span>
			</Button02> */}
		</div>
	);
};

export default TradeClientInfo;
