import React from "react";
import { OxhainTextField04 } from "./TextField04.styled";

export default function TextField04({ placeholder, x, y, isCodeValid, className, onChange, type, min, id, max, name, codelabel }) {
    return (
        <OxhainTextField04 className={`${isCodeValid} flex flex-row justify-start items-center relative text-left w-full ${className}`}
            style={{
                width: `${x}`, 
                height: `${y}`
            }}
        >
            <div className="flex flex-col w-full">
                {/* <p className='flex font-prompt font-normal text-base text-[#606060] w-full mb-[15px]'>{label}</p> */}
                <div className="TextField04 flex flex-row w-full relative">
                    <input
                        min={`${min}`}
                        id={`${id}`}
                        name={`${name}`}
                        max={`${max}`}
                        className="px-3 outline-0 text-[#000000]"
                        type={`${type}`}
                        size="18"
                        placeholder={placeholder}
                        onChange={onChange}
                    />
                    <p style={{color: "rgba(255, 255, 255, 0.87)"}} className='flex font-prompt font-normal text-base absolute right-0 pr-5'>{codelabel}</p>
                </div>
            </div>
        </OxhainTextField04>
    )
}