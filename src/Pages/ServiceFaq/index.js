import React from 'react';
import OxhainBanner from "../../Components/Banner/Banner01";
import Title01 from '../../Components/Title/Title01';
import Search01 from "../../Components/Search/Search01";
import { OxhainServiceFaq } from './ServiceFaq.styled';

const ServiceFaq = () => {
    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }

    const images = importAll(require.context('../../Assets/Images/ServiceFaq/', false, /\.(png|jpe?g|svg)$/));

    return (
        <OxhainServiceFaq>
            <OxhainBanner
                className="h-[300px] my-24"
                breadcrumblink01="/service"
                breadcrumb01="Service"
                breadcrumblink02="/service/faq"
                breadcrumb02="FAQ"
                title="FAQ"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                userinput={<div className="mt-6 flex flex-col w-2/4 mx-auto"><Search01 placeholder="Search" /></div>}
            />

            <div className='container'>
                <Title01 className="block text-left mb-12 !font-semibold">Popular Topics</Title01>
            </div>

            <div className='flex flex-col'>
                <div className='container'>
                    <div className='flex flex-col xl:flex-row flex-wrap'>
                        <div className='w-4/12'>
                            <div className='item flex flex-col w-11/12 mb-16 p-10 !ml-0 mr-3 lg:mr-0'>
                                <div className='text-left'>
                                    <img src={images['Getting Started 1.svg']} alt="" className='ml-auto h-32' />

                                    <span className='block mb-4 text-lg !font-normal'>Getting Started</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-4/12'>
                            <div className='item flex flex-col w-11/12 mb-16 p-10 !ml-0 mr-3 lg:mr-0'>
                                <img src={images['Account_Functions 1.svg']} alt="" className='ml-auto h-32' />

                                <div className='text-left'>
                                    <span className='block mb-4 text-lg !font-normal'>Account Functions</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-4/12'>
                            <div className='item flex flex-col w-11/12 mb-16 p-10 !ml-0 mr-3 lg:mr-0'>
                                <img src={images['Buy_And_Sell 1.svg']} alt="" className='ml-auto h-32' />

                                <div className='text-left'>
                                    <span className='block mb-4 text-lg !font-normal'>Buy and Sell</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-4/12'>
                            <div className='item flex flex-col w-11/12 mb-16 p-10 !ml-0 mr-3 lg:mr-0'>
                                <img src={images['Trade 1.svg']} alt="" className='ml-auto h-32' />

                                <div className='text-left'>
                                    <span className='block mb-4 text-lg !font-normal'>Trade</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-4/12'>
                            <div className='item flex flex-col w-11/12 mb-16 p-10 !ml-0 mr-3 lg:mr-0'>
                                <img src={images['Oxhain_Earn 1.svg']} alt="" className='ml-auto h-32' />

                                <div className='text-left'>
                                    <span className='block mb-4 text-lg !font-normal'>Oxhain Earn</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-4/12'>
                            <div className='item flex flex-col w-11/12 mb-16 p-10 !ml-0 mr-3 lg:mr-0'>
                                <img src={images['Security_Tips 1.svg']} alt="" className='ml-auto h-32' />

                                <div className='text-left'>
                                    <span className='block mb-4 text-lg !font-normal'>Security Tips</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <Title01 className="block text-left my-9 text-xs md:text-4xl">All Topics</Title01>
            </div>

            <div className="container flex flex-row flex-wrap justify-between font-light pb-7 text-sm lg:text-base">
                <div className="flex flex-col w-full md:w-auto">
                    <div className="flex flex-row mt-4 text-left">
                        <span className="mr-3">i</span>
                        <span>Account Functions</span>
                    </div>
                    <div className="flex flex-row mt-4 text-left">
                        <span className="mr-3">i</span>
                        <span>Crypto Deposit/Withdrawal</span>
                    </div>
                    <div className="flex flex-row mt-4 text-left">
                        <span className="mr-3">i</span>
                        <span>Finance</span>
                    </div>
                    <div className="flex flex-row mt-4 text-left">
                        <span className="mr-3">i</span>
                        <span>NFT</span>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-auto">
                    <div className="flex flex-row mt-4 text-left">
                        <span className="mr-3">i</span>
                        <span>Tutorial</span>
                    </div>
                    <div className="flex flex-row mt-4 text-left">
                        <span className="mr-3">i</span>
                        <span>Buy Crypto</span>
                    </div>
                    <div className="flex flex-row mt-4 text-left">
                        <span className="mr-3">i</span>
                        <span>API</span>
                    </div>
                    <div className="flex flex-row mt-4 text-left">
                        <span className="mr-3">i</span>
                        <span>VIP</span>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-auto">
                    <div className="flex flex-row mt-4 text-left">
                        <span className="mr-3">i</span>
                        <span>Oxhain Fan Token</span>
                    </div>
                    <div className="flex flex-row mt-4 text-left">
                        <span className="mr-3">i</span>
                        <span>Spot & Margin Trading</span>
                    </div>
                    <div className="flex flex-row mt-4 text-left">
                        <span className="mr-3">i</span>
                        <span>Security</span>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-auto">
                    <div className="flex flex-row mt-4 text-left">
                        <span className="mr-3">i</span>
                        <span>Oxhain Earn</span>
                    </div>
                    <div className="flex flex-row mt-4 text-left">
                        <span className="mr-3">i</span>
                        <span>Crypto Derivatives</span>
                    </div>
                    <div className="flex flex-row mt-4 text-left">
                        <span className="mr-3">i</span>
                        <span>Other Topics</span>
                    </div>
                </div>
            </div>

            <div className='container mb-24'>
                <Title01 className="block text-left my-9 text-xs md:text-4xl">Read More</Title01>

                <div className='flex flex-row flex-wrwap mt-16'>
                    <div className='flex flex-row items-center w-6/12'>
                        <img className='w-80 h-56' src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div className='flex flex-col text-left px-6'>
                            <span className='text-xl !font-normal'>Oxhain Academy</span>
                            <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique amet ultrices aliquam magna lectus vitae. </p>

                            <a href="#" className='flex flex-row flex-wrap items-center'>
                                <span className='text53 text-sm mr-2'>Learn More</span>
                                <img src={images['right-arrow.svg']} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className='flex flex-row items-center w-6/12'>
                        <img className='w-80 h-56' src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div className='flex flex-col text-left px-6'>
                            <span className='text-xl !font-normal'>Oxhain Academy</span>
                            <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique amet ultrices aliquam magna lectus vitae. </p>

                            <a href="#" className='flex flex-row flex-wrap items-center'>
                                <span className='text53 text-sm mr-2'>Learn More</span>
                                <img src={images['right-arrow.svg']} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </OxhainServiceFaq>
    )
}

export default ServiceFaq;