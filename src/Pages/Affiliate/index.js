import React from "react";
import { Link } from "react-router-dom";
import Button03 from "../../Components/Button/Button03";
import OxhainBanner from "../../Components/Banner/Banner02";
import { sectionCommissions05 } from './data';
import Step01 from '../../Assets/Icons/Affiliate/CommissionsSection/step01.png';
import Step02 from '../../Assets/Icons/Affiliate/CommissionsSection/step02.png';
import Step03 from '../../Assets/Icons/Affiliate/CommissionsSection/step03.png';
import Line from '../../Assets/Icons/Affiliate/CommissionsSection/line.png';
import {
    OxhainAffiliate,
} from './Affiliate.styled';
import Accordion01 from "../../Components/Accordion/Accordion01";

const Affiliate = () => {
    return (
        <OxhainAffiliate className="flex flex-col w-full affiliate-control-section font-prompt my-20">
            <OxhainBanner
                breadcrumblink01="/affiliate"
                breadcrumb01="Contact Us"
                breadcrumblink02="/affiliate"
                breadcrumb02="Affiliate"
                title="Affiliate"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Volutpat bibendum suscipit et vitae, libero. Dui maecenas
                lectus at augue ut tortor aenean sit massa. Ultrices amet,
                in sit semper euismod."
                userinput01={<div className="flex items-start w-[194px] h-[40px] mr-3 mb-5"><Button03 x="194" y="40" bg="#4949EE" font="sm" fontcolor="ffffff" rounded="sm" text="Apply Now" /></div>}
                userinput02={<div className="flex items-start w-[194px] h-[40px] ml-3 mb-5"><Button03 x="194" y="40" bg="#9D9DA4" font="sm" fontcolor="ffffff" rounded="sm" text="Already an Affiliate?" /></div>}
            />
            <div className="flex flex-col items-center pt-12">
                <h3 className="text5 text-[32px] font-medium">How to earn commissions?</h3>
                <div className="flex flex-col justify-between items-center mt-24">
                    <div className="flex flex-row mx-auto xl:w-4/4 2xl:w-3/4 justify-between items-center relative">
                        <div className="flex flex-col relative">
                            <div className="flex flex-row items-center">
                                <img src={Step01} alt="Apply to become an affliate" className="w-max mx-auto" />
                                <img src={Line} alt="Line" className="h-max absolute xl:left-[20rem] 2xl:left-80" />
                            </div>
                            <h4 className="text5 text-xl font-medium mt-5">Apply to become an affliate</h4>
                            <p className="text4 text-base font-light mt-2.5">Lorem ipsum dolor sitamet,consectetur adipiscing elit. Pharetra justo, feugiat facilisis scelerisque elit.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={Step02} alt="Promote Oxhain" className="w-max mx-auto" />
                            <h4 className="text5 text-xl font-medium mt-5">Promote Oxhain</h4>
                            <p className="text4 text-base font-light mt-2.5">Lorem ipsum dolor sitamet,consectetur adipiscing elit. Pharetra justo, feugiat facilisis scelerisque elit.</p>
                        </div>
                        <div className="flex flex-col relative">
                            <div className="flex flex-row items-center">
                                <img src={Step03} alt="Claim Commissions" className="w-max mx-auto" />
                                <img src={Line} alt="Line" className="h-max absolute xl:right-[20rem] 2xl:right-80" />
                            </div>
                            <h4 className="text5 text-xl font-medium mt-5">Claim Commissions</h4>
                            <p className="text4 text-base font-light mt-2.5">Lorem ipsum dolor sitamet,consectetur adipiscing elit. Pharetra justo, feugiat facilisis scelerisque elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full h-[460px] items-center sectionCommissions02">
                <div className="flex flex-row container mx-auto px-2 mt-12">
                    <div className="flex w-3/6"></div>
                    <div className="flex flex-col w-3/6 text-left">
                        <h3 className="text5 text-[32px] font-medium">How much commission can I earn?</h3>
                        <p className="text4 text-2xl font-light mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur non risus felis vulputate ligula. Neque, quis at nullam eget eget. Dui ut quis augue sit. Cursus tempor morbi elit tincidunt dictum quis Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row my-12 w-full items-center sectionCommissions03">
                <div className="flex flex-col container mx-auto px-2 text-left py-2">
                    <h3 className="text5 text-[32px] font-medium">Oxhain Affiliate Program Commission Benefits</h3>
                    <p className="flex flex-row text4 text-2xl font-normal my-3">Check more detailed rules of the affiliate program. <Link to="/affiliate" className="ml-3 text-[#4949EE] underline">Detailed Rules</Link></p>
                    <div className="flex items-start w-[194px] h-[40px] mt-2"><Button03 x="194" y="40" bg="#4949EE" font="sm" fontcolor="ffffff" rounded="sm" text="Join Now" /></div>
                </div>
            </div>
            <div className="flex flex-col my-20 w-full justify-center items-center sectionCommissions04">
                <h3 className="text5 text-[32px] font-medium text-center">Why become a Oxhain affiliate?</h3>
                <div className="flex flex-col container mx-auto px-2 mt-12">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col justify-center items-center commissionsBox01 h-96 relative w-full">
                            <div className="bg-[#D9D9D9] w-32 h-32 rounded-full mb-4"></div>
                            <h3 className="text5 text-2xl font-normal">Comissions</h3>
                            <p className="text4 text-xl font-light mt-3 w-2/3">Lorem ipsum dolor sitamet,consectetu adipiscing elit. Pharetra justo, feugiat facilisis scelerisque elit.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center commissionsBox02 h-96 relative w-full">
                            <div className="bg-[#D9D9D9] w-32 h-32 rounded-full mb-4"></div>
                            <h3 className="text5 text-2xl font-normal">Transparent Referral Scheme</h3>
                            <p className="text4 text-xl font-light mt-3 w-2/3">Lorem ipsum dolor sitamet,consectetu adipiscing elit. Pharetra justo, feugiat facilisis scelerisque elit.</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col justify-center items-center commissionsBox03 h-96 relative w-full">
                            <div className="bg-[#D9D9D9] w-32 h-32 rounded-full mb-4"></div>
                            <h3 className="text5 text-2xl font-normal">Premium Brand</h3>
                            <p className="text4 text-xl font-light mt-3 w-2/3">Lorem ipsum dolor sitamet,consectetu adipiscing elit. Pharetra justo, feugiat facilisis scelerisque elit.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center commissionsBox04 h-96 relative w-full">
                            <div className="bg-[#D9D9D9] w-32 h-32 rounded-full mb-4"></div>
                            <h3 className="text5 text-2xl font-normal">Second - Level Comissions</h3>
                            <p className="text4 text-xl font-light mt-3 w-2/3">Lorem ipsum dolor sitamet,consectetu adipiscing elit. Pharetra justo, feugiat facilisis scelerisque elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col my-8 w-full justify-center items-start sectionCommissions05">
                <div className="flex flex-col container mx-auto mt-12">
                    <h3 className="text5 text-[32px] font-medium text-left">Affiliate FAQ</h3>
                    <div className="mt-8 flex flex-col w-full">
                        {sectionCommissions05.map((item, key) => (
                            <Accordion01 key={key} id={item.id} title={item.title} content={item.content} />
                        ))}
                    </div>
                    <div className="flex flex-row items-start mt-12"><p className="text5 text-xl font-normal">Have more questions? Check out our <span className="text-[#4949EE] underline">Affiliate Program Guide</span>for additional answers.</p></div>
                </div>
            </div>
        </OxhainAffiliate>
    );
};

export default Affiliate;