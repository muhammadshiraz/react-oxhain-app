import React from "react";
import { DBTitle, Paragraph } from "../JoinUs.styled";

const Development = () => {
    return (
        <div className="divBenefitsContentEllipse flex flex-col justify-center">
            <div className="nestedDivBenefitsContentEllipse flex flex-col justify-evenly">
                <div className="flex flex-col"></div>
                <div className="flex flex-col">
                    <DBTitle className='text-center font-prompt text-xl font-medium w-full mb-3'>Development</DBTitle>
                    <Paragraph className='text-center font-prompt text-base font-light w-full leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sollicitudin blandit orci egestas at tortor. Quis at ut in elit a.</Paragraph>
                </div>
            </div>
        </div>
    );
};

export default Development;