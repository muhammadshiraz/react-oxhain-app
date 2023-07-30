import React from "react";
import messageIco from '../../../../Assets/Icons/Dashboard/TabsPanel/Referrals/messageIco.svg';
import downloadIco from '../../../../Assets/Icons/Dashboard/TabsPanel/Referrals/downloadIco.svg';
import giftIco from '../../../../Assets/Icons/Dashboard/TabsPanel/Referrals/giftIco.svg';
import {
    DashboardControlSection,
} from '../../Dashboard.styled';
import TextField01 from "../../../../Components/Text field/TextField01";
import Button01 from "../../../../Components/Button/Button01";

const Referrals = () => {
    return (
        <DashboardControlSection className="flex flex-col w-full referrals-control-section py-10 font-prompt mb-16">
            <h3 className="text5 font-medium text-2xl text-center mt-8">Invite you friends to Oxhain. If they sign up, you and your <br /> friend will get free coin.</h3>
            <div className="flex flex-row items-center justify-center mt-16">
                <div className="flex flex-col items-center justify-center w-80">
                    <img src={messageIco} alt="Invite you friends to Oxhain. friend will get free coin. friend will get free coin" className="w-full h-40" />
                    <p className="text4 font-light text-sm text-center mt-5">Invite you friends to Oxhain. friend will get free coin. friend will get free coin</p>
                </div>
                <div className="flex flex-col items-center justify-center w-80">
                    <img src={downloadIco} alt="Invite you friends to Oxhain. friend will get free coin. friend will get free coin" className="w-full h-40" />
                    <p className="text4 font-light text-sm text-center mt-5">Invite you friends to Oxhain. friend will get free coin. friend will get free coin</p>
                </div>
                <div className="flex flex-col items-center justify-center w-80">
                    <img src={giftIco} alt="Invite you friends to Oxhain. friend will get free coin. friend will get free coin" className="w-full h-40" />
                    <p className="text4 font-light text-sm text-center mt-5">Invite you friends to Oxhain. friend will get free coin. friend will get free coin</p>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center mt-24 lg:mx-44 xl:mx-48 2xl:mx-56">
                <h3 className="text5 font-medium text-3xl text-left">Invit your friends</h3>
                <p className="text4 font-light text-sm text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non blandit netus dui odio ultrices lorem.</p>
                <div className="flex flex-row items-center justify-center mt-8 w-full">
                    <TextField01 placeholder="Email / Phone Number" />
                    <div className="w-[230px]"><Button01 text="Invite" ml="3" x="275" y="65" /></div>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center mt-24 lg:mx-44 xl:mx-48 2xl:mx-56">
                <h3 className="text5 font-medium text-3xl text-left">Share the referral link</h3>
                <p className="text4 font-light text-sm text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non blandit netus dui odio ultrices lorem.</p>
                <div className="flex flex-row items-center justify-center mt-8 w-full">
                    <TextField01 placeholder="Lorem ipsum3451’! sit amet/consectetur123 rv4578" />
                    <div className="w-[230px]"><Button01 text="Copy Link" ml="3" x="275" y="65" /></div>
                </div>
            </div>
        </DashboardControlSection>
    );
};

export default Referrals;