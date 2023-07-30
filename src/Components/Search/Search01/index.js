import React from "react";
import {ReactComponent as Search01Ico} from '../../../Assets/Icons/Search/Search01/Search01.svg';
import Button01 from "../../Button/Button01";
import { OxhainSearch01 } from "./Search01.styled";

export default function Search01({placeholder, className}) {
	return (
        <OxhainSearch01 className={`flex flex-row justify-start items-center relative text-left w-full h-[55px]`}>
            <div className="flex flex-col w-full h-full">
                <div className={`Search01 flex flex-row h-full ${className}`}>
                    <Search01Ico />    
                    <input
                        className="px-3 outline-0 text-[#000000]"
                        type="text"
                        size="18"
                        placeholder={placeholder}
                    />
                </div>
            </div>
            <Button01 text="Search" rounded="sm" ml="3" x="200" y="55" px="12" />
        </OxhainSearch01>
    )
}