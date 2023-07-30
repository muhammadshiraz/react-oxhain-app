import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import DataTable from "../../../Components/BasicTrade/DataTable";
import { setContentDataLength } from "../../../Store/Slices/ClientInfoSlice";
import { closeMarginOrder, deleteMarginLimit } from "../../../Utils/API";
import moment from 'moment';
import { fixed } from "../../../Utils/Format";

const OpenOrders = ({ children }) => {

	const tableHeaderItems = [
		{ label: "Time", sort: false },
		{ label: "Pair", sort: false },
		{ label: "Type", sort: false },
		{ label: "Side", sort: true },
		{ label: "Price", sort: false },
		{ label: "Amount", sort: false },
		{ label: "Pnl", sort: false },
		{ label: "Total", sort: false, },
		{ label: "Cancel All", sort: true, },
	];

	const [tableContentItems, setTableContentItems] = React.useState([]);

	const dispatch = useDispatch();

	useState(() => {
		if (tableContentItems.length > 0) {
			// slice -> setLength(tableContentItems.length)
		}
	}, [tableContentItems]);

	React.useEffect(() => {
		const socket = new WebSocket("ws://18.116.203.170:7010");

		socket.addEventListener("open", () => {
			// send a message to the server
			socket.send(
				JSON.stringify({
					type: "margin_orders",
					content: { user_id: localStorage.getItem("user_id") }
				})
			);
		});

		socket.onmessage = function (event) {
			let json = JSON.parse(event.data);
			switch (json.type) {
				case "orders":
					parseOrders(json.content.reverse());
					dispatch(setContentDataLength(json.content.length));
					break;
			}
		};
	}, []);

	function parseOrders(orders) {
		setTableContentItems(orders);
	}

	const closeHandle = (order_id) => {
		closeMarginOrder(order_id);
	};

	const closeLimitHandle = (order_id) => {
		deleteMarginLimit(order_id);
	};

	const renderActionButton = (item) => {
		if (item.method === 'market' && item.status === 0) {
			return <button className="closeMarginBtn flex flex-row w-[10%] items-center justify-end" onClick={() => closeHandle(item._id)}>Close</button>
		} else if (item.method === 'market' && item.status === 1) {
			return <span className="text51 flex flex-row w-[10%] items-center justify-end">Closed</span>
		} else if (item.method !== 'market' && item.status === 1) {
			return <button className="closeMarginBtn flex flex-row w-[10%] items-center justify-end" onClick={() => closeLimitHandle(item._id)}>Cancel</button>
		} else if (item.method !== 'market' && item.status === -1) {
			return <span className="text51 flex flex-row w-[10%] items-center justify-end">Cancelled</span>
		} else {
			return <span className="text51 flex flex-row w-[10%] items-center justify-end"></span>
		}
	}

	return (
		<>
			<DataTable headerItems={tableHeaderItems} contentItems={tableContentItems} classname={`openOrderDT`} children={children}>
				{tableContentItems?.map((item, i) => (
					<div className={`flex flex-row py-2 justify-between open-order-row`}>
						<span className="text-left flex flex-row w-[10%] items-center" key={'open-orders-item-symbol-' + i}>
							{moment(item.createdAt).format('YYYY/MM/DD HH:mm:ss')}
						</span>
						<span></span>
						<span className="text-left flex flex-row w-[10%] items-center" key={'open-orders-item-pair_-' + i}>
							{item.symbol}
						</span>
						<span className="text-left flex flex-row w-[10%] items-center uppercase" key={'open-orders-item-amount-' + i}>
							{item.margin_type}
						</span>
						<span className="text-left flex flex-row w-[10%] items-center uppercase" key={'open-orders-item-leverage-' + i}>
							{item.type} {item.method === 'limit' ? 'Limit' : ''} {item.method === 'stop_limit' ? 'Stop Limit' : ''}
						</span>
						<span className="text-left flex flex-row w-[10%] items-center" key={'open-orders-item-open-price' + i}>
							{item.method !== 'market' ? item.target_price : item.open_price}
						</span>
						<span
							className={`text-left flex flex-row w-[10%] items-center`}
							key={'open-orders-item-price-' + i}
						>
							{item.amount}
						</span>
						<span
							className={`text-left ${item.pnl > 0 ? "text52" : "text51"} flex flex-row w-[10%] items-center`}
							key={'open-orders-item-pnl-' + i}
						>
							{fixed(item.pnl)} USDT
						</span>
						<span
							className={`text-left flex flex-row w-[10%] items-center`}
							key={'open-orders-item-pnl-' + i}
						>
							{fixed(item.amount * item.open_price)}
						</span>
						{renderActionButton(item)}
					</div>
				))}
			</DataTable>
		</>
	);
};

export default OpenOrders;
