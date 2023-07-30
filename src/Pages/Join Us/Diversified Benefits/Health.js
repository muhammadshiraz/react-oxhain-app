import React from "react";
import { DBTitle, Paragraph } from "../JoinUs.styled";

const Health = () => {
    return (
        <div className="divBenefitsContentEllipse flex flex-col justify-center">
            <div className="nestedDivBenefitsContentEllipse flex flex-col justify-evenly">
                <div className="flex flex-col"></div>
                <div className="flex flex-col">
                    <DBTitle className='text-center font-prompt text-xl font-medium w-full mb-3'>Health</DBTitle>
                    <Paragraph className='text-center font-prompt text-base font-light w-full leading-relaxed'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</Paragraph>
                </div>
            </div>
        </div>
    );
};

export default Health;