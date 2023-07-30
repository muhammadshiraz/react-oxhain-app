import React from "react";
import OxhainBanner from "../../Components/Banner/Banner02";
import Button03 from "../../Components/Button/Button03";
import Button04 from "../../Components/Button/Button04";
import Box from '@mui/material/Box';
import TextField01 from "../../Components/Text field/TextField01";
import { getLatestReleases, getEssentials } from './data';
import {
    OxhainAcademy,
} from './Academy.styled';

const Academy = () => {
    return (
        <OxhainAcademy className="flex flex-col w-full academy-control-section font-prompt my-20">
            <OxhainBanner
                breadcrumblink01="/academy"
                breadcrumb01="Products"
                breadcrumblink02="/academy"
                breadcrumb02="Oxchain Crypto"
                title="Blockchain &#38; Crypto"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Volutpat bibendum suscipit et vitae, libero. Dui maecenas
                lectus at augue ut tortor aenean sit massa. Ultrices amet,
                in sit semper euismod."
                userinput01={<div className="flex items-start w-[194px] h-[40px] mr-3 mb-5"><Button03 x="194" y="40" bg="#4949EE" font="sm" fontcolor="ffffff" rounded="sm" text="Apply Now" /></div>}
            />
            <div className="flex flex-col container mx-auto px-2 w-full mt-12 latestRelSection">
                <div className="flex flex-row items-center justify-between w-full mb-12">
                    <h3 className="text5 text-[28px] font-semibold text-left">Latest Releases</h3>
                    <Button04 link="academy" text="View All" fontweight="medium" fontcolor="4949EE" font="xl" alt="Latest Releases" />
                </div>
                <div className="grid grid-cols-2 gap-12 justify-between items-center">
                    {getLatestReleases.map((item, key) => (
                        <div key={key} className="h-[530px] background09 ml-2 relative boxShadow">
                            <div className="flex flex-col justify-end bg-white border-2 border-color-line-11 w-full h-full absolute bottom-2.5 right-2.5">
                                <div className="flex bg-[#D9D9D9] w-full h-[335px]"></div>
                                <div className="flex flex-col px-8 my-8">
                                    <h3 className="text5 xl:text-[28px] 2xl:text-[36px] font-medium text-left mt-3 mb-16">{item.title}</h3>
                                    <div className="flex flex-row items-center">
                                        <div style={{backgroundColor: `${item.tagcolor}`}} className={`px-8 rounded-sm text-5 xl:text-xl 2xl:text-2xl font-normal flex flex-row items-center items-center justify-center py-2 mr-7`}><span style={{backgroundColor: `${item.tagbulletcolor}`}} className={`w-[15px] h-[15px] rounded-full mr-3`}></span> {item.tag}</div>
                                        <p className="font-normal text5 xl:text-xl 2xl:text-2xl mr-7">{item.date}</p>
                                        <p className="flex flex-row items-center font-normal text5 xl:text-xl 2xl:text-2xl"><img src={item.clock} className="mr-3" alt={item.time} />{item.time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-row w-full h-[435px] items-center academySection02 my-24">
                <div className="flex flex-row container mx-auto px-2">
                    <div className="flex w-3/6"></div>
                    <div className="flex flex-col w-3/6 text-left">
                        <h3 className="text5 text-[32px] font-medium">Earn crypto by learning about blockchain</h3>
                        <p className="text4 text-2xl font-light mt-3 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur non risus felis vulputate ligula.</p>
                        <Button03 x="300" y="50" bg="#4949EE" font="base" fontcolor="ffffff" rounded="sm" text="Get Started" />
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full h-[435px] items-center academySection02 my-24">
                <div className="flex flex-row container mx-auto px-2">
                    <div className="flex flex-col w-3/6 text-left">
                        <h3 className="text5 text-[32px] font-medium">No idea  what you just scrolled through?</h3>
                        <p className="text4 text-2xl font-light mt-3 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur non risus felis vulputate ligula.</p>
                        <Button03 x="300" y="50" bg="#4949EE" font="base" fontcolor="ffffff" rounded="sm" text="Get Started" />
                    </div>
                    <div className="flex w-3/6"></div>
                </div>
            </div>
            <div className="flex flex-col container mx-auto px-2 w-full mt-12 essentialsSection">
                <div className="flex flex-row items-center justify-between w-full mb-12">
                    <h3 className="text5 text-[28px] font-semibold text-left">Essentials</h3>
                    <Button04 link="academy" text="View All" fontweight="medium" fontcolor="4949EE" font="xl" alt="Essentials" />
                </div>
                <div className="grid grid-cols-3 gap-8 justify-between items-center">
                    {getEssentials.map((item, key) => (
                        <div key={key} className="h-[430px] background09 ml-2 relative boxShadow">
                            <div className="flex flex-col justify-between bg-white border-2 border-color-line-11 w-full h-full absolute bottom-2.5 right-2.5">
                                <div className="flex bg-[#D9D9D9] w-full h-[220px]"></div>
                                <div className="flex flex-col px-5 my-8">
                                    <h3 className="text5 xl:text-[24px] 2xl:text-[32px] font-medium text-left mb-8 h-20">{item.title}</h3>
                                    <div className="flex flex-row items-center">
                                        <div style={{backgroundColor: `${item.tagcolor}`}} className={`xl:px-3 2xl:px-5 rounded-sm text-5 xl:text-sm 2xl:text-xl font-normal flex flex-row items-center items-center justify-center py-2 mr-5`}><span style={{backgroundColor: `${item.tagbulletcolor}`}} className={`w-[15px] h-[15px] rounded-full mr-3`}></span> {item.tag}</div>
                                        <p className="font-normal text5 xl:text-sm 2xl:text-xl mr-5">{item.date}</p>
                                        <p className="flex flex-row items-center font-normal text5 xl:text-sm 2xl:text-xl"><img src={item.clock} className="mr-3" alt={item.time} />{item.time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-row w-full h-[435px] items-center academySection02 my-24">
                <div className="flex flex-row container mx-auto px-2">
                    <div className="flex w-3/6"></div>
                    <div className="flex flex-col w-3/6 text-left">
                        <h3 className="text5 text-[32px] font-medium">No noise. Just signal.</h3>
                        <p className="text4 text-2xl font-light mt-3 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="flex flex-row items-cemter">
                            <TextField01 placeholder="Enter your email address" mr="3" rounded="sm" />
                            <Button03 x="230" y="52" bg="#4949EE" font="sm" fontcolor="ffffff" rounded="sm" text="Subscribe" />
                        </div>
                        <p className="text5 text-base font-medium mt-5">I have read and agree to Oxhain’s <button type="button" className="text-[#4949EE]">Terms and Service</button>.</p>
                    </div>
                </div>
            </div>
        </OxhainAcademy>
    );
};

export default Academy;