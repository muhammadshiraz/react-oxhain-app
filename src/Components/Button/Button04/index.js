import React from "react";
import RightArrow from "../../../Assets/Icons/Button/Button04/right-arrow.png";
import { Link } from "react-router-dom";

export default function Button04({text, handleButton, isDisabled, isOpacity, ml, x, y, px, font, fontcolor, link, fontweight, alt, classname}) {
	return (
        <Link to={`/${link}`} disabled={isDisabled} onClick={handleButton} className={`flex flex-row justify-center items-center relative w-[${x}px] h-[${y}px] text-left px-${px} ml-${ml} opacity-[${isOpacity}] ${classname} lg:text-base xl:text-lg 2xl:text-xl`}>
            <span className={`font-${fontweight} text-${font} capitalize w-full`} style={{color: `#${fontcolor}`}}>{text}</span>
            <img src={RightArrow} alt={alt} className="xsm:w-2 lg:w-max xl:w-max 2xl:w-max ml-5" />
        </Link>
    )
}