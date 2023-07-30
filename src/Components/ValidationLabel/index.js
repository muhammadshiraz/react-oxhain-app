import React from "react";
import { OxhainValidationLabel } from "./ValidationLabel.styled";

export default function ValidationLabel({text, isLabelDisplay, mtop, mleft}) {
	return (
        <OxhainValidationLabel
            className={
                `${isLabelDisplay}
                mt-${mtop}
                ml-${mleft}
                flex-row
                w-full
                justify-start
                justify-items-start
                relative
                text-left
                text-[#D70601]
                font-prompt
                text-base
                font-light`
            }
        >{text}</OxhainValidationLabel>
    )
}