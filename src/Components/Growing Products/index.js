import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import RightGradientArrow from '../../Assets/Icons/Growing Products/right-gradient-arrow.svg';
import DiscoverBg from '../../Assets/Images/Growing Products/discover-bg.svg';
import { GrowingProducts, Title, Paragraph } from "./Styled";

const Discover = () => {
    const [isSpotHovering, setIsSpotHovering] = useState(false);
    const [isDerivativesHovering, setIsDerivativesHovering] = useState(false);
    const [isTradingHovering, setIsTradingHovering] = useState(false);
    const handleSpotMouseOver = () => {
        setIsSpotHovering(true);
    };
    const handleSpotMouseOut = () => {
        setIsSpotHovering(false);
    };
    const handleDerivativesMouseOver = () => {
        setIsDerivativesHovering(true);
    };
    const handleDerivativesMouseOut = () => {
        setIsDerivativesHovering(false);
    };
    const handleTradingMouseOver = () => {
        setIsTradingHovering(true);
    };
    const handleTradingMouseOut = () => {
        setIsTradingHovering(false);
    };

    return (
        <GrowingProducts className='relative'>
            <div className='mb-8'><Title className='text-center text-4xl font-medium'>Discover Our Growing Products</Title></div>
            <Box
                className='h-full flex flex-col justify-center items-center growingProductsBox mt-5 pt-8'
                style={{ backgroundImage:`url(${DiscoverBg})`}}
                sx={{
                    width: '100%',
                }}
            >
                <Container maxWidth="lg" className='h-full flex justify-center items-center'>
                    <Box sx={{ flexGrow: 1 }} className='h-full flex flex-col'>
                        <Grid container spacing={2} marginTop="0" className='flex flex-row justify-center items-center'>
                            <Grid item xs={12} sm={12} md={3} className="justify-center relative growingProductsGridBox" onMouseOver={handleSpotMouseOver} onMouseOut={handleSpotMouseOut}>
                                <div className='growingProductsGradientBox flex flex-col justify-end px-5 pb-5'>
                                    <Title className='text-[#000000] text-left text-2xl font-medium mb-5 text-center font-poppins'>Spot</Title>
                                    <Paragraph className='text-left text-base font-normal mb-5 text-center font-poppins'>Lorem ipsum dolor sit amet, consectetur  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur  amet, consectetur adipiscing elit.</Paragraph>
                                    {isSpotHovering && (
                                        <button type="button" className='flex flex-col viewMoreBtn font-medium ml-auto'>
                                            <div className='flex flex-row mr-3'>
                                                <span className='font-poppins text-sm'>View More</span>
                                                <img className='ml-3' src={RightGradientArrow} alt='Right Gradient Arrow' />
                                            </div>
                                        </button>
                                    )}
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} className="justify-center relative growingProductsGridBox" onMouseOver={handleDerivativesMouseOver} onMouseOut={handleDerivativesMouseOut}>
                                <div className='growingProductsGradientBox flex flex-col justify-end px-5 pb-5'>
                                    <Title className='text-left text-2xl font-medium mb-5 text-center font-poppins'>Derivatives</Title>
                                    <Paragraph className='text-left text-base font-normal mb-5 text-center font-poppins'>Lorem ipsum dolor sit amet, consectetur  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur  amet, consectetur adipiscing elit.</Paragraph>
                                    {isDerivativesHovering && (
                                        <button type="button" className='flex flex-col viewMoreBtn font-medium ml-auto'>
                                            <div className='flex flex-row mr-3'>
                                                <span className='font-poppins text-sm'>View More</span>
                                                <img className='ml-3' src={RightGradientArrow} alt='Right Gradient Arrow' />
                                            </div>
                                        </button>
                                    )}
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} className="justify-center relative growingProductsGridBox" onMouseOver={handleTradingMouseOver} onMouseOut={handleTradingMouseOut}>
                                <div className='growingProductsGradientBox flex flex-col justify-end px-5 pb-5'>
                                    <Title className='text-[#000000] text-left text-2xl font-medium mb-5 text-center font-poppins'>Copy Trading</Title>
                                    <Paragraph className='text-[#000000] text-left text-base font-normal mb-5 text-center font-poppins'>Lorem ipsum dolor sit amet, consectetur  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur  amet, consectetur adipiscing elit.</Paragraph>
                                    {isTradingHovering && (
                                        <button type="button" className='flex flex-col viewMoreBtn font-medium ml-auto'>
                                            <div className='flex flex-row mr-3'>
                                                <span className='font-poppins text-sm'>View More</span>
                                                <img className='ml-3' src={RightGradientArrow} alt='Right Gradient Arrow' />
                                            </div>
                                        </button>
                                    )}
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </GrowingProducts>
    );
};

export default Discover;