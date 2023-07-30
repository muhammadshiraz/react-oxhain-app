import React from "react";
import { OxhainPriceField } from "./OxhainPriceField.styled";

export default function PriceField({ label, labelValue, placeholder, x, y, ml, mr, inputClassName, labelsClassName, inputSpoiler, disabled, onChange, value }) {
	return (
		<div className={`flex flex-col justify-between items-center first-letter w-full ml-${ml} mr-${mr}`}>
			<div className={`flex flex-row  items-center w-full ${labelsClassName}`}>
				{/* <span className="text-xs">{label}</span> */}
				{/* <span className="text-xs ml-auto">{labelValue}</span> */}
			</div>
			<div className="relative flex flex-row justify-between items-center w-full">
				<OxhainPriceField
					type="text"
					pattern="[0-9\.]*"
					onChange={(e) => e.target.validity.valid ? onChange(e) : value}
					className={`${inputClassName}`}
					disabled={disabled}
					placeholder={placeholder}
					value={value}
					style={{
						width: x ? `${x}%` : '',
						height: `${y}px`,
					}}>
				</OxhainPriceField>

				<span className="input-spoiler absolute right-4 text55">{inputSpoiler}</span>
			</div>
		</div>
	);
}
