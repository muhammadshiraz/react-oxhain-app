import React from 'react';
import SpotOrder from "./SpotOrder";
import P2POrder from "./P2POrder";
import MarginOrder from "./MarginOrder";
import EarnHistory from "./EarnHistory";
import BuyCryptoHistory from "./BuyCryptoHistory";
import LoanHistory from "./LoanHistory";
import ConvertHistory from "./ConvertHistory";
import {
    DashBoxTab,
} from '../../../Dashboard.styled';

const OrderTable = () => {
    const [isActive, setActive] = React.useState("0");
    
    function handleTabButtons(id) {
        setActive(id);
    }

    function handleTabsChange() {
        if (isActive === "0") return <SpotOrder />
        if (isActive === "1") return <P2POrder />
        if (isActive === "2") return <MarginOrder />
        if (isActive === "3") return <EarnHistory />
        if (isActive === "4") return <BuyCryptoHistory />
        if (isActive === "5") return <LoanHistory />
        if (isActive === "6") return <ConvertHistory />
    }

    return (
        <div className='flex flex-col items-center justify-center orderTable w-full relative'>
            <div className='flex flex-row items-center justify-between w-full boder-bottom-line-01 relative pb-3 mb-9'>
                <DashBoxTab onClick={(e) => handleTabButtons(e.target.id)} id="0" className={`${isActive === "0" ? "active font-medium" : "font-normal"} font-prompt sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-xl`}>Spot Order</DashBoxTab>
                <DashBoxTab onClick={(e) => handleTabButtons(e.target.id)} id="1" className={`${isActive === "1" ? "active font-medium" : "font-normal"} font-prompt sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-xl`}>P2P Order</DashBoxTab>
                <DashBoxTab onClick={(e) => handleTabButtons(e.target.id)} id="2" className={`${isActive === "2" ? "active font-medium" : "font-normal"} font-prompt sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-xl`}>Margin Order</DashBoxTab>
                <DashBoxTab onClick={(e) => handleTabButtons(e.target.id)} id="3" className={`${isActive === "3" ? "active font-medium" : "font-normal"} font-prompt sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-xl`}>Earn History</DashBoxTab>
                <DashBoxTab onClick={(e) => handleTabButtons(e.target.id)} id="4" className={`${isActive === "4" ? "active font-medium" : "font-normal"} font-prompt sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-xl`}>Buy Crypto History</DashBoxTab>
                <DashBoxTab onClick={(e) => handleTabButtons(e.target.id)} id="5" className={`${isActive === "5" ? "active font-medium" : "font-normal"} font-prompt sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-xl`}>Loan History</DashBoxTab>
                <DashBoxTab onClick={(e) => handleTabButtons(e.target.id)} id="6" className={`${isActive === "6" ? "active font-medium" : "font-normal"} font-prompt sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-xl`}>Convert History</DashBoxTab>
            </div>
            <div className='flex flex-col w-full'>
                {handleTabsChange()}
            </div>
        </div>
    );
};

export default OrderTable;