import React from "react";
import RightArrow from "../../../Assets/Icons/Button/Button06/right-arrow.png";
import { Link } from "react-router-dom";

export default function Button06({text, handleButton, isDisabled, isOpacity, ml, x, y, px, font, fontcolor, link, fontweight, alt}) {
	return (
        <Link to={`/${link}`} disabled={isDisabled} onClick={handleButton} className={`flex flex-row justify-center items-center relative w-[${x}px] h-[${y}px] text-left px-${px} ml-${ml} opacity-[${isOpacity}]`}>
            <span className={`font-${fontweight} text-${font} capitalize w-full`} style={{color: `#${fontcolor}`}}>{text}</span>
            <img src={RightArrow} alt={alt} className="w-max ml-5" />
        </Link>
    )
}