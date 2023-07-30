import Slider from "rc-slider";
import { useState } from "react";

import "rc-slider/assets/index.css";
import { OxhainTradePriceSlider } from "./TradePriceSlider.stlyed";

const style = {
	fontSize: "0.8rem",
	marginTop: "0.3em",
};

const marks = {
	0: { label: "0%", style },
	25: { label: "25%", style },
	50: { label: "50%", style },
	75: { label: "75%", style },
	100: { label: "100%", style },
};

export const TradePriceSlider = ({ className, onChange, percent, suffix = '%', min = 0 }) => {
	const handleSliderChange = (value) => {
		if (value < min) return;
		onChange(value);
	};

	return (
		<OxhainTradePriceSlider className={`relative w-full flex-col ${className}`}>
			<span
				className="absolute -mt-5 -ml-3 text-xs text58 text-center w-6"
				style={{ left: `${percent}%` }}
			>
				{Math.floor(percent)}{suffix}
			</span>
			<Slider
				handleStyle={{
					width: 18,
					height: 18,
					marginLeft: 0,
					marginTop: -7,
				}}
				dotStyle={{
					pointerEvents: "all",
				}}
				marks={marks}
				value={percent}
				onChange={handleSliderChange}
			/>
		</OxhainTradePriceSlider>
	);
};
