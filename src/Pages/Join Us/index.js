import React, { Fragment } from "react";
import Container from "@mui/material/Container";
import JoinUsEllipseLight from '../../Assets/Images/Banner/Light/joinus-ellipse.png';
import JoinUsEllipseDark from '../../Assets/Images/Banner/Dark/joinus-ellipse.png';
import ViewMoreRightGradientArrow from '../../Assets/Icons/JoinUs/WorkatOxhain/view-more-right-gradient-arrow.svg';
import ViewAllRightGradientArrow from '../../Assets/Icons/JoinUs/ChooseYourTeam/view-all-right-gradient-arrow.svg';
import BottomButtonLine from '../../Assets/Icons/JoinUs/ChooseYourTeam/bottom-button-line.svg';
import Banner from '../../Components/Banner';
import { getWorkAtOxhain, getChooseYourTeam, getJoinUs } from './data';
import ChooseTeamTopLine from '../../Assets/Images/JoinUs/ChooseYourTeam/choose-team-top-line.svg';
import ChooseTeamBg from '../../Assets/Images/JoinUs/ChooseYourTeam/choose-team-bg.svg';
import ChooseTeamBottomLine from '../../Assets/Images/JoinUs/ChooseYourTeam/choose-team-bottom-line.svg';
import DevelopmentLine from '../../Assets/Images/JoinUs/DiversifiedBenefits/development-line.png';
import WelfareLine from '../../Assets/Images/JoinUs/DiversifiedBenefits/welfare-line.png';
import HolidaysLine from '../../Assets/Images/JoinUs/DiversifiedBenefits/holidays-line.png';
import HealthLine from '../../Assets/Images/JoinUs/DiversifiedBenefits/health-line.png';
import BenefitsBonusLine from '../../Assets/Images/JoinUs/DiversifiedBenefits/benefits-bonus-line.png';
import WorkLine from '../../Assets/Images/JoinUs/DiversifiedBenefits/work-line.png';
import MasterEllipse from './Diversified Benefits/Master-Ellipse';
import Development from './Diversified Benefits/Development';
import Welfare from './Diversified Benefits/Welfare';
import Holidays from './Diversified Benefits/Holidays';
import Health from './Diversified Benefits/Health';
import BenefitsBonus from './Diversified Benefits/Benefits-Bonus';
import Work from './Diversified Benefits/Work';
import ApplicationReviewTopLine from '../../Assets/Images/JoinUs/ApplicationReview/application-review-top-line.svg';
import ApplicationReviewBg from '../../Assets/Images/JoinUs/ApplicationReview/application-review-bg.svg';
import ApplicationReviewBottomLine from '../../Assets/Images/JoinUs/ApplicationReview/application-review-bottom-line.svg';
import { 
  OxhainJoinUs,
  WorkatOxhain,
  ChooseYourTeam,
  DiversifiedBenefits,
  ApplicationReview,
  Title,
  Paragraph,
  CardTitle,
  GradientTitle,
  ApplyNow
} from "./JoinUs.styled";

