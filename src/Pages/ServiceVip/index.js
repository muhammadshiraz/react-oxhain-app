import React from 'react';
import OxhainBanner from "../../Components/Banner/Banner01";
import Title01 from '../../Components/Title/Title01';
import Search01 from "../../Components/Search/Search01";
import { OxhainServiceFaq, OxhainServiceVip } from './ServiceVip.styled';
import Button01 from '../../Components/Button/Button01';
import Button02 from '../../Components/Button/Button02';

const ServiceVip = () => {
    const items = {
        wallets: [
            { title: 'Exclusive Fee Rate', description: 'Lorem ipsum dolor sit amet, consectetur.' },
            { title: 'Special VIP for ‘’Whales’’', description: 'Lorem ipsum dolor sit amet, consectetur.' },
            { title: 'Priority Subscription', description: 'Lorem ipsum dolor sit amet, consectetur.' },
            { title: 'Beta Privilega', description: 'Lorem ipsum dolor sit amet, consectetur.' },
            { title: 'API', description: 'Lorem ipsum dolor sit amet, consectetur.' },
            { title: 'Gifts & Benefits', description: 'Lorem ipsum dolor sit amet, consectetur.' },
        ],
        sell: [
            { title: 'Derivatives', description: 'Lorem ipsum dolor sit amet, consectetur.' },
            { title: 'Deposit/Withdrawal', description: 'Lorem ipsum dolor sit amet, consectetur.' },
            { title: 'Margin Loans', description: 'Lorem ipsum dolor sit amet, consectetur.' },
            { title: 'Referral Bonus', description: 'Lorem ipsum dolor sit amet, consectetur.' },
            { title: 'Customer Service', description: 'Lorem ipsum dolor sit amet, consectetur.' },
            { title: 'More Privileges', description: 'Lorem ipsum dolor sit amet, consectetur.' },
        ]
    }

    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }

    const images = importAll(require.context('../../Assets/Images/ServiceVip/', false, /\.(png|jpe?g|svg)$/));

    const effectBoxImage = localStorage.getItem('theme') === 'light' ? images['EffectBox.svg'] : images['EffectBox-Dark.svg'];
    const effectBoxRightImage = localStorage.getItem('theme') === 'light' ? images['EffectBox-Right.svg'] : images['EffectBox-Right-Dark.svg'];

    return (
        <OxhainServiceVip>
            <OxhainBanner
                className="h-[300px] my-24"
                breadcrumblink01="/service"
                breadcrumb01="Service"
                breadcrumblink02="/service/vip"
                breadcrumb02="VIP"
                title="VIP Privilege"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />


            <div className='container flex flex-col lg:flex-row flex-wrap mt-4 mb-16 g:px-0 text-sm xl:text-base'>
                <div className='flex flex-col w-6/12'>
                    {items.wallets.map(item => (
                        <div className='item relative flex flex-row w-full p-16' style={{ backgroundImage: `url(${effectBoxImage})` }}>
                            <img className='w-8 mr-10' src={images['Union.svg']} alt="" />

                            <div className='flex flex-col text-left'>
                                <span className='z-10'>{item.title}</span>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col w-6/12'>
                    {items.sell.map(item => (
                        <div className='item relative flex flex-row w-full p-16' style={{ backgroundImage: `url(${effectBoxRightImage})` }}>
                            <img className='w-10 ml-20 mr-10' src={images['Sell.svg']} alt="" />

                            <div className='flex flex-col text-left'>
                                <span className='z-10'>{item.title}</span>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='background74 w-full py-20 flex flex-row'>
                <div className='w-6/12'></div>

                <div className='flex flex-col w-6/12 text-left'>
                    <span className='text-4xl'>Feel free to contact us to apply for</span>
                    <span className='text-4xl'>Oxhain VIP or if you have any questions</span>
                    <Button02 y={40} buttonClass="w-[240px] rounded mt-8" handleButton={() => window.location.href = "/contact-us"}>
                        <span className='!text-white'>Contact us</span>
                    </Button02>
                </div>
            </div>
        </OxhainServiceVip>
    )
}

export default ServiceVip;