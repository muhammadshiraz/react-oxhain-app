import React from 'react';
import Logo from '../../Assets/Icons/Dashboard/TabContext/logo.png';
import WelcomeIco from '../../Assets/Icons/Dashboard/TabContext/welcome.svg';
import ProfileIco from '../../Assets/Icons/Dashboard/TabContext/profile.svg';
import SecurityIco from '../../Assets/Icons/Dashboard/TabContext/security.svg';
import ReferralsIco from '../../Assets/Icons/Dashboard/TabContext/referrals.svg';
import ApiIco from '../../Assets/Icons/Dashboard/TabContext/api.png';
import SettingsIco from '../../Assets/Icons/Dashboard/TabContext/settings.png';
import { Link, useNavigate } from "react-router-dom";
import { DashboardLayoutSideBar, TabContext } from "./Dashboard.styled";

const sideBarList = [
    {
        id: "1",
        name: "Welcome",
        icon: WelcomeIco,
        currentname: "",
        pathname: "/dashboard",
        root: "dashboard",
    },
    {
        id: "2",
        name: "Profile",
        icon: ProfileIco,
        currentname: "my-profile",
        pathname: "dashboard/my-profile",
        root: "my-profile",
    },
    {
        id: "3",
        name: "Security",
        icon: SecurityIco,
        currentname: "security",
        pathname: "dashboard/security",
        root: "security",
    },
    {
        id: "4",
        name: "Referrals",
        icon: ReferralsIco,
        currentname: "referrals",
        pathname: "dashboard/referrals",
        root: "referrals",
    },
    {
        id: "5",
        name: "API Management",
        icon: ApiIco,
        currentname: "api-management",
        pathname: "dashboard/api-management",
        root: "api-management",
    },
    {
        id: "6",
        name: "Settings",
        icon: SettingsIco,
        currentname: "settings",
        pathname: "dashboard/settings",
        root: "settings",
    }
];

const Dashboard = ({handleTitleButtons}) => {
    const navigate = useNavigate();
    const [isActive, setActive] = React.useState("1");
    
    function handleTabButtons(id) {
        setActive(id);
    }
    
    // function handleTabsChange() {
    //     if (isActive === "0") return <Welcome />
    //     if (isActive === "1") return <MyProfile />
    //     if (isActive === "2") return <Security />
    //     if (isActive === "3") return <Referrals />
    //     if (isActive === "4") return <APIManagement />
    //     if (isActive === "5") return <Settings />
    // }

    React.useEffect(() => {
        //document.getElementById("header").style.display = "none";
    }, [isActive]);

    return (
        <DashboardLayoutSideBar className='dashboard-sidebar-section flex flex-row z-[2]'>
            <TabContext className='flex flex-col oxhain-tab-context w-[115px] pt-[34px]'>
                <button onClick={() => navigate("/")} type='button' className='flex justify-center items-center'><img src={Logo} alt='Logo' width='64px' /></button>
                {/* <div className='oxhain-tab-list flex flex-col mt-14'>
                    <button type='button' onClick={(e) => handleTabButtons(e.target.id)} id="0" className={`${isActive === "0" ? "active" : ""} h-[70px] oxhain-tab welcome-tab flex justify-center items-center mb-5 relative`}><img onClick={(e) => handleTabButtons(e.target.id)} id="0" className={`${isActive === "0" ? "active" : ""} w-max`} src={WelcomeIco} alt='Welcome Ico' /></button>
                    <button type='button' onClick={(e) => handleTabButtons(e.target.id)} id="1" className={`${isActive === "1" ? "active" : ""} h-[70px] oxhain-tab profile-tab flex justify-center items-center mb-5 relative`}><img onClick={(e) => handleTabButtons(e.target.id)} id="1" className={`${isActive === "1" ? "active" : ""} w-max`} src={ProfileIco} alt='Profile Ico' /></button>
                    <button type='button' onClick={(e) => handleTabButtons(e.target.id)} id="2" className={`${isActive === "2" ? "active" : ""} h-[70px] oxhain-tab security-tab flex justify-center items-center mb-5 relative`}><img onClick={(e) => handleTabButtons(e.target.id)} id="2" className={`${isActive === "2" ? "active" : ""} w-max`} src={SecurityIco} alt='Security Ico' /></button>
                    <button type='button' onClick={(e) => handleTabButtons(e.target.id)} id="3" className={`${isActive === "3" ? "active" : ""} h-[70px] oxhain-tab referrals-tab flex justify-center items-center mb-5 relative`}><img onClick={(e) => handleTabButtons(e.target.id)} id="3" className={`${isActive === "3" ? "active" : ""} w-max`} src={ReferralsIco} alt='Referrals Ico' /></button>
                    <button type='button' onClick={(e) => handleTabButtons(e.target.id)} id="4" className={`${isActive === "4" ? "active" : ""} h-[70px] oxhain-tab api-tab flex justify-center items-center mb-5 relative`}><img onClick={(e) => handleTabButtons(e.target.id)} id="4" className={`${isActive === "4" ? "active" : ""} w-max`} src={ApiIco} alt='Api Ico' /></button>
                    <button type='button' onClick={(e) => handleTabButtons(e.target.id)} id="5" className={`${isActive === "5" ? "active" : ""} h-[70px] oxhain-tab settings-tab flex justify-center items-center mb-5 relative`}><img onClick={(e) => handleTabButtons(e.target.id)} id="5" className={`${isActive === "5" ? "active" : ""} w-max`} src={SettingsIco} alt='Settings Ico' /></button>
                </div> */}
                <ul className="oxhain-tab-list flex flex-col mt-14 items-center">
                    {sideBarList.map((item, key) => {
                      return (
                        <li
                          key={key}
                          onClick={(e) => handleTitleButtons(e.target.id)}
                          id={item.id}
                          className={isActive === `${item.id}` ? `active ${item.root}-tab flex justify-center items-center my-6 relative w-full` 
                          :
                          `${item.root}-tab flex justify-center items-center my-6 relative w-full`
                          }
                        >
                          <Link
                            to={item.pathname}
                            label={item.label}
                          >
                            <img
                                id={item.id}
                                onClick={(e) => handleTabButtons(e.target.id)}
                                src={item.icon}
                                alt={item.name}
                                className={`${isActive === `${item.id}` ? "active" : ""} w-max`} 
                            />
                          </Link>
                        </li> 
                      );
                    })}
                    </ul>
            </TabContext>
            {/* {handleTabsChange()} */}
        </DashboardLayoutSideBar>
    );
};

export default Dashboard;
