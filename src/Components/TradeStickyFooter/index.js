import React from "react";
import { useState } from "react";
import { OxhainTradeStickyFooter } from "./TradeStickyFooter.styled";
import Icon from "./../Icon";

const TradeStickyFooter = () => {
	const [coinInfos, setCoinInfos] = useState([
		{
			coin: "BTCBUSD",
			price: (Math.random() * 2555).toString().slice(0, 6),
			change: (Math.random() * 75).toString().slice(0, 4),
		},
		{
			coin: "DOGEUSD",
			price: (Math.random() * 2555).toString().slice(0, 6),
			change: (Math.random() * 75).toString().slice(0, 4),
		},
		{
			coin: "SHIBBUSD",
			price: (Math.random() * 2555).toString().slice(0, 6),
			change: (Math.random() * 75).toString().slice(0, 4),
		},
		{
			coin: "ETHBUSD",
			price: (Math.random() * 2555).toString().slice(0, 6),
			change: (Math.random() * 75).toString().slice(0, 4),
		},
		{
			coin: "MATICBUSD",
			price: (Math.random() * 2555).toString().slice(0, 6),
			change: (Math.random() * 75).toString().slice(0, 4),
		},
		{
			coin: "MANABUSD",
			price: (Math.random() * 2555).toString().slice(0, 6),
			change: (Math.random() * 75).toString().slice(0, 4),
		},
		// {
		// 	coin: "AAVEBUSD",
		// 	price: (Math.random() * 2555).toString().slice(0, 6),
		// 	change: (Math.random() * 75).toString().slice(0, 4),
		// },
	]);

	return (
		<OxhainTradeStickyFooter className="hidden lg:flex fixed bottom-0 flex-row items-center justify-between h-5 w-full text-xs px-4 font-medium">
			<div className="flex flex-row items-center min-w-fit divider">
				<Icon name="stats" className="mr-2" />
				<span className="text53">Stable connection</span>
			</div>
			<div className="flex flex-row items-center justify-between overflow-hidden mx-auto">
				<Icon name="settings" className="ml-4" />

				{coinInfos.map((item, i) => (
					// <button className={`flex flex-row divider ${i === 3	 ? 'hidden xl:flex' : ''} ${i === 4 ? 'hidden 2xl:flex' : ''} ${i === 5 ? 'hidden 2xl:flex' : ''} ${i >= 6 ? 'hidden 2xl:flex' : ''}`} key={i}>
					<button className={`trade-sticky-footer-items flex flex-row divider`} key={i}>
						<span className="mr-3">{item.coin}</span>
						<span className={`mr-3 ${i % 3 ? "text56" : "text57"}`}>
							-{item.change}
						</span>
						<span>{item.price}</span>
					</button>
				))}
			</div>
			<div className="flex flex-row justify-between ml-auto">
				<button className="flex flex-row items-center divider">
					<Icon name="notification" className="mr-2" />
					<span>Announcements</span>
				</button>
				<button className="flex flex-row items-center divider">
					<Icon name="settings" className="mr-2" />
					<span>Cookie Preferences</span>
				</button>
				<button className="flex flex-row items-center divider">
					<Icon name="download" className="mr-2" />
					<span>Download</span>
				</button>
				<button className="flex flex-row items-center divider">
					<Icon name="support" className="mr-2" />
					<span>Online Support</span>
				</button>
			</div>
		</OxhainTradeStickyFooter>
	);
};

export default TradeStickyFooter;
