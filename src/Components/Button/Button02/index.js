import React from "react";
import { OxhainButton02 } from "./Button.styled";

const Button02 = (
	{ x,
		y,
		btnType,
		handleButton,
		isDisabled,
		buttonClass,
		children,
		skew
	}) => {
	return (
		<OxhainButton02
			disabled={isDisabled}
			type={btnType}
			onClick={handleButton}
			className={`${buttonClass} rounded-sm`}
			style={{
				width: x ? `${x}%` : '',
				height: `${y}px`,
				clipPath: 'unset'
			}}
		>
			{children}
		</OxhainButton02>
	);
}

export default Button02;