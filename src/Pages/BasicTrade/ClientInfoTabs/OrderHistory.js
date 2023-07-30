import React, { useEffect } from "react";
import { useState } from "react";
import DataTable from "../../../Components/BasicTrade/DataTable";
import { closeMarginOrder, deleteLimit } from "../../../Utils/API";
import moment from 'moment';
import { fixed } from "../../../Utils/Format";

const OrderHistory = () => {
	const tableHeaderItems = [
		{ label: "Date", sort: false },
		{ label: "Pair", sort: false },
		{ label: "Type", sort: false },
		{ label: "Side", sort: false },
		{ label: "Average", sort: false },
		{ label: "Price", sort: false },
		{ label: "Executed", sort: false },
		{ label: "Amount", sort: false },
		{ label: "Total", sort: false },
		{ label: "Trigger Conditions", sort: false, },
		{ label: "Cancel All", sort: true, },
	];

	const [tableContentItems, setTableContentItems] = useState([

	]);

	useEffect(() => {
		const socket = new WebSocket("ws://18.116.203.170:7010");

		socket.addEventListener("open", () => {
			// send a message to the server
			socket.send(
				JSON.stringify({
					type: "spot_orders",
					content: { user_id: localStorage.getItem("user_id") }
				})
			);
		});

		socket.onmessage = function (event) {
			let json = JSON.parse(event.data);
			switch (json.type) {
				case "orders":
					parseOrders(json.content?.reverse());
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

	const closeHandle = async (order_id) => {
		await deleteLimit({ order_id });
	};

	const renderActionButton = (item) => {
		if (item.type === 'market') {
			return <span className="text51 flex flex-row w-[10%] items-center justify-end"></span>
		} else if (item.status === '1') {
			return <button className="closeMarginBtn flex flex-row w-[10%] items-center justify-end" onClick={() => closeHandle(item._id)}>Cancel</button>
		} else if (item.status === '0') {
			return <span className="text52 flex flex-row w-[10%] items-center justify-end">Filled</span>
		} else if (item.status === '-1') {
			return <span className="text51 flex flex-row w-[10%] items-center justify-end">Cancelled</span>
		}
	}

	return (
		<>
			<DataTable headerItems={tableHeaderItems} contentItems={tableContentItems}>
				{tableContentItems?.map((item, i) => (
					<div className="flex flex-row py-2 justify-between">
						<span className="text-left flex flex-row w-[10%] items-center" key={'open-orders-item-symbol-' + i}>
							{moment(item.createdAt).format('YYYY/MM/DD HH:mm:ss')}
						</span>
						<span className="text-left flex flex-row w-[10%] items-center" key={'open-orders-item-symbol-' + i}>
							{item.pair_name}
						</span>
						<span className="text-left flex flex-row w-[10%] items-center uppercase" key={'open-orders-item-symbol-' + i}>
							{item.type.toString()}
						</span>
						<span className="text-left flex flex-row w-[10%] items-center uppercase" key={'open-orders-item-symbol-' + i}>
							{item.method}
						</span>
						<span className="text-left flex flex-row w-[10%] items-center" key={'open-orders-item-amount-' + i}>
							{item.average}
						</span>
						<span
							className={`text-left flex flex-row w-[10%] items-center`}
							key={'open-orders-item-price-' + i}
						>
							{item.type === 'market' ? item.open_price : item.target_price}
						</span>
						<span
							className={`text-left flex flex-row w-[10%] items-center`}
							key={'open-orders-item-price-' + i}
						>
							{item.amount}
						</span>
						<span
							className={`text-left flex flex-row w-[10%] items-center`}
							key={'open-orders-item-price-' + i}
						>
							{item.amount}
						</span>
						<span
							className={`text-left flex flex-row w-[10%] items-center`}
							key={'open-orders-item-price-' + i}
						>
							{fixed(item.amount * (item.type === 'market' ? item.open_price : item.target_price))}
						</span>
						<span
							className={`text-left flex flex-row w-[10%] items-center`}
							key={'open-orders-item-price-' + i}
						>
							{item.tc}
						</span>

						{/* Cancel, cancelled, button, .... */}
						{renderActionButton(item)}
					</div>
				))}
			</DataTable>
		</>
	);
};

export default OrderHistory;
