import React from 'react';
import OxhainBanner from "../../Components/Banner/Banner02";
import Button06 from "../../Components/Button/Button06";
import Button05 from "../../Components/Button/Button05";
import TextField04 from '../../Components/Text field/TextField04';
import Accordion01 from "../../Components/Accordion/Accordion01";
import { getFAQ, getPopularCards } from './data';
import {
    OxhainGifting,
} from './Gifting.styled';

const Gifting = () => {
    const [isActive, setActive] = React.useState("1");

    const [isAuth, setIsAuth] = React.useState(localStorage.getItem("user_id"));

    function handleTabButtons(id) {
        setActive(id);
    }

    React.useEffect(() => {
        
      }, [isAuth]);

    function handleTabsChange() {
        if (isActive === "1") {
            return (
                <div className='flex flex-col w-full justify-center items-start'>
                    <TextField04 placeholder="Enter Anti-Phishing Code" codelabel="Radeem" />
                    <p className='text-xs font-normal text-left mt-4' style={{color: "rgba(255, 255, 255, 0.6)"}}>Oxhain is not responsible for, and assumes no liability to you for, any unlawful conduct or fraud by any third arty associated with any Gift Card.</p>
                </div>
            );
        }
        if (isActive === "2") {
            return (
                <div className='flex flex-col w-full justify-center items-start'>
                    <TextField04 placeholder="16 characters in digits and letters" codelabel="Add Card" />
                    <p className='text-xs font-normal text-left mt-4' style={{color: "rgba(255, 255, 255, 0.6)"}}>Oxhain is not responsible for, and assumes no liability to you for, any unlawful conduct or fraud by any third arty associated with any Gift Card.</p>
                </div>
            );
        }
        if (isActive === "3") {
            return (
                <div className='flex flex-col w-full justify-center items-start'>
                    <TextField04 placeholder="16 digits card number" codelabel="Check Card" />
                    <p className='text-xs font-normal text-left mt-4' style={{color: "rgba(255, 255, 255, 0.6)"}}>Oxhain is not responsible for, and assumes no liability to you for, any unlawful conduct or fraud by any third arty associated with any Gift Card.</p>
                </div>
            );
        }
    }

    return (
        <OxhainGifting className="flex flex-col w-full gifting-control-section font-prompt my-20">
            <OxhainBanner
                breadcrumblink01="/Gifting"
                breadcrumb01="Products"
                breadcrumblink02="/Gifting"
                breadcrumb02="Gifting Crypto"
                title="Send Crypto
                with Oxhain Gift Card"
                content="Gift crypto with your referral code and choose from 
                30+ thematic templates."
                userinput01={
                    <div className="flex items-start w-[194px] h-[40px] mr-3">
                        <Button05 x="200" y="40" textsize="sm" font="normal" textcolor="ffffff" rounded="sm" text="Send a Gift Card" />
                    </div>
                }
                tabcontext={
                    <div className='flex flex-col items-center bg-black w-[515px] h-[195px] my-12 py-5 px-8 banner-tabs-section justify-between'>
                        <div className='flex flex-row items-center justify-start w-full'>
                            <button type='button' onClick={(e) => handleTabButtons(e.target.id)} id="1" className={`${isActive === "1" ? "active font-normal" : "font-medium"} flex justify-center items-center relative capitalize mr-2 text-[#FFFFFF] px-4 py-1 text-base`}>Radeem</button>
                            <button type='button' onClick={(e) => handleTabButtons(e.target.id)} id="2" className={`${isActive === "2" ? "active font-normal" : "font-medium"} flex justify-center items-center relative capitalize mr-2 text-[#FFFFFF] px-4 py-1 text-base`}>Add Card</button>
                            <button type='button' onClick={(e) => handleTabButtons(e.target.id)} id="3" className={`${isActive === "3" ? "active font-normal" : "font-medium"} flex justify-center items-center relative capitalize text-[#FFFFFF] px-4 py-1 text-base`}>Check Card</button>
                        </div>
                        {handleTabsChange()}
                    </div>
                }
            />
            {isAuth ?
                <div className="flex flex-col container mx-auto px-2 w-full mt-12 myCardsSection">
                    <div className="flex flex-row items-center justify-between w-full mb-8">
                        <h3 className="text5 text-[28px] font-semibold text-left">My Cards</h3>
                        <Button06 link="gifting" text="View All" fontweight="medium" fontcolor="4949EE" font="lg" alt="View All" />
                    </div>
                    <div className='flex flex-col justify-center items-center noGiftCard h-[250px] background11 border-color-line-12 border-[1px] border-dashed'>
                        <div className='w-[100px] h-[100px] bg-[#D9D9D9] rounded-full'></div>
                        <p className="text4 text-base font-medium mt-4">No gift card available Create Gift Card</p>
                    </div>
                </div>
                : 
                <div className="flex flex-col container mx-auto px-2 w-full mt-12 myPopularCardsSection">
                    <div className="flex flex-row items-center justify-between w-full mb-8">
                        <h3 className="text5 text-[28px] font-semibold text-left">Popular Cards</h3>
                        <Button06 link="gifting" text="View All Cards" fontweight="medium" fontcolor="4949EE" font="lg" alt="View All Cards" />
                    </div>
                    <div className="grid grid-cols-4 gap-5 justify-between items-center">
                        {getPopularCards.map((item, key) => (
                            <div key={key} className="flex flex-col justify-center h-[153px] relative bg-[#D9D9D9] rounded-sm">
                                {item.title}
                            </div>
                        ))}
                    </div>
                </div>
            }
            <div className="flex flex-col h-[460px] mx-auto px-2 w-full mt-12 justify-center growCryptoSolutions">
                <div className="flex flex-row container mx-auto px-2">
                    <div className="flex w-3/6"></div>
                    <div className="flex flex-col w-3/6 text-left">
                        <h3 className="text5 text-[32px] font-medium">Grow your business with versatile crypto solutions</h3>
                        <p className="text4 text-2xl font-light mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur non risus felis vulputate ligula. Neque, quis at nullam eget eget.</p>
                        <Button05 x="200" y="40" textsize="sm" font="normal" mt="5" textcolor="ffffff" rounded="sm" text="Learn more" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col container mx-auto mt-12">
                <h3 className="text5 text-[32px] font-medium text-left">FAQ</h3>
                <div className="mt-5 flex flex-col w-full">
                    {getFAQ.map((item, key) => (
                        <Accordion01 key={key} id={item.id} title={item.title} content={item.content} />
                    ))}
                </div>
            </div>
        </OxhainGifting>
    );
};

export default Gifting;