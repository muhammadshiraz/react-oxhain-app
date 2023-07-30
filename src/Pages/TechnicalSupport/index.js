import React from "react";
import { Link } from "react-router-dom";
import LogoBlack from '../../Assets/Images/TechnicalSupport/logo-black.png';
import OxhainBanner from "../../Components/Banner/Banner01";
import {
    OxhainTechnicalSupport,
} from './TechnicalSupport.styled';

const MediaKit = () => {
    const [Id, setId] = React.useState("");
    const [activeIco, setActiveIco] = React.useState();

    React.useEffect(() => {
        
    }, [Id, activeIco]);

    return (
        <OxhainTechnicalSupport className="flex flex-col w-full mediakit-control-section font-prompt mt-20">
            <OxhainBanner
                className="h-[300px]"
                breadcrumblink01="/technical-support"
                breadcrumb01="Service"
                breadcrumblink02="/technical-support"
                breadcrumb02="Technical Support"
                title="Technical Support"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <div className="flex flex-col container mx-auto px-2 mt-12 mb-16 text-left">
                <div className="flex flex-row">
                    <div className="bg-[#F9F9F9] flex justify-center items-center h-60 mr-4 lg:w-full xl:w-[1024px] 2xl:w-[1024px]">
                        <img src={LogoBlack} alt="Technical Support" className="w-[330px]" />
                    </div>
                    <div className="flex flex-col justify-start items-start ml-4">
                        <h3 className="text14 text-2xl font-medium mb-2">Dear Oxhain Users;</h3>
                        <p className="text14 text-xl font-normal mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur non risus felis vulputate ligula. Neque, quis at nullam eget eget. Dui ut quis augue sit. Cursus tempor morbi elit tincidunt dictum quis.</p>
                        <p className="text14 text-xl font-normal mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur non risus felis vulputate ligula. Neque, quis at nullam eget eget. Dui ut quis augue sit.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start my-12">
                    <div className="flex flex-col justify-center items-start mb-12">
                        <h3 className="text14 text-2xl font-medium mb-6">Technical Support Rande:</h3>
                        <ol className="text14 text-xl font-normal list-decimal ml-8">
                            <li className="mb-1.5 list-decimal">An exception occurred while using the API</li>
                            <li className="mb-1.5 list-decimal">Network connection failure while using Oxhain Products</li>
                            <li className="mb-1.5 list-decimal">API access encountered an error</li>
                            <li className="mb-1.5 list-decimal">Technical coorperation</li>
                            <li className="list-decimal">API optimization recommendations</li>
                        </ol>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                        <h3 className="text14 text-2xl font-medium mb-2">Oxhain Technical Support Channel: <a href="mailto:newapi@oxhain.plus" className="text-[#4949EE] font-normal">newapi@oxhain.plus</a></h3>
                        <h3 className="text14 text-2xl font-medium mb-2">Oxhain API Support Group: <a href="mailto:newapi@oxhain.plus" className="text-[#4949EE] font-normal">newapi@oxhain.plus</a></h3>
                        <h3 className="text14 text-2xl font-medium mb-2">Oxhain API Notification Channel: <a href="mailto:newapi@oxhain.plus" className="text-[#4949EE] font-normal">newapi@oxhain.plus</a></h3>
                        <h3 className="text14 text-2xl font-medium mb-8">Oxhain API Documentation: <a href="mailto:newapi@oxhain.plus" className="text-[#4949EE] font-normal">newapi@oxhain.plus</a></h3>
                    </div>
                    <p className="text14 text-xl font-normal">Thanks for your support!</p>
                </div>
            </div>
        </OxhainTechnicalSupport>
    );
};

export default MediaKit;