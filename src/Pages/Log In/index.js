import React from "react";
import LogInImage from "../../Assets/Images/LogIn/login-illustrator.jpg";
import QRBg from "../../Assets/Images/LogIn/qr-bg.png";
import QR from "../../Assets/Images/LogIn/qr.png";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Checkbox from "../../Components/Checkbox";
import Modal from "@mui/material/Modal";
import HaveAnAccount from "../../Components/Have An Account";
import OxhainPhoneField from "../../Components/Phone field without btn";
import OxhainEmailField from "../../Components/Email field without btn";
import OxhainPasswordField from "../../Components/Password field";
import Button from "../../Components/Button/Button01";
import axios from "axios";
import ValidationLabel from "../../Components/ValidationLabel";
import ForgotPassword from "../../Components/Forgot Password";
import VerificationInput from "react-verification-input";
import CorrectIcon from "../../Assets/Icons/Validation/correct-icon.png";
import WrongIcon from "../../Assets/Icons/Validation/wrong-icon.png";
import {
	OxhainLogIn,
	GradientText,
	Title,
	OxhainVerification,
	GradientNumber,
} from "./LogIn.styled";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "#FFFFFF",
	boxShadow: 24,
	zIndex: "999999",
};

const LogIn = () => {
	let navigate = useNavigate();

	const [open, setOpen] = React.useState(false);
	const [ButtonText, SetButton] = React.useState("Log In");
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		setCodeValid("");
		setVerifyIcon("hidden");
		setCodeValidIcon();
		setVerifyCode("");
		setDisabled(false);
		setOpacity("1");
		setLabelDisplay("hidden");
	};
	const [value, setValue] = React.useState("1");
	const [phone, setPhone] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [userId, setUserId] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [isCodeValid, setCodeValid] = React.useState("");
	const [isVerifyIcon, setVerifyIcon] = React.useState("hidden");
	const [isCodeValidIcon, setCodeValidIcon] = React.useState();
	const [verifyCode, setVerifyCode] = React.useState("");
	const [isDisabled, setDisabled] = React.useState(false);
	const [isOpacity, setOpacity] = React.useState("1");
	const [isLabelDisplay, setLabelDisplay] = React.useState("hidden");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const phoneChange = (event) => {
		setPhone(event.target.value);
	};

	const emailChange = (event) => {
		setEmail(event.target.value);
	};

	const passwordChange = (event) => {
		setPassword(event.target.value);
	};

	React.useEffect(() => {
		document.getElementById("header").style.display = "none";
		document.getElementById("footer").style.display = "none";
	}, []);

	function loginFunction(mailOrPhone, data) {
		SetButton("Please Wait...");
		const userObject = {
			user: data,
			password: password,
			searchType: mailOrPhone,
			api_key:
				"28b4b56939b14fdf30bcefeb3e935193b0f07ce22523ab5d32afcf3f4151edc0",
		};

		axios
			.post("http://18.118.138.191:9595/login", userObject)
			.then((response) => {
				console.log(response.data.message);
				if (response.data["status"] == "fail") {
					if (response.data.message == "account_not_active") {
						Swal.fire({
							title: "Failed",
							text: "Your account is not activated",
							icon: "error",
							confirmButtonText: "OK",
							confirmButtonColor: "#00bcd4",
							showCancelButton: false,
							showConfirmButton: true,
							allowOutsideClick: false,
							allowEscapeKey: false,
							allowEnterKey: false,
							focusConfirm: false,
							timer: 2500,
						}).then((result) => {
							SetButton("Log In");
						});
					} else {
						Swal.fire({
							title: "Failed",
							zIndex: 999999999, // check this line
							text: "Your credentials are incorrect",
							icon: "error",
							confirmButtonText: "OK",
							confirmButtonColor: "#00bcd4",
							showCancelButton: false,
							showConfirmButton: true,
							allowOutsideClick: false,
							allowEscapeKey: false,
							allowEnterKey: false,
							focusConfirm: false,
							timer: 2500,
						}).then((result) => {
							SetButton("Log In");
						});
					}
				} else {
					if (response.data["status"] == "success") {
						setUserId(response.data["data"]["user_id"]);
						localStorage.setItem("user_id", response.data["data"]["user_id"]);
						console.log(response.data["data"]["user_id"]);
						if (response.data["data"]["twofa"] != null) {
							handleOpen();
							SetButton("Log In");
						} else {
							let timerInterval;
							Swal.fire({
								title: "Success",
								html: "Redirecting...",
								timer: 1500,
								timerProgressBar: true,
								didOpen: () => {
									Swal.showLoading();
									const b = Swal.getHtmlContainer().querySelector("b");
									timerInterval = setInterval(() => {}, 100);
								},
								willClose: () => {
									clearInterval(timerInterval);
								},
							}).then((result) => {
								SetButton("Log In");
								window.location.href = "/dashboard";
							});
						}
					}
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	const changeVerifyCode = (event) => {
		if (event.length == 6) {
			setCodeValid("correct-code");
			setVerifyIcon("flex");
			setVerifyCode(event);
			setCodeValidIcon(CorrectIcon);
			setDisabled(false);
			setLabelDisplay("hidden");
			setOpacity("1");
		} else {
			setCodeValid("wrong-code");
			setVerifyIcon("flex");
			setVerifyCode(event);
			setCodeValidIcon(WrongIcon);
			setDisabled(true);
			setLabelDisplay("hidden");
			setOpacity("0.5");
		}
	};

	function verifySubmit(e) {
		e.preventDefault();

		if (verifyCode.length != 6) {
		} else {
			const userObject = {
				twofapin: verifyCode,
				user_id: userId,
				api_key:
					"28b4b56939b14fdf30bcefeb3e935193b0f07ce22523ab5d32afcf3f4151edc0",
				log_id: "",
				wantToTrust: "",
			};

			axios
				.post("http://18.118.138.191:9595/2fa", userObject)
				.then((res) => {
					console.log(res.data);
					if (res.data["status"] === "success") {
						// res.data["data"]["user_id"]
						handleClose();
						let timerInterval;
						Swal.fire({
							title: "Success",
							html: "Redirecting...",
							timer: 1500,
							timerProgressBar: true,
							didOpen: () => {
								Swal.showLoading();
								const b = Swal.getHtmlContainer().querySelector("b");
								timerInterval = setInterval(() => {}, 100);
							},
							willClose: () => {
								clearInterval(timerInterval);
							},
						}).then((result) => {
							SetButton("Log In");
							window.location.href = "/dashboard";
						});
					}

					if (res.data["status"] === "fail") {
						handleClose();
						Swal.fire({
							title: "Failed",
							text: "Your code is incorrect",
							icon: "error",
							confirmButtonText: "OK",
							confirmButtonColor: "#00bcd4",
							showCancelButton: false,
							showConfirmButton: true,
							allowOutsideClick: false,
							allowEscapeKey: false,
							allowEnterKey: false,
							focusConfirm: false,
							timer: 2500,
						}).then((result) => {
							handleOpen();
						});
					}
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}

	return (
		<OxhainLogIn className='flex flex-row xsm:h-[850px] sm:h-[850px] md:h-screen xmd:h-screen lg:h-[850px] xl:h-screen 2xl:h-screen font-prompt'>
			<div className='w-max mobile:hidden tablet:hidden'><img src={LogInImage} className="h-full w-max min-h-screen" alt="Log in" /></div>
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
						<Title className='mobile:text-4xl tablet:text-4xl ipad:text-4xl laptop:text-4xl desktop:text-5xl font-medium mb-[35px]'>Log In</Title>
						<Box sx={{ width: "100%" }}>
							<TabContext value={value}>
								<Box>
									<TabList onChange={handleChange}>
										<Tab
											className="font-prompt phoneTab"
											label="Phone"
											value="1"
										/>
										<Tab
											className="font-prompt emailTab"
											label="Email"
											value="2"
										/>
										<Tab
											className="font-prompt qRCodeTab"
											label="QR Code"
											value="3"
										/>
									</TabList>
								</Box>
								<TabPanel value="1">
									<Box component="form" className="flex flex-col">
										<div className='flex flex-row mb-[25px] w-full'>
											<OxhainPhoneField phoneChange={phoneChange} />
										</div>
										<div className='flex flex-row mb-[40px] w-full'>
											<OxhainPasswordField
												passwordChange={passwordChange}
												label="Login Password"
												placeholder="Login Password"
											/>
										</div>
										<div className="w-full">
											<Button
												id="logInBtn"
												text={ButtonText}
												btnType="button"
												handleButton={() => {
													loginFunction("phone_number", phone);
												}}
												classname="rounded w-full h-[60px] text-xl"
											/>
                                    	</div>

										{/* <div className="pt-10 w-[250px]">
											<Button
												btnType="button"
												id="logInBtn"
												text={ButtonText}
												x="250"
												y="55"
												handleButton={() => {
													loginFunction("phone_number", phone);
												}}
											/>
										</div> */}
										<ForgotPassword />
									</Box>
								</TabPanel>
								<TabPanel value="2">
									<Box component="form" className="flex flex-col">
										<div className='flex flex-row mb-[25px] w-full'>
											<OxhainEmailField
												text="Email Account"
												placeholder="Email Account"
												emailChange={emailChange}
											/>
										</div>
										<div className='flex flex-row mb-[40px] w-full'>
											<OxhainPasswordField
												label="Login Password"
												passwordChange={passwordChange}
												placeholder="Login Password"
											/>
										</div>
										<div className="w-full">
											<Button
												id="logInBtn"
												text={ButtonText}
												btnType="button"
												handleButton={() => {
													loginFunction("email", phone);
												}}
												classname="rounded w-full h-[60px] text-xl"
											/>
                                    	</div>

										<ForgotPassword />
									</Box>
								</TabPanel>
								<TabPanel value="3">
									<Box className="flex flex-col w-max">
										<div
											className="flex flex-col items-center justify-center"
											style={{
												backgroundImage: `url(${QRBg})`,
												backgroundRepeat: "no-repeat",
												backgroundSize: "cover",
												width: "400px",
												height: "400px",
											}}
										>
											<img src={QR} width="363px" alt="QR" />
											
										</div>
										<p className="text-center text4 text-sm font-normal mt-[34px] ">Open Oxhain App ans scan QR code to log in.</p>
									</Box>
								</TabPanel>
							</TabContext>
						</Box>
					</div>
				</div>
			<Modal
				open={open}
				onClose={handleClose}
				className="relative verifyAccountModal mobile:w-[300px] laptop:w-[1024px] desktop:w-[1024px] mx-auto"
			>
				<Box
					sx={style}
					className="flex flex-col items-center justify-center mobile:py-8 tablet:py-8 ipad:py-8 laptop:py-20 desktop:py-20"
				>
					<div className="flex flex-col items-center justify-center mobile:w-[310px] tablet:w-[530px] ipad:w-[730px] laptop:w-[830px] desktop:w-[830px]">
						<Title className="mobile:text-2xl tablet:text-3xl ipad:text-2xl laptop:text-3xl desktop:text-4xl font-medium font-prompt mb-1">
							Verify Account
						</Title>
						<p className="mobile:text-sm tablet:text-base ipad:text-base laptop:text-lg desktop:text-lg font-normal font-prompt mobile:mb-4 tablet:mb-5 ipad:mb-5 laptop:mb-8 desktop:mb-12 text-[#3F3F3F] text-center">
							Please, enter the verification code{" "}
							<button
								type="button"
								className="text-[#4949EE] font-medium font-prompt ml-1"
							>
								<GradientText className="google-gradient-underline pb-[2px]">
									Google Authenticator
								</GradientText>
							</button>
						</p>
						{/* <div className="w-[250px] flex flex-row font-prompt font-normal mx-auto justify-center mb-12 text-5xl"><GradientNumber>01:36</GradientNumber></div> */}
						<OxhainVerification className="flex flex-col justify-center items-center mt-3 relative">
							<VerificationInput
								length={6}
								validChars="0-9"
								placeholder=""
								value={verifyCode}
								removeDefaultStyles
								autoFocus
								onChange={changeVerifyCode}
								classNames={{
									container: "container font-prompt",
									character: `${isCodeValid} character`,
									characterInactive: "character--inactive",
									characterSelected: "character--selected",
								}}
							/>
							<div
								className={`${isVerifyIcon} flex justify-center items-center ml-3 absolute right-[-3.5rem] mobile:hidden tablet:hidden`}
							>
								<img src={isCodeValidIcon} alt="Verify Account" />
							</div>
						</OxhainVerification>
						<ValidationLabel
							mtop="2"
							text="Verification code doesn't match."
							isLabelDisplay={isLabelDisplay}
						/>
						<div className="mx-auto mobile:mt-4 tablet:mt-4 ipad:mt-5 laptop:mt-5 desktop:mt-8">
							<Button
								btnType="submit"
								classname="rounded-sm mobile:text-base mobile:w-[180px] tablet:w-[230px] ipad:w-[230px] laptop:w-[250px] desktop:w-[250px] mobile:h-[40px] tablet:h-[40px] ipad:h-[40px] laptop:h-[50px] desktop:h-[55px]"
								isDisabled={isDisabled}
								isOpacity={isOpacity}
								handleButton={verifySubmit}
								text="Log In"
							/>
						</div>
						<div className="w-[100%] text-center mt-[30px] text-[#3F3F3F] mobile:text-sm tablet:text-sm ipad:text-base laptop:text-base desktop:text-base">
							I didn't receive code.{" "}
							<button
								type="button"
								className="text-[#3F3F3F] font-medium font-prompt ml-1"
							>
								<GradientText>Resend</GradientText>
							</button>
						</div>
						{/* <div className="w-[250px] text-center mt-8"><button type="button" className='text-[#3F3F3F] text-base font-normal font-prompt mb-12' onClick={handleClose}>Skip, Iâ€™ll confirm later.</button></div> */}
					</div>
				</Box>
			</Modal>
		</OxhainLogIn>
	);
};

export default LogIn;
