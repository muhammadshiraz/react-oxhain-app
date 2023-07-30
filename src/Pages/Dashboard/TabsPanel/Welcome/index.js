import React, { useEffect } from "react";
import axios from "axios";
import WelcomeBg from "../../../../Assets/Images/Dashboard/TabsPanel/Welcome/welcome-bg.jpg";
import UserPic from "../../../../Assets/Images/Dashboard/TabsPanel/Welcome/user-pic.png";
import CloudBg from "../../../../Assets/Images/Dashboard/TabsPanel/Welcome/cloud-bg.png";
import NavBar from "../../Navbar";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Select01 from "../../../../Components/Select/Select01";
import DoughnutBalChart from "./Charts/AccountBalance/DoughnutBalChart";
import DoughnutChart01 from "./Charts/Rewards/DoughnutChart01";
import DoughnutChart02 from "./Charts/Rewards/DoughnutChart02";
import DoughnutChart03 from "./Charts/Rewards/DoughnutChart03";
import LineChart from "./Charts/TotalActivities/LineChart";
import OrderTable from "./OrderTable";
import FacebookIco from "../../../../Assets/Icons/SocialMedia/sm-Icons-1/Facebook.svg";
import TwitterIco from "../../../../Assets/Icons/SocialMedia/sm-Icons-1/Twitter.svg";
import InstagramIco from "../../../../Assets/Icons/SocialMedia/sm-Icons-1/Instagram.svg";
import MediumIco from "../../../../Assets/Icons/SocialMedia/sm-Icons-1/Medium.svg";
import LinkedInIco from "../../../../Assets/Icons/SocialMedia/sm-Icons-1/LinkedIn.svg";
import { ReactComponent as RewardsDots } from "../../../../Assets/Images/Dashboard/TabsPanel/Welcome/rewards-dots.svg";
import {
	DashboardControlSection,
	DashBox,
	DashBoxText,
	DashBoxParagraph,
	DashTextField,
	DashVisaCard,
	RegularUser,
	DashMinSubText,
} from "../../Dashboard.styled";
import { useSelector } from "react-redux";
import Select04 from "../../../../Components/Select/Select04";
import QRCode from "react-qr-code";
import Swal from "sweetalert2";
import Moment from 'moment';

