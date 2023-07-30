import React from "react";
import Button02 from "../../Components/Button/Button02";
import Title01 from "../../Components/Title/Title01";
import { OxhainIdentityVerificationCompleted } from "./IdentityVerificationCompleted.styled";
import SuccessImage from "../../Assets/Images/IdentityVerificationCompleted/success.png";
import Breadcrumb01 from "../../Components/Breadcrumb/Breadcrumb01";

const IdentityVerificationCompleted = () => {
	return (
		<OxhainIdentityVerificationCompleted className="pt-40 pb-20">
			<div className="container mx-auto">
				<Breadcrumb01
					label1="Service"
					label2="Request Form"
					link1="/services"
					link2="/request-form"
					label3="Identity Verification"
					link3="/identity-verification"
				/>

				<div className="form flex flex-col w-[300px] md:w-[650px] mx-auto">
					<img
						src={SuccessImage}
						alt=""
						className="w-[150px] h-[150px] mx-auto"
					/>
					<Title01 className="block text-center mt-8 mb-5">
						Identity Information is Completed!
					</Title01>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id
						malesuada cursus sed nibh volutpat massa consectetur.{" "}
					</p>

					<Button02
						skew={true}
						x={70}
						y={40}
						buttonClass="mt-9 mx-auto background54"
					>
						<span className="font-poppins !font-medium !text-white text-xs">
							Back to home
						</span>
					</Button02>
				</div>
			</div>
		</OxhainIdentityVerificationCompleted>
	);
};

export default IdentityVerificationCompleted;
