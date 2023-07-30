import React from "react";
import { OxhainTextField03 } from "./TextField03.styled";

export default function TextField03({ label, placeholder, x, y, isCodeValid, className, onChange, type, min, id, max, name }) {
    return (
        <OxhainTextField03 className={`${isCodeValid} flex flex-row justify-start items-center relative text-left w-full ${className}`}
            style={{
                width: `${x}%`,
                height: `${y}px`
            }}
        >
            <div className="flex flex-col w-full">
                <p className='flex font-prompt font-normal text-base text-[#606060] w-full mb-[15px]'>{label}</p>
                <div className="TextField03 flex flex-row w-full">
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
                </div>
            </div>
        </OxhainTextField03>
    )
}