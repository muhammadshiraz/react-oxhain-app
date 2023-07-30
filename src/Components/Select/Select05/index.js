import React from "react";
import { OxhainSelect05 } from "./Select05.styled";

export default function Select05({ label, placeholder, x, y, isCodeValid, className, dropdown }) {
    return (
        <OxhainSelect05 className={`${isCodeValid} flex flex-row justify-start items-center relative text-left w-full ${className}`}
            style={{
                width: `${x}%`,
                height: `${y}px`
            }}
        >
            <div className="flex flex-col w-full">
                <p className='flex font-prompt font-normal text-base text-[#606060] w-full mb-[15px]'>{label}</p>
                <div className="Select05 flex flex-row w-full">
                    {dropdown}
                </div>
            </div>
        </OxhainSelect05>
    )
}