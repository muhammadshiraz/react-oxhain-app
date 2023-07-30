import React from "react";
import { OxhainButton03 } from "./Button03.styled";

export default function Button03({text, handleButton, btnType, isDisabled, isOpacity, ml, rounded, x, y, px, font, bg, fontcolor, classname}) {
	return (
        <OxhainButton03 disabled={isDisabled} type={btnType} onClick={handleButton} className={`flex flex-row justify-center items-center relative w-[${x}px] h-[${y}px] text-left px-${px} ml-${ml} opacity-[${isOpacity}] rounded-${rounded} bg-[${bg}] ${classname}`}>
            <span className={`font-prompt font-normal text-${font} capitalize w-full`} style={{color: `#${fontcolor}`}}>{text}</span>
        </OxhainButton03>
    )
}