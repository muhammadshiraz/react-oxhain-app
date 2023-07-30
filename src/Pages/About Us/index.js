import * as React from 'react';
import Container from "@mui/material/Container";
import { getOxhainNEL } from "./data";
import AboutOxhainEllipseLight from '../../Assets/Images/AboutUs/AboutOxhain/Light/about-oxhain-ellipse.png';
import AboutOxhainEllipseDark from '../../Assets/Images/AboutUs/AboutOxhain/Dark/about-oxhain-ellipse.png';
import AboutUsBg from '../../Assets/Images/AboutUs/Banner/about-us-bg.jpg';
import BgBanner from '../../Components/Bg Banner';
import OxhainNELTopLine from '../../Assets/Images/AboutUs/OxhainNEL/oxhain-nel-top-line.svg';
import OxhainNELBottomLine from '../../Assets/Images/AboutUs/OxhainNEL/oxhain-nel-bottom-line.svg';
import {ReactComponent as PlusVector} from '../../Assets/Images/AboutUs/OxhainNEL/plus-vector.svg';
import OxhainLogo from '../../Assets/Images/AboutUs/FourPrinciplesofOxhain/oxhain-logo.png';
import FpoLeftVector from '../../Assets/Images/AboutUs/FourPrinciplesofOxhain/fpo-left-vector.png';
import FpoRightVector from '../../Assets/Images/AboutUs/FourPrinciplesofOxhain/fpo-right-vector.png';
import ViewMoreRightGradientArrow from '../../Assets/Icons/AboutUs/FourPrinciplesofOxhain/view-more-right-gradient-arrow.svg';
import OxhainRoadMapLine from '../../Assets/Images/AboutUs/OxhainRoadMap/oxhain-road-map-line.png';
import DotEllipse from '../../Assets/Images/AboutUs/OxhainRoadMap/dot-ellipse.svg';
import ActiveDotEllipse from '../../Assets/Images/AboutUs/OxhainRoadMap/active-dot-ellipse.svg';
import DotEllipseActiveLine from '../../Assets/Images/AboutUs/OxhainRoadMap/dot-ellipse-active-line.png';

import EcosystemTopLine from '../../Assets/Images/AboutUs/Ecosystem/ecosystem-top-line.svg';
import EcosystemBottomLine from '../../Assets/Images/AboutUs/Ecosystem/ecosystem-bottom-line.svg';

import EcosystemParentClockBg from '../../Assets/Images/AboutUs/Ecosystem/ecosystem-parent-clock-bg.svg';
import EcosystemParentClockContentBg from '../../Assets/Images/AboutUs/Ecosystem/ecosystem-parent-clock-content-bg.svg';
import EcosystemClockLogo from '../../Assets/Images/AboutUs/Ecosystem/ecosystem-clock-logo.png';
import EcosystemChildClockBg from '../../Assets/Images/AboutUs/Ecosystem/ecosystem-child-clock-bg.svg';
import EcosystemChildClockContentBg from '../../Assets/Images/AboutUs/Ecosystem/ecosystem-child-clock-content-bg.svg';

import OxhainIco from './Ecosystem/Parent Clock/OxhainIco';
import Oxhain from './Ecosystem/Parent Clock/Oxhain';
import AcademyIco from './Ecosystem/Parent Clock/AcademyIco';
import Academy from './Ecosystem/Parent Clock/Academy';
import LabIco from './Ecosystem/Parent Clock/LabIco';
import Lab from './Ecosystem/Parent Clock/Lab';

import SecurityIco from './Ecosystem/Child Clock/SecurityIco';
import Security from './Ecosystem/Child Clock/Security';
import InfoIco from './Ecosystem/Child Clock/InfoIco';
import Info from './Ecosystem/Child Clock/Info';
import EducationIco from './Ecosystem/Child Clock/EducationIco';
import Education from './Ecosystem/Child Clock/Education';

import EcoTitle from './EcoSysTitle';
import {
    OxhainAboutUs,
    AboutOxhain,
    FourPrinciplesofOxhain,
    OxhainRoadMap,
    Ecosystem,
    OxhainLogoEllipse,
    AboutOxhainEllipse,
    OxhainNEL,
    Title,
    GradientTitle,
    GradientNumber,
    GradientYear,
    Paragraph,
    Number
  } from "./AboutUs.styled";

