import React, { useEffect } from "react";
import { useState } from "react";
import DataTable from "../../../Components/BasicTrade/DataTable";
import { closeMarginOrder } from "../../../Utils/API";
import { fixed } from "../../../Utils/Format";

const MarginHistory = () => {
	const tableHeaderItems = [
		{ label: "Symbol", sort: false },
		{ label: "Margin Type", sort: false },
		{ label: "Type", sort: false },
		{ label: "Amount", sort: false },
		{ label: "Leverage", sort: false },
		{ label: "Open Price", sort: true },
	];

	const [tableContentItems, setTableContentItems] = useState([]);

	useEffect(() => {
		const socket = new WebSocket("ws://18.116.203.170:7010");

		socket.addEventListener("open", () => {
			// send a message to the server
			socket.send(
				JSON.stringify({
					type: "margin_history",
					content: {user_id:localStorage.getItem("user_id"), status: 1}
				})
			);
		});

		socket.onmessage = function (event) {
			let json = JSON.parse(event.data);
			switch (json.type) {
				case "orders":
					parseOrders(json.content);
					//setTableValues(['test323232']);
					break;
			}
		};
	}, []);

	function parseOrders(orders) {
		// for (var i = 0; i < orders.length; i++) {
		// 	let order = orders[i];

		// 	const id = order.id;
		// 	const price = order.price;
		// 	const status = order.status;
		// 	const pnl = order.pnl;
		// 	const type = order.type;
		// 	const symbol = order.symbol;
		// 	const open_price = order.open_price;
		// }

		setTableContentItems(orders);
	}

	const closeMargin = (order_id) => {
		closeMarginOrder(order_id);
	};

	return (
		<>
			<DataTable headerItems={tableHeaderItems} contentItems={tableContentItems}>
				{tableContentItems?.map((item, i) => (
					<div className="flex flex-row py-2 justify-between">
						<span className="text-left flex flex-row w-[10%] items-center uppercase" key={'open-orders-item-symbol-'+i}>
							{item.symbol}
						</span>
						<span className="text-left flex flex-row w-[10%] items-center uppercase" key={'open-orders-item-margin_type-'+i}>
							{item.margin_type}
						</span>
						<span className="text-left flex flex-row w-[10%] items-center uppercase" key={'open-orders-item-type-'+i}>
							{item.type}
						</span>
						<span className="text-left flex flex-row w-[10%] items-center" key={'open-orders-item-amount-'+i}>
							{fixed(item.amount)}
						</span>
						<span className="text-left flex flex-row w-[10%] items-center" key={'open-orders-item-leverage-'+i}>
							{item.leverage}x
						</span>
						<span className="text-left flex flex-row w-[10%] items-center justify-end" key={'open-orders-item-open-price'+i}>
							{item.open_price}
						</span>
					</div>
				))}
			</DataTable>
		</>
	);
};

export default MarginHistory;
