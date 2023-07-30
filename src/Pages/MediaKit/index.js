import React from "react";
import { Link } from "react-router-dom";
import MediakitBg from '../../Assets/Images/MediaKit/mediakit-bg.jpg';
import OxhainBanner from "../../Components/Banner/Banner01";
import {
    OxhainMediaKit,
} from './MediaKit.styled';

const MediaKit = () => {
    const [Id, setId] = React.useState("");
    const [activeIco, setActiveIco] = React.useState();

    React.useEffect(() => {
        
    }, [Id, activeIco]);

    return (
        <OxhainMediaKit className="flex flex-col w-full mediakit-control-section font-prompt mt-20">
            <OxhainBanner
                className="h-[300px]"
                breadcrumblink01="/media-kit"
                breadcrumb01="Contact Us"
                breadcrumblink02="/media-kit"
                breadcrumb02="Media Kit"
                title="Oxhain Media Kit"
            />
            <div className="flex flex-col container mx-auto px-2 mt-12 mb-16 text-left">
                <img src={MediakitBg} alt="Media Kit" className="w-full mb-8" />
                <div className="flex flex-col justify-start items-start mb-8">
                    <h3 className="text-[#4949EE] text-3xl font-medium mb-2">Company Profile</h3>
                    <p className="text14 text-xl font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur non risus felis vulputate ligula. Neque, quis at nullam eget eget. Dui ut quis augue sit. Cursus tempor morbi elit tincidunt dictum quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur non risus felis vulputate ligula. Neque, quis at nullam eget eget. Dui ut quis augue sit. Cursus tempor morbi elit tincidunt dictum quis.</p>
                </div>
                <div className="flex flex-col justify-start items-start mb-8">
                    <h3 className="text-[#4949EE] text-3xl font-medium mb-2">Industry Recognition</h3>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">Tokeninsight:</span> dolor sit amet, consectetur adipiscing elit. In consectetur non risus felis vulputate ligula. Neque, quis at nullam eget eget. Dui ut quis augue sit.</p>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">CoinMarketCap:</span> dolor sit amet, consectetur adipiscing elit. In consectetur non risus felis vulputate ligula. Neque.</p>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">ICO Rating:</span> dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">Forbes Advisor:</span> dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text14 text-xl font-normal"><span className="font-semibold">The Ascent:</span> dolor sit amet, consectetur adipiscing elit. Dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex flex-col justify-start items-start mb-8">
                    <h3 className="text-[#4949EE] text-3xl font-medium mb-2">Oxhain Spot Trading</h3>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">Advenced API:</span> dolor sit amet, consectetur adipiscing elit. In consectetur non risus felis vulputate ligula. Neque, quis at nullam eget eget. Dui ut quis augue sit.</p>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">Efficient Matching Engine:</span> dolor sit amet, consectetur adipiscing elit. In consectetur non risus felis vulputate ligula. Neque.</p>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">High Liquidity:</span> dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">Up to 10x Leverage:</span> dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">Multiple Flat Gateways:</span> dolor sit amet, consectetur adipiscing elit. Dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text14 text-xl font-normal"><span className="font-semibold">Competitive Fees:</span> dolor sit amet, consectetur adipiscing elit. Dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex flex-col justify-start items-start mb-8">
                    <h3 className="text-[#4949EE] text-3xl font-medium mb-2">Oxhain Futures</h3>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">Reasonable Mechanism to Prevent Liquidation:</span> dolor sit amet, consectetur adipiscing elit. In consectetur non risus felis vulputate ligula. Neque, quis at nullam eget eget. Dui ut quis augue sit.</p>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">The World First Lite Version Contract:</span> dolor sit amet, consectetur adipiscing elit. In consectetur non risus felis vulputate ligula. Neque.</p>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">Small Investment, Big Return:</span> dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text14 text-xl font-normal"><span className="font-semibold">High Bonus:</span> dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex flex-col justify-start items-start mb-8">
                    <h3 className="text-[#4949EE] text-3xl font-medium mb-2">Oxhain Earn</h3>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">High Yield:</span> dolor sit amet, consectetur adipiscing elit. In consectetur non risus felis vulputate ligula. Neque, quis at nullam eget eget. Dui ut quis augue sit.</p>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">High Flexibility:</span> dolor sit amet, consectetur adipiscing elit. In consectetur non risus felis vulputate ligula. Neque.</p>
                    <p className="text14 text-xl font-normal"><span className="font-semibold">Multiple Staking Choices:</span> dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex flex-col justify-start items-start mb-8">
                    <h3 className="text-[#4949EE] text-3xl font-medium mb-2">Oxhain Pool</h3>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">Marged Mining/Smart Pool:</span> dolor sit amet, consectetur adipiscing elit. In consectetur non risus felis vulputate ligula. Neque, quis at nullam eget eget. Dui ut quis augue sit.</p>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">Extremely Low Mining Fee:</span> dolor sit amet, consectetur adipiscing elit. In consectetur non risus felis vulputate ligula. Neque.</p>
                    <p className="text14 text-xl font-normal"><span className="font-semibold">Sound Security System:</span> dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex flex-col justify-start items-start mb-8">
                    <h3 className="text-[#4949EE] text-3xl font-medium mb-2">Press Releases</h3>
                    <p className="text14 text-xl font-semibold mb-3">2022</p>
                    <p className="text14 text-xl mb-3"><span className="font-medium border-right-1 pr-2.5 mr-2.5">19 July  2022</span><Link to="/media-kit" className="font-normal text-[#597DFA]">Dolor sit amet, consectetur adipiscing elit.</Link></p>
                    <p className="text14 text-xl mb-3"><span className="font-medium border-right-1 pr-2.5 mr-2.5">10 July  2022</span><Link to="/media-kit" className="font-normal text-[#597DFA]">Dolor sit amet, consectetur adipiscing elit.</Link></p>
                    <p className="text14 text-xl mb-3"><span className="font-medium border-right-1 pr-2.5 mr-2.5">6 July  2022</span><Link to="/media-kit" className="font-normal text-[#597DFA]">Dolor sit amet, consectetur adipiscing elit.</Link></p>
                    <p className="text14 text-xl mb-3"><span className="font-medium border-right-1 pr-2.5 mr-2.5">28 July  2022</span><Link to="/media-kit" className="font-normal text-[#597DFA]">Dolor sit amet, consectetur adipiscing elit.</Link></p>
                    <p className="text14 text-xl mb-3"><span className="font-medium border-right-1 pr-2.5 mr-2.5">15 July  2022</span><Link to="/media-kit" className="font-normal text-[#597DFA]">Dolor sit amet, consectetur adipiscing elit.</Link></p>
                </div>
                <div className="flex flex-col justify-start items-start mb-8">
                    <h3 className="text-[#4949EE] text-3xl font-medium mb-2">Social Media Links</h3>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">Telegram:</span> dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">Facebook:</span> dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">Twitter:</span> dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">Reddit:</span> dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">Youtube:</span> dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text14 text-xl font-normal mb-3"><span className="font-semibold">Medium:</span> dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text14 text-xl font-normal"><span className="font-semibold">Linkedln:</span> dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex flex-col justify-start items-start mb-8">
                    <h3 className="text-[#4949EE] text-3xl font-medium mb-2">Media Assets</h3>
                    <p className="text-xl font-medium text-[#597DFA]">Visit the Oxhain Brand Drive</p>
                </div>
                <div className="flex flex-col justify-start items-start">
                    <h3 className="text-[#4949EE] text-3xl font-medium mb-2">Media Inquiries</h3>
                    <p className="text14 font-normal">For media inquiries, please contact us via email <a href="mailto:media@oxhain.com" className="text-[#597DFA]">media@oxhain.com</a></p>
                </div>
            </div>
        </OxhainMediaKit>
    );
};

export default MediaKit;