import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import RightWhiteArrow from "../../Assets/Icons/Hero/right-white-arrow.svg";
import OxhainEllipseLight from '../../Assets/Images/Hero/Light/oxhain-ellipse.svg';
import OxhainEllipseDark from '../../Assets/Images/Hero/Dark/oxhain-ellipse.svg';
import HeroightVector from '../../Assets/Images/Hero/hero-light-vector.png';
import { OxhainHero, Title, Paragraph, OxhainEllipse } from "./Hero.styled";

const Hero = () => {
  const currentTheme = window.localStorage.getItem('theme');
  const [oxhainEllipse, setoxhainEllipse] = useState(OxhainEllipseDark);

  useEffect(() => {
    if (currentTheme === 'dark') {
      setoxhainEllipse(OxhainEllipseDark);
    } else if (currentTheme === 'light') {
      setoxhainEllipse(OxhainEllipseLight);
    }
  },[currentTheme]);

  return (
    <OxhainHero className="relative font-prompt">
      <div className="ellipseGreen absolute mobile:hidden"></div>
      <Box
        className="h-full flex justify-center items-center py-12"
        sx={{
          width: "100%",
        }}
      >
        <div className="flex mobile:flex-col tablet:flex-row ipad:flex-row laptop:flex-row desktop:flex-row container mx-auto mobile:px-5 tablet:px-5 ipad:px-2 laptop:px-2 desktop:px-2 w-full justify-between">
            <div className="flex mobile:flex-col-reverse tablet:flex-col-reverse mobile:flex-col tablet:flex-col flex-row items-center">
              <div className="flex justify-start relative mobile:mt-5 tablet:mt-5">
                {/* <OxhainEllipse className='oxhainEllipse absolute top-0 right-0'><img src={oxhainEllipse} alt="Oxhain Ellipse" width="150px"/></OxhainEllipse> */}
                <div className="flex flex-col heroContent mobile:text-[32px] ipad:text-[58px] tablet:text-[58px] laptop:text-[62px] text-[80px] text-left mobile:text-center">
                  <Title className="heroTitle font-bold">Join The Digital</Title>
                  <Title className="heroTitle font-bold">Cryptocurrency</Title>
                  <Title className="heroTitle font-bold">Revolution.</Title>
                  <Paragraph className="font-light mobile:text-sm ipad:text-sm laptop:text-base text-xl heroSub mb-10 mt-3">
                    Oxhain where you can buy, sell &amp; trade crytpocurrencies{" "}
                    <br /> with amazing ease, confidence and trust. Oxhain is
                    the easiest <br /> place to trade in cryptocurrency. Sign up
                    today and get started <br /> with your journey in trading
                    world.
                  </Paragraph>
                  <div className="flex mobile:flex-col flex-row w-max" id="heroEmailParallelogram">
                    <div className="mr-1 heroEmailParallelogramInput h-[60px] w-full">
                      <input
                        refs="email"
                        className="outline-0"
                        type="email"
                        size="30"
                        placeholder="enter your email address"
                      />
                    </div>
                    <button type="button" className="w-full mobile:mt-3">
                      <img src={RightWhiteArrow} alt="Arrow Right" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center relative">
                <img src={HeroightVector} className="z-10 mobile:w-[70%] tablet:w-[70%]" alt="Join The Digital Cryptocurrency Revolution" />
              </div>
            </div>
        </div>
      </Box>
      <div className="ellipsePurple absolute mobile:hidden"></div>
      <div className="ellipseYellow absolute mobile:hidden"></div>
    </OxhainHero>
  );
};

export default Hero;