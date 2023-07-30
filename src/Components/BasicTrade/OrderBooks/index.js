import { ContinuousLegend } from "@antv/g2/lib/dependents";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { getPairs } from "../../../Utils/API";
import { pairFixed } from "../../../Utils/Format";

const OrderBooks = ({ action, y }) => {
	const pair = useSelector(state => state.trade.pair);
	const orderBooks = useSelector(state => state.trade.orderBooks);
	const data = action === 'buy' ? orderBooks.asks : orderBooks.bids;

	const [pairs, setPairs] = useState(0);

	useEffect(() => {
		initPairs();
		console.log(pairs);
	}, []);

	const initPairs = async () => {
		const pairsResponse = await getPairs();
		setPairs(pairsResponse.data);
	};

	return (
		<div className={`orderbooks flex flex-col pl-2 text-xs font-prompt flex-auto mb-2`} style={{ height: y }}>
			<div className="overflow-y-auto">
				{data.map((order, i) => (
					<div className="orderbooks-item flex flex-row justify-between py-1 px-2 font-light" key={'orderbook-' + i}>
						<span className={`flex-1 text-left ${action === 'sell' ? 'text51' : 'text52'}`}>{order.limit}</span>
						<span className="flex-1 text-left pl-6">{order.amount}</span>
						<span className="flex-1 text-right">{pairFixed(order.limit * order.amount, pair, pairs)}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default OrderBooks;
