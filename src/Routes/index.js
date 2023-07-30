import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Markets from "../Pages/Markets";
import Spot from "../Pages/Spot";
import Derivetaives from "../Pages/Derivetaives";
import CopyTrading from "../Pages/Copy Trading";
import BasicTrade from "../Pages/BasicTrade";
import JoinUs from "../Pages/Join Us";
import AboutUs from "../Pages/About Us";
import SignUp from "../Pages/Sign Up";
import LogIn from "../Pages/Log In";
import ResetPassword from "../Pages/Reset Password";
import CreateNewPassword from "../Pages/Create New Password";
import MediaKit from "../Pages/MediaKit";
import TechnicalSupport from "../Pages/TechnicalSupport";
import Whistleblower from "../Pages/Whistleblower";
import News from "../Pages/News";
import Affiliate from "../Pages/Affiliate";
import Academy from "../Pages/Academy";
import Foundation from "../Pages/Foundation";
import Giftiing from "../Pages/Gifting";
import Launchpad from "../Pages/Launchpad";
import Terms from "../Pages/Terms";
import Privacy from "../Pages/Privacy";
import Risk from "../Pages/risk-statement";
import Special from "../Pages/special-treatment";
import AntiMoney from "../Pages/anti-money";
import TradingRules from "../Pages/trading-rules";
import Dashboard from "../Pages/Dashboard";
import Welcome from "../Pages/Dashboard/TabsPanel/Welcome";
import MyProfile from "../Pages/Dashboard/TabsPanel/MyProfile";
import Security from "../Pages/Dashboard/TabsPanel/Security";
import Referrals from "../Pages/Dashboard/TabsPanel/Referrals";
import APIManagement from "../Pages/Dashboard/TabsPanel/APIManagement";
import Settings from "../Pages/Dashboard/TabsPanel/Settings";
import AdvancedTrade from "../Pages/AdvancedTrade";
import FixedTrade from "../Pages/FixedTrade";
import SupportCenter from "../Pages/SupportCenter";
import SubmitRequest from "../Pages/SubmitRequest";
import RequestForm from "../Pages/RequestForm";
import IdentityVerificationCompleted from "../Pages/IdentityVerificationCompleted";
import PlatformSecurity from "../Pages/PlatformSecurity";
import Virtual from "../Pages/Virtual";
import SupportCenterBlog from "../Pages/SupportCenterBlog";
import ServiceFaq from "../Pages/ServiceFaq";
import ServiceVip from "../Pages/ServiceVip";
import P2PTradingServices from "../Pages/P2PTradingServices";

const Routing = () => (
	<Routes>
		<Route exact path="/" element={<Home />} />
		<Route exact path="/sign-up" element={<SignUp />} />
		<Route exact path="/login" element={<LogIn />} />
		<Route exact path="/reset-password" element={<ResetPassword />} />
		<Route exact path="/create-new-password" element={<CreateNewPassword />} />
		<Route exact path="/markets" element={<Markets />} />
		<Route exact path="/spot" element={<Spot />} />
		<Route exact path="/derivetaives" element={<Derivetaives />} />
		<Route exact path="/copy-trading" element={<CopyTrading />} />
		{/* Start Trade Pages */}
		<Route exact path="/basic-trade/:pair" element={<BasicTrade />} />
		<Route exact path="/advanced-trade" element={<AdvancedTrade />} />
		<Route exact path="/fixed-trade" element={<FixedTrade />} />
		{/* End Trade Pages */}
		<Route exact path="/join-us" element={<JoinUs />} />
		<Route exact path="/about-us" element={<AboutUs />} />
		<Route exact path="/media-kit" element={<MediaKit />} />
		<Route exact path="/technical-support" element={<TechnicalSupport />} />
		<Route exact path="/whistleblower-contact" element={<Whistleblower />} />
		<Route exact path="/news" element={<News />} />
		<Route exact path="/affiliate" element={<Affiliate />} />
		<Route exact path="/academy" element={<Academy />} />
		<Route exact path="/foundation" element={<Foundation />} />
		<Route exact path="/gifting" element={<Giftiing />} />
		<Route exact path="/launchpad" element={<Launchpad />} />

		{/* Footer Legal / Pages */}
		<Route exact path="/terms" element={<Terms />} />
		<Route exact path="/privacy" element={<Privacy />} />
		<Route exact path="/risk" element={<Risk />} />
		<Route exact path="/special" element={<Special />} />
		<Route exact path="/anti-money" element={<AntiMoney />} />
		<Route exact path="/trading-rules" element={<TradingRules />} />
	
		{/* Footer Services / Pages */}
		<Route exact path="/support-center" element={<SupportCenter />} />
		<Route exact path="/submit-request" element={<SubmitRequest />} />
		<Route exact path="/request-form" element={<RequestForm />} />
		<Route exact path="/identity-verification/completed" element={<IdentityVerificationCompleted />} />
		<Route exact path="/platform-security" element={<PlatformSecurity />} />
		<Route exact path="/support-center/blog" element={<SupportCenterBlog />} />
		<Route exact path="/service/faq" element={<ServiceFaq />} />
		<Route exact path="/service/vip" element={<ServiceVip />} />
		<Route exact path="/service/p2p-trading-services" element={<P2PTradingServices />} />
		{/* Dashboard Routes */}
		<Route exact path="/dashboard" element={<Welcome />} />
		<Route exact path="/dashboard/my-profile" element={<MyProfile />} />
		<Route exact path="/dashboard/security" element={<Security />} />
		<Route exact path="/dashboard/referrals" element={<Referrals />} />
		<Route exact path="/dashboard/api-management" element={<APIManagement />} />
		<Route exact path="/dashboard/settings" element={<Settings />} />

		{/* Virtual simulate page */}
		<Route exact path="/virtual" element={<Virtual />} />
	</Routes>
);

export default Routing;
