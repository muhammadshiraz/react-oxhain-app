import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RightGradientArrow from '../../Assets/Icons/NeedHelp/right-gradient-arrow.svg';
import UnionBar from '../../Assets/Images/NeedHelp/union-bar.svg';
import SupportLine from '../../Assets/Images/NeedHelp/support-line.svg';
import BlogsLine from '../../Assets/Images/NeedHelp/blogs-line.svg';
import NewsLine from '../../Assets/Images/NeedHelp/news-line.svg';
import SupportEllipse from '../../Assets/Icons/NeedHelp/support-ellipse.svg';
import { NeedHelp, Title, Paragraph } from "./NeedHelp.styled";

const index = () => {
    return (
        <NeedHelp className='relative'
            style={{ backgroundImage:`url(${UnionBar})`}}
        >
            <Box
                className='h-full flex flex-col justify-center items-center mt-28 needHelpMainBox'
                sx={{
                    width: '100%',
                }}
            >
                <Container maxWidth="lg" className='h-full flex justify-center items-center'>
                    <div className='mb-14'><Title className='text-center text-4xl font-medium font-exo'>Do you need help?</Title></div>
                    <Box sx={{ flexGrow: 1 }} className='h-full flex flex-col'>
                        <Grid container spacing={2} marginTop="0" className='flex flex-row justify-center items-center' marginLeft={0}>
                            <Grid item xs={12} sm={12} md={4} className="justify-center flex flex-row relative needHelpGrid supportGrid"
                                style={{ backgroundImage:`url(${SupportLine})`}}
                            >
                                <div className='needBoxEllipse'><img src={SupportEllipse} className='mr-3' alt='Support Ellipse' /></div>
                                <div className='ml-5 pr-8'>
                                    <Title className='text-left text-2xl font-medium mb-5 font-exo'>Support</Title>
                                    <Paragraph className='text-left text-base font-normal mb-5 font-exo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna consequat enim.</Paragraph>
                                    <button type="button" className='flex flex-col learnMoreBtn text-left font-medium text-1xl'>
                                        <div className='flex flex-row mr-3'>
                                            <span className='font-exo'>Learn More</span>
                                            <img className='ml-3' src={RightGradientArrow} alt='Right Gradient Arrow' />
                                        </div>
                                    </button>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} className="justify-center flex flex-row relative needHelpGrid blogsGrid"
                                style={{ backgroundImage:`url(${BlogsLine})`}}
                            >
                                <div className='needBoxEllipse bg-[#C4C4C4]'><img className='mr-3' src="" alt='' /></div>
                                <div className='ml-5 pr-8'>
                                    <Title className='text-left text-2xl font-medium mb-5 font-exo'>Blogs</Title>
                                    <Paragraph className='text-[#3F3F3F] text-left text-base font-normal mb-5 font-exo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna consequat enim.</Paragraph>
                                    <button type="button" className='flex flex-col learnMoreBtn text-left font-medium text-1xl'>
                                        <div className='flex flex-row mr-3'>
                                            <span className='font-exo'>Learn More</span>
                                            <img className='ml-3' src={RightGradientArrow} alt='Right Gradient Arrow' />
                                        </div>
                                    </button>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} className="justify-center flex flex-row relative needHelpGrid newsGrid"
                                style={{ backgroundImage:`url(${NewsLine})`}}
                            >
                                <div className='needBoxEllipse bg-[#C4C4C4]'><img className='mr-3' src="" alt='' /></div>
                                <div className='ml-5 pr-8'>
                                    <Title className='text-[#000000] text-left text-2xl font-medium mb-5 font-exo'>News</Title>
                                    <Paragraph className='text-[#3F3F3F] text-left text-base font-normal mb-5 font-exo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna consequat enim.</Paragraph>
                                    <button type="button" className='flex flex-col learnMoreBtn text-left font-medium text-1xl'>
                                        <div className='flex flex-row mr-3'>
                                            <span className='font-exo'>Learn More</span>
                                            <img className='ml-3' src={RightGradientArrow} alt='Right Gradient Arrow' />
                                        </div>
                                    </button>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </NeedHelp>
    );
};

export default index;