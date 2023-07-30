import React from "react";
import { OxhainTextField02 } from "./TextField02.styled";

export default function TextField02({placeholder, x, y, mr, rounded}) {
	return (
        <OxhainTextField02 className={`flex flex-row justify-start items-center relative text-left w-full h-[65px] mr-${mr}`}>
            <div className="flex flex-col w-full h-full">
                <div className={`TextField02 flex flex-row w-full h-full rounded-${rounded}`}>
                    <input
                        className={`px-3 outline-0 text-[#000000]`}
                        type="text"
                        size="18"
                        placeholder={placeholder}
                    />
                </div>
            </div>
        </OxhainTextField02>
    )
}