import React, { useState } from "react";
import { ReactComponent as Star } from "../../../Assets/Icons/Trade/star.svg";
import { ReactComponent as RightArrow } from "../../../Assets/Icons/CryoptoEductaion/right-arrow.svg";
import Icon from "../../Icon";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPairs } from "../../../Utils/API";
import { fixed, pairFixed } from "../../../Utils/Format";

const Market = () => {
	const navigate = useNavigate();

	const data = useSelector((state) => state.trade.marketData);

	const [pairs, setPairs] = useState([]);

	const [activeMarketTabIndex, setActiveMarketTabIndex] = useState(0);
	// const [marketData, setMarketData] = useState([]);

	const [favoriteCoinNames, setFavoriteCoinNames] = useState([]);

	// useEffect(() => {
	// 	changeMarketType(0);
	// }, [activeMarketTabIndex]);

	// 0 is All & 1 is Cross & 2 is Isolated
	const changeMarketType = (index = 0) => {
		// const marketResponse = await axios.post('market/isolated')
		// const mockCoins = [
		// 	"BTC",
		// 	"ETH",
		// 	"BNB",
		// 	"USDT",
		// 	"BUSD",
		// 	"DOGE",
		// 	"AAVE",
		// 	"SAND",
		// 	"ZCN",
		// 	"ZRX",
		// 	"10MT",
		// 	"ADL",
		// 	"ADX",
		// 	"AVAX",
		// 	"MATIC",
		// 	"CPX",
		// ];
		// const marketResponse = [];
		// for (var i = 0; i < 50; i++) {
		// 	marketResponse.push({
		// 		pair: `${mockCoins[Math.floor(Math.random() * mockCoins.length)]} TRY`,
		// 		price: Math.random() * 500000,
		// 		change: Math.random() * 50,
		// 	});
		// }
		// console.log(marketResponse);
		// setMarketData(marketResponse);
	};

	useEffect(() => {
		initPairs();
	}, []);

	const initPairs = async () => {
		const pairsResponse = await getPairs();
		setPairs(pairsResponse.data);
	};

	const handleFavoriteButton = (pair) => {
		// const favorites = [...favoriteCoinNames];
		// const existPair = favorites.findIndex(x => x === pair);
		// if(existPair >= 0) {
		// 	favorites.splice(existPair, 1);
		// } else {
		// 	favorites.push(pair);
		// }
		// setFavoriteCoinNames(favorites);
	};

	const clickToNavigate = (location) => {
		window.location.href = location;
	};

	return (
		<div className="px-2 flex-auto">
			{/* Select coin =  BUSD, USDT, BNB, BTC, ALTS */}
			<div className="flex flex-row flex-wrap items-center justify-between text-xs mb-4 px-1 font-medium">
				<button className={`flex flex-row items-center font-semibold`}>
					<Star className="mr-1" />
					<span className="text53">Margin</span>
				</button>
				<button>
					<span>BUSD</span>
				</button>
				<button>
					<span>USDT</span>
				</button>
				<button>
					<span>BNB</span>
				</button>
				<button>
					<span>BTC</span>
				</button>
				<button>
					<span>ALTS</span>
				</button>
				<button>
					{/* <RightArrow style={{ height: 12 }} /> */}
					<Icon name={"rightArrow"} height={12} />
				</button>
			</div>

			{/* Market Action = All, Cross, Isolated*/}
			<div className="market-actions flex flex-row items-center divider text-xs px-2">
				<button
					onClick={(e) => setActiveMarketTabIndex(0)}
					className={`mr-6 ${activeMarketTabIndex === 0 ? "active" : ""}`}
				>
					All
				</button>
				<button
					onClick={(e) => setActiveMarketTabIndex(1)}
					className={`mr-6 ${activeMarketTabIndex === 1 ? "active" : ""}`}
				>
					Cross
				</button>
				<button
					onClick={(e) => setActiveMarketTabIndex(2)}
					className={`mr-6 ${activeMarketTabIndex === 2 ? "active" : ""}`}
				>
					Isolated
				</button>
			</div>

			<div className="flex flex-col text-xs font-prompt h-[380px] mt-3">
				<div className="flex flex-row justify-between px-2 pb-1">
					<span className="flex-1 text-left">Pair</span>
					<span className="flex-1 text-right">Price</span>
					<span className="flex-1 text-right">Change</span>
				</div>

				<div className="overflow-y-auto">
					{data.map((market, i) => (
						<div
							onClick={() => clickToNavigate("/basic-trade/" + market.pair)}
							className="market-item cursor-pointer flex flex-row items-center justify-between py-1 font-light px-1"
							key={"market-" + i}
						>
							<button onClick={() => handleFavoriteButton(market.coin)}>
								<Star
									className={`mr-1 ${!favoriteCoinNames.includes(market.coin)
										? "grayscale-svg"
										: ""
										}`}
								/>
							</button>
							<span className="flex-1 text-left">
								{market.pair.replace("_", "/")}
							</span>
							<span className="flex-1 text-right text52">{pairFixed(market.price, market.pair, pairs)}</span>
							<span className={`flex-1 text-right ${(((market.price - market.open) / market.price) * 100) > 0 ? 'text52' : 'text51'}`}>
								{fixed(((market.price - market.open) / market.price) * 100)}%
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Market;
