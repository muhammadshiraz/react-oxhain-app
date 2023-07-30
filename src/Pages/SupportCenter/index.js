import React from "react";
import OxhainBanner from "../../Components/Banner/Banner01";
import Search01 from "../../Components/Search/Search01";
import Title01 from "../../Components/Title/Title01";
import { OxhainSupportCenter } from "./SupportCenter.styled";

const SupportCenter = () => {
	return (
		<OxhainSupportCenter className="pt-20 pb-40">
			<OxhainBanner
				className="h-[300px]"
				breadcrumblink01="/news"
				breadcrumb01="Service"
				breadcrumblink02="/support-center"
				breadcrumb02="Support Center"
				title="Oxhain Support Center"
				userinput={
					<div className="mt-6 flex flex-col w-2/4 mx-auto">
						<Search01 placeholder="Search" className={"banner-input"} />
					</div>
				}
			/>

			<div className="self-service container">
				<Title01 className="block text-left my-9">Self-Service</Title01>

				<div className="section-divider flex flex-row flex-wrap lg:justify-between pb-7 gap-y-4 md:gap-y-0 text-xs md:text-base !font-light">
					<div className="flex flex-col w-4/12 lg:w-36 items-center mb-6">
						<div className="w-20 h-20 border rounded-full"></div>
						<span className="mt-3">Reset Password</span>
					</div>
					<div className="flex flex-col w-4/12 lg:w-36 items-center mb-6">
						<div className="w-20 h-20 border rounded-full"></div>
						<span className="mt-3">Reset Phone Number</span>
					</div>
					<div className="flex flex-col w-4/12 lg:w-36 items-center mb-6">
						<div className="w-20 h-20 border rounded-full"></div>
						<span className="mt-3">Reset 2FA</span>
					</div>
					<div className="flex flex-col w-4/12 lg:w-36 items-center mb-6">
						<div className="w-20 h-20 border rounded-full"></div>
						<span className="mt-3">Change Email Address</span>
					</div>
					<div className="flex flex-col w-4/12 lg:w-36 items-center mb-6">
						<div className="w-20 h-20 border rounded-full"></div>
						<span className="mt-3">Reset Google Authenticator</span>
					</div>
					<div className="flex flex-col w-4/12 lg:w-36 items-center mb-6">
						<div className="w-20 h-20 border rounded-full"></div>
						<span className="mt-3">Freeze Account</span>
					</div>
				</div>

				<Title01 className="block text-left my-9 text-xs md:text-4xl">FAQ</Title01>
				<div className="section-divider flex flex-row flex-wrap justify-between font-light pb-7 text-sm lg:text-base">
					<div className="flex flex-col w-full md:w-auto">
						<div className="flex flex-row mt-4 text-left">
							<span className="mr-3">i</span>
							<span>Account Functions</span>
						</div>
						<div className="flex flex-row mt-4 text-left">
							<span className="mr-3">i</span>
							<span>Crypto Deposit/Withdrawal</span>
						</div>
						<div className="flex flex-row mt-4 text-left">
							<span className="mr-3">i</span>
							<span>Finance</span>
						</div>
						<div className="flex flex-row mt-4 text-left">
							<span className="mr-3">i</span>
							<span>NFT</span>
						</div>
					</div>
					<div className="flex flex-col w-full md:w-auto">
						<div className="flex flex-row mt-4 text-left">
							<span className="mr-3">i</span>
							<span>Tutorial</span>
						</div>
						<div className="flex flex-row mt-4 text-left">
							<span className="mr-3">i</span>
							<span>Buy Crypto</span>
						</div>
						<div className="flex flex-row mt-4 text-left">
							<span className="mr-3">i</span>
							<span>API</span>
						</div>
						<div className="flex flex-row mt-4 text-left">
							<span className="mr-3">i</span>
							<span>VIP</span>
						</div>
					</div>
					<div className="flex flex-col w-full md:w-auto">
						<div className="flex flex-row mt-4 text-left">
							<span className="mr-3">i</span>
							<span>Oxhain Fan Token</span>
						</div>
						<div className="flex flex-row mt-4 text-left">
							<span className="mr-3">i</span>
							<span>Spot & Margin Trading</span>
						</div>
						<div className="flex flex-row mt-4 text-left">
							<span className="mr-3">i</span>
							<span>Security</span>
						</div>
					</div>
					<div className="flex flex-col w-full md:w-auto">
						<div className="flex flex-row mt-4 text-left">
							<span className="mr-3">i</span>
							<span>Oxhain Earn</span>
						</div>
						<div className="flex flex-row mt-4 text-left">
							<span className="mr-3">i</span>
							<span>Crypto Derivatives</span>
						</div>
						<div className="flex flex-row mt-4 text-left">
							<span className="mr-3">i</span>
							<span>Other Topics</span>
						</div>
					</div>
				</div>

				<Title01 className="block text-left my-9">Announcement</Title01>
				<div className="section-divider flex flex-row flex-wrap justify-between font-light pb-7 text-sm lg:text-base">
					<div className="flex flex-col w-full md:w-auto">
						<div className="flex flex-row mt-4">
							<span>i</span>
							<span>New Cryptocurrency Listing</span>
						</div>
						<div className="flex flex-row mt-4">
							<span>i</span>
							<span>Delisting</span>
						</div>
					</div>
					<div className="flex flex-col w-full md:w-auto">
						<div className="flex flex-row mt-4">
							<span>i</span>
							<span>Latest Oxhain News</span>
						</div>
						<div className="flex flex-row mt-4">
							<span>i</span>
							<span>Wallet Maintenance Updates</span>
						</div>
					</div>
					<div className="flex flex-col w-full md:w-auto">
						<div className="flex flex-row mt-4">
							<span>i</span>
							<span>Latest Activities</span>
						</div>
						<div className="flex flex-row mt-4">
							<span>i</span>
							<span>API Updates</span>
						</div>
					</div>
					<div className="flex flex-col w-full md:w-auto">
						<div className="flex flex-row mt-4">
							<span>i</span>
							<span>New Order Listings</span>
						</div>
						<div className="flex flex-row mt-4">
							<span>i</span>
							<span>Crypto Airdrop</span>
						</div>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row text-left mt-9 text-sm lg:text-base">
					<div className="flex flex-col flex-1">
						<Title01 className="block">Latest Articles</Title01>
						<p className="mt-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<p className="mt-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
							Ut aliquet tincidunt integer quis fermentum orci, montes, purus,
							aliquet.
						</p>
						<p className="mt-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<p className="mt-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
							Ut aliquet tincidunt integer quis fermentum orci, montes, purus,
							aliquet.
						</p>
						<p className="mt-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
					<div className="flex flex-col flex-1 mt-8 md-mt-0">
						<Title01 className="block text-left">Top Articles</Title01>
						<p className="mt-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<p className="mt-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<p className="mt-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<p className="mt-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
				</div>
			</div>
		</OxhainSupportCenter>
	);
};

export default SupportCenter;