const steps = [
	{
		label: "Kimlik Doğrulama",
		description: "",
	},
	{
		label: "2FA",
		description: "",
	},
	{
		label: "Oltalama Engelleme Kodu",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		label: "Çekim Beyaz Listesi",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
];

const Welcome = ({ title }) => {
	const [userInfo, setUserInfo] = React.useState({
		name: "",
		surname: "",
		email: "",
		country_code: "",
		phone_number: "",
	});

	// Deposit
	const [depositDropdownItems, setDepositDropdownItems] = React.useState([]);
	const [notifications, setNotifications] = React.useState([]);
	const [depositCoinAddress, setDepositCoinAddress] = React.useState([]);
	const [depositCoinAmount, setDepositCoinAmount] = React.useState([]);

	// Withdraw
	const [withdrawDropdownItems, setWithdrawDropdownItems] = React.useState([]);
	const [withdrawCoinAddress, setWithdrawCoinAddress] = React.useState("0");
	const [withdrawBalance, setWithdrawBalance] = React.useState("0");
	const [withdrawWalletPrice, setWithdrawWalletPrice] = React.useState(0);
	const [withdrawForm, setWithdrawForm] = React.useState({
		address: "",
		amount: "",
	});

	const [wallet, setWallet] = React.useState([
		{ address: "", balance: "", symbolName: "" },
	]);

	const [activeStep, setActiveStep] = React.useState("3");
	const [skipped, setSkipped] = React.useState(new Set());

	const [isDepActive, setDepActive] = React.useState("0");
	const [isWdActive, setWdActive] = React.useState("");

	const withdrawFormChange = (prop, value) => {
		setWithdrawForm({ ...withdrawForm, [prop]: value });
	};

	function handleDepActiveButtons(id) {
		setDepActive(id);
	}

	function handleWdActiveButtons(id) {
		setWdActive(id);
	}

	const isStepOptional = (step) => {
		return step === 1;
	};

	const isStepSkipped = (step) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleSkip = () => {
		if (!isStepOptional(activeStep)) {
			// You probably want to guard against something like this,
			// it should never occur unless someone's actively trying to break something.
			throw new Error("You can't skip a step that isn't optional.");
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values());
			newSkipped.add(activeStep);
			return newSkipped;
		});
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	useEffect(() => {
		getNotifications();
		getUserInfo();

		initwithdrawWalletPrice();
		initWallet();
	}, []);

	// Changed withdraw/coin on the dropdown
	const handleWithdrawPairDropdown = (address) => {
		const targetCoin = wallet.find((coin) => coin.address === address);

		const balance = targetCoin.balance;
		const symbolOne = targetCoin.symbolName.split("/")[0];

		setWithdrawCoinAddress(address);
		setWithdrawBalance(`${Number(balance).toFixed(2)} ${symbolOne}`);
		//withdrawFormChange('address', address);
	};

	// Changed withdraw/coin on the dropdown
	const handleDepositPairDropdown = (address) => {
		const targetCoin = wallet.find((coin) => coin.address === address);

		const balance = targetCoin.balance;
		const symbolOne = targetCoin.symbolName.split("/")[0];

		setDepositCoinAmount(`${Number(balance).toFixed(2)} ${symbolOne}`);
		setDepositCoinAddress(address);
	};

	const getUserInfo = () => {
		const requestObj = {
			api_key:
				"28b4b56939b14fdf30bcefeb3e935193b0f07ce22523ab5d32afcf3f4151edc0",
			user_id: localStorage.getItem("user_id"),
		};

		axios
			.post("http://18.118.138.191:9595/getUserInfo", requestObj)
			.then((res) => {
				if (res.data.status === "success") {
					setUserInfo(res.data.data);
				}
			});
	};

	const initwithdrawWalletPrice = () => {
		const requestObj = {
			api_key:
				"28b4b56939b14fdf30bcefeb3e935193b0f07ce22523ab5d32afcf3f4151edc0",
			user_id: localStorage.getItem("user_id"),
		};

		axios
			.post("http://18.118.138.191:9595/getUSDTBalance", requestObj)
			.then((res) => {
				if (res.data.status === "success") {
					console.log(res.data);
					const price = res.data.data;
					setWithdrawWalletPrice(price);
				}
			});
	};

	const initWallet = () => {
		const requestObj = {
			api_key:
				"28b4b56939b14fdf30bcefeb3e935193b0f07ce22523ab5d32afcf3f4151edc0",
			user_id: localStorage.getItem("user_id"),
		};

		axios
			.post("http://18.118.138.191:9595/getWallet", requestObj)
			.then((res) => {
				if (res.data.status === "success") {
					setWallet(res.data.data);

					const coins = res.data.data.map((coin) => {
						return {
							label: coin.symbolName.split("/")[0],
							value: coin.address,
						};
					});

					setWithdrawDropdownItems(coins);
					setDepositDropdownItems(coins);
				}
			});
	};

	const submitWithdrawHandle = () => {
		const requestObj = {
			api_key:
				"28b4b56939b14fdf30bcefeb3e935193b0f07ce22523ab5d32afcf3f4151edc0",
			user_id: localStorage.getItem("user_id"),
			address: withdrawCoinAddress,
			amount: withdrawForm.amount,
			to: withdrawForm.address,
		};

		axios
			.post("http://18.118.138.191:9595/withdraw", requestObj)
			.then((res) => {
				if (res.data.status === "success") {
					Swal.fire(
						"Success",
						"Your withdrawal request has been submitted.",
						"success"
					);
				} else {
					Swal.fire(
						"Error",
						"An error occurred as a result of shooting, please refresh the page.",
						"error"
					);
				}
				console.log(res.data);
			});
	};

	function getNotifications() {
		const userObject = {
			api_key:
				"28b4b56939b14fdf30bcefeb3e935193b0f07ce22523ab5d32afcf3f4151edc0",
			user_id: localStorage.getItem("user_id"),
		};

		axios
			.post("http://18.118.138.191:9595/getNotification", userObject)
			.then((res) => {
				if (res.data.status === "success") {
					setNotifications(res.data.data);
				}
				if (res.data.status === "fail") {
					setNotifications("no_notification");
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

    Moment.locale('en');
	if (notifications != "no_notification") {
		var notificationArray = [];
		for (let i = 0; i < notifications.length; i++) {
			if (notifications[i].messageMessage.length > 100) {
				notifications[i].messageMessage =
					notifications[i].messageMessage.slice(0, 100) + "...";
			}

			notificationArray.push(
				<li className="font-prompt font-normal text-sm pt-5 pb-6 mb-6 relative boder-bottom-line truncate overflow-hidden whitespace-pre-line">
					<Link className="flex flex-col" to="/dashboard">
						<DashMinSubText className="text-left">
							{notifications[i].messageTitle}
						</DashMinSubText>
						<DashBoxParagraph className="mb-2">
							{notifications[i].messageMessage}
						</DashBoxParagraph>
						<DashMinSubText className="text-right">
							{Moment(notifications[i].createdAt).format("h:MM DD/MM")}
						</DashMinSubText>
					</Link>
				</li>
			);
		}
	}

	return (
		<DashboardControlSection
			title={title}
			className="flex flex-col w-full dashboard-control-section"
		>
			{/* <NavBar title="Dashboard" /> */}
			<div className="flex flex-col mt-[30px] md:mx-5 lg:mx-8 xl:mx-8 2xl:mx-12">
				<div
					className="flex flex-col justify-center items-start text-left bg-no-repeat bg-cover h-[453px] mb-[30px]"
					style={{
						backgroundImage: `url(${WelcomeBg})`,
					}}
				>
					<h2 className="text-[#3F3F3F] font-prompt font-medium text-[40px] ml-20">
						Welcome to Oxhain!
					</h2>
				</div>
				<div className="flex flex-row justify-between items-center mb-[15px] w-full h-fit">
					<DashBox className="md:w-[65%] lg:w-[65%] xl:w-[55%] 2xl:w-[45%] h-min flex flex-row justify-center items-center py-[42px] xl:pl-2 xl:pr-2 2xl:pr-16 rounded-sm mr-[15px]">
						<img src={UserPic} alt="User" className="w-[130px] h-max" />
						<div className="flex flex-col justify-center items-start ml-8">
							<div className="flex flex-col justify-center items-start mb-5">
								<DashBoxText className="font-prompt font-medium text-base mb-2">
									Anonymous User
								</DashBoxText>
								<DashBoxText className="font-prompt font-normal	text-base mb-2">
									User ID: <span className="font-medium">473311343</span>
								</DashBoxText>
								<DashBoxText className="font-prompt font-normal	text-base mb-2">
									IP: <span className="font-medium">88.228.201.39</span>
								</DashBoxText>
								<DashBoxText className="font-prompt font-normal text-base">
									Last login time:{" "}
									<span className="font-medium">2022-07-07</span>
								</DashBoxText>
							</div>
							<RegularUser
								type="button"
								className="font-prompt font-normal text-base text-[#4949EE] dash-btn-underline relative pb-0.5"
							>
								Regular User
							</RegularUser>
						</div>
					</DashBox>
					<DashBox className="w-full h-full min-h-[250px] flex flex-col justify-start items-start py-[42px] xl:px-5 2xl:px-10 rounded-sm ml-[15px]">
						<div className="flex flex-row justify-start items-start boder-bottom-line-01 relative w-full pb-2.5">
							<DashBoxText className="font-prompt font-medium text-xl">
								Account Security
							</DashBoxText>
							<div className="flex flex-row justify-center items-center ml-5 accSStepsCount">
								<div className="flex flex-row justify-center items-center">
									<p className="font-prompt font-medium text-xl active">
										<span className="active">2</span>/4
									</p>
								</div>
								<div className="flex flex-row justify-center items-center ml-5">
									<div className="w-[20px] h-[2px] active"></div>
									<div className="w-[20px] h-[2px] ml-[7px] active"></div>
									<div className="w-[20px] h-[2px] ml-[7px] inactive"></div>
									<div className="w-[20px] h-[2px] ml-[7px] inactive"></div>
								</div>
							</div>
						</div>
						<div className="flex flex-col w-full mt-8">
							<Box sx={{ width: "100%" }}>
								<Stepper activeStep={activeStep} orientation="horizontal">
									{steps.map((step, index) => {
										return (
											<Step key={step.label} className="relative">
												<StepLabel>{step.label}</StepLabel>
												<p className="text4 font-prompt font-light text-xs absolute left-10 top-8 text-left">
													{step.description}
												</p>
											</Step>
										);
									})}
								</Stepper>
							</Box>
						</div>
					</DashBox>
				</div>
				<div className="flex flex-row justify-between items-center my-[15px] w-full h-fit">
					<DashBox className="md:w-[65%] lg:w-[60%] xl:w-[75%] 2xl:w-[78%] h-min flex flex-row justify-center py-[78px] rounded-sm mr-[15px] md:px-3.5 lg:px-3.5 xl:px-6 2xl:px-6">
						<div className="flex flex-col justify-start items-center w-full pt-16">
							<img src={UserPic} alt="User" className="w-[90px] h-max" />
							<button
								type="button"
								className="flex flex-row items-center justify-center micScottBtn mt-3.5"
							>
								<DashBoxText className="font-prompt font-medium text-xl">
									{userInfo.name} {userInfo.surname}
								</DashBoxText>
								<svg
									width="12"
									height="5"
									viewBox="0 0 12 5"
									className="ml-2"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M12 0H0L5.7931 5L12 0Z" />
								</svg>
							</button>
							<p className="flex flex-row items-center text-sm justify-center font-normal uppercase dashYourBal mt-5">
								Your BALANCE
							</p>
							<p className="font-prompt font-medium text-2xl micScottPrice mt-5">
								{Number(withdrawWalletPrice).toFixed(2)} Tether
							</p>
						</div>

						{/* Deposit section */}
						<div className="flex flex-col w-full relative boder-left-line pl-7">
							<DashBoxText className="font-prompt font-medium text-xl mb-2 dash-text-underline pb-2.5 text-left">
								Deposit
							</DashBoxText>
							<div className="flex flex-col">
								<span className="absolute top-1 right-2 text-sm font-semibold text-black">
									{depositCoinAmount}
								</span>

								<Box className="flex flex-col mt-5" component="form">
									{/* Show qr here */}
									<Select04
										className=""
										items={depositDropdownItems}
										onChange={(address) => handleDepositPairDropdown(address)}
									/>

									<div className="flex flex-col text-sm mt-4">
										<span className="text-xs break-words w-8/12 mx-auto">
											{depositCoinAddress}
										</span>
										<QRCode
											value={depositCoinAddress}
											className="mx-auto scale-75"
										/>
									</div>
								</Box>
							</div>
						</div>

						{/* Withdraw section */}
						<div className="flex flex-col w-full relative boder-left-line pl-7 ml-7">
							<DashBoxText className="font-prompt font-medium text-xl mb-2 dash-text-underline pb-2.5 text-left">
								Withdraw
							</DashBoxText>
							<Box className="flex flex-col" component="form">
								<div className="flex flex-col">
									{/*                                     
                                    <DashBoxText className="font-prompt font-normal text-xs mb-2 text-left">Choose Summary</DashBoxText>
                                    <div className='flex flex-col chooseSumBtns'>
                                        <div className='flex flex-row'>
                                            <button type='button' onClick={(e) => handleWdActiveButtons(e.target.id)} id="0" className={`${isWdActive === "0" ? "active" : ""} font-prompt font-normal text-base w-full border-[1px] rounded-sm mr-[4px] mb-[4px] py-1.5 text-[#000000]`}>$ 50</button>
                                            <button type='button' onClick={(e) => handleWdActiveButtons(e.target.id)} id="1" className={`${isWdActive === "1" ? "active" : ""} font-prompt font-normal text-base w-full border-[1px] rounded-sm ml-[4px] mb-[4px] py-1.5 text-[#000000]`}>$ 30</button>
                                        </div>
                                        <div className='flex flex-row'>
                                            <button type='button' onClick={(e) => handleWdActiveButtons(e.target.id)} id="2" className={`${isWdActive === "2" ? "active" : ""} font-prompt font-normal text-base w-full border-[1px] rounded-sm mr-[4px] mt-[4px] py-1.5 text-[#000000]`}>$ 20</button>
                                            <button type='button' onClick={(e) => handleWdActiveButtons(e.target.id)} id="3" className={`${isWdActive === "3" ? "active" : ""} font-prompt font-normal text-base w-full border-[1px] rounded-sm ml-[4px] mt-[4px] py-1.5 text-[#000000]`}>$ 10</button>
                                        </div>
                                    </div> */}
								</div>
								<div className="flex flex-col">
									{/* Withdraw form */}
									<div className="flex flex-col">
										<Box className="flex flex-col mt-5" component="form">
											<div className="flex flex-col mb-3.5">
												<Select04
													className=""
													items={withdrawDropdownItems}
													onChange={(value) =>
														handleWithdrawPairDropdown(value)
													}
												/>

												<DashBoxText className="font-prompt font-normal text-xs mt-2 text-left">
													Address
												</DashBoxText>

												<div className="relative">
													<DashTextField
														type="text"
														className="w-full h-[33px] rounded-sm pl-2 pr-24 text-sm"
														onChange={(e) =>
															withdrawFormChange("address", e.target.value)
														}
													/>
												</div>

												<DashBoxText className="font-prompt font-normal text-xs mt-2 text-left">
													Amount
												</DashBoxText>
												<DashTextField
													type="text"
													className="w-full h-[33px] rounded-sm px-2 text-sm"
													onChange={(e) =>
														withdrawFormChange("amount", e.target.value)
													}
												/>
											</div>
										</Box>
									</div>

									<span className="text-right text-xs font-semibold text-black mb-4">
										{withdrawBalance}
									</span>

									<div className="flex flex-row">
										<button
											onClick={() => submitWithdrawHandle()}
											type="button"
											className="w-full h-[33px] rounded-sm bg-[#4949EE] text-[#FFFFFF] text-xs font-prompt font-normal mr-1"
										>
											Sent a request
										</button>
										<button
											type="button"
											className="capitalize w-full h-[33px] rounded-sm bg-[#3F3F3F] text-[#FFFFFF] text-xs font-prompt font-normal ml-1"
										>
											Cancel
										</button>
									</div>
								</div>
							</Box>
						</div>
					</DashBox>
					<DashBox className="w-[450px] h-min flex flex-col justify-start items-start py-[32px] pl-6 pr-12 rounded-sm ml-[15px]">
						<DashBoxText className="flex flex-row items-center w-full justify-between font-prompt font-medium text-xl mb-2 dash-text-underline pb-2.5 text-left">
							Announcements{" "}
							<svg width="9" height="15" viewBox="0 0 9 15" fill="none">
								<path
									d="M1 1L7 8L1 14"
									stroke="black"
									stroke-opacity="0.5"
									stroke-width="2"
									stroke-linecap="round"
								/>
							</svg>
						</DashBoxText>
						<div className="flex flex-col w-full">
							<ul className="list-none text-left overflow-y-auto h-96">
								{notificationArray}
							</ul>
						</div>
					</DashBox>
				</div>
				<div className="flex flex-row justify-between items-center my-[15px] w-full h-fit">
					<DashBox className="md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[45%] h-full flex flex-col justify-center py-[42px] rounded-sm mr-[15px] px-8">
						<div className="flex flex-row justify-between w-full mb-3">
							<DashBoxText className="font-prompt font-medium text-xl text-left w-full">
								Account Balance
							</DashBoxText>
							<div className="w-full flex flex-col items-end">
								<Select01
									items={[
										{ value: "This Year", id: 1 },
										{ value: "This Quarter", id: 2 },
										{ value: "This Month", id: 3 },
									]}
								/>
							</div>
						</div>
						<div className="flex flex-row justify-center">
							<DoughnutBalChart />
						</div>
					</DashBox>
					<DashBox className="w-full h-[526px] flex flex-col justify-start py-[42px] rounded-sm ml-[15px] px-8">
						<div className="flex flex-row justify-between w-full">
							<DashBoxText className="font-prompt font-medium text-xl text-left">
								Total Activities
							</DashBoxText>
							<Select01
								items={[
									{ value: "This Year", id: 1 },
									{ value: "This Quarter", id: 2 },
									{ value: "This Month", id: 3 },
								]}
							/>
						</div>
						<div className="flex flex-row justify-center w-full mt-8">
							<LineChart />
						</div>
					</DashBox>
				</div>
				<div className="flex flex-col justify-between items-center my-[15px] w-full h-full">
					<DashBox className="flex flex-col justify-center py-[42px] rounded-sm w-full px-12 h-full">
						<OrderTable />
					</DashBox>
				</div>
				<div className="flex flex-row justify-between items-center mt-[15px] mb-[30px] w-full h-full">
					<DashBox
						className="bg-no-repeat bg-contain bg-left-bottom rewards md:w-[78%] lg:w-[78%] xl:w-[78%] 2xl:w-[70%] h-max flex flex-col justify-center items-start py-[42px] px-8 rounded-sm mr-[15px]"
						style={{
							backgroundImage: `url(${CloudBg})`,
						}}
					>
						<div className="flex flex-row justify-between w-full mb-3">
							<DashBoxText className="font-prompt font-medium text-xl text-left">
								Rewards
							</DashBoxText>
							<Select01
								items={[
									{ value: "Other Rewards", id: 1 },
									{ value: "This Quarter", id: 2 },
									{ value: "This Month", id: 3 },
								]}
							/>
						</div>
						<div className="flex flex-row justify-around items-center w-full mt-8 relative">
							<div className="flex flex-col justify-center items-center">
								<DoughnutChart01 />
							</div>
							<div className="flex flex-col justify-center items-center mb-20 svgFill1">
								<RewardsDots />
							</div>
							<div className="flex flex-col justify-center items-center">
								<DoughnutChart02 />
							</div>
							<div className="flex flex-col justify-center items-center mb-20 svgFill1">
								<RewardsDots />
							</div>
							<div className="flex flex-col justify-center items-center">
								<DoughnutChart03 />
							</div>
						</div>
					</DashBox>
					<DashBox className="socialMedia w-max md:h-[492.02px] lg:h-[492.02px] xl:h-[492.02px] 2xl:h-[515px] flex flex-col justify-start items-start py-[42px] px-8 rounded-sm ml-[15px]">
						<DashBoxText className="font-prompt font-medium text-xl text-left">
							Social Media
						</DashBoxText>
						<DashBoxParagraph className="font-prompt font-normal text-base mt-3 text-left">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit!
						</DashBoxParagraph>
						<div className="flex flex-col w-[300px] justify-center items-center mx-auto mt-16">
							<div className="flex flex-row w-full justify-between items-center">
								<button
									className="flex flex-col justify-center items-center"
									onClick={() => window.open("https://www.facebook.com")}
								>
									<img src={FacebookIco} alt="Facebook" />
									<DashBoxParagraph className="font-prompt font-normal text-base">
										Facebook
									</DashBoxParagraph>
								</button>
								<button
									className="flex flex-col justify-center items-center"
									onClick={() => window.open("https://www.twitter.com")}
								>
									<img src={TwitterIco} alt="Twitter" />
									<DashBoxParagraph className="font-prompt font-normal text-base">
										Twitter
									</DashBoxParagraph>
								</button>
								<button
									className="flex flex-col justify-center items-center"
									onClick={() => window.open("https://www.instagram.com")}
								>
									<img src={InstagramIco} alt="Instagram" />
									<DashBoxParagraph className="font-prompt font-normal text-base">
										Instagram
									</DashBoxParagraph>
								</button>
							</div>
							<div className="flex flex-row w-full justify-evenly items-center mt-12">
								<button
									className="flex flex-col justify-center items-center"
									onClick={() => window.open("https://www.medium.com")}
								>
									<img src={MediumIco} alt="Medium" />
									<DashBoxParagraph className="font-prompt font-normal text-base">
										Medium
									</DashBoxParagraph>
								</button>
								<button
									className="flex flex-col justify-center items-center"
									onClick={() => window.open("https://www.linkedin.com")}
								>
									<img src={LinkedInIco} alt="LinkedIn" />
									<DashBoxParagraph className="font-prompt font-normal text-base">
										Linkedin
									</DashBoxParagraph>
								</button>
							</div>
						</div>
					</DashBox>
				</div>
			</div>
		</DashboardControlSection>
	);
};

export default Welcome;
