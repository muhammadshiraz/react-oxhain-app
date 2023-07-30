import React from "react";
import PhoneCodeSelector from "../PhoneCodeSelector";
import PhoneLine from "../../Assets/Images/LogIn/PhoneLine.png";
import { OxhainPhoneField } from "./PhoneField.styled";

export default function PhoneField({ phoneChange }) {
  return (
    <OxhainPhoneField className="flex flex-row justify-start items-center relative text-left w-full">
      <div className="flex flex-col w-full">
        <p className='flex font-prompt font-normal text-base text4 w-full mb-[17px]'>Phone</p>
        <div className="PhoneInput flex flex-row w-full h-[60px]">
          <PhoneCodeSelector
              items={[
                  { value: "+1", id: 1 },
                  { value: "+2", id: 2 },
                  { value: "+3", id: 3 },
                  { value: "+4", id: 4 },
                  { value: "+5", id: 5 },
                  { value: "+6", id: 6 },
                  { value: "+7", id: 7 },
                  { value: "+8", id: 8 },
                  { value: "+92", id: 9 },
                  { value: "+32", id: 10 }
              ]}
          />
          <div className="flex flex-col items-center PhoneLine ml-[0.75rem]">
            <img src={PhoneLine} width="100%" className="w-full" alt="Phone" />
          </div>
          <input
            className="px-3 outline-0 text-xl font-light"
            type="tel"
            size="18"
            onChange={phoneChange}
            placeholder="Phone Number"
          />
        </div>
      </div>
    </OxhainPhoneField>
  );
}
