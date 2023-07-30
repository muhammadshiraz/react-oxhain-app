import React from "react";
import { formatData } from "../../Utility/FormatData";
import { getSwiperCoins } from "./data";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SwiperTopLine from '../../Assets/Images/Swiper/swiper-top-line.svg';
import SwiperBg from '../../Assets/Images/Swiper/swiper-bg.svg';
import SwiperBottomLine from '../../Assets/Images/Swiper/swiper-bottom-line.svg';
import RightGradientArrow from '../../Assets/Icons/Swiper/right-gradient-arrow.svg';
import BottomButtonLine from '../../Assets/Icons/Swiper/bottom-button-line.svg';
import BitcoinLogo from '../../Assets/Images/Swiper/Logos/bitcoin.png';
import EthereumLogo from '../../Assets/Images/Swiper/Logos/ethereum.svg';
import BinanceLogo from '../../Assets/Images/Swiper/Logos/binance.svg';
import CardanoLogo from '../../Assets/Images/Swiper/Logos/cardano.svg';
import CoinsChart from '../../Assets/Images/Swiper/chart.svg';
import UpDownArrow from '../../Assets/Images/Swiper/up-down-arrow.svg';
import Marquee from "react-easy-marquee";
import { 
    OxhainSwiper,
    OxhainSwiperBg
  } from "./Swiper.styled";

const Swiper = () => {
    const swipercoins = [
        {
            coin: BitcoinLogo,
            chart: CoinsChart,
            arrow: UpDownArrow,
            
        },
        {
            coin: EthereumLogo,
            chart: CoinsChart,
            arrow: UpDownArrow,
            
        },
        {
            coin: BinanceLogo,
            chart: CoinsChart,
            arrow: UpDownArrow,
            
        },
        {
            coin: CardanoLogo,
            chart: CoinsChart,
            arrow: UpDownArrow,
            
        },
        {
            coin: BitcoinLogo,
            chart: CoinsChart,
            arrow: UpDownArrow,
            

        },
        {
            coin: EthereumLogo,
            chart: CoinsChart,
            arrow: UpDownArrow,
            
        },
        {
            coin: BinanceLogo,
            chart: CoinsChart,
            arrow: UpDownArrow,
            
        },
        {
            coin: CardanoLogo,
            chart: CoinsChart,
            arrow: UpDownArrow,
            
        },
        {
            coin: BitcoinLogo,
            chart: CoinsChart,
            arrow: UpDownArrow,
            

        },
        {
            coin: EthereumLogo,
            chart: CoinsChart,
            arrow: UpDownArrow,
            
        },
        {
            coin: BinanceLogo,
            chart: CoinsChart,
            arrow: UpDownArrow,
            
        },
        {
            coin: CardanoLogo,
            chart: CoinsChart,
            arrow: UpDownArrow,
            
        }
     ];

    return (
        <OxhainSwiper>
            <img src={SwiperTopLine} alt='Swiper Top Line' width="100%" />
            <OxhainSwiperBg className='flex flex-row'
                style={{
                    backgroundImage: `url(${SwiperBg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left center',
                }}
            >
                <Box
                    className='flex flex-col justify-center items-center'
                        sx={{
                        width: '100%',
                    }}
                >
                    <Marquee reverse={true} pauseOnHover={true} duration={20000} autoPlay={false} height="100%" className='w-full relative flex flex-col marquee'>    
                        {swipercoins.map((coins, key) => (
                            <div key={key} className='swiperCoins flex flex-row items-center justify-center relative' onClick={()=> window.location.href = "/basic-trade/BTC_USDT"}>
                                <div className='innerswiperCoinsBox flex flex-row items-center justify-center'>
                                    <img src={coins.coin} alt={coins} width={175} className="coinsLogo" />
                                    <div className='flex flex-col px-5 my-8 hidden justify-between h-full'>
                                        <img src={coins.chart} className="mt-14" alt={coins} width={"100%"} />
                                        <div className='mb-3.5 flex flex-row justify-between w-full mt-5'>
                                            <p className='font-exo text-[#000000] text-sm font-bold flex'><span className='mr-1'>$</span>{coins.price}</p>
                                            <p className='font-exo text-[#000000] text-xs font-medium flex uppercase'>{coins.price}<span className='ml-1'>USD</span></p>
                                            <p className='font-exo text-[#33FF00] text-xs font-medium flex border-2 border-[#33FF00] rounded-full px-2'>-6.95%<img src={coins.arrow} className="ml-2" alt="Up Down Arrow" width={"100%"} /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                    <div className="carousel-button-group">
                        <button className='flex flex-col items-center swiperNextBtn font-exo font-medium text-2xl' type="button">
                            <div className='flex flex-row mr-3'>
                                <span>View All</span>
                                <img className='ml-3' src={RightGradientArrow} alt='Right Gradient Arrow' />
                            </div>
                            <img className='mt-1 bottomButtonLine' src={BottomButtonLine} alt='Bottom Button Line' />
                        </button>
                    </div>
                </Box>
            </OxhainSwiperBg>
            <img src={SwiperBottomLine} alt='Swiper Bottom Line' width="100%" />
        </OxhainSwiper>
    );
};

export default Swiper;