import React from "react";
import EditProfile from "./ProfileTabsPanel/EditProfile";
import Notifications from "./ProfileTabsPanel/Notifications";
import Password from "./ProfileTabsPanel/Password";
import Edit from '../../../../Assets/Icons/Dashboard/TabsPanel/EditProfile/Edit.png';
import Notification from '../../../../Assets/Icons/Dashboard/TabsPanel/EditProfile/Notification.png';
import ChoosePlan from '../../../../Assets/Icons/Dashboard/TabsPanel/EditProfile/Choose-Plan.png';
import PasswordIco from '../../../../Assets/Icons/Dashboard/TabsPanel/EditProfile/Password.png';
import {ReactComponent as RightArrow} from '../../../../Assets/Icons/Dashboard/TabsPanel/EditProfile/Right-Arrow.svg';
import {
    DashboardControlSection,
} from '../../Dashboard.styled';

const MyProfile = () => {
    const [isActive, setActive] = React.useState("0");
    
    function handleTabButtons(id) {
        setActive(id);
    }

    function handleTabsChange() {
        if (isActive === "0") return <EditProfile />
        if (isActive === "1") return <Notifications />
        if (isActive === "3") return <Password />
    }

    return (
        <DashboardControlSection className="flex flex-row w-full dashboard-control-section">
            <div className="flex flex-col my-profile-tabs-section relative boder-right-line-03 lg:w-[322px] xl:w-[322px] 2xl:w-[350px] pt-12">
                <button onClick={(e) => handleTabButtons(e.target.id)} id="0" className={`${isActive === "0" ? "active font-semibold" : "font-medium"} flex flex-row justify-start items-center pl-8 pb-3 relative boder-bottom-line-03 font-prompt sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-xl`}>
                    <img src={Edit} alt="Edit" className="mr-7" />
                    Edit Profile
                    {isActive === "0" ? (
                        <RightArrow className="ml-7" />
                    ) : (
                        ''
                    )}
                </button>
                <button onClick={(e) => handleTabButtons(e.target.id)} id="1" className={`${isActive === "1" ? "active font-semibold" : "font-medium"} flex flex-row justify-start items-center pl-8 py-3 relative boder-bottom-line-03 font-prompt sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-xl`}>
                    <img src={Notification} alt="Notification" className="mr-7" />
                    Notifications
                    {isActive === "1" ? (
                        <RightArrow className="ml-7" />
                    ) : (
                        ''
                    )}
                </button>
                <button onClick={(e) => handleTabButtons(e.target.id)} id="2" className={`${isActive === "2" ? "active font-semibold" : "font-medium"} flex flex-row justify-start items-center pl-8 py-3 relative boder-bottom-line-03 font-prompt sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-xl`}>
                    <img src={ChoosePlan} alt="Choose Plan" className="mr-7" />
                    Choose Plan
                    {isActive === "2" ? (
                        <RightArrow className="ml-7" />
                    ) : (
                        ''
                    )}
                </button>
                <button onClick={(e) => handleTabButtons(e.target.id)} id="3" className={`${isActive === "3" ? "active font-semibold" : "font-medium"} flex flex-row justify-start items-center pl-8 py-3 relative boder-bottom-line-03 font-prompt sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-xl`}>
                    <img src={PasswordIco} alt="Password" className="mr-7" />
                    Password
                    {isActive === "3" ? (
                        <RightArrow className="ml-7" />
                    ) : (
                        ''
                    )}
                </button>
            </div>

            <div className="flex flex-col justify-start items-center my-profile-control-section h-full w-full">{handleTabsChange()}</div>
        </DashboardControlSection>
    ); 
};

export default MyProfile;