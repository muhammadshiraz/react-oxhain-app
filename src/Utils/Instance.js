import axios from "axios";
import { toast } from "react-toastify";

export const instance = axios.create({
	baseURL: "http://18.118.138.191:9595/",
	timeout: 30000,
	headers: {},
});

export const makeRequest = async (type, path, body) => {
	const api_key =
		"28b4b56939b14fdf30bcefeb3e935193b0f07ce22523ab5d32afcf3f4151edc0";
	const user_id = localStorage.getItem("user_id");

	// Add api_key and user_id and then add body parameter
	body = { api_key, user_id, ...body };

	toast.dismiss();

	return instance[type](path, body)
		.then(function (response) {
			console.log(response);
			return response;
		})
		.catch(function (error) {
			console.log(error);
			return error;
		});
};

instance.interceptors.response.use(
	function (response) {
		return response.data;
	},
	function (error) {
		const code = error.response.data && error.response.data.code;
		return Promise.reject({
			code,
		});
	}
);
