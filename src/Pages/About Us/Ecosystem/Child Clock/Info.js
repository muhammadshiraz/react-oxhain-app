import React from "react";
import { ClockTitle, Paragraph } from "../../AboutUs.styled";

const Info = () => {
    return (
        <div className="flex flex-col justify-center w-[30%] mx-auto">
            <div className="flex flex-col justify-evenly">
                <div className="flex flex-col">
                    <ClockTitle className='text-center font-prompt text-xl font-medium w-full mb-3'>Info</ClockTitle>
                    <Paragraph className='text-center font-prompt text-base font-light w-full leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient pretium hendrerit lobortis in. Erat purus, diam sagittis enim, velit dui pharetra.</Paragraph>
                </div>
            </div>
        </div>
    );
};

export default Info;