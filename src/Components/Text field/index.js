import React from "react";
import { OxhainTextField } from "./TextField.styled";

export default function TextField({ label, placeholder, x, y, isCodeValid, className, onChange }) {
    return (
        <OxhainTextField className={`${isCodeValid} flex flex-row justify-start items-center relative text-left w-full ${className}`}
            style={{
                width: `${x}%`,
                height: `${y}px`
            }}
        >
            <div className="flex flex-col w-full">
                <p className='flex font-prompt font-normal text-base text4 w-full mb-[17px]'>{label}</p>
                <div className="TextField flex flex-row h-[60px]">
                    <input
                        className="outline-0 text-xl font-light"
                        type="text"
                        size="18"
                        placeholder={placeholder}
                        onChange={onChange}
                    />
                </div>
            </div>
        </OxhainTextField>
    )
}