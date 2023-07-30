import React from "react";
import {ReactComponent as KeyIco} from '../../../../Assets/Icons/Dashboard/TabsPanel/Security/Key.svg';
import {ReactComponent as Activeico} from '../../../../Assets/Icons/Dashboard/TabsPanel/activeico.svg';
import {ReactComponent as Inactiveico} from '../../../../Assets/Icons/Dashboard/TabsPanel/inactiveico.svg';
import {
    DashboardControlSection,
} from '../../Dashboard.styled';

const Settings = () => {
    const [Id, setId] = React.useState("");
    const [activeIco, setActiveIco] = React.useState();

    React.useEffect(() => {
        
    }, [Id, activeIco]);

    return (
        <DashboardControlSection className="flex flex-col w-full settings-control-section py-10 font-prompt">
            <div className="flex flex-col w-full">
                <div className="flex flex-col justify-center items-start w-full boder-bottom-line-07">
                    <h3 className="text5 font-semibold text-3xl ml-20">My Profile</h3>
                    <div className="flex flex-row w-full justify-between items-center py-8 px-20">
                        <div className="text-left flex flex-col justify-center w-5/12">
                            <p className="flex flex-row text5 font-medium lg:text-base xl:text-lg 2xl:text-xl justify-start items-center mb-1.5"><KeyIco className="svg-fill-04 mr-3" />Nickname</p>
                            <p className="text4 font-light text-sm ml-9">Protect your account with a security key (e.g. Yubikey).</p>
                        </div>
                        <span className="flex flex-row text-base font-normal text4 w-80">
                            <div className="flex items-center mr-2">
                                {activeIco === 0 ? (
                                    <Activeico />
                                ) : (
                                    <Inactiveico />
                                )}
                            </div>
                            Not linked
                        </span>
                        <div className="flex flex-col w-96 items-end justify-end"><button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-40 h-10">Edit</button></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-full boder-bottom-line-07">
                    <div className="flex flex-row w-full justify-between items-center py-8 px-20">
                        <div className="text-left flex flex-col justify-center w-5/12">
                            <p className="flex flex-row text5 font-medium lg:text-base xl:text-lg 2xl:text-xl justify-start items-center mb-1.5"><KeyIco className="svg-fill-04 mr-3" />Avatar</p>
                            <p className="text4 font-light text-sm ml-9 mb-1.5">Protect your account with a security key.</p>
                            <button type="button" className="text-left ml-9 text-[#00FF92] underline">Marketplace</button>
                        </div>
                        <div className="flex flex-col w-96 items-end justify-end"><button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-40 h-10">Change</button></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-full boder-bottom-line-07">
                    <div className="flex flex-row w-full justify-between items-center py-8 px-20">
                        <div className="text-left flex flex-col justify-center w-5/12">
                            <p className="flex flex-row text5 font-medium lg:text-base xl:text-lg 2xl:text-xl justify-start items-center mb-1.5"><KeyIco className="svg-fill-04 mr-3" />P2P Profile Settings</p>
                            <p className="text4 font-light text-sm ml-9 mb-1.5">Protect your account with a security key.</p>
                        </div>
                        <div className="flex flex-row w-96 items-end justify-end">
                            <button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-40 h-10 ml-2">Manage</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-full pb-8 boder-bottom-line-07">
                    <div className="flex flex-row w-full justify-between items-center pt-8 mb-2.5 px-20">
                        <div className="text-left flex flex-col justify-center w-5/12">
                            <h3 className="text5 font-medium text-xl ml-9 mb-5">Preferences</h3>
                            <p className="flex flex-row text5 font-medium lg:text-sm xl:text-sm 2xl:text-sm justify-start items-center mb-1.5"><KeyIco className="svg-fill-04 mr-3" />Order Confirmation Reminders</p>
                            <p className="text4 font-light text-sm ml-9 mb-1.5 w-3/4">Protect your account with a security key (e.g. Yubikey).</p>
                        </div>
                        <span className="text-left flex flex-row text-base itemsc-center font-normal text4 w-80">
                            <div className="flex items-start mr-2 pt-1">
                                {activeIco === 1 ? (
                                    <Inactiveico />
                                ) : (
                                    <Activeico />
                                )}
                            </div>
                            Stop-Limit Order, Auto <br/>Barrow/Repay for Margin
                        </span>
                        <div className="flex flex-col w-96 items-end justify-end"><button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-40 h-10">Manage</button></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-full pb-8 boder-bottom-line-07">
                    <div className="flex flex-row w-full justify-between items-center pt-8 mb-2.5 px-20">
                        <div className="text-left flex flex-col justify-center w-5/12">
                            <h3 className="text5 font-medium text-xl ml-9 mb-5">Notifications</h3>
                            <p className="flex flex-row text5 font-medium lg:text-sm xl:text-sm 2xl:text-sm justify-start items-center mb-1.5"><KeyIco className="svg-fill-04 mr-3" />Notification Language</p>
                            <p className="text4 font-light text-sm ml-9 mb-1.5 w-3/4">Protect your account with a security key (e.g. Yubikey).</p>
                        </div>
                        <span className="text-left flex flex-row text-base itemsc-center font-normal text4 w-80">
                            <div className="flex items-center mr-2">
                                {activeIco === 1 ? (
                                    <Inactiveico />
                                ) : (
                                    <Activeico />
                                )}
                            </div>
                            English
                        </span>
                        <div className="flex flex-col w-96 items-end justify-end"><button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-40 h-10">Manage</button></div>
                    </div>
                    <div className="flex flex-row w-full justify-between items-center mb-2.5 px-20">
                        <div className="text-left flex flex-col justify-center w-5/12">
                            <p className="flex flex-row text5 font-medium lg:text-sm xl:text-sm 2xl:text-sm justify-start items-center mb-1.5"><KeyIco className="svg-fill-04 mr-3" />On-site Notifications</p>
                            <p className="text4 font-light text-sm ml-9 mb-1.5 w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer massa consectetur porta lacus euismod etiam.</p>  
                        </div>
                        <span className="text-left flex flex-row text-base itemsc-center font-normal text4 w-80">
                            <div className="flex items-start mr-2 pt-1">
                                {activeIco === 1 ? (
                                    <Inactiveico />
                                ) : (
                                    <Activeico />
                                )}
                            </div>
                            Activities,Trade Notification, <br/>Oxhain News,System Messages
                        </span>
                        <div className="flex flex-col w-96 items-end justify-end"><button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-40 h-10">Manage</button></div>
                    </div>
                    <div className="flex flex-row w-full justify-between items-center px-20">
                        <div className="text-left flex flex-col justify-center w-5/12">
                            <p className="flex flex-row text5 font-medium lg:text-sm xl:text-sm 2xl:text-sm justify-start items-center mb-1.5"><KeyIco className="svg-fill-04 mr-3" />Marketing Emails</p>
                            <p className="text4 font-light text-sm ml-9 mb-1.5 w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer massa consectetur porta lacus euismod etiam.</p>
                        </div>
                        <span className="text-left flex flex-row text-base itemsc-center font-normal text4 w-80">
                            <div className="flex items-center mr-2">
                                {activeIco === 1 ? (
                                    <Inactiveico />
                                ) : (
                                    <Activeico />
                                )}
                            </div>
                            On
                        </span>
                        <div className="flex flex-col w-96 items-end justify-end"><button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-40 h-10">Manage</button></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-full pb-8">
                    <div className="flex flex-row w-full justify-between items-center pt-8 mb-2.5 px-20">
                        <div className="text-left flex flex-col justify-center w-5/12">
                            <h3 className="text5 font-medium text-xl ml-9 mb-5">Marketing and Analytics</h3>
                            <p className="text4 font-light text-sm ml-9 mb-5 w-3/4">Protect your account with a security key (e.g. Yubikey).</p>
                            <p className="flex flex-row text5 font-medium lg:text-sm xl:text-sm 2xl:text-sm justify-start items-center mb-1.5"><KeyIco className="svg-fill-04 mr-3" />Analytics</p>
                            <p className="text4 font-light text-sm ml-9 mb-1.5 w-3/4">Protect your account with a security key (e.g. Yubikey).</p>
                        </div>
                        <span className="text-left flex flex-row text-base itemsc-center font-normal text4 w-80">
                            <div className="flex items-center mr-2">
                                {activeIco === 1 ? (
                                    <Inactiveico />
                                ) : (
                                    <Activeico />
                                )}
                            </div>
                            On
                        </span>
                        <div className="flex flex-col w-96 items-end justify-end"><button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-40 h-10">Disable</button></div>
                    </div>
                    <div className="flex flex-row w-full justify-between items-center mb-2.5 px-20">
                        <div className="text-left flex flex-col justify-center w-5/12">
                            <p className="flex flex-row text5 font-medium lg:text-sm xl:text-sm 2xl:text-sm justify-start items-center mb-1.5"><KeyIco className="svg-fill-04 mr-3" />Advertising</p>
                            <p className="text4 font-light text-sm ml-9 mb-1.5 w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer massa consectetur porta lacus euismod etiam.</p>  
                        </div>
                        <span className="text-left flex flex-row text-base itemsc-center font-normal text4 w-80">
                            <div className="flex items-center mr-2">
                                {activeIco === 1 ? (
                                    <Inactiveico />
                                ) : (
                                    <Activeico />
                                )}
                            </div>
                            On
                        </span>
                        <div className="flex flex-col w-96 items-end justify-end"><button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-40 h-10">Disable</button></div>
                    </div>
                </div>
            </div>
        </DashboardControlSection>
    );
};

export default Settings;