import React from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
    const navigate = useNavigate();

	return (
        <div className="flex flex-row mt-4 justify-end">
            <button
                type="button"
                className="flex flex-row items-center text-[#606060] flex font-prompt font-normal text-base"
                onClick={() => navigate("/reset-password")}
            >
                Forgot Password?
            </button>
        </div>
    )
}