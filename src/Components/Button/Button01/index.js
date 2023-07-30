import React from "react";
import { OxhainButton01 } from "./Button01.styled";

export default function Button01({text, handleButton, btnType, isDisabled, isOpacity, ml, rounded, x, y, px, wfull, classname}) {
	return (
        <OxhainButton01 disabled={isDisabled} type={btnType} onClick={handleButton} className={`flex flex-row justify-center items-center relative w-[${x}px] h-[${y}px] text-left px-${px} ml-${ml} opacity-[${isOpacity}] rounded-${rounded} ${classname}`}
            style={{width: `${wfull}%`}}
        >
            <span className="font-prompt font-normal capitalize w-full">{text}</span>
        </OxhainButton01>
    )
}