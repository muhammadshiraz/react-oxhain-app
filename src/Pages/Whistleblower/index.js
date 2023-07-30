import React from "react";
import OxhainBanner from "../../Components/Banner/Banner01";
import {
    OxhainWhistleblower,
} from './Whistleblower.styled';

const Whistleblower = () => {
    return (
        <OxhainWhistleblower className="flex flex-col w-full whistleblower-control-section font-prompt my-20">
            <OxhainBanner
                className="h-[300px]"
                breadcrumblink01="/whistleblower-contact"
                breadcrumb01="Service"
                breadcrumblink02="/whistleblower-contact"
                breadcrumb02="Whistleblower Contact"
                title="Whistleblower Contact"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <div className="flex flex-col container mx-auto px-2 mt-12 text-left">
                <div className="flex flex-col justify-start items-start">
                    <div className="flex flex-col justify-center items-start mb-12">
                        <h3 className="text14 text-2xl font-medium mb-7">If You Discover Any of The Following:</h3>
                        <ol className="text14 text-xl font-normal list-decimal ml-8">
                            <li className="mb-1.5 list-decimal">Offering/ accepting bribes.</li>
                            <li className="mb-1.5 list-decimal">Fraud or falsification.</li>
                            <li className="mb-1.5 list-decimal">Theft of assets.</li>
                            <li className="mb-1.5 list-decimal">Theft of resources.</li>
                            <li className="list-decimal">Illegal transfer of interests.</li>
                            <li className="list-decimal">Other misconduct.</li>
                        </ol>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                        <p className="text14 text-xl font-normal mb-5">Rewards will be provided to users who inform us of the above. Reward amounts will be determined based on the type and relevance of the information provided. Your personal information will be kept confidential.</p>
                        <p className="text text-xl font-medium">Whisteblower Contact: <a href="mailto:audit@oxhain.com" className="text-[#4949EE] font-normal">audit@oxhain.com</a></p>
                    </div>
                </div>
            </div>
        </OxhainWhistleblower>
    );
};

export default Whistleblower;