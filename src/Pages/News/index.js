import React from "react";
import { Link } from "react-router-dom";
import OxhainBanner from "../../Components/Banner/Banner01";
import Search01 from "../../Components/Search/Search01";
import NewsTicker from "react-advanced-news-ticker";
import All from "./TabsPanel/All";
import Business from "./TabsPanel/Business";
import Markets from "./TabsPanel/Markets";
import Technology from "./TabsPanel/Technology";
import PolicyRegulation from "./TabsPanel/PolicyRegulation";
import { getTopNews, getFlashNews } from './data';
import {
    OxhainNews,
} from './News.styled';

const News = () => {
    const [isActive, setActive] = React.useState("1");

    function handleTabButtons(id) {
        setActive(id);
    }

    function handleTabsChange() {
        if (isActive === "1") return <All />
        if (isActive === "2") return <Business />
        if (isActive === "3") return <Markets />
        if (isActive === "4") return <Technology />
        if (isActive === "5") return <PolicyRegulation />
    }

    return (
        <OxhainNews className="flex flex-col w-full news-control-section font-prompt my-20">
            <OxhainBanner
                className="h-[300px]"
                breadcrumblink01="/news"
                breadcrumb01="Service"
                breadcrumblink02="/news"
                breadcrumb02="News"
                title="News"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                userinput={<div className="mt-6 flex flex-col w-2/4 mx-auto"><Search01 placeholder="Search" /></div>}
            />
            <div className="flex flex-col container mx-auto px-2 mt-12 text-left">
                <div className="flex flex-col w-full border-bottom-line-10 pb-1.5"><h3 className="text5 text-4xl font-semibold w-max border-bottom-line-09">Top News</h3></div>
                <div className="flex flex-row justify-between items-center mt-10">
                    {getTopNews.map((item, key) => (
                        <Link to={item.url} className="background-07 lg:w-[375px] xl:w-[385px] 2xl:w-[470px] h-[300px] ml-2 relative" key={key}>
                            <div className="flex flex-col justify-end bg-white border-2 border-[#4949EE] h-full w-full absolute bottom-2.5 right-2.5 bg-cover" style={{backgroundImage: `url(${item.src})`}}>
                                <div className="flex flex-col w-full h-[70px] font-normal text-base items-center justify-center px-5" style={{backgroundColor: "rgba(0, 0, 0, 0.7)", color: "rgba(255, 255, 255, 0.87)"}}><p >{item.title}</p></div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex flex-row justify-start items-center w-full h-[70px] border-top-line-10 border-bottom-line-10 mt-20">
                    <div className="flex justify-center items-center w-[130px] h-[50px] rounded-sm text5 font-medium text-lg mr-7" style={{backgroundColor: "rgba(152, 178, 255, 0.3)"}}>Flash news</div>
                    <div className="flex flex-col justify-start items-center">
                        <NewsTicker
                            maxRows = {1}
                            speed = {600}
                            duration = {3000}
                            autoStart = {true}
                            pauseOnHover = {false}
                        >
                            {getFlashNews.map((item, key) => (
                                <Link key={key} to={item.url} className="font-normal text-base text5"><span className="mr-3">{item.hours}</span> {item.news}</Link>
                            ))}
                        </NewsTicker>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-row w-full border-bottom-line-10 my-3.5 pb-3.5 text-base">
                        <button type='button' onClick={(e) => handleTabButtons(e.target.id)} id="1" className={`${isActive === "1" ? "active font-semibold" : "font-normal"} flex justify-center items-center relative capitalize mr-4`}>all</button>
                        <button type='button' onClick={(e) => handleTabButtons(e.target.id)} id="2" className={`${isActive === "2" ? "active font-semibold" : "font-normal"} flex justify-center items-center relative capitalize border-left-line-07 mr-4 pl-4`}>Business</button>
                        <button type='button' onClick={(e) => handleTabButtons(e.target.id)} id="3" className={`${isActive === "3" ? "active font-semibold" : "font-normal"} flex justify-center items-center relative capitalize border-left-line-07 mr-4 pl-4`}>Markets</button>
                        <button type='button' onClick={(e) => handleTabButtons(e.target.id)} id="4" className={`${isActive === "4" ? "active font-semibold" : "font-normal"} flex justify-center items-center relative capitalize border-left-line-07 mr-4 pl-4`}>Technology</button>
                        <button type='button' onClick={(e) => handleTabButtons(e.target.id)} id="5" className={`${isActive === "5" ? "active font-semibold" : "font-normal"} flex justify-center items-center relative capitalize border-left-line-07 mr-4 pl-4`}>Policy & Regulation</button>
                    </div>
                    <div className="flex flex-col w-full mt-7">
                        {handleTabsChange()}
                    </div>
                </div>
            </div>
        </OxhainNews>
    );
};

export default News;