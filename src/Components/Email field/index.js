import React from "react";
import Button from '../Button/Button01';
import { OxhainEmailField } from "./EmailField.styled";

export default function EmailField({ text, placeholder, value, onChange }) {
    return (
        <OxhainEmailField className='flex flex-row justify-start items-center relative text-left w-full'>
            <div className="flex flex-col w-full">
                <p className='flex font-prompt font-normal text-base text-[#606060] w-full mb-[15px]'>{text}</p>
                <div className="EmailInput flex flex-row">
                    <input
                        className="px-3 outline-0 text-[#000000]"
                        type="email"
                        size="18"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            </div>
            <div className="pt-5 w-[280px] h-[57.28px]"><Button text="Send Code" x="180" y="57.28" /></div>
        </OxhainEmailField>
    )
}