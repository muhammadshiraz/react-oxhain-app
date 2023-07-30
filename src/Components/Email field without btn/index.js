import React from "react";
import { OxhainEmailField } from "./EmailField.styled";

export default function EmailField({ emailChange, text, placeholder }) {
  return (
    <OxhainEmailField className="flex flex-row justify-start items-center relative text-left w-full">
      <div className="flex flex-col w-full">
        <p className="flex font-prompt font-normal text-base text4 w-full mb-[17px]">{text}</p>
        <div className="EmailInput flex flex-row w-full h-[60px]">
          <input
            className="outline-0 text-xl font-light"
            type="email"
            size="18"
            onChange={emailChange}
            placeholder={placeholder}
          />
        </div>
      </div>
    </OxhainEmailField>
  );
}
