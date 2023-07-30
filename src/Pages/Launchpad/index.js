import React from "react";
import OxhainBanner from "../../Components/Banner/Banner01";
import Button03 from "../../Components/Button/Button03";
import Button04 from "../../Components/Button/Button04";
import GAL from "../../Assets/Icons/Launchpool/gal.png";
import BUSD from "../../Assets/Icons/Launchpool/busd.png";
import Cake from "../../Assets/Icons/Launchpool/cake.png";
import BNB from "../../Assets/Icons/Launchpool/bnb.png";
import {ReactComponent as Businessman} from '../../Assets/Images/Launchpad/Businessman.svg';
import { getLatestReleases, getEssentials } from './data';
import {
    OxhainLaunchpad,
} from './Launchpad.styled';

const Launchpad = () => {
    return (
        <OxhainLaunchpad className="flex flex-col w-full launchpad-control-section font-prompt mt-20">
            <OxhainBanner
                className="mobile:h-[300px] tablet:h-[350px] ipad:h-[320px] laptop:h-[330px] desktop:h-[350px]"
                titleclassname="mobile:mt-5 tablet:mt-5"
                breadcrumblink01="/launchpad"
                breadcrumb01="Products"
                breadcrumblink02="/launchpad"
                breadcrumb02="Launchpad"
                title="Oxhain Token Launch Platform"
                content="Lorem ipsum dolor sit amet, consectetur."
                userinput={
                    <div className="flex mobile:grid mobile:grid-cols-2 mobile:gap-3 tablet:grid tablet:grid-cols-2 tablet:gap-3 ipad:flex-row laptop:flex-row desktop:flex-row justify-between items-center z-10 relative mobile:top-5 tablet:top-5 ipad:top-14 laptop:top-14 desktop:top-14">
                        <div className="flex flex-col justify-center mobile:items-start tablet:items-start ipad:items-center laptop:items-center desktop:items-center">
                            <h3 className="text5 font-medium tablet:text-[26px] ipad:text-[26px] laptop:text-[28px] desktop:text-[32px] mobile:mb-1 tablet:mb-2 ipad:mb-2 laptop:mb-2 desktop:mb-2">$ 0</h3>
                            <p className="text4 text-xs	font-medium">Current Funds Locked</p>
                        </div>
                        <div className="border-color-line-07 border-[1px] w-[1px] h-full mobile:hidden tablet:hidden"></div>
                        <div className="flex flex-col justify-center mobile:items-start tablet:items-start ipad:items-center laptop:items-center desktop:items-center">
                            <h3 className="text5 font-medium tablet:text-[26px] ipad:text-[26px] laptop:text-[28px] desktop:text-[32px] mobile:mb-1 tablet:mb-2 ipad:mb-2 laptop:mb-2 desktop:mb-2">$ 110,861,356</h3>
                            <p className="text4 text-xs	font-medium">Total Funds Raised</p>
                        </div>
                        <div className="border-color-line-07 border-[1px] w-[1px] h-full mobile:hidden tablet:hidden"></div>
                        <div className="flex flex-col justify-center mobile:items-start tablet:items-start ipad:items-center laptop:items-center desktop:items-center">
                            <h3 className="text5 font-medium tablet:text-[26px] ipad:text-[26px] laptop:text-[28px] desktop:text-[32px] mobile:mb-1 tablet:mb-2 ipad:mb-2 laptop:mb-2 desktop:mb-2">65</h3>
                            <p className="text4 text-xs	font-medium">Project Launched</p>
                        </div>
                        <div className="border-color-line-07 border-[1px] w-[1px] h-full mobile:hidden tablet:hidden"></div>
                        <div className="flex flex-col justify-center mobile:items-start tablet:items-start ipad:items-center laptop:items-center desktop:items-center">
                            <h3 className="text5 font-medium tablet:text-[26px] ipad:text-[26px] laptop:text-[28px] desktop:text-[32px] mobile:mb-1 tablet:mb-2 ipad:mb-2 laptop:mb-2 desktop:mb-2">3,569,542</h3>
                            <p className="text4 text-xs	font-medium">All-time Unique Participants</p>
                        </div>
                    </div>
                }
            />
            <div className="flex flex-col container mx-auto mobile:px-5 tablet:px-2 ipad:px-2 laptop:px-2 desktop:px-2 mobile:my-5 tablet:my-12 ipad:my-12 laptop:my-12 desktop:my-16 text-left">
                <div className="flex flex-col items-center justify-between w-full">
                    <h3 className="text5 text-[28px] font-semibold text-left flex w-full">Launchpad</h3>
                    <div className="flex mobile:flex-col tablet:flex-col ipad:flex-row laptop:flex-row desktop:flex-row justify-start w-full mobile:my-3 tablet:my-3 ipad:my-5 laptop:my-8 desktop:my-12">
                        <div className="bg-[#D9D9D9] h-[260px] mobile:w-full tablet:w-full ipad:w-2/5 laptop:w-1/3 desktop:w-1/3 ipad:mr-2 laptop:mr-3 desktop:mr-5 mobile:mb-3 tablet:mb-3"></div>
                        <div className="flex flex-col justify-between items-start ipad:ml-2 laptop:ml-3 desktop:ml-5 ipad:w-3/5 laptop:w-3/5 desktop:w-4/5">
                            <div className="flex flex-col items-center mobile:mb-5 tablet:mb-5">
                                <h3 className="text5 text-[28px] font-semibold text-left flex w-full">STEPN</h3>
                                <p className="font-normal text-base	text4">STEPN - A Move to Earn Health and Fitness Application</p>
                            </div>
                            <div className="flex mobile:flex-col tablet:flex-col ipad:flex-row laptop:flex-row desktop:flex-row items-start justify-start w-full border-bottom-line-10 mobile:pb-3 tablet:pb-3 ipad:pb-3 laptop:pb-5 desktop:pb-8">
                                <div className="flex flex-col w-full">
                                    <div className="flex flex-row items-start justify-between tablet:mr-5 ipad:mr-5 laptop:mr-8 desktop:mr-24 mb-2">
                                        <p className="font-medium mobile:text-sm tablet:text-sm ipad:text-sm laptop:text-base desktop:text-base text5">Tokens Offered</p>
                                        <p className="font-semibold mobile:text-sm tablet:text-sm ipad:text-sm laptop:text-base desktop:text-base text5">420,000,000.0000 GMT</p>
                                    </div>
                                    <div className="flex flex-row items-start justify-between tablet:mr-5 ipad:mr-5 laptop:mr-8 desktop:mr-24 mb-2">
                                        <p className="font-medium mobile:text-sm tablet:text-sm ipad:text-sm laptop:text-base desktop:text-base	text5">Sale Price</p>
                                        <p className="font-semibold mobile:text-sm tablet:text-sm ipad:text-sm laptop:text-base desktop:text-base text5">1 GMT = 0.00002514 BNB</p>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full">
                                    <div className="flex flex-row items-start justify-between tablet:mr-5 ipad:mr-5 laptop:mr-8 desktop:mr-24 mb-2">
                                        <p className="font-medium mobile:text-sm tablet:text-sm ipad:text-sm laptop:text-base desktop:text-base text5">Participants</p>
                                        <p className="font-semibold mobile:text-sm tablet:text-sm ipad:text-sm laptop:text-base desktop:text-base text5">130,672</p>
                                    </div>
                                    <div className="flex flex-row items-start justify-between">
                                        <p className="font-medium mobile:text-sm tablet:text-sm ipad:text-sm laptop:text-base desktop:text-base	text5">Total Committed</p>
                                        <p className="font-semibold mobile:text-sm tablet:text-sm ipad:text-sm laptop:text-base desktop:text-base text5">8,742,450.4131 BNB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row mobile:justify-between tablet:justify-between mobile:mt-3 tablet:mt-3 mobile:pb-3 tablet:pb-3 w-full border-color-line-10 mobile:border-b-[1px] tablet:border-b-[1px]">
                                <p className="font-medium mobile:text-sm tablet:text-sm ipad:text-sm laptop:text-base desktop:text-base text2 tablet:mr-36 ipad:mr-36 laptop:mr-36 desktop:mr-36">End Time:</p>
                                <p className="font-medium mobile:text-sm tablet:text-sm ipad:text-sm laptop:text-base desktop:text-base text2">2022-03-09</p>
                            </div>
                        </div>
                    </div>
                    <Button04 classname="mobile:mt-2 tablet:mt-2 ipad:mt-3 laptop:mt-5 desktop:mt-5" link="launchpad" text="View All" fontweight="medium" fontcolor="4949EE" alt="launchpad" />
                </div>
            </div>
            <div className="flex flex-col container mx-auto mobile:px-5 tablet:px-5 ipad:px-2 laptop:px-2 desktop:px-2 mobile:my-5 tablet:my-12 ipad:my-12 laptop:my-12 desktop:my-12 text-left w-full">
                <h3 className="text5 text-[28px] font-semibold text-left flex w-full">Launchpool</h3>
                <div className="flex mobile:flex-col tablet:flex-col ipad:flex-col laptop:flex-row desktop:flex-row justify-between linear-gradient-bg-01 h-full my-8 mobile:px-5 tablet:px-5 ipad:px-5 laptop:px-8 desktop:px-12 py-8">
                    <div className="flex flex-col mobile:w-full tablet:w-full ipad:w-full laptop:w-[260px] desktop:w-[315px] justify-between h-full">
                        <div className="flex flex-col items-start mobile:mb-5 tablet:mb-5 ipad:mb-5">
                            <div className="bg-[#D9D9D9] text-base rounded-sm font-normal w-[150px] h-[35px] flex flex-row items-center justify-end mb-5"><span className="text-[#3F3F3F] mr-3">Completed</span></div>
                            <div className="flex flex-row mb-3 items-center">
                                <img src={GAL} alt="GAL" className="w-max" />
                                <h4 className="text5 text-[32px] font-semibold text-left w-full ml-3">GAL</h4>
                            </div>
                            <p className="font-normal text-base text4">Project Galaxy, A Web3 Credential Data Network.</p>
                        </div>
                        <div className="flex flex-col justify-between mobile:mb-2 tablet:mb-2.5 tablet:mb-2.5 ipad:mb-2.5 laptop:my-8 desktop:my-12">
                            <div className="flex flex-row mb-2.5 justify-between items-center">
                                <p className="font-medium text-base text5">Tokens Offered:</p>
                                <p className="font-semibold text-base text5">3,000,000.00</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p className="font-medium text-base	text5">Sale Price:</p>
                                <p className="font-semibold text-base text5 text-right">30 days/s</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-start justify-between mb-8">
                            <p className="font-medium text-base text5">Session and date:</p>
                            <p className="font-semibold text-base text5">2022-05-09</p>
                        </div>
                    </div>
                    <div className="flex flex-col tablet:justify-between ipad:justify-between laptop:justify-end desktop:justify-end tablet:pb-1.5 ipad:pb-1.5 laptop:pb-2 desktop:pb-3 mobile:h-[980px] tablet:h-[980px] ipad:h-[400px] laptop:h-[400px] desktop:h-[400px]">
                        <div className="grid mobile:grid-cols-1 tablet:grid-cols-1 ipad:grid-cols-3 laptop:grid-cols-3 desktop:grid-cols-3 mobile:gap-5 tablet:gap-3 ipad:gap-3 laptop:gap-5 desktop:gap-6 h-full">
                            <div className="h-full launchpool-box-background ml-2 relative rounded-sm tablet:w-full ipad:w-[280px] laptop:w-[270px] desktop:w-[300px] mobile:top-0 tablet:top-0 ipad:top-2.5 laptop:top-2.5 desktop:top-2.5">
                                <div className="flex flex-col justify-between background51 launchpool-box-border-color w-full h-full absolute bottom-2.5 right-2.5">
                                    <div className="flex flex-col px-5 my-8 items-center justify-between h-full">
                                        <div className="flex flex-col items-center justify-center">
                                            <h3 className="text5 text-2xl font-medium text-center">BUSD Pool</h3>
                                            <p className="flex flex-row items-center font-normal text4 text-base text-center">Stake BUSD,Earn GAL</p>
                                        </div>
                                        <div className="flex flex-row items-center justify-center launchpool-box-coin-border relative px-8 mt-2 mb-5">
                                            <img src={BUSD} alt="BUSD" className="w-[50px] mr-1.5 z-10" />
                                            <div className="border-color-line-12 border-[1px] h-[1px] w-[135px] absolute rounded-sm"></div>
                                            <img src={GAL} alt="GAL" className="w-[50px] ml-1.5 z-10" />
                                        </div>
                                        <div className="flex flex-row w-full justify-between mobile:mb-2 tablet:mb-2 tablet:mb-2">
                                            <p className="font-medium laptop:text-sm desktop:text-base text5">APY:</p>
                                            <p className="font-medium laptop:text-sm desktop:text-base text5">1.32%</p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between mobile:mb-2 tablet:mb-2 tablet:mb-2">
                                            <p className="font-medium laptop:text-sm desktop:text-base text5">Participants:</p>
                                            <p className="font-medium laptop:text-sm desktop:text-base text5">146,264</p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between">
                                            <p className="font-medium laptop:text-sm desktop:text-base text5">Total Staked:</p>
                                            <p className="font-medium laptop:text-sm desktop:text-base text5">1,000,000.9185 <span className="block">BUSD</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full launchpool-box-background ml-2 relative rounded-sm tablet:w-full ipad:w-[280px] laptop:w-[270px] desktop:w-[300px] mobile:top-0 tablet:top-2.5 ipad:top-2.5 laptop:top-2.5 desktop:top-2.5">
                                <div className="flex flex-col justify-between background51 launchpool-box-border-color w-full h-full absolute bottom-2.5 right-2.5">
                                    <div className="flex flex-col px-5 my-8 items-center justify-between h-full">
                                        <div className="flex flex-col items-center justify-center">
                                            <h3 className="text5 text-2xl font-medium text-center">Cake Pool</h3>
                                            <p className="flex flex-row items-center font-normal text4 text-base text-center">Stake Cake,Earn GAL</p>
                                        </div>
                                        <div className="flex flex-row items-center justify-center launchpool-box-coin-border relative px-8 mt-2 mb-5">
                                            <img src={Cake} alt="Cake" className="w-[50px] mr-1.5 z-10" />
                                            <div className="border-color-line-12 border-[1px] h-[1px] w-[135px] absolute rounded-sm"></div>
                                            <img src={GAL} alt="GAL" className="w-[50px] ml-1.5 z-10" />
                                        </div>
                                        <div className="flex flex-row w-full justify-between mobile:mb-2 tablet:mb-2">
                                            <p className="font-medium laptop:text-sm desktop:text-base text5">APY:</p>
                                            <p className="font-medium laptop:text-sm desktop:text-base text5">1.32%</p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between mobile:mb-2 tablet:mb-2">
                                            <p className="font-medium laptop:text-sm desktop:text-base text5">Participants:</p>
                                            <p className="font-medium laptop:text-sm desktop:text-base text5">146,264</p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between">
                                            <p className="font-medium laptop:text-sm desktop:text-base text5">Total Staked:</p>
                                            <p className="font-medium laptop:text-sm desktop:text-base text5">1,000,000.9185 <span className="block">BUSD</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full launchpool-box-background ml-2 relative rounded-sm tablet:w-full ipad:w-[280px] laptop:w-[270px] desktop:w-[300px] mobile:top-0 tablet:top-2.5 ipad:top-2.5 laptop:top-2.5 desktop:top-2.5">
                                <div className="flex flex-col justify-between background51 launchpool-box-border-color w-full h-full absolute bottom-2.5 right-2.5">
                                    <div className="flex flex-col px-5 my-8 items-center justify-between h-full">
                                        <div className="flex flex-col items-center justify-center">
                                            <h3 className="text5 text-2xl font-medium text-center">BNB Pool</h3>
                                            <p className="flex flex-row items-center font-normal text4 text-base text-center">Stake BNB,Earn GAL</p>
                                        </div>
                                        <div className="flex flex-row items-center justify-center launchpool-box-coin-border relative px-8 mt-2 mb-5">
                                            <img src={BNB} alt="BNB" className="w-[50px] mr-1.5 z-10" />
                                            <div className="border-color-line-12 border-[1px] h-[1px] w-[135px] absolute rounded-sm"></div>
                                            <img src={GAL} alt="GAL" className="w-[50px] ml-1.5 z-10" />
                                        </div>
                                        <div className="flex flex-row w-full justify-between mobile:mb-2 tablet:mb-2">
                                            <p className="font-medium laptop:text-sm desktop:text-base text5">APY:</p>
                                            <p className="font-medium laptop:text-sm desktop:text-base text5">1.32%</p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between mobile:mb-2 tablet:mb-2">
                                            <p className="font-medium laptop:text-sm desktop:text-base text5">Participants:</p>
                                            <p className="font-medium laptop:text-sm desktop:text-base text5">146,264</p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between">
                                            <p className="font-medium laptop:text-sm desktop:text-base text5">Total Staked:</p>
                                            <p className="font-medium laptop:text-sm desktop:text-base text5">1,000,000.9185 <span className="block">BUSD</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mx-auto"><Button04 classname="mobile:mt-2 tablet:mt-2 ipad:mt-3 laptop:mt-5 desktop:mt-5" link="launchpad" text="View All" fontweight="medium" fontcolor="4949EE" alt="launchpad" /></div>
            </div>
            <div className="flex mobile:flex-col tablet:flex-col ipad:flex-row laptop:flex-row desktop:flex-row w-full mobile:h-full tablet:h-full ipad:h-[435px] laptop:h-[435px] desktop:h-[435px] justify-center items-center mobile:my-8 tablet:my-8 ipad:my-8 laptop:my-12 desktop:my-24">
                <div className="flex mobile:flex-col tablet:flex-row ipad:flex-row laptop:flex-row desktop:flex-row justify-between items-center container mx-auto mobile:px-5 tablet:px-2 ipad:px-2 laptop:px-2 desktop:px-2 mobile:flex-col-reverse tablet:flex-col-reverse">
                    <div className="flex flex-col mobile:w-full tablet:w-full ipad:w-3/6 laptop:w-3/6 desktop:w-3/6 text-left">
                        <h3 className="text5 mobile:text-[24px] tablet:text-[24px] ipad:text-[26px] laptop:text-[28px] desktop:text-[32px] font-medium">Launch a project on Oxhain Now!</h3>
                        <p className="text4 mobile:text-sm tablet:text-sm ipad:text-base laptop:text-xl desktop:text-2xl font-light mt-3 mobile:mb-3 tablet:mb-5 ipad:mb-5 laptop:mb-8 desktop:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur non risus felis vulputate ligula.</p>
                        <Button03 classname="mobile:w-[200px] tablet:w-[200px] ipad:w-[215px] laptop:w-[225px] desktop:w-[230px] mobile:h-[40px] tablet:h-[40px] ipad:h-[50px] laptop:h-[50px] desktop:h-[50px]" bg="#4949EE" font="base" fontcolor="ffffff" rounded="sm" text="Apply to launch" />
                    </div>
                    <div className="flex flex-col mobile:w-full tablet:w-full ipad:w-3/6 laptop:w-3/6 desktop:w-3/6 mobile:justify-start tablet:justify-start ipad:justify-end laptop:justify-end desktop:justify-end text-left">
                        <Businessman className="mobile:w-full tablet:w-full" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center background12 w-full mobile:py-5 tablet:py-5 ipad:py-5 laptop:py-8 desktop:py-12">
                <div className="container mx-auto mobile:px-5 tablet:px-5 ipad:px-2 laptop:px-2 desktop:px-2 w-full">
                    <h3 className="text5 text-[28px] font-semibold text-left w-full mobile:mt-3 tablet:mt-3">Why choose us?</h3>
                    <div className="flex mobile:flex-col tablet:flex-col ipad:flex-row laptop:flex-row desktop:flex-row justify-between items-center w-full my-12">
                        <div className="flex flex-col justify-between items-start text-left pr-12 mobile:mb-8 tablet:mb-8">
                            <div className="bg-[#D9D9D9] w-[100px] h-[100px] rounded-full"></div>
                            <h4 className="text5 text-2xl font-me dium w-full my-5">Exposure</h4>
                            <p className="text4 text-base font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sem risus in lacus.Tortor sem risus in lacus.</p>
                        </div>
                        <div className="flex flex-col justify-between items-start text-left pr-12 mobile:mb-8 tablet:mb-8">
                            <div className="bg-[#D9D9D9] w-[100px] h-[100px] rounded-full"></div>
                            <h4 className="text5 text-2xl font-medium w-full my-5">Liquidity</h4>
                            <p className="text4 text-base font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sem risus in lacus.Tortor sem risus in lacus.</p>
                        </div>
                        <div className="flex flex-col justify-between items-start text-left pr-12 mobile:mb-8 tablet:mb-8">
                            <div className="bg-[#D9D9D9] w-[100px] h-[100px] rounded-full"></div>
                            <h4 className="text5 text-2xl font-medium w-full my-5">Token Distribution</h4>
                            <p className="text4 text-base font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sem risus in lacus.Tortor sem risus in lacus.</p>
                        </div>
                        <div className="flex flex-col justify-between items-start text-left">
                            <div className="bg-[#D9D9D9] w-[100px] h-[100px] rounded-full"></div>
                            <h4 className="text5 text-2xl font-medium w-full my-5">Future Synergy</h4>
                            <p className="text4 text-base font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sem risus in lacus.Tortor sem risus in lacus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </OxhainLaunchpad>
    );
};

export default Launchpad;