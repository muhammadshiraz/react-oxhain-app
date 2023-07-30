import React from 'react';
import Hero from "../../Components/Hero";
import Swiper from "../../Components/Swiper";
import CryptoInMinutes from "../../Components/Crypto In Minutes";
import GrowingProducts from "../../Components/Growing Products";
import MultipleCrypto from "../../Components/Multiple Crypto";
// import CopyTrading from "../../Components/Copy Trading";
// import Security from "../../Components/Security";
import NeedHelp from "../../Components/Need Help";

const Home = () => {

    React.useEffect(() => {
        document.getElementById("header").style.display = "block";
        document.getElementById("footer").style.display = "block";
    }, []);

    return (
        <div id='Home' className='mt-[5.3rem]'>
            <Hero />
            <Swiper />
            <CryptoInMinutes />
            <GrowingProducts />
            <MultipleCrypto />
            {/* <CopyTrading />
            <Security /> */}
            <NeedHelp />
        </div>
    );
};

export default Home;