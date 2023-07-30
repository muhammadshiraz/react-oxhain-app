import React, { useEffect } from 'react';
import SignUpImage from '../../Assets/Images/SignUp/sign-up-illustrator.jpg';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Checkbox from "../../Components/Checkbox";
import HaveAnAccount from "../../Components/Have An Account";
import OxhainPhoneField from "../../Components/Phone field";
import OxhainTextField from "../../Components/Text field";
import OxhainEmailField from "../../Components/Email field without btn";
import OxhainPasswordField from "../../Components/Password field";
import Button from "../../Components/Button/Button01";
import ValidationLabel from "../../Components/ValidationLabel";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';
import {
    OxhainSignUp,
    GradientText,
    Title,
    Paragraph,
} from "./SignUp.styled";

const SignUp = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState('1');
    const [isChecked, setChecked] = React.useState(false);
    const handlechecked = () => {
        setChecked(!isChecked);
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    password_again: "",
  });

  const changeFormData = (prop, value) => {
    console.log({ prop, value });
    setFormData({ ...formData, [prop]: value });
  };

  const [isCodeValid, setCodeValid] = React.useState("");
  const [isDisabled, setDisabled] = React.useState(false);
  const [isOpacity, setOpacity] = React.useState("1");
  const [isLabelDisplay, setLabelDisplay] = React.useState("hidden");

  React.useEffect(() => {
    document.getElementById("header").style.display = "none";
    document.getElementById("footer").style.display = "none";
    setChecked(false);
  }, [value]);

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("-");
  }

  const signupHandle = (e) => {
    e.preventDefault();
    let { email, password } = formData;
    const api_key =
      "28b4b56939b14fdf30bcefeb3e935193b0f07ce22523ab5d32afcf3f4151edc0";

    if (!isChecked)
      return Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Please accept the terms.",
      });

    // if (password !== password_again) {
    //     return Swal.fire({ icon: 'error', title: 'Oops...', text: 'Password not equals!' });
    // }

    const requstObj = {
      api_key: api_key,
      registerType: "email",
      data: email,
      password: password,
    };

    axios
      .post("http://18.118.138.191:9595/register", requstObj)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "success") {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Your registration has been successfully created.",
          });

          const userId = res.data.data.user_id;
          localStorage.setItem("user_id", userId);

          setTimeout(() => {
            window.location.href = "/login";
          }, 1000);
        } else if (res.data.status === "fail") {
          let emailError = 0;
          let phoneError = 0;

          if (res.data.message.emailUnique === "false") {
            emailError = 1;
          }
          if (res.data.message.phoneUnique === "false") {
            phoneError = 1;
            // Swal.fire({ icon: 'error', title: 'Exist Phone', text: 'This phone  address already exists.' });
          }

          if (emailError === 1 && phoneError === 1) {
            Swal.fire({
              icon: "error",
              title: "Email and Phone Exist",
              text: "This email address and phone already exists.",
            });
          } else if (emailError === 1 && phoneError === 0) {
            Swal.fire({
              icon: "error",
              title: "Email Exist",
              text: "This email address already exists.",
            });
          } else if (emailError === 0 && phoneError === 1) {
            Swal.fire({
              icon: "error",
              title: "Phone Exist",
              text: "This phone already exists.",
            });
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Something went wrong",
            text: "Please refresh the page and try again.",
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Network Error!",
          text: "Please refresh the page and try again.",
        });
      });
  };

  const signupHandlePhone = (e) => {
    e.preventDefault();
    let { phone_number, password } = formData;
    const api_key =
      "28b4b56939b14fdf30bcefeb3e935193b0f07ce22523ab5d32afcf3f4151edc0";

    if (!isChecked)
      return Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Please accept the terms.",
      });

    // if (password !== password_again) {
    //     return Swal.fire({ icon: 'error', title: 'Oops...', text: 'Password not equals!' });
    // }

    const requstObj = {
      api_key: api_key,
      registerType: "phone",
      data: phone_number,
      password: password,
    };

    axios
      .post("http://18.118.138.191:9595/register", requstObj)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "success") {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Your registration has been successfully created.",
          });

          const userId = res.data.data.user_id;
          localStorage.setItem("user_id", userId);

          setTimeout(() => {
            window.location.href = "/login";
          }, 1000);
        } else if (res.data.status === "fail") {
          let emailError = 0;
          let phoneError = 0;

          if (res.data.message.emailUnique === "false") {
            emailError = 1;
          }
          if (res.data.message.phoneUnique === "false") {
            phoneError = 1;
            // Swal.fire({ icon: 'error', title: 'Exist Phone', text: 'This phone  address already exists.' });
          }

          if (emailError === 1 && phoneError === 1) {
            Swal.fire({
              icon: "error",
              title: "Email and Phone Exist",
              text: "This email address and phone already exists.",
            });
          } else if (emailError === 1 && phoneError === 0) {
            Swal.fire({
              icon: "error",
              title: "Email Exist",
              text: "This email address already exists.",
            });
          } else if (emailError === 0 && phoneError === 1) {
            Swal.fire({
              icon: "error",
              title: "Phone Exist",
              text: "This phone already exists.",
            });
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Something went wrong",
            text: "Please refresh the page and try again.",
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Network Error!",
          text: "Please refresh the page and try again.",
        });
      });
  };

    return (
        <OxhainSignUp className='flex flex-row xsm:h-[850px] sm:h-[850px] md:h-screen xmd:h-screen lg:h-[850px] xl:h-screen 2xl:h-screen'>
            <div className='w-max mobile:hidden tablet:hidden'><img src={SignUpImage} className="h-full w-max min-h-screen" alt="Sign Up" /></div>
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
                    <Title className='mobile:text-4xl tablet:text-4xl ipad:text-4xl laptop:text-4xl desktop:text-5xl font-medium font-prompt mb-[35px]'>Sign Up</Title>
                    <Box sx={{ width: '100%' }}>
                        <TabContext value={value}>
                            <Box>
                                <TabList onChange={handleChange}>
                                    <Tab className='font-prompt phoneTab' label="Phone" value="1" />
                                    <Tab className='font-prompt emailTab' label="Email" value="2" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Box
                                    component="form"
                                    className='flex flex-col'
                                >
                                    <div className='flex flex-row mb-[25px] w-full'>
                                        <OxhainPhoneField isCodeValid={isCodeValid} phoneChange={(e) => changeFormData('phone_number', e.target.value)} />
                                        <ValidationLabel
                                            mtop="2"
                                            mleft="5"
                                            text="Phone number doesn’t match."
                                            isLabelDisplay={isLabelDisplay}
                                        />

                                    </div>
                                    <div className='flex flex-row mb-[25px] w-full'>
                                        <OxhainTextField label="Phone verification code" placeholder="Phone verification code" />
                                    </div>
                                    <div className='flex flex-row mb-[25px] w-full'>
                                        <OxhainPasswordField isCodeValid={isCodeValid} label="Password" placeholder="Password" passwordChange={(e) => changeFormData('password', e.target.value)} inputBoxClassName="" />
                                        <ValidationLabel
                                            mtop="2"
                                            mleft="5"
                                            text="Password doesn’t match."
                                            isLabelDisplay={isLabelDisplay}
                                        />
                                    </div>
                                    <div className='flex flex-row mb-[22px] w-full'>
                                        <OxhainTextField label="Referral Code (Optional)" placeholder="Referral Code (Optional)" />
                                    </div>
                                    <Checkbox isChecked={isChecked} handlechecked={handlechecked} classname="text4 font-normal" labeltext="I have read and agree to the" Checkboxbtn={<button type='button' className='ml-1 underline text-sm font-medium text-[#4949EE]'>Terms of Use.</button>} />
                                    <div className="mt-10 w-[100%]">
                                        <Button
                                            btnType="submit"
                                            isDisabled={isDisabled}
                                            isOpacity={isOpacity}
                                            handleButton={signupHandle}
                                            text="Sign Up"
                                            classname="rounded w-full h-[60px] text-xl"
                                        />
                                    </div>
                                </Box>
                            </TabPanel>
                            <TabPanel value="2">
                                <Box
                                    component="form"
                                    className='flex flex-col'
                                >
                                    <div className='flex flex-row mb-[25px] w-full'>
                                        <OxhainEmailField text="Email" placeholder="Email" emailChange={(e) => changeFormData('email', e.target.value)} />
                                    </div>
                                    <div className='flex flex-row mb-[25px] w-full'>
                                        <OxhainTextField label="Email verification code" placeholder="Email verification code" />
                                    </div>
                                    <div className='flex flex-row mb-[25px] w-full'>
                                        <OxhainPasswordField isCodeValid={isCodeValid} label="Password" placeholder="Password" passwordChange={(e) => changeFormData('password', e.target.value)} inputBoxClassName="mr-4" />
                                        <ValidationLabel
                                            mtop="2"
                                            mleft="5"
                                            text="Password doesn’t match."
                                            isLabelDisplay={isLabelDisplay}
                                        />
                                    </div>
                                    <div className='flex flex-row mb-[22px] w-full'>
                                        <OxhainTextField label="Referral Code (Optional)" placeholder="Referral Code (Optional)" />
                                    </div>
                                    <Checkbox isChecked={isChecked} handlechecked={handlechecked} classname="text4 font-normal" labeltext="I have read and agree to the" Checkboxbtn={<button type='button' className='ml-1 underline text-sm font-medium text-[#4949EE]'>Terms of Use.</button>} />
                                    <div className="mt-10 w-[100%]">
                                        <Button
                                            btnType="submit"
                                            isDisabled={isDisabled}
                                            isOpacity={isOpacity}
                                            handleButton={signupHandle}
                                            text="Sign Up"
                                            classname="rounded w-full h-[60px] text-xl"
                                        />
                                    </div>
                                </Box>
                            </TabPanel>
                        </TabContext>
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
        </OxhainSignUp>
    );
};

export default SignUp;
