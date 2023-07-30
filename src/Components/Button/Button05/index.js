import React from "react";
import { OxhainButton05 } from "./Button05.styled";

export default function Button05({text, handleButton, btnType, isDisabled, isOpacity, ml, mt, mb, rounded, x, y, px, font, textsize, textcolor}) {
	return (
        <OxhainButton05 disabled={isDisabled} type={btnType} onClick={handleButton} className={`flex flex-row justify-center items-center relative text-left px-${px} mt-${mt} ml-${ml} mb-${mb} opacity-[${isOpacity}] rounded-${rounded}`}
            style={{
                width: `${x}px`,
                height: `${y}px`
            }}
        >
            <span className={`font-prompt font-${font} text-${textsize} text-[${textcolor}] capitalize w-full`}>{text}</span>
        </OxhainButton05>
    )
}