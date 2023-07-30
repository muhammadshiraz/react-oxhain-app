import React from "react";
import ResetPasswordImage from "../../Assets/Images/ResetPassword/ResetPassword.jpg";
import CheckEmailIcon from "../../Assets/Images/ResetPassword/check-email-icon.jpg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import HaveAnAccount from "../../Components/Have An Account";
import OxhainEmailField from "../../Components/Email field without btn";
import OxhainNumberFieldWoBtn from "../../Components/NumberFieldWoBtn";
import OxhainPasswordField from "../../Components/Password field";
import Button from '../../Components/Button/Button01';
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  OxhainResetPassword,
  GradientText,
  Title,
  Paragraph,
} from "./ResetPassword.styled";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1024,
  bgcolor: "#FFFFFF",
  boxShadow: 24,
};

const ResetPassword = () => {
  const navigate = useNavigate();
  const [instructionsText, setInstructionsText] =
    React.useState("Send Instructions");
  const [open, setOpen] = React.useState("");
  const [userId, setUserId] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [AuthPin, setGooglePin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isMailPin, setisMailPin] = React.useState("");
  const [isGooglePin, setisGooglePin] = React.useState("");
  const [isNewPassword, setisNewPassword] = React.useState("");
  const [isConfirmNewPassword, setisConfirmNewPassword] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    document.getElementById("header").style.display = "none";
    document.getElementById("footer").style.display = "none";
  }, []);

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const mailPin = (event) => {};
  const googlePin = (event) => {
    setGooglePin(event.target.value);
  };
  const newPassword = (event) => {
    setPassword(event.target.value);
  };
  const confirmNewPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  function resetPassword(e) {
    e.preventDefault();
    setInstructionsText("Please Wait...");

    const userObject = {
      api_key:
        "28b4b56939b14fdf30bcefeb3e935193b0f07ce22523ab5d32afcf3f4151edc0",
      email: email,
    };

    axios
      .post("http://18.118.138.191:9595/getUserId", userObject)
      .then((res) => {
        if (res.data["status"] === "fail") {
          Swal.fire({
            title: "User not found",
            text: "Please check your email address",
            icon: "error",
            confirmButtonText: "OK",
          });
          setInstructionsText("Send Instructions");
        } else {
          if (res.data["status"] === "success") {
            console.log(res.data["data"][0]["user_id"]);
            setUserId(res.data["data"][0]["user_id"]);
            handleOpen();
            setInstructionsText("Send Instructions");
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function authPost(e) {
    e.preventDefault();

    if (password != confirmPassword) {
      setisNewPassword("wrong-code");
      setisConfirmNewPassword("wrong-code");
      document.getElementById("alertUser").innerHTML = "Passwords do not match";
    } else {
      const userObject = {
        twofapin: AuthPin,
        password: password,
        api_key:
          "28b4b56939b14fdf30bcefeb3e935193b0f07ce22523ab5d32afcf3f4151edc0",
        user_id: userId,
      };

      axios
        .post("http://18.118.138.191:9595/resetPassword", userObject)
        .then((res) => {
          console.log(res.data);
          if (res.data["status"] === "succes") {
            handleClose();
            Swal.fire({
              title: "Password updated",
              text: "Please login with your new password",
              icon: "success",
              confirmButtonText: "OK",
            });
          }
          if (res.data["status"] === "fail") {
            setisNewPassword("wrong-code");
            setisConfirmNewPassword("wrong-code");
            document.getElementById("alertUser").innerHTML = "2FA Pin failed";
          }
        });
    }
  }

  return (
    <OxhainResetPassword className='flex flex-row xsm:h-[850px] sm:h-[850px] md:h-screen xmd:h-screen lg:h-[850px] xl:h-screen 2xl:h-screen'>
      <div className='w-max mobile:hidden tablet:hidden'><img src={ResetPasswordImage} className="h-full w-max min-h-screen" alt="Reset Password" /></div>
      <HaveAnAccount classname="z-10 mobile:hidden" />
      <div className='flex flex-col mx-auto xsm:w-[600px] lg:w-[400px] xl:w-[685px] 2xl:w-[600px] justify-center relative'>
          <div
              className='
              flex 
              flex-col
              text-left
              xsm:w-full
              sm:w-full
              md:w-full
              xmd:w-full
              lg:w-full
              xl:w-full
              2xl:w-full
              md:mx-auto
              lg:mx-auto
              xl:mx-auto
              2xl:mx-auto
              xsm:px-10
              sm:px-10
              md:px-10
              xmd:px-10
              '
              style={{
                  zoom: 0.78,
              }}
          >
            <Title className="mobile:text-4xl tablet:text-4xl ipad:text-4xl laptop:text-4xl desktop:text-5xl font-medium font-prompt mb-[10px]">Reset Password</Title>
            <Paragraph className="text-base font-normal font-prompt mb-[58px]">Enter the email associated with your account and we’ll send an email with instructions to reset your password.</Paragraph>
            <Box component="form" className="flex flex-col">
              <div className="flex flex-row mb-3 w-full">
                <OxhainEmailField
                  text="Email Account"
                  placeholder="Email Account"
                  emailChange={emailChange}
                />
              </div>
              <div className="mobile:pt-3 tablet:pt-5 ipad:pt-6 laptop:pt-8 desktop:pt-10 w-[250px]">
                <Button
                  handleButton={resetPassword}
                  text={instructionsText}
                  x="250"
                  y="55"
                />
              </div>
              <div className='flex mobile:flex-col items-start justify-center mt-3.5 tablet:hidden ipad:hidden laptop:hidden desktop:hidden'>
                  <p className="text-base flex flex-row items-start font-normal justify-center text5">
                      Already have an account?{" "}
                      <button type="button" className="ml-[5px]" onClick={() => navigate("/login")}>
                          <p className="font-medium text-base text-[#4949EE]">Log in</p>
                      </button>
                  </p>
              </div>
            </Box>
          </div>
      </div>
      <Modal open={open} onClose={handleClose} className="relative">
        <Box
          sx={style}
          className="flex flex-col items-center justify-center py-20"
        >
          <div className="flex flex-col justify-center items-center w-[650px] mx-auto">
            <div className="flex rounded-full mb-3 w-[125px]">
              <img src={CheckEmailIcon} alt="Check your mail" />
            </div>
            <Title className="text-4xl font-medium font-prompt mb-0.3">
              Check your mail
            </Title>
            <Paragraph className="text-lg font-normal font-prompt mb-8">
              We have sent a password recover instructions to your email.
            </Paragraph>
            <div className="flex flex-col items-center justify-center w-full mb-3">
              <div className="flex flex-row items-center justify-center w-full mb-2">
                <div className="flex flex-row mb-2 w-full mr-2">
                  <OxhainNumberFieldWoBtn
                    isCodeValid={isMailPin}
                    text="Mail Pin"
                    placeholder="Mail Pin"
                    numberChange={mailPin}
                  />
                </div>
                <div className="flex flex-row mb-2 w-full ml-2">
                  <OxhainNumberFieldWoBtn
                    isCodeValid={isGooglePin}
                    text="Google Pin"
                    placeholder="Google Pin"
                    numberChange={googlePin}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center w-full mb-3">
                <div className="flex flex-row mb-2 w-full mr-2">
                  <OxhainPasswordField
                    isCodeValid={isNewPassword}
                    label="Set New Password"
                    placeholder="Set New Password"
                    passwordChange={newPassword}
                  />
                </div>
                <div className="flex flex-row mb-2 w-full ml-2">
                  <OxhainPasswordField
                    isCodeValid={isConfirmNewPassword}
                    label="Confirm New Password"
                    placeholder="Confirm New Password"
                    passwordChange={confirmNewPassword}
                  />
                </div>
              </div>
            </div>
            <p style={{ color: "red" }} id="alertUser"></p>
            <div className="w-[250px]">
              <Button text="Change" x="100" y="55" handleButton={authPost} />
            </div>
            {/* <div className="w-[250px] text-center mt-8">
                    <button
                    type="button"
                    className="text-[#3F3F3F] text-base font-normal font-prompt mb-12"
                    onClick={handleClose}
                    >
                    Skip, I’ll confirm later.
                    </button>
                </div> */}
            <div className="w-[100%] text-center absolute bottom-0 inset-x-0 pb-[30px] text-[#606060]">
              Did not receive the email? Check your spam or try{" "}
              <button
                type="button"
                className="text-[#3F3F3F] text-base font-medium font-prompt ml-1"
              >
                <GradientText>another email address.</GradientText>
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </OxhainResetPassword>
  );
};

export default ResetPassword;
