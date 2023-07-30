import React from "react";
import Eye from "../../Assets/Images/SignUp/eye.png";
import EyeSlash from "../../Assets/Images/SignUp/eye-slash.png";
import { OxhainPasswordField } from "./PasswordField.styled";

export default function PasswordField({
  label,
  placeholder,
  x,
  y,
  passwordChange,
  isCodeValid,
  inputBoxClassName
}) {
  const [passwordType, setPasswordType] = React.useState("password");
  const [passwordInput, setPasswordInput] = React.useState("");

  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <OxhainPasswordField
      className={`flex flex-row justify-start items-center relative text-left w-full`}
      style={{
        width: `${x}%`,
        height: `${y}px`,
      }}
    >
      <div className={`flex flex-col w-full ${inputBoxClassName}`}>
        <p className="flex font-prompt font-normal text-base text4 w-full mb-[17px]">{label}</p>
        <div className={`${isCodeValid} PasswordField flex flex-row h-[60px]`}>
          <input
            className="outline-0 text-xl font-light"
            type={passwordType}
            size="18"
            name="password"
            onChange={passwordChange}
            placeholder={placeholder}
          />
          <button
            type="button"
            className="btn btn-outline-primary h-full relative"
            onClick={togglePassword}
          >
            {passwordType === "password" ? (
              <img src={Eye} alt="Eye" className="" />
            ) : (
              <img src={EyeSlash} alt="Eye Slash" className="" />
            )}
          </button>
        </div>
      </div>
    </OxhainPasswordField>
  );
}
