import React from "react";
import { Link } from "react-router-dom";
import LogoBlack from '../../Assets/Images/TechnicalSupport/logo-black.png';
import OxhainBanner from "../../Components/Banner/Banner03";
import BannerBg from '../../Assets/Images/Foundation/bannerbg.jpg';
import {
    OxhainFoundation,
} from './Foundation.styled';

const Foundation = () => {
    const [Id, setId] = React.useState("");
    const [activeIco, setActiveIco] = React.useState();

    React.useEffect(() => {
        
    }, [Id, activeIco]);

    return (
        <OxhainFoundation className="flex flex-col w-full foundation-control-section font-prompt mt-20">
            <OxhainBanner
                bgsrc={BannerBg}
                breadcrumblink01="/foundation"
                breadcrumb01="Products"
                breadcrumblink02="/foundation"
                breadcrumb02="Oxhain Foundation"
                title="About the Oxhain Foundation"
                content="Lorem ipsum dolor sit amet, consectetur."
            />
            <div className="flex flex-col container mx-auto px-2 mt-12 mb-16 text-left">
                <div className="flex flex-row">
                    <div className="bg-[#F9F9F9] flex justify-center items-center h-72 mr-4 w-full"></div>
                    <div className="flex flex-col justify-start items-start ml-4 w-full">
                        <p className="text4 text-xl font-normal mb-5">Lorem ipsum dolor sit amet, <Link to="/foundation" className="text-[#4949EE]">Oxhain Foundation</Link> elit. Felis urna est vitae nunc, suspendisse commodo. Cursus sit nec porttitor cum amet, sed interdum elementum.</p>
                        <p className="text4 text-xl font-normal mb-5">A, mi augue mauris facilisis. Vulputate ullamcorper habitasse fringilla nec turpis elementum sed nibh mi. Sollicitudin posuere euismod faucibus porta eget vitae hendrerit purus turpis. Posuere etiam egestas pharetra risus congue malesuada scelerisque diam pretium. Odio lacus mi velit mauris.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start my-12">
                    <div className="flex flex-col justify-center items-start mb-8">
                        <h3 className="text5 text-[40px] font-semibold mb-6">Oxhain Foundation Initiatives</h3>
                        <h5 className="text5 text-2xl font-medium mb-3">Ecosystem Support Program</h5>
                        <p className="text4 text-xl font-normal mb-5">Lorem ipsum dolor sit amet, <Link to="/foundation" className="text-[#4949EE]">Oxhain Foundation</Link> elit. Felis urna est vitae nunc, suspendisse commodo. Cursus sit nec porttitor cum amet, sed interdum elementum.</p>
                        <p className="text4 text-xl font-normal mb-5">A, mi augue mauris facilisis. Vulputate ullamcorper habitasse fringilla nec turpis elementum sed nibh mi. Sollicitudin posuere euismod faucibus porta eget vitae hendrerit purus turpis. Posuere etiam egestas pharetra risus congue malesuada scelerisque diam pretium. Odio lacus mi velit mauris.</p>
                    </div>
                    <div className="flex flex-col justify-center items-start mb-8">
                        <h5 className="text5 text-2xl font-medium mb-3">Devcon</h5>
                        <p className="text4 text-xl font-normal mb-5">Lorem ipsum dolor sit amet, <Link to="/foundation" className="text-[#4949EE]">Oxhain Foundation</Link> elit. Felis urna est vitae nunc, suspendisse commodo. Cursus sit nec porttitor cum amet, sed interdum elementum.</p>
                        <p className="text4 text-xl font-normal mb-5">A, mi augue mauris facilisis. Vulputate ullamcorper habitasse fringilla nec turpis elementum sed nibh mi. Sollicitudin posuere euismod faucibus porta eget vitae hendrerit purus turpis. Posuere etiam egestas pharetra risus congue malesuada scelerisque diam pretium. Odio lacus mi velit mauris.</p>
                    </div>
                    <div className="flex flex-col justify-center items-start mb-8">
                        <h5 className="text5 text-2xl font-medium mb-3">Fellowship Program</h5>
                        <p className="text4 text-xl font-normal mb-5">Lorem ipsum dolor sit amet, <Link to="/foundation" className="text-[#4949EE]">Oxhain Foundation</Link> elit. Felis urna est vitae nunc, suspendisse commodo. Cursus sit nec porttitor cum amet, sed interdum elementum.</p>
                        <p className="text4 text-xl font-normal mb-5">A, mi augue mauris facilisis. Vulputate ullamcorper habitasse fringilla nec turpis elementum sed nibh mi. Sollicitudin posuere euismod faucibus porta eget vitae hendrerit purus turpis. Posuere etiam egestas pharetra risus congue malesuada scelerisque diam pretium. Odio lacus mi velit mauris.</p>
                    </div>
                    <p className="text-xl font-medium underline">
                        <Link to="/foundation" className="text-[#4949EE] flex flex-row items-center">Oxhain Foundation Blog
                            <svg className="ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 0C9.94774 0 9.50002 0.447715 9.50002 1C9.50002 1.55228 9.94774 2 10.5 2H16.238L0.359841 15.2318C-0.0644361 15.5853 -0.12176 16.2159 0.231804 16.6402C0.585368 17.0645 1.21593 17.1218 1.64021 16.7682L18 3.13504V9.50006C18 10.0523 18.4477 10.5001 19 10.5001C19.5523 10.5001 20 10.0523 20 9.50006V1V0H19H10.5ZM1 18C0.447715 18 0 18.4477 0 19C0 19.5523 0.447715 20 1 20L19 20C19.5523 20 20 19.5523 20 19C20 18.4477 19.5523 18 19 18L1 18Z" fill="#4949EE"/>
                            </svg>
                        </Link>
                    </p>
                </div>
            </div>
        </OxhainFoundation>
    );
};

export default Foundation;