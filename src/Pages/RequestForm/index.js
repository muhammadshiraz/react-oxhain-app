import React from "react";
import Breadcrumb01 from "../../Components/Breadcrumb/Breadcrumb01";
import Button02 from "../../Components/Button/Button02";
import Title01 from "../../Components/Title/Title01";
import { OxhainReqestForm, OxhainSubmitRequest } from "./RequestForm.styled";

const RequestForm = () => {
	return (
		<OxhainReqestForm className="pt-40 pb-20">
			<div className="container mx-auto">
				<Breadcrumb01
					label1="Service"
					label2="Request Form"
					link1="/services"
					link2="/request-form"
				/>

				<div className="form flex flex-col md:w-[560px] mx-auto">
					<Title01 className="block text-left">Request Form</Title01>

					<div className="flex flex-col mt-10 w-full items-start">
						<span className="text-sm">Current Password</span>
						<input
							type="password"
							className="w-full h-11 mt-2 px-2 text-xl rounded-md"
							/>
					</div>

					<div className="flex flex-col mt-5 w-full items-start">
						<span className="text-sm">New Password</span>
						<input
							type="password"
							className="w-full h-11 mt-2 px-2 text-xl rounded-md"
						/>
					</div>

					<div className="flex flex-col mt-5 w-full items-start">
						<span className="text-sm">Re-enter New Password</span>
						<input
							type="password"
							className="w-full h-11 mt-2 px-2 text-xl rounded-md"
						/>
					</div>

					<Button02
						skew={false}
						x={100}
						y={44}
						buttonClass="mt-9 mr-6 background54"
					>
						<span className="font-poppins !font-medium !text-white text-sm">
							Next
						</span>
					</Button02>
				</div>
			</div>
		</OxhainReqestForm>
	);
};

export default RequestForm;