const AboutUs = () => {
    const currentTheme = window.localStorage.getItem('theme');
    const [aboutOxhainEllipse, setaboutOxhainEllipse] = React.useState(AboutOxhainEllipseLight);
    const [isActive, setActive] = React.useState("4");
    
    const [isEcoTitle, setEcoTitle] = React.useState(<EcoTitle />);

    const [isEcoClockBg, setClockEcoBg] = React.useState(EcosystemParentClockBg);
    const [isEcoChildClockBg, setChildClockEcoBg] = React.useState(EcosystemChildClockBg);

    const [isEcoSysChildClockWidth, setEcoSysChildClockWidth] = React.useState(588);
    const [isEcoSysChildClockHeight, setEcoSysChildClockHeight] = React.useState(660);
    const [isEcoSysChildClockBgTop, setEcoSysChildClockBgTop] = React.useState(38);
    
    const [isEcoChildRotate, setEcoChildRotate] = React.useState(0);
    const [isEcoChildClockRotate, setEcoChildClockRotate] = React.useState(0);

    const [isEcoClockLogoRotate, setEcoClockLogoRotate] = React.useState(0);
    const [isEcoClockLogoMr, setEcoClockLogoMr] = React.useState(0);
    

    const [isEcoRotate, setEcoRotate] = React.useState(0);
    const [isEcoRotateOverflow, setEcoRotateOverflow] = React.useState('hidden');
    const [isEcoClockRotate, setEcoClockRotate] = React.useState(0);

    // Ecosystem Rotate
    const EcoTopRotate = 0;
    const EcoLeftRotate = 330;
    const EcoRightRotate = 330;

    // Ecosystem Clock Rotate
    const EcoClockTopRotate = 0;
    const EcoClockLeftRotate = 300;
    const EcoClockRightRotate = 120;

    const [isTopPosOxhainIco, setTopPosOxhainIco] = React.useState(2.5);
    const [isLeftPosOxhainIco, setLeftPosOxhainIco] = React.useState();

    const [isRightPosAcademyIco, setRightPosAcademyIco] = React.useState(4);
    const [isBottomPosAcademyIco, setBottomPosAcademyIco] = React.useState(10);

    const [isLeftPosLabIco, setLeftPosLabIco] = React.useState(4);
    const [isBottomPosLabIco, setBottomPosLabIco] = React.useState(10);
    const [iszIndexPosLabIco, setzIndexPosLabIco] = React.useState();

    const [isoxhainIco, setoxhainIco] = React.useState(<OxhainIco />);
    const [isacademyIco, setacademyIco] = React.useState(<AcademyIco />);
    const [islabIco, setlabIco] = React.useState(<LabIco />);

    const [issecurityIco, setsecurityIco] = React.useState(<SecurityIco />);
    const [isLeftPosSecurityIco, setLeftPosSecurityIco] = React.useState(3);
    const [isBottomPosSecurityIco, setBottomPosSecurityIco] = React.useState(25);
    const [isSecurityIcoRotate, setSecurityIcoRotate] = React.useState(270);

    const [isinfoIco, setinfoIco] = React.useState(<InfoIco />);
    const [isRightPosInfoIco, setRightPosInfoIco] = React.useState(3);
    const [isBottomPosInfoIco, setBottomPosInfoIco] = React.useState(25);
    const [isInfoIcoRotate, setInfoIcoRotate] = React.useState(90);

    const [iseducationIco, seteducationIco] = React.useState(<EducationIco />);
    const [isRightPosEducationIco, setRightPosEducationIco] = React.useState(16.999);
    const [isBottomPosEducationIco, setBottomPosEducationIco] = React.useState(1.8);
    const [isEducationIcoRotate, setEducationIcoRotate] = React.useState(90);

    function handleInfoIco() {
        // setEcoTitle(<EcoTitle />);
        // setoxhainIco(<OxhainIco />);
        // setacademyIco(<AcademyIco />);
        // setlabIco(<LabIco />);

        // setEcoRotate(270);
        // setEcoClockRotate(360);

        // setLeftPosOxhainIco(24);
        // setRightPosAcademyIco(5);
        // setLeftPosLabIco(5);

        // setClockEcoBg(EcosystemParentClockBg);
        // setChildClockEcoBg(EcosystemChildClockContentBg);
    }

    function handleSecurityIco() {
        setEcoTitle(<EcoTitle />);
        setoxhainIco(<OxhainIco />);
        setacademyIco(<AcademyIco />);
        setlabIco(<LabIco />);
        setsecurityIco(<Security />);
        seteducationIco(<EducationIco />);
        setEducationIcoRotate(32);
        setEcoClockLogoRotate(190);
        setEcoSysChildClockWidth(815);
        setEcoSysChildClockHeight(660);
        setEcoSysChildClockBgTop(-158);
        setEcoRotate(90);
        setEcoClockRotate(360);
        setLeftPosOxhainIco(24);
        setLeftPosLabIco(4);
        setRightPosAcademyIco(4);
        setBottomPosAcademyIco(11);
        setBottomPosLabIco(10);
        setEcoClockLogoMr(15);
        setClockEcoBg(EcosystemParentClockBg);
        setChildClockEcoBg(EcosystemChildClockContentBg);
        setEcoChildClockRotate(270);
        setRightPosEducationIco(10.999);
        setBottomPosEducationIco(12.999);
        setLeftPosSecurityIco(12);
        setBottomPosSecurityIco(28.999);
        setSecurityIcoRotate(60);
        setRightPosInfoIco(36.555);
        setBottomPosInfoIco(13.555);
        setInfoIcoRotate(82);
        setEcoChildRotate(180);
        setEcoRotateOverflow('initial');
        setTopPosOxhainIco(2.5);
    }

    function handleEducationIco() {
        setEcoTitle(<EcoTitle />);
        setoxhainIco(<OxhainIco />);
        setacademyIco(<AcademyIco />);
        setlabIco(<LabIco />);
        seteducationIco(<Education />);
        setsecurityIco(<SecurityIco />);    
        setEcoChildRotate(0);
        setEducationIcoRotate(60);
        setEcoSysChildClockWidth(815);
        setEcoSysChildClockHeight(660);
        setEcoSysChildClockBgTop(157);
        setEcoRotate(270);
        setEcoClockRotate(360);
        setLeftPosOxhainIco(24);
        setTopPosOxhainIco(2.5);
        setOxhainIcoRotate(0);
        setLeftPosLabIco(4);
        setRightPosAcademyIco(4);
        setBottomPosAcademyIco(11);
        setBottomPosLabIco(10);
        setEcoClockLogoMr(15);
        setClockEcoBg(EcosystemParentClockBg);
        setChildClockEcoBg(EcosystemChildClockContentBg);
        setEcoChildClockRotate(90);
        setRightPosEducationIco(10.999);
        setBottomPosEducationIco(3);
        setLeftPosSecurityIco(37);
        setBottomPosSecurityIco(25.999);
        setSecurityIcoRotate(24);
        setRightPosInfoIco(37);
        setBottomPosInfoIco(25.999);
        setInfoIcoRotate(140);
        setEcoRotateOverflow('initial');
        setEcoClockLogoRotate(15);
    }

    const [isOxhainIcoRotate, setOxhainIcoRotate] = React.useState(0);
    const [isAcademyIcoRotate, setAcademyIcoRotate] = React.useState(0);
    const [isLabIcoRotate, setLabIcoRotate] = React.useState(0);
    
    function handleEcoClockLogo() {
        setEcoTitle(<EcoTitle />);
        setEcoRotate(0);
        setEcoClockRotate(0);
        setEcoClockLogoRotate(0);
        setoxhainIco(<OxhainIco />);
        setacademyIco(<AcademyIco />);
        setlabIco(<LabIco />);
        seteducationIco(<EducationIco />);
        setsecurityIco(<SecurityIco />);
        setOxhainIcoRotate(0);
        setAcademyIcoRotate(0);
        setLabIcoRotate(0);
        setEcoSysChildClockWidth(588);
        setEcoSysChildClockHeight(660);
        setEcoSysChildClockBgTop(38);
        setClockEcoBg(EcosystemParentClockBg);
        setTopPosOxhainIco(2.5);
        setLeftPosOxhainIco(24);
        setRightPosAcademyIco(4);
        setBottomPosAcademyIco(10);
        setLeftPosLabIco(4);
        setBottomPosLabIco(10);
        setzIndexPosLabIco(1);
        setLeftPosSecurityIco(3);
        setBottomPosSecurityIco(25);
        setSecurityIcoRotate(270);
        setRightPosInfoIco(3);
        setBottomPosInfoIco(25);
        setInfoIcoRotate(90);
        setRightPosEducationIco(16.999);
        setBottomPosEducationIco(1.8);
        setEducationIcoRotate(90);
        setEcoChildClockRotate(0);
        setEcoClockLogoMr(0);
        setEcoChildRotate(0);
        setChildClockEcoBg(EcosystemChildClockBg);
    }

    function handleOxhainIco() {
        setEcoTitle("");
        setoxhainIco(<Oxhain />);
        setacademyIco(<AcademyIco />);
        setlabIco(<LabIco />);
        seteducationIco(<EducationIco />);
        setsecurityIco(<SecurityIco />);
        setEcoRotate(EcoTopRotate);
        setEcoClockRotate(EcoClockTopRotate);
        setClockEcoBg(EcosystemParentClockContentBg);        
        setTopPosOxhainIco(2.5);
        setLeftPosOxhainIco(0);
        setRightPosAcademyIco(8);
        setBottomPosAcademyIco(8.999);
        setLeftPosLabIco(8);
        setBottomPosLabIco(8.999);
        setzIndexPosLabIco(1);
        setEcoSysChildClockWidth(495);
        setEcoSysChildClockBgTop(85);
        setOxhainIcoRotate(0);
        setEcoClockLogoRotate(0);
        setBottomPosSecurityIco(20.999);
        setBottomPosInfoIco(20.999);        
        setSecurityIcoRotate(270);
        setRightPosEducationIco(13.999);
        setBottomPosEducationIco(1.8);
        setEducationIcoRotate(90);        
        setChildClockEcoBg(EcosystemChildClockBg);
        setEcoRotateOverflow('hidden');
        setLeftPosSecurityIco(3);
        setEcoChildClockRotate(0);
        setEcoClockLogoMr(0);
        setInfoIcoRotate(90);
        setEcoChildRotate(0);
        setRightPosInfoIco(3);
        setLabIcoRotate(0);
    }

    function handleAcademyIco() {
        setEcoTitle(<EcoTitle />);
        setoxhainIco(<OxhainIco />);
        setacademyIco(<Academy />);
        seteducationIco(<EducationIco />);
        setsecurityIco(<SecurityIco />);
        setlabIco(<LabIco />);
        setEcoRotate(EcoRightRotate);
        setEcoClockRotate(EcoClockRightRotate);
        setClockEcoBg(EcosystemParentClockContentBg);
        setTopPosOxhainIco(2.5);
        setLeftPosOxhainIco(20);
        setRightPosAcademyIco(4);
        setBottomPosAcademyIco(10);
        setLeftPosLabIco(3.5);
        setBottomPosLabIco(16.5);
        setzIndexPosLabIco(1);
        setAcademyIcoRotate(0);
        setEcoSysChildClockWidth(495);
        setEcoSysChildClockBgTop(85);
        setEcoClockLogoRotate(260);
        setBottomPosSecurityIco(20.999);
        setSecurityIcoRotate(270);
        setBottomPosInfoIco(20.999);
        setRightPosEducationIco(13.999);
        setBottomPosEducationIco(1.8);
        setEducationIcoRotate(90);
        setEcoClockLogoMr(0);
        setChildClockEcoBg(EcosystemChildClockBg);
        setEcoRotateOverflow('hidden');
        setLeftPosSecurityIco(3);
        setEcoChildClockRotate(0);
        setInfoIcoRotate(90);
        setEcoChildRotate(0);
        setRightPosInfoIco(3);
        setLabIcoRotate(0);
    }

    function handleLabIco() {
        setEcoTitle(<EcoTitle />);
        setoxhainIco(<OxhainIco />);
        setacademyIco(<AcademyIco />);
        seteducationIco(<EducationIco />);
        setsecurityIco(<SecurityIco />);
        setlabIco(<Lab />);
        setEcoRotate(EcoLeftRotate);
        setEcoClockRotate(EcoClockLeftRotate);
        setClockEcoBg(EcosystemParentClockContentBg);
        
        setTopPosOxhainIco(17);
        setLeftPosOxhainIco(44);
        setOxhainIcoRotate(45);

        setRightPosAcademyIco(18);
        setBottomPosAcademyIco(2.5);
        setLeftPosLabIco(4.5);
        setBottomPosLabIco(27.8);
        setzIndexPosLabIco(-1);
        setEcoSysChildClockWidth(495);
        setEcoSysChildClockBgTop(85);
        setAcademyIcoRotate(45);
        setLabIcoRotate(0);
        setEcoClockLogoRotate(90);
        setBottomPosSecurityIco(20.999);
        setSecurityIcoRotate(90);
        setBottomPosInfoIco(20.999);
        setInfoIcoRotate(90);
        setRightPosEducationIco(13.999);
        setBottomPosEducationIco(1.8);
        setEducationIcoRotate(90);
        setEcoClockLogoMr(0);
        setChildClockEcoBg(EcosystemChildClockBg);
        setEcoRotateOverflow('hidden');
        setLeftPosSecurityIco(3);
        setEcoChildClockRotate(0);
        setEcoChildRotate(0);
        setRightPosInfoIco(3);
    }

    function handleTabButtons(event) {
        setActive(event.target.id);
    }

    React.useEffect(() => {
        if (currentTheme === 'dark') {
            setaboutOxhainEllipse(AboutOxhainEllipseDark);
        } else if (currentTheme === 'light') {
            setaboutOxhainEllipse(AboutOxhainEllipseLight);
        }
        document.getElementById("header").style.display = "block";
        document.getElementById("footer").style.display = "block";
      },[
        isActive, 
        isEcoRotate,
        isEcoRotateOverflow,
        isEcoClockRotate,
        currentTheme, 
        isoxhainIco,
        isOxhainIcoRotate,
        isacademyIco,
        isAcademyIcoRotate,
        islabIco,
        isLabIcoRotate,
        isEcoClockBg,
        isTopPosOxhainIco,
        isRightPosAcademyIco,
        isBottomPosAcademyIco,
        isLeftPosLabIco,
        isBottomPosLabIco,
        isEcoSysChildClockWidth,
        isEcoSysChildClockHeight,
        isEcoSysChildClockBgTop,
        isEcoChildRotate,
        isEcoChildClockRotate,
        isEcoClockLogoRotate,
        isEcoClockLogoMr,
        issecurityIco,
        isLeftPosSecurityIco,
        isBottomPosSecurityIco,
        isSecurityIcoRotate,
        isinfoIco,
        isRightPosInfoIco,
        isBottomPosInfoIco,
        isInfoIcoRotate,
        iseducationIco,
        isRightPosEducationIco,
        isBottomPosEducationIco,
        isEducationIcoRotate,
        isEcoChildClockBg
    ]);

    return (
        <OxhainAboutUs className='mt-[5.3rem]'>
            <BgBanner
                aboutusbg={AboutUsBg}
                title="About Us"
                content="Lorem Ipsum Dolor Sit Amet"
            />
            <AboutOxhain className="flex">
                <Container maxWidth="lg">
                    <div className="flex flex-row">
                        <div className="flex flex-row w-3/6"></div>
                        <div className="flex flex-col relative w-3/6">
                            <AboutOxhainEllipse className='aboutOxhainEllipse'><img src={aboutOxhainEllipse} alt="About Oxhain" width='140px' /></AboutOxhainEllipse>
                            <div className="flex flex-col my-16 pr-32">
                                <Title className="font-prompt font-medium text-left mb-3">About Oxhain</Title>
                                <Paragraph className="font-prompt font-normal text-left text-lg leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque gravida sed arcu, feugiat. Sem neque, dolor proin placerat vel elit adipiscing pretium pellentesque. Pellentesque sit amet varius gravida quis. Et id tempus nibh feugiat et. Semper cursus morbi adipiscing phasellus. Amet mi eget sed maecenas integer. Nunc, in ipsum, egestas at lectus proin lobortis. Tempor accumsan id lectus a.</Paragraph>
                            </div>
                        </div>
                    </div>
                </Container>
            </AboutOxhain>
            <OxhainNEL className="relative flex items-center">
                <img src={OxhainNELTopLine} alt='Nationalities Employees Locations' className="oxhainNELTopLine" width="100%" />
                <Container maxWidth="lg">
                    <div className="flex flex-row justify-between">
                        {getOxhainNEL.map((items, key) => (
                            <div key={key} className='flex flex-row items-center justify-center relative'>
                                <div className='flex flex-col items-center justify-center text-center'>
                                    <Number className="font-prompt text-8xl font-light flex flex-row h-32 items-center">{items.number} <PlusVector className="ml-3.5" width="35px" /></Number>
                                    <Paragraph className="text-center font-prompt text-xl font-normal w-full">{items.paragraph}</Paragraph>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
                <img src={OxhainNELBottomLine} alt='Nationalities Employees Locations' className="oxhainNELBottomLine" width="100%" />
            </OxhainNEL>
            <FourPrinciplesofOxhain>
                <Title className="font-prompt font-medium text-center mb-3">Four Principles of Oxhain</Title>
                <Container maxWidth="lg">
                    <div className="flex flex-row mt-20 justify-between">
                        <div className="flex flex-col justify-center px-8"
                            style={{
                                backgroundImage: `url(${FpoLeftVector})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'left center',
                                width: '100%',
                                height: '385px'
                            }}
                        >
                            <GradientTitle className="text-2xl text-left font-prompt font-normal w-full mb-5">User Focused</GradientTitle>
                            <Paragraph className="text-left font-prompt text-base font-light w-full pr-28 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id sit dui ut tempor odio pretium a. Tristique pharetra eget magna tellus pellentesque maecenas orci habitant.</Paragraph>
                            <button type="button" className='flex-col viewMoreBtn font-medium ml-auto pr-28'>
                                <div className='flex flex-row mr-3'>
                                    <span className='font-poppins text-sm'>View More</span>
                                    <img className='ml-3' src={ViewMoreRightGradientArrow} alt='Right Gradient Arrow' />
                                </div>
                            </button>
                        </div>
                        <div className="flex flex-col justify-center mx-3">
                            <OxhainLogoEllipse className="flex flex-col justify-center items-center">
                                <img src={OxhainLogo} alt="Four Principles of Oxhain" />
                            </OxhainLogoEllipse>
                        </div>
                        <div className="flex flex-col justify-center px-8"
                            style={{
                                backgroundImage: `url(${FpoRightVector})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right center',
                                width: '100%',
                                height: '385px'
                            }}
                        >
                            <GradientTitle className="text-left font-prompt font-normal w-full mb-5 pl-28">Transparent</GradientTitle>
                            <Paragraph className="text-left font-prompt text-base font-light w-full pl-28 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst consequat, tellus morbi id quisque ut in nulla in.</Paragraph>
                            <button type="button" className='flex-col viewMoreBtn font-medium ml-auto'>
                                <div className='flex flex-row mr-3'>
                                    <span className='font-poppins text-sm'>View More</span>
                                    <img className='ml-3' src={ViewMoreRightGradientArrow} alt='Right Gradient Arrow' />
                                </div>
                            </button>
                        </div>
                    </div>
                </Container>
            </FourPrinciplesofOxhain>
            <Ecosystem className="relative w-full pt-16 pb-8">
                <img src={EcosystemTopLine} alt='Ecosystem' className="ecosystemTopLine" width="100%" />
                {isEcoTitle}
                <div className='md:scale-75 lg:scale-75 xl:scale-75 2xl:scale-75'>
                    <div className={`flex flex-col justify-center items-center relative mx-auto ecosystem-parent-clock-bg`}
                        style={{
                            height: '813px',
                            maxWidth: '830px',
                            transform: `rotate(${isEcoRotate}deg)`,
                            overflow: `${isEcoRotateOverflow}`,
                        }}
                    >
                        <div className='flex justify-center items-center'
                            style={{
                                position: 'absolute',
                                left: '0',
                                backgroundImage: `url(${isEcoClockBg})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center center',
                                height: '813px',
                                maxWidth: '830px',
                                width: '830px',
                                transform: `rotate(${isEcoClockRotate}deg)`,
                            }} 
                        >

                            <div className='flex flex-col justify-center items-center relative mx-auto ecosystem-child-clock-bg'
                                style={{
                                    height: `${isEcoSysChildClockHeight}px`,
                                    maxWidth: `${isEcoSysChildClockWidth}px`,
                                    width: `${isEcoSysChildClockWidth}px`,
                                    transform: `rotate(${isEcoChildRotate}deg)`,
                                    
                                }}
                            >
                                <div className='flex justify-center items-center'
                                    style={{
                                        position: 'absolute',
                                        left: '0',
                                        backgroundImage: `url(${isEcoChildClockBg})`,
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center center',
                                        height: '100%',
                                        maxWidth: '100%',
                                        width: '100%',
                                        top: `${isEcoSysChildClockBgTop}px`,
                                        transform: `rotate(${isEcoChildClockRotate}deg)`,
                                        
                                    }}                            
                                >
                                    <button type='button'
                                        onClick={handleEcoClockLogo}
                                        style={{
                                            transform: `rotate(${isEcoClockLogoRotate}deg)`,
                                            marginRight: `${isEcoClockLogoMr}rem`
                                        }}
                                    ><img src={EcosystemClockLogo} className='mx-auto' alt="Ecosystem" /></button>
                                </div>
                                <button type='button' onClick={handleSecurityIco} className='securityIco absolute'
                                    style={{
                                        left: `${isLeftPosSecurityIco}rem`,
                                        bottom: `${isBottomPosSecurityIco}rem`,
                                        transform: `rotate(${isSecurityIcoRotate}deg)`
                                    }}
                                >{issecurityIco}</button>
                                <button type='button' onClick={handleInfoIco} className='infoIco absolute'
                                    style={{
                                        right: `${isRightPosInfoIco}rem`,
                                        bottom: `${isBottomPosInfoIco}rem`,
                                        transform: `rotate(${isInfoIcoRotate}deg)`
                                    }}
                                >{isinfoIco}</button>
                                <button type='button' onClick={handleEducationIco} className='educationIco absolute'
                                    style={{
                                        right: `${isRightPosEducationIco}rem`,
                                        bottom: `${isBottomPosEducationIco}rem`,
                                        transform: `rotate(${isEducationIcoRotate}deg)`
                                    }}
                                >{iseducationIco}</button>
                            </div>
                        </div>
                        <button type='button' onClick={handleOxhainIco} className='oxhainIco absolute'
                            style={{
                                top: `${isTopPosOxhainIco}rem`,
                                left: `${isLeftPosOxhainIco}rem`,
                                transform: `rotate(${isOxhainIcoRotate}deg)`,
                                
                            }}
                        >{isoxhainIco}</button>
                        <button type='button' onClick={handleAcademyIco} className='academyIco absolute'
                            style={{
                                right: `${isRightPosAcademyIco}rem`,
                                bottom: `${isBottomPosAcademyIco}rem`,
                                transform: `rotate(${isAcademyIcoRotate}deg)`,
                                
                            }}
                        >{isacademyIco}</button>
                        <button type='button' onClick={handleLabIco} className='labIco absolute'                    
                            style={{
                                left: `${isLeftPosLabIco}rem`,
                                bottom: `${isBottomPosLabIco}rem`,
                                transform: `rotate(${isLabIcoRotate}deg)`,
                                zIndex: `${iszIndexPosLabIco}`
                            }}
                        >{islabIco}</button>
                    </div>
                </div>
                <img src={EcosystemBottomLine} alt='Ecosystem' className="ecosystemBottomLine" width="100%" />
            </Ecosystem>
            <OxhainRoadMap className='relative flex flex-col w-full'>
                <div className='flex flex-col mb-24'>
                    <Title className="font-prompt font-medium text-center bottom-gradient-line w-full pb-2">Oxhain Roadmap</Title>
                </div>
                <div className='absolute flex flex-col w-full h-full inset-0 overflow-hidden'>
                    <div className='dotsEllipse relative top-[32px] z-10'>
                        <div className='flex dotsGridEllipse w-max h-full mx-auto relative'>
                            <div className='flex flex-col justify-end dotEllipseBox z-50'>
                                <div className='flex flex-col relative items-center cursor-pointer'>
                                    <GradientYear className="text-xl font-prompt font-normal dotEllipseBoxTitle text-left pl-1.5 flex items-center">2021</GradientYear>
                                    <img src={DotEllipse} alt="2021" onClick={handleTabButtons} key={1} className={isActive === "1" ? "active" : undefined} id={"1"} />
                                    <div className='dotEllipseBoxXaxis'></div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-end dotEllipseBox z-50'>
                                <div className='flex flex-col relative items-center cursor-pointer'>
                                    <img src={DotEllipse} alt="2021" onClick={handleTabButtons} key={2} className={isActive === "2" ? "active" : undefined} id={"2"} />
                                    <div className='dotEllipseBoxXaxis'></div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-end dotEllipseBox z-50'>
                                <div className='flex flex-col relative items-center cursor-pointer'>
                                <img src={DotEllipse} alt="2021" onClick={handleTabButtons} key={3} className={isActive === "3" ? "active" : undefined} id={"3"} />
                                    <div className='dotEllipseBoxXaxis'></div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-end dotEllipseBox z-50'>
                                <div className='flex flex-col relative items-center cursor-pointer'>
                                    <GradientYear className="text-xl font-prompt font-normal dotEllipseBoxTitle text-left mr-12 activeYear">2022</GradientYear>
                                    <div className='activeYearBdr'></div>
                                    <img src={DotEllipse} alt="2021" onClick={handleTabButtons} key={4} className={isActive === "4" ? "active" : undefined} id={"4"} />
                                    <GradientNumber className="text-base font-prompt font-normal dotEllipseBoxXaxis">1</GradientNumber>
                                </div>
                            </div>
                            <div className='flex flex-col justify-end dotEllipseBox z-50'>
                                <div className='flex flex-col relative items-center cursor-pointer'>
                                <img src={DotEllipse} alt="2021" onClick={handleTabButtons} key={5} className={isActive === "5" ? "active" : undefined} id={"5"} />
                                    <GradientNumber className="text-base font-prompt font-normal dotEllipseBoxXaxis">2</GradientNumber>
                                </div>
                            </div>
                            <div className='flex flex-col justify-end dotEllipseBox z-50'>
                                <div className='flex flex-col relative items-center cursor-pointer'>
                                <img src={DotEllipse} alt="2021" onClick={handleTabButtons} key={6} className={isActive === "6" ? "active" : undefined} id={"6"} />
                                    <GradientNumber className="text-base font-prompt font-normal dotEllipseBoxXaxis">3</GradientNumber>
                                </div>
                            </div>
                            <div className='flex flex-col justify-end dotEllipseBox'>
                                <div className='flex flex-col relative items-center cursor-pointer'>
                                <img src={DotEllipse} alt="2021" onClick={handleTabButtons} key={7} className={isActive === "7" ? "active" : undefined} id={"7"} />
                                    <GradientNumber className="text-base font-prompt font-normal dotEllipseBoxXaxis">4</GradientNumber>
                                </div>
                            </div>
                            <div className='flex flex-col justify-end dotEllipseBox z-50'>
                                <div className='flex flex-col relative items-center cursor-pointer'>
                                    <GradientYear className="text-xl font-prompt font-normal text-left dotEllipseBoxTitle mr-12">2023</GradientYear>
                                    <img src={DotEllipse} alt="2021" onClick={handleTabButtons} key={8} className={isActive === "8" ? "active" : undefined} id={"8"} />
                                    <GradientNumber className="text-base font-prompt font-normal dotEllipseBoxXaxis">5</GradientNumber>
                                </div>
                            </div>
                            <div className='flex flex-col justify-end dotEllipseBox z-50'>
                                <div className='flex flex-col relative items-center cursor-pointer'>
                                <img src={DotEllipse} alt="2021" onClick={handleTabButtons} key={9} className={isActive === "9" ? "active" : undefined} id={"9"} />
                                    <div className='dotEllipseBoxXaxis'></div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-end dotEllipseBox z-50'>
                                <div className='flex flex-col relative items-center cursor-pointer'>
                                <img src={DotEllipse} alt="2021" onClick={handleTabButtons} key={10} className={isActive === "10" ? "active" : undefined} id={"10"} />
                                    <div className='dotEllipseBoxXaxis'></div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-end dotEllipseBox z-50'>
                                <div className='flex flex-col relative items-center cursor-pointer'>
                                <img src={DotEllipse} alt="2021" onClick={handleTabButtons} key={11} className={isActive === "11" ? "active" : undefined} id={"11"} />
                                    <div className='dotEllipseBoxXaxis'></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col dot-ellipse-active-line' style={{
                            backgroundImage: `url(${DotEllipseActiveLine})`,
                            backgroundSize: '100% 100%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center bottom'
                        }}>
                            <GradientYear className="pl-24 pt-8 mb-2 text-xl text-left font-prompt font-normal">2022</GradientYear>
                            <Paragraph className="text-left font-prompt text-base font-light w-full pl-24 mb-5">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Dictumst consequat.</Paragraph>
                        </div>
                    </div>
                    <div className='w-full relative'
                        style={{
                            backgroundImage: `url(${OxhainRoadMapLine})`,
                            backgroundSize: '100% 100%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'left bottom',
                            height: '190.333px'
                        }}
                    />
                </div>
            </OxhainRoadMap>
        </OxhainAboutUs>
    );
};

export default AboutUs;