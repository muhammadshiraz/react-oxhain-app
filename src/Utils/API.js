import { toast } from "react-toastify";
import { makeRequest } from "./Instance";

export const getPairs = () => {
	return makeRequest("post", "/getPairs");
};

export const getWallet = () => {
	return makeRequest("post", "/getWallet");
};

export const getUSDTBalance = () => {
	return makeRequest("post", "/getUSDTBalance");
};

export const deleteLimit = ({ order_id }) => {
	console.log(order_id)

	return makeRequest("post", "/deleteLimit", {
		order_id: order_id,
	});
};

export const addMarginOrder = ({
	type,
	amount,
	symbol,
	leverage,
	margin_type,
	limit,
	method,
	target_price,
	stop_limit
}) => {
	return makeRequest("post", "/addMarginOrder", {
		type,
		amount,
		symbol,
		leverage,
		margin_type,
		method,
		limit,
		target_price,
		stop_limit
	}).then(data => data.status === 'success' ? toast.success('The purchase is complate') : toast.error(data.message));
};

export const closeMarginOrder = (order_id) => {
	return makeRequest("post", "/closeMarginOrder", {
		order_id: order_id,
	});
};

export const deleteMarginLimit = (order_id) => {
	return makeRequest("post", "/deleteMarginLimit", {
		order_id: order_id,
	});
};

export const getOrders = () => {
	return makeRequest("post", "/getOrders");
};

export const getMarginOrders = () => {
	return makeRequest("post", "/getMarginOrders");
};

export const failResponse = (res) => {
	const msg = res.message;
	return toast.error(msg, {});
}