import React from "react";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "../LanguageSelector";
import { OxhainHaveAnAccount, GradientText } from "./HaveAnAccount.styled";

export default function HaveAnAccount({classname}) {
    const navigate = useNavigate();

	return (
        <OxhainHaveAnAccount className={`flex flex-row justify-end mt-[10px] mr-[50px] absolute right-0 top-0 font-prompt ${classname}`}>
            <p className="font-normal text-base flex flex-row items-center justify-center text5 mr-[40px]">
                Already have an account?{" "}
                <button type="button" className="ml-[5px]" onClick={() => navigate("/login")}>
                    <GradientText className="font-medium text-base">Log in</GradientText>
                </button>
            </p>
            <LanguageSelector
                items={[
                    { value: "English", id: 1 },
                    { value: "Turkish", id: 2 },
                    { value: "German", id: 3 },
                    { value: "Arabic", id: 4 },
                    { value: "Russian", id: 5 },
                    { value: "French", id: 6 },
                    { value: "Spanish", id: 7 },
                    { value: "Malay", id: 8 },
                    { value: "Croatian", id: 9 },
                    { value: "Greek", id: 10 }
                ]}
            />
        </OxhainHaveAnAccount>
    )
}