import React from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {
    OxhainFormGroup
} from "./Checkbox.styled";

export default function OxhainCheckbox({ mtop, mleft, textcolor, fsize, labeltext, Checkboxbtn, isChecked, handlechecked, classname }) {
    return (
        <OxhainFormGroup onClick={handlechecked} className={`flex flex-col mt-${mtop} ml-${mleft} text-[${textcolor}] font-${fsize} ${classname}`}>
            <div className='flex flex-row'>
                <FormControlLabel className='flex flex-row' control={<Checkbox checked={isChecked} />} label={labeltext} />
                {Checkboxbtn}
            </div>
        </OxhainFormGroup>
    )
}