const JoinUs = () => {
    const currentTheme = window.localStorage.getItem('theme');
    const [joinusEllipse, setjoinusEllipse] = React.useState(JoinUsEllipseDark);
    const [isActive, setActive] = React.useState("0");

    function handleTabButtons(id) {
      setActive(id);
    }

    function handleTabsChange() {
      if (isActive === "0") return <MasterEllipse />
      if (isActive === "1") return <Development />
      if (isActive === "2") return <Welfare />
      if (isActive === "3") return <Holidays />
      if (isActive === "4") return <Health />
      if (isActive === "5") return <BenefitsBonus />
      if (isActive === "6") return <Work />
    }

    const listenScrollEvent = () => {
      if (window.scrollY > 2500) {
        return setActive("0");
      } else if (window.scrollY < 2500) {
        return setActive("0");
      }
    };

    React.useEffect(() => {
      if (currentTheme === 'dark') {
        setjoinusEllipse(JoinUsEllipseDark);
      } else if (currentTheme === 'light') {
        setjoinusEllipse(JoinUsEllipseLight);
      }
      document.getElementById("header").style.display = "block";
      document.getElementById("footer").style.display = "block";
      window.addEventListener("scroll", listenScrollEvent);
      return () => window.removeEventListener("scroll", listenScrollEvent);
    },[currentTheme]);

    return (
      <OxhainJoinUs className='mt-[5.3rem]'>
        <Banner
            ellipseUrl={joinusEllipse}
            title="Join Us"
            content="Lorem Ipsum Dolor Sit Amet"
            buttonText="Job Openings"
        />
        <WorkatOxhain className="flex">
          <Container maxWidth="lg">
            <Title className="font-prompt text-center mb-16">Why Work at Oxhain?</Title>
            <div className="flex flex-row justify-center items-center">
            {getWorkAtOxhain.map((items, key) => (
              <div className="workatOxhainCard relative" key={key}>
                <div className="workatOxhainGradientCard flex flex-row items-center">
                  <div className="bg-[#FFFFFF] justify-center w-60"></div>
                  <div className="workatOxhainContent flex flex-col text-left justify-center px-5 w-full">
                    <CardTitle className="font-prompt mb-3 font-medium">{items.title}</CardTitle>
                    <Paragraph className="font-prompt text-base font-light mb-4">{items.paragraph}</Paragraph>
                      <button type="button" className='flex-col viewMoreBtn font-medium mr-auto'>
                          <div className='flex flex-row mr-3'>
                              <span className='font-poppins text-sm'>{items.button}</span>
                              <img className='ml-3' src={ViewMoreRightGradientArrow} alt='Right Gradient Arrow' />
                          </div>
                      </button>
                  </div>
                </div>                
              </div>
            ))}
            </div>
          </Container>          
        </WorkatOxhain>
        <ChooseYourTeam>
          <img src={ChooseTeamTopLine} alt='Choose Team Top Line' className="chooseTeamTopLine" width="100%" />
          <div className="flex flex-row chooseTeamBg"
            style={{
              backgroundImage: `url(${ChooseTeamBg})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left center',
            }}
          >
            <Container maxWidth="lg">
              <Title className="font-prompt text-left mt-20 mb-14">Choose Your Team</Title>
              <div className="flex flex-row">
                {getChooseYourTeam.map((items, key) => (
                  <div key={key} className='chooseteamCard flex flex-row items-center justify-center relative'>
                    <div className='chooseteamGradientCard flex flex-row items-center justify-center'>
                        <CardTitle className="font-prompt">{items.title}</CardTitle>
                    </div>
                  </div>
                ))}
              </div>
              <div className="chooseteam-button-group">
                  <button className='flex flex-col items-center chooseteamViewBtn font-exo font-medium text-2xl' type="button">
                      <div className='flex flex-row mr-3'>
                          <span>View All</span>
                          <img className='ml-3' src={ViewAllRightGradientArrow} alt='Right Gradient Arrow' />
                      </div>
                      <img className='mt-1 bottomButtonLine' src={BottomButtonLine} alt='Bottom Button Line' />
                  </button>
              </div>
            </Container>
          </div>
          <img src={ChooseTeamBottomLine} alt='Choose Team Bottom Line' className="chooseTeamBottomLine" width="100%" />
        </ChooseYourTeam>      
        <DiversifiedBenefits>
          <Container maxWidth="lg">
            <Title className="font-prompt text-center mb-28 w-full flex justify-center">Diversified Benefits</Title>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-col justify-between">
                <Fragment>
                  <button type="button" className={`devLine divBenefitsBtn flex flex-col outline-none justify-evenly`}>
                    <Paragraph onClick={(e) => handleTabButtons(e.target.id)} id="1" className={`${isActive === "1" ? "active" : ""} absolute text-left pl-5 font-prompt text-xl font-normal w-full`}>Development</Paragraph>
                    <img src={DevelopmentLine} alt="Development" width="100%" />
                  </button>
                  <button type="button" className={`welfareLine divBenefitsBtn flex flex-col outline-none justify-evenly`}>
                    <Paragraph onClick={(e) => handleTabButtons(e.target.id)} id="2" className={`${isActive === "2" ? "active" : ""} absolute text-left pl-5 font-prompt text-xl font-normal w-full`}>Welfare</Paragraph>
                    <img src={WelfareLine} alt="Welfare" width="100%" />
                  </button>
                  <button type="button" className="holidaysLine divBenefitsBtn flex flex-col outline-none justify-evenly">
                    <Paragraph onClick={(e) => handleTabButtons(e.target.id)} id="3" className={`${isActive === "3" ? "active" : ""} absolute text-left pl-5 font-prompt text-xl font-normal w-full`}>Holidays</Paragraph>
                    <img src={HolidaysLine} alt="Holidays" width="100%" />
                  </button>
                </Fragment>
              </div>
              <div className="flex flex-col justify-center">
                  {handleTabsChange()}
              </div>
              <div className="flex flex-col justify-between">
                <Fragment>
                  <button type="button" className="healthLine divBenefitsBtn flex flex-col outline-none justify-evenly">
                    <Paragraph onClick={(e) => handleTabButtons(e.target.id)} id="4" className={`${isActive === "4" ? "active" : ""} absolute text-right pr-5 font-prompt text-xl font-normal w-full`}>Health</Paragraph>
                    <img src={HealthLine} alt="Health" width="100%" />
                  </button>
                  <button type="button" className="benefitsLine divBenefitsBtn flex flex-col outline-none justify-evenly">
                    <Paragraph onClick={(e) => handleTabButtons(e.target.id)} id="5" className={`${isActive === "5" ? "active" : ""} absolute text-right pr-5 font-prompt text-xl font-normal w-full`}>Benefits &#38; Bonus</Paragraph>
                    <img src={BenefitsBonusLine} alt="Benefits &#38; Bonus" width="100%" />
                  </button>
                  <button type="button" className="workLine divBenefitsBtn flex flex-col outline-none justify-evenly">
                    <Paragraph onClick={(e) => handleTabButtons(e.target.id)} id="6" className={`${isActive === "6" ? "active" : ""} absolute text-right pr-5 font-prompt text-xl font-normal w-full`}>Work</Paragraph>
                    <img src={WorkLine} alt="Work" width="100%" />
                  </button>
                </Fragment>
              </div>
            </div>
          </Container>
        </DiversifiedBenefits>
        <ApplicationReview className="flex flex-col">
          <img src={ApplicationReviewTopLine} alt='Join Us' className="applicationReviewTopLine" width="100%" />
          <div className="applicationReviewBg flex flex-row"
            style={{
              backgroundImage: `url(${ApplicationReviewBg})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left center',
            }}
          >
            <Container maxWidth="lg">
              <Title className="font-prompt text-center mt-8 mb-12">Join Us</Title>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between mt-3.5">
                  {getJoinUs.map((items, key) => (
                      <div key={key} id={items.id} className="flex flex-col h-full justify-center items-center"
                        style={{
                          backgroundImage: `url(${items.line})`,
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: `${items.lineposition}`,
                          width: '385px',
                          height: '300px'
                        }}
                      >
                        <GradientTitle className="text-center font-prompt font-extralight w-full">{items.title}</GradientTitle>
                        <div className="flex flex-col justify-center items-center">
                          <Paragraph className="text-center font-prompt text-1xl font-normal w-full">{items.paragraph}</Paragraph>
                        </div>
                      </div>
                  ))}
                </div>
                <ApplyNow type='button' className='mx-auto mt-12'><span>Apply Now</span></ApplyNow>
              </div>
            </Container>
          </div>
          <img src={ApplicationReviewBottomLine} alt='Join Us' className="applicationReviewBottomLine" width="100%" />
        </ApplicationReview>
      </OxhainJoinUs>
    );
};

export default JoinUs;