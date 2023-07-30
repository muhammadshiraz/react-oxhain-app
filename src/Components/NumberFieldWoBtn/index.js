import React from "react";
import { OxhainNumberFieldWoBtn } from "./NumberFieldWoBtn.styled";

export default function NumberFieldWoBtn({ numberChange, text, placeholder, isCodeValid }) {
  return (
    <OxhainNumberFieldWoBtn className="flex flex-row justify-start items-center relative text-left w-full">
      <div className="flex flex-col w-full">
        <p className="flex font-prompt font-normal text-base text-[#606060] w-full mb-[15px]">{text}</p>
        <div className={`${isCodeValid} numberInput flex flex-row`}>
          <input
            className="px-3 outline-0 text-[#000000]"
            type="number"
            size="18"
            min="1" 
            max="999"
            maxlength = "6"
            pattern="\d*"
            onChange={numberChange}
            placeholder={placeholder}
          />
        </div>
      </div>
    </OxhainNumberFieldWoBtn>
  );
}
