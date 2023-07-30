import React from "react";
import {ReactComponent as KeyIco} from '../../../../Assets/Icons/Dashboard/TabsPanel/Security/Key.svg';
import {ReactComponent as Activeico} from '../../../../Assets/Icons/Dashboard/TabsPanel/activeico.svg';
import {ReactComponent as Inactiveico} from '../../../../Assets/Icons/Dashboard/TabsPanel/inactiveico.svg';
import {
    DashboardControlSection,
} from '../../Dashboard.styled';
import ModalManager from "../../../../Components/Modal";

const Security = () => {
    const [Id, setId] = React.useState("");
    const [activeIco, setActiveIco] = React.useState();
    
    React.useEffect(() => {
        
    }, [Id, activeIco]);
    return (
        <DashboardControlSection className="flex flex-col w-full security-control-section py-10 font-prompt">
            <div className="flex flex-row justify-start items-center ml-20 mb-6">
                <button type="button" id={Id} className={`${Id === "0" ? "" : "active"} flex flex-row justify-center items-center text5 font-normal text-base mr-10`}>
                    <div className="flex items-center mr-1.5">
                        {activeIco === 0 ? (
                            <Inactiveico />
                        ) : (
                            <Activeico />
                        )}
                    </div>
                    Two-Factor Authentication (2FA)
                </button>
                <button type="button" id={Id} className={`${Id === "0" ? "" : "active"} flex flex-row justify-center items-center text5 font-normal text-base mr-10`}>
                    <div className="flex items-center mr-1.5">
                        {activeIco === 0 ? (
                            <Inactiveico />
                        ) : (
                            <Activeico />
                        )}
                    </div>
                    Identity Verification
                </button>
                <button type="button" id={Id} className={`${Id === "1" ? "" : "inactive"} flex flex-row justify-center items-center text5 font-normal text-base mr-10`}>
                    <div className="flex items-center mr-1.5">
                        {activeIco === 0 ? (
                            <Activeico />
                        ) : (
                            <Inactiveico />
                        )}
                    </div>
                    Anti-Phishing Code
                </button>
                <button type="button" id={Id} className={`${Id === "1" ? "" : "inactive"} flex flex-row justify-center items-center text5 font-normal text-base`}>
                    <div className="flex items-center mr-1.5">
                        {activeIco === 0 ? (
                            <Activeico />
                        ) : (
                            <Inactiveico />
                        )}
                    </div>
                    Withdrawal Whitelist
                </button>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex flex-col justify-center items-start w-full boder-bottom-line-07">
                    <h3 className="text5 font-semibold text-3xl ml-20">Two-Factor Authentication (2FA)</h3>
                    <div className="flex flex-row w-full justify-between items-center py-8 px-20">
                        <div className="text-left flex flex-col justify-center w-5/12">
                            <p className="flex flex-row text5 font-medium lg:text-base xl:text-lg 2xl:text-xl justify-start items-center mb-1.5"><KeyIco className="svg-fill-04 mr-3" />Security Key</p>
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
                        <div className="flex flex-col w-96 items-end justify-end"><button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-40 h-10">Enable</button></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-full boder-bottom-line-07">
                    <div className="flex flex-row w-full justify-between items-center py-8 px-20">
                        <div className="text-left flex flex-col justify-center w-5/12">
                            <p className="flex flex-row text5 font-medium lg:text-base xl:text-lg 2xl:text-xl justify-start items-center mb-1.5"><KeyIco className="svg-fill-04 mr-3" />Binance/Google Authenticator (Recommended)</p>
                            <p className="text4 font-light text-sm ml-9 mb-1.5">Protect your account with a security key.</p>
                            <button type="button" className="text-left ml-9 text-[#00FF92] underline">Having Trouble?</button>
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
                        <div className="flex flex-col w-96 items-end justify-end"><button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-40 h-10" data-modal="modal-01">Enable</button></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-full boder-bottom-line-07">
                    <div className="flex flex-row w-full justify-between items-center py-8 px-20">
                        <div className="text-left flex flex-col justify-center w-5/12">
                            <p className="flex flex-row text5 font-medium lg:text-base xl:text-lg 2xl:text-xl justify-start items-center mb-1.5"><KeyIco className="svg-fill-04 mr-3" />Phone Number Verification</p>
                            <p className="text4 font-light text-sm ml-9 mb-1.5">Protect your account with a security key.</p>
                            <button type="button" className="text-left ml-9 text-[#00FF92] underline">Having Trouble?</button>
                        </div>
                        <span className="flex flex-row text-base font-normal text4 w-80">
                            <div className="flex items-center mr-1.5">
                                {activeIco === 0 ? (
                                    <Inactiveico />
                                ) : (
                                    <Activeico />
                                )}
                            </div>
                            530****716
                        </span>
                        <div className="flex flex-row w-96 items-end justify-end">
                            <button type="button" className="bg-[#9D9DA4] text-white text-base font-medium rounded-sm w-40 h-10 mr-2">Change</button>
                            <button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-40 h-10 ml-2">Remove</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-full boder-bottom-line-07">
                    <div className="flex flex-row w-full justify-between items-center py-8 px-20">
                        <div className="text-left flex flex-col justify-center w-5/12">
                            <p className="flex flex-row text5 font-medium lg:text-base xl:text-lg 2xl:text-xl justify-start items-center mb-1.5"><KeyIco className="svg-fill-04 mr-3" />Phone Number Verification</p>
                            <p className="text4 font-light text-sm ml-9 mb-1.5">Protect your account with a security key.</p>
                            <button type="button" className="text-left ml-9 text-[#00FF92] underline">Having Trouble?</button>
                        </div>
                        <span className="flex flex-row text-base font-normal text4 w-80">
                            <div className="flex items-center mr-1.5">
                                {activeIco === 0 ? (
                                    <Inactiveico />
                                ) : (
                                    <Activeico />
                                )}
                            </div>
                            da***@gmail.com
                        </span>
                        <div className="flex flex-row w-96 items-end justify-end">
                            <button type="button" className="bg-[#9D9DA4] text-white text-base font-medium rounded-sm w-40 h-10 mr-2">Change</button>
                            <button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-40 h-10 ml-2">Remove</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-full boder-bottom-line-07">
                    <h3 className="text5 font-medium text-2xl ml-20 mt-8">Advanced Security</h3>
                    <div className="flex flex-row w-full justify-between items-center py-8 px-20">
                        <div className="text-left flex flex-col justify-center w-5/12">
                            <p className="flex flex-row text5 font-medium lg:text-base xl:text-lg 2xl:text-xl justify-start items-center mb-1.5"><KeyIco className="svg-fill-04 mr-3" />Login Password</p>
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
                            Off
                        </span>
                        <div className="flex flex-col w-96 items-end justify-end"><button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-40 h-10">Enable</button></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-full pb-8 boder-bottom-line-07">
                    <div className="flex flex-row w-full justify-between items-center pt-8 mb-2.5 px-20">
                        <div className="text-left flex flex-col justify-center w-5/12">
                            <h3 className="text5 font-medium text-xl ml-9 mb-5">Crypto Withdrawal</h3>
                            <p className="flex flex-row text5 font-medium lg:text-sm xl:text-sm 2xl:text-sm justify-start items-center mb-1.5"><KeyIco className="svg-fill-04 mr-3" />One-Step Withdrawal</p>
                            <p className="text4 font-light text-sm ml-9 mb-1.5 w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer massa consectetur porta lacus euismod etiam.</p>
                            {/* <button type="button" className="text-left ml-9 text-[#00FF92] underline">Having Trouble?</button> */}
                        </div>
                        <span className="flex flex-row text-base font-normal text4 w-80">
                            <div className="flex items-center mr-2">
                                {activeIco === 0 ? (
                                    <Activeico />
                                ) : (
                                    <Inactiveico />
                                )}
                            </div>
                            Off
                        </span>
                        <div className="flex flex-col w-96 items-end justify-end"><button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-40 h-10">Enable</button></div>
                    </div>
                    <div className="flex flex-row w-full justify-between items-center mb-2.5 px-20">
                        <div className="text-left flex flex-col justify-center w-5/12">
                            <p className="flex flex-row text5 font-medium lg:text-sm xl:text-sm 2xl:text-sm justify-start items-center mb-1.5"><KeyIco className="svg-fill-04 mr-3" />Withdrawal Whitelist</p>
                            <p className="text4 font-light text-sm ml-9 mb-1.5 w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer massa consectetur porta lacus euismod etiam.</p>
                            <button type="button" className="text-left ml-9 text-[#00FF92] underline">Address Management</button>
                        </div>
                        <span className="flex flex-row text-base font-normal text4 w-80">
                            <div className="flex items-center mr-2">
                                {activeIco === 0 ? (
                                    <Activeico />
                                ) : (
                                    <Inactiveico />
                                )}
                            </div>
                            Off
                        </span>
                        <div className="flex flex-col w-96 items-end justify-end"><button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-40 h-10">Enable</button></div>
                    </div>
                    <div className="flex flex-row w-full justify-between items-center px-20">
                        <div className="text-left flex flex-col justify-center w-5/12">
                            <p className="flex flex-row text5 font-medium lg:text-sm xl:text-sm 2xl:text-sm justify-start items-center mb-1.5"><KeyIco className="svg-fill-04 mr-3" />Anti Phishing Code</p>
                            <p className="text4 font-light text-sm ml-9 mb-1.5 w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer massa consectetur porta lacus euismod etiam.</p>
                        </div>
                        <span className="flex flex-row text-base font-normal text4 w-80">
                            <div className="flex items-center mr-2">
                                {activeIco === 0 ? (
                                    <Activeico />
                                ) : (
                                    <Inactiveico />
                                )}
                            </div>
                            Off
                        </span>
                        <div className="flex flex-col w-96 items-end justify-end"><button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-40 h-10">Enable</button></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-full boder-bottom-line-07">
                    <h3 className="text5 font-medium text-2xl ml-20 mt-8">Devices and Activities</h3>
                    <div className="flex flex-row w-full justify-between items-center py-8 px-20">
                        <div className="text-left flex flex-col justify-center w-5/12">
                            <p className="flex flex-row text5 font-medium lg:text-base xl:text-lg 2xl:text-xl justify-start items-center mb-1.5"><KeyIco className="svg-fill-04 mr-3" />Login Password</p>
                            <p className="text4 font-light text-sm ml-9">Protect your account with a security key (e.g. Yubikey).</p>
                        </div>
                        <div className="flex flex-col w-96 items-end justify-end"><button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-40 h-10">Manage</button></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-full">
                    <div className="flex flex-row w-full justify-between items-center py-8 px-20">
                        <div className="text-left flex flex-col justify-center w-5/12">
                            <p className="flex flex-row text5 font-medium lg:text-base xl:text-lg 2xl:text-xl justify-start items-center mb-1.5"><KeyIco className="svg-fill-04 mr-3" />Account Activity</p>
                            <p className="text4 font-light text-sm ml-9 mb-1.5">Last login: 2022-07-09  10:54:00</p>
                            <div className="flex flex-row items-center">
                                <p className="text4 font-light text-sm ml-9">Suspicious account activity?</p>
                                <button type="button" className="text-left ml-3 text-[#00FF92] underline font-normal">Disable Account</button>
                            </div>
                        </div>
                        <div className="flex flex-row w-96 items-end justify-end">
                            <button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-40 h-10 ml-2">More</button>
                        </div>
                    </div>
                </div>
            </div> 
        </DashboardControlSection>
    );
};

export default Security;