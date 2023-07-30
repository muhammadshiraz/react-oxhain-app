import React from 'react';
import OxhainBanner from "../../Components/Banner/Banner01";
import { OxhainP2PTradingServices } from './P2PTradingServices.styled';

const P2PTradingServices = () => {

    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }

    const images = importAll(require.context('../../Assets/Images/ServiceVip/', false, /\.(png|jpe?g|svg)$/));

    return (
        <OxhainP2PTradingServices>
            <OxhainBanner
                className="h-[300px] my-24"
                breadcrumblink01="/service"
                breadcrumb01="Service"
                breadcrumblink02="/service/p2p-trading-services"
                breadcrumb02="P2P Trading Services"
                title="P2P Trading Services"
            />

            <div className='text-2xl bg-gray-400'>
                <div className='container flex flex-row items-center h-16'>
                    <button className='mr-8'>
                        <p className='font-medium'>Express</p>
                    </button>

                    <button>
                        <span className='font-semibold'>P2P</span>
                    </button>

                    <button className='ml-auto'>
                        <span className='font-semibold'>More</span>
                    </button>
                </div>
            </div>
        </OxhainP2PTradingServices>
    )
}

export default P2PTradingServices;