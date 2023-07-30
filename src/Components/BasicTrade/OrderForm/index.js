import axios from "axios";
import React, { useEffect, useState } from "react";
import Button02 from "../../Button/Button02";
import PriceField from "../../TradePriceField";
import { TradePriceSlider } from "../../TradePriceSlider";
import { useSelector } from "react-redux";
import {
	addMarginOrder,
	failResponse,
	getPairs,
	getUSDTBalance,
	getWallet,
} from "../../../Utils/API";
import { fixed, pairFixed } from "../../../Utils/Format";
import { toast } from "react-toastify";
import { useRef } from "react";
import { setItemMarketData } from "../../../Store/Slices/TradeSlice";

const OrderForm = ({ className }) => {
	const userId = useSelector((state) => state.user.userId);

	const pair = useSelector((state) => state.trade.pair);
	const priceObj = useSelector((state) => state.trade.priceObj);

	const isLogin = localStorage.getItem('user_id') ? true : false;

	// 0 is the Spot, 1 is the Cross 3x, 2 is the Isolated 10x
	const [processType, setProcessType] = useState(0);

	// 0 is the Limit, 1 is the Market, 2 is the Stop-Limit
	const [buyOrSellType, setBuyOrSellType] = useState(0);
	const [walletUSDTPrice, setWalletUSDTPrice] = useState(0);

	const [pairs, setPairs] = React.useState([]);

	const [wallet, setWallet] = React.useState([]);
	const [targetCoinBalance, setTargetCoinBalance] = useState(0);

	const [loading, setLoading] = useState(false);

	const [marginWalletSocketStarted, setMarginWalletSocketStarted] = useState(false);

	const [formData, setFormData] = useState({
		buyStopAmount: '',
		sellStopAmount: '',

		buyLimitAmount: '',
		sellLimitAmount: '',

		buyAmount: '',
		sellAmount: '',

		buySliderPercent: 0,
		sellSliderPercent: 0,
	});

	const [buyLeverage, setBuyLeverage] = useState(1);
	const [sellLeverage, setSellLeverage] = useState(1);

	const spotElementRef = useRef();

	const changeFormData = async (prop, value) => {
		if (prop === "buyLimitAmount") {
			buyCalculateAmount(formData.buySliderPercent, buyLeverage, value);
		} else if (prop === "sellLimitAmount") {
			sellCalculateAmount(formData.sellSliderPercent, sellLeverage, value)
		} else if (prop === 'buyAmount') {
			buyCalculateAmount(formData.buySliderPercent, buyLeverage, formData.buyLimitAmount, value);
		} else if (prop === 'sellAmount') {
			sellCalculateAmount(formData.sellSliderPercent, sellLeverage, formData.sellLimitAmount, value);
		} else {
			setFormData({ ...formData, [prop]: value });
		}
	};

	// Pair is changed
	useEffect(() => {
		const targetCoinFromWallet = wallet.find((x) => x.symbolName === pair);
		console.log(wallet)
		if (targetCoinFromWallet !== undefined) {
			setTargetCoinBalance(targetCoinFromWallet.balance);

			if (!marginWalletSocketStarted) {
				setMarginWalletSocketStarted(true);
				initCrossSocket();
				setLoading(true);
			}
		}
	}, [wallet]);

	let [initFirstPriceObj, setInitFirstPriceObj] = useState(false);
	useEffect(() => {
		if (priceObj.price > 0 && !initFirstPriceObj) {
			setInitFirstPriceObj(true);
			const _formData = {
				...formData,
				buyLimitAmount: priceObj.price,
				sellLimitAmount: priceObj.price,
			};
			setFormData(_formData);
		}

		// Only spot, update per changed price
		if (buyOrSellType === 1) {
			const _formData = {
				...formData,
				buyLimitAmount: priceObj.price,
				sellLimitAmount: priceObj.price,
			};
			setFormData(_formData);
		}
	}, [priceObj]);

	useEffect(() => {
		resetForm();
		setInitFirstPriceObj(false);
	}, [buyOrSellType]);

	useEffect(() => {
		resetForm();

		console.log("TEST FORM");
		initWallet();
		initPairs();

		if (processType === 0) {
			initWalletUSDTPrice();
		} else if (processType !== 0) {
			// Cross
			const marginUSDTBalance = wallet.find(
				(x) => x.symbolName === "Margin"
			).balance;
			setWalletUSDTPrice(marginUSDTBalance);
		}
	}, [processType]);

	useEffect(() => {
		setInterval(() => {
			const modeIsSpot = spotElementRef.current?.className?.includes('active');
			if (modeIsSpot) {
				initWallet();
				initWalletUSDTPrice();
			}
		}, 5000);
	}, []);

	const initPairs = async () => {
		const pairsResponse = await getPairs();
		setPairs(pairsResponse.data);
	};

	const initWallet = async () => {
		const walletResponse = await getWallet();
		setWallet(walletResponse.data);
	};

	const initWalletUSDTPrice = async () => {
		const usdtBalanceResponse = await getUSDTBalance();
		const price = fixed(usdtBalanceResponse.data);
		setWalletUSDTPrice(price);
	};

	const initCrossSocket = () => {
		let socket = new WebSocket("ws://18.116.203.170:7010");
		socket.addEventListener("open", () => {
			// send a message to the server
			const marginWallet = wallet.find((x) => x.symbolName === "Margin");
			console.warn(wallet)

			socket.send(
				JSON.stringify({
					type: "margin_balance",
					content: {
						user_id: localStorage.getItem('user_id')
					}
				})
			);
		});

		console.log('T', processType);

		socket.onmessage = function (event) {
			const json = JSON.parse(event.data);
			const content = json.content;
			console.log(json.type);
			switch (json.type) {
				case "margin_balance":
					const modeIsSpot = spotElementRef.current?.className?.includes('active');
					if (!modeIsSpot) {
						const balance = content[0].amount;
						setWalletUSDTPrice(balance);
						break;
					}
			}
		};
	}

	const resetForm = () => {
		const _form = formData;
		_form.buyStopAmount = '';
		_form.sellStopAmount = '';

		_form.buyLimitAmount = priceObj.price;
		_form.sellLimitAmount = priceObj.price;

		_form.buyAmount = '';
		_form.sellAmount = '';

		_form.buySliderPercent = 0;
		_form.sellSliderPercent = 0;
		setFormData(_form);

		setBuyLeverage(1);
		setSellLeverage(1);
	}

	/**
	 * 
	 * @param {*} percent This parameter is required! 
	 * @param {*} leverage This parameter is not required but only the leverage slider send value to this parameter.
	 * @param {*} limit This parameter is not required but only the buy/sell limit input send value to this paremeter. 
	 */
	const buyCalculateAmount = (percent, leverage, limit, amountInput) => {
		let buyLimitAmount = limit !== undefined ? limit : formData.buyLimitAmount;

		let usableBTCAmount;
		let balance;
		let amount;

		console.log(amountInput)

		if (processType === 0) {
			// Spot
			balance = (walletUSDTPrice * percent) / buyLimitAmount;
			amount = balance / 100;
			usableBTCAmount = amount;
		} else {
			// Cross
			balance = percent * walletUSDTPrice;
			amount = balance / 100;
		}

		if (processType !== 0) {
			// Cross
			amount *= leverage ? leverage : buyLeverage;
			usableBTCAmount = amount / buyLimitAmount;
		}

		// Check NaN and Infinity control, this is an Infinity, if (variable - variable) is equal to NaN
		// let buyAmount = pairFixed(usableBTCAmount, pair, pairs);
		let buyAmount = usableBTCAmount;
		if (isNaN(buyAmount) || isNaN(buyAmount - buyAmount)) buyAmount = '';

		if (amountInput !== undefined) {
			percent = Math.floor(((amountInput !== undefined ? amountInput : buyAmount) * buyLimitAmount) / (walletUSDTPrice) * 100);

			if (processType !== 0) {
				percent /= leverage;
			}
		}

		const _form = {
			...formData,
			buyAmount: amountInput !== undefined ? amountInput : (percent === 0 ? '' : pairFixed(usableBTCAmount, pair, pairs, 2)),
			buySliderPercent: percent >= 101 ? 100 : percent,
			buyLimitAmount: String(buyLimitAmount)
		};
		setFormData(_form);
	};

	/**
	 * 
	 * @param {*} percent This parameter is required! 
	 * @param {*} leverage This parameter is not required but only the leverage slider send value to this parameter.
	 * @param {*} limit This parameter is not required but only the buy/sell limit input send value to this paremeter. 
	 */
	const sellCalculateAmount = (percent, leverage, limit, amountInput) => {
		const sellLimitAmount = limit !== undefined ? limit : formData.sellLimitAmount;

		let balance;
		let amount;
		let usableBTCAmount;

		if (processType === 0) {
			// Spot
			balance = targetCoinBalance * percent;
			amount = fixed((balance / 100));
			usableBTCAmount = amount;
		} else {
			// Cross
			balance = percent * walletUSDTPrice;
			amount = fixed(balance / 100);
		}

		if (processType !== 0) {
			amount *= leverage ? leverage : sellLeverage;
			usableBTCAmount = amount / sellLimitAmount;
		}

		// Check NaN and Infinity control, this is an Infinity, if (variable - variable) is equal to NaN
		let sellAmount = pairFixed(usableBTCAmount, pair, pairs);
		if (isNaN(sellAmount) || isNaN(sellAmount - sellAmount)) sellAmount = '';

		if (amountInput !== undefined) {
			percent = ((amountInput * sellLimitAmount) / (processType === 0 ? (targetCoinBalance * sellLimitAmount) : walletUSDTPrice)) * 100;

			if (processType !== 0) {
				percent /= leverage;
			}
		}
		console.log(usableBTCAmount)

		const _form = {
			...formData,
			sellAmount: amountInput !== undefined ? amountInput : (percent === 0 ? '' : pairFixed(usableBTCAmount, pair, pairs, 2)),
			sellSliderPercent: percent >= 101 ? 100 : percent,
			sellLimitAmount: sellLimitAmount
		};
		setFormData(_form);
	};

	const submitSpot = (method, pair_id) => {
		let amount = method === "buy" ? formData.buyAmount : formData.sellAmount;

		// This line is only sell, Because we can must USDT convert to BTC amount, USDT => BTC 
		// if (method === 'sell') {
		// 	amount = amount / priceObj.price;
		// 	amount = pairFixed(amount, pair, pairs, 2);
		// };

		const requestObj = {
			api_key:
				"28b4b56939b14fdf30bcefeb3e935193b0f07ce22523ab5d32afcf3f4151edc0",
			pair_name: pair,
			method: method,
			type: buyOrSellType === 0 ? "limit" : "market",
			amount: amount,
			user_id: localStorage.getItem("user_id"),
			pair_id: pair_id,
			target_price: method === "buy" ? formData.buyLimitAmount : formData.sellLimitAmount,
		};

		// This condition mean is stop-limit
		if (buyOrSellType === 2) {
			requestObj.type = 'stop_limit';
			requestObj.stop_limit = method === 'buy' ? formData.buyStopAmount : formData.sellStopAmount;
		}

		axios
			.post("http://18.118.138.191:9595/addOrders", requestObj)
			.then((res) => {
				if (res.data.status === "success") {
					initWalletUSDTPrice();
					initWallet();
					toast.success('The purchase is complete');
				} else {
					failResponse(res.data);
				}
			});
	};

	const submitMargin = (type) => {
		let amount = type === "buy" ? formData.buyAmount : formData.sellAmount;
		console.log(pair);

		const leverage = type === "buy" ? buyLeverage : sellLeverage;

		if (type === "buy") {
			//amount *= buyLeverage;
		} else if (type === "sell") {
			//amount *= sellLeverage;
		}

		const requestObj = {
			type: type,
			method: buyOrSellType === 0 ? "limit" : "market",
			amount: amount,
			symbol: pair,
			leverage: leverage,
			margin_type: processType === 1 ? "cross" : "isolated",
			target_price:
				type === "buy" ? formData.buyLimitAmount : formData.sellLimitAmount,
		};

		if (buyOrSellType === 2) {
			requestObj.method = 'stop_limit';
			requestObj.stop_limit = type === 'buy' ? formData.buyStopAmount : formData.sellStopAmount;
		}

		addMarginOrder(requestObj);
	};

	// Confirm, if method "buy" or "sell"
	const submitHandle = (method = "buy") => {
		const targetPairId = wallet.find((x) => x.symbolName === pair).coin_id;

		//if (buyOrSellType === 0) {
		//method += "_limit"; // return is buy_limit or sell_limit, just added _limit
		//}

		if (processType === 0) {
			submitSpot(method, targetPairId);
		} else if (processType !== 0) {
			submitMargin(method);
		}

		resetForm();
	}

	return (
		<>
			<div className={`orderForm font-normal ${className}`}>
				<div className={`process-types flex flex-row items-center text-sm ${!loading ? 'hidden' : ''}`}>
					<button
						onClick={() => setProcessType(0)}
						className={`px-6 h-10 ${processType === 0 ? "active" : ""}`}
						ref={spotElementRef}
					>
						<span className="text55">Spot</span>
					</button>
					<button
						onClick={() => setProcessType(1)}
						className={`px-6 h-10 ${processType === 1 ? "active" : ""}`}
					>
						<span className="text55">Cross 3x</span>
					</button>
					<button
						onClick={() => setProcessType(2)}
						className={`px-6 h-10 ${processType === 2 ? "active" : ""}`}
					>
						<span className="text55">Isolated 10x</span>
					</button>
				</div>

				<div className="orderForm-content px-6 pt-2">
					<div className="flex flex-row text-xs">
						<button onClick={() => setBuyOrSellType(0)} className={`mr-5`}>
							<span
								className={`${buyOrSellType === 0 ? "text53 font-semibold" : "text55"
									}`}
							>
								Limit
							</span>
						</button>
						<button onClick={() => setBuyOrSellType(1)} className={`mr-5`}>
							<span
								className={`${buyOrSellType === 1 ? "text53 font-semibold" : "text55"
									}`}
							>
								Market
							</span>
						</button>
						<button onClick={() => setBuyOrSellType(2)} className={`mr-5`}>
							<span
								className={`${buyOrSellType === 2 ? "text53 font-semibold" : "text55"
									}`}
							>
								Stop-Limit
							</span>
						</button>
					</div>

					{processType !== 0 ? (
						<div className="flex flex-row text-xs mt-6 px-2">
							<div className="flex flex-row items-center justify-center w-6/12 mr-6">
								<TradePriceSlider
									suffix="x"
									min={1}
									percent={buyLeverage}
									onChange={(value) => {
										setBuyLeverage(value);
										buyCalculateAmount(formData.buySliderPercent, value);
									}}
								/>
							</div>
							<div className="flex flex-row items-center justify-center w-6/12 ml-6">
								<TradePriceSlider
									suffix="x"
									min={1}
									percent={sellLeverage}
									onChange={(value) => {
										setSellLeverage(value);
										sellCalculateAmount(formData.sellSliderPercent, value);
									}}
								/>
							</div>
						</div>
					) : (
						""
					)}

					<div className="px-0 mt-4">
						<div className="flex flex-row text-xs">
							<div className="flex flex-row flex-1 pr-6">
								<span className="">Avbl</span>
								<span className="ml-auto">{fixed(walletUSDTPrice)} USDT</span>
							</div>
							<div className="flex flex-row flex-1 pl-6">
								<span className="">Avbl</span>
								<span className="ml-auto">
									{processType === 0
										? `${fixed(targetCoinBalance)} ${pair.split("/")[0]}`
										: `${fixed(walletUSDTPrice)} USDT`}
								</span>
							</div>
						</div>

						{/* 1. Only for stop-limit */}
						{buyOrSellType === 2 ? (
							<div className="flex flex-row text-xs mb-4">
								<div className="flex flex-row w-full">
									<PriceField
										y={40}
										onChange={(e) => changeFormData("buyStopAmount", e.target.value)}
										value={formData.buyStopAmount}
										placeholder="Stop"
										inputClassName={`w-full h-12 px-2 mt-1`}
										mr={6}
									/>

									<PriceField
										y={40}
										onChange={(e) => changeFormData("sellStopAmount", e.target.value)}
										value={formData.sellStopAmount}
										placeholder="Stop"
										inputClassName={`w-full h-12 px-2 mt-1}`}
										ml={6}
									/>
								</div>
							</div>
						) : (
							""
						)}

						{/* 2. Two Input / Price/Limit */}
						<div className="flex flex-row text-xs">
							<div className="flex flex-row w-full">
								<PriceField
									disabled={buyOrSellType === 1}
									onChange={(e) => changeFormData("buyLimitAmount", e.target.value)}
									value={formData.buyLimitAmount}
									y={40}
									placeholder={buyOrSellType === 2 ? "Limit" : "Price"}
									inputClassName={`w-full h-12 px-2 mt-1 ${buyOrSellType === 1 ? "opacity-30" : ""}`}
									mr={6}
								/>

								<PriceField
									disabled={buyOrSellType === 1}
									onChange={(e) => changeFormData("sellLimitAmount", e.target.value)}
									value={formData.sellLimitAmount}
									y={40}
									placeholder={buyOrSellType === 2 ? "Limit" : "Price"}
									inputClassName={`w-full h-12 px-2 mt-1 ${buyOrSellType === 1 ? "opacity-30" : ""}`}
									ml={6}
								/>
							</div>
						</div>

						{/* 3. Two Input / Amount */}
						<div className="flex flex-row text-xs mt-4">
							<div className="flex flex-row w-full">
								<PriceField
									onChange={(e) => changeFormData("buyAmount", e.target.value)}
									value={formData.buyAmount}
									y={40}
									placeholder="Amount"
									inputClassName="w-full h-12 px-2 mt-1"
									mr={6}
									inputSpoiler={`${pair.split("/")[0]}`}
								/>

								<PriceField
									onChange={(e) => changeFormData("sellAmount", e.target.value)}
									value={formData.sellAmount}
									y={40}
									placeholder="Amount"
									inputClassName="w-full h-12 px-2 mt-1"
									ml={6}
									inputSpoiler={`${pair.split("/")[0]}`}
								/>
							</div>
						</div>

						<div className="flex flex-row mt-2 text-xs">
							<span className="text-right flex-1 pr-6">
								{fixed((formData.buyAmount * formData.buyLimitAmount))} USDT
							</span>

							<span className="text-right flex-1 pl-6">
								{fixed(formData.sellAmount * formData.sellLimitAmount)} USDT
							</span>
						</div>

						{processType !== 0 ? (
							<div className="flex flex-row mt-2 text-xs">
								<span className="text-right flex-1 pr-6">
									Initial margin: {fixed((formData.buyAmount * formData.buyLimitAmount * (1 / buyLeverage)))} USDT
								</span>

								<span className="text-right flex-1 pl-6">
									Initial margin: {fixed((formData.sellAmount * formData.sellLimitAmount * (1 / sellLeverage)))} USDT
								</span>
							</div>
						) : ''}

						<div className="flex flex-row text-xs mt-8 px-2">
							<div className="flex flex-row items-center justify-center w-6/12 mr-6">
								<TradePriceSlider
									percent={formData.buySliderPercent}
									onChange={(value) => buyCalculateAmount(value)}
								/>
							</div>
							<div className="flex flex-row items-center justify-center w-6/12 ml-6">
								<TradePriceSlider
									percent={formData.sellSliderPercent}
									onChange={(value) => sellCalculateAmount(value)}
								/>
							</div>
						</div>

						{/* Action Buttons */}
						{isLogin ? (
							<div className="flex flex-row py-4 mb-1">
								<Button02
									skew={false}
									x={100}
									y={40}
									buttonClass="mr-6 background54"
									handleButton={() => submitHandle("buy")}
								>
									<span className="font-medium !text-white">BUY</span>
								</Button02>

								<Button02
									skew={false}
									x={100}
									y={40}
									buttonClass="ml-6 background55"
									handleButton={() => submitHandle("sell")}
								>
									<span className="font-medium !text-white">SELL</span>
								</Button02>
							</div>
						) : (
							<div className="flex flex-row items-center justify-center py-7 mb-1">
								<Button02 y={40} buttonClass="w-[350px]" handleButton={() => window.location.href = "/login"}>
									<span className="font-semibold !text-white">Log In </span>
									<span className="font-normal !text-white opacity-60">or</span>
									<span className="font-semibold !text-white"> Register Now</span>
								</Button02>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default OrderForm;
