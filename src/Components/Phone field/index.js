import React from "react";
import PhoneLine from "../../Assets/Images/SignUp/PhoneLine.png";
import Button from '../../Components/Button/Button01';
import PhoneCodeSelector from "../PhoneCodeSelector";
import { OxhainPhoneField } from "./PhoneField.styled";

export default function PhoneField({ isCodeValid, phoneChange }) {
    return (
        <OxhainPhoneField className={`flex flex-col justify-start items-center relative text-left w-full`}>
            <p className='flex font-prompt font-normal text-base text4 w-full mb-[17px]'>Phone</p>
            <div className="flex flex-row w-full">
                <div className={`${isCodeValid} PhoneInput flex flex-row w-full h-[60px]`}>
                    <PhoneCodeSelector
                        items={[
                            { value: "+90", id: 1 },
                            { value: "+90", id: 2 },
                            { value: "+90", id: 3 },
                        ]}
                    />
                    <div className="flex flex-col items-center PhoneLine ml-[0.75rem]"><img src={PhoneLine} alt="Phone" /></div>
                    <input
                        className="px-3 outline-0 text-xl font-light"
                        type="tel"
                        size="18"
                        placeholder="Phone"
                        onChange={phoneChange}
                    />
                    <div className="w-max h-full ml-2.5 ipad:hidden laptop:hidden desktop:hidden"><button className="w-[100px] h-full text-[#4949EE] font-medium">Send Code</button></div>
                </div>
                <div className="w-max h-full ml-2.5 mobile:hidden tablet:hidden"><Button text="Send Code" classname="w-[200px] h-[60px] font-normal text-base rounded" /></div>
            </div>
        </OxhainPhoneField>
    )
}