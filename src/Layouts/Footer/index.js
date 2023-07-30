import React from "react";
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { getContactUs, getProducts, getService, getBusiness, getLegal } from './data';
import {ReactComponent as LinkedinIco} from '../../Assets/Icons/Footer/linkedin.svg';
import {ReactComponent as TwitterIco} from '../../Assets/Icons/Footer/twitter.svg';
import {ReactComponent as InstagramIco} from '../../Assets/Icons/Footer/instagram.svg';
import {ReactComponent as MediumIco} from '../../Assets/Icons/Footer/medium.svg';
import {ReactComponent as YoutubeIco} from '../../Assets/Icons/Footer/youtube.svg';
import {ReactComponent as AntIco} from '../../Assets/Icons/Footer/ant.svg';
import {ReactComponent as TelegramIco} from '../../Assets/Icons/Footer/telegram.svg';
import ForAndroidPhone from '../../Assets/Images/Footer/for-android-phone.png';
import ForIosPhone from '../../Assets/Images/Footer/for-ios-phone.png';
import { OxhainFooter, Title } from "./Footer.styled";
import { useLocation, Link } from "react-router-dom";
import { setActiveTabIndex } from "../../Store/Slices/ClientInfoSlice";
import useWindowSize from "../../Hooks/useWindowSize";

const FooterBar = () => {
  const [isActiveIndex, setIsActiveIndex] = React.useState();

  const windowSize = useWindowSize();
  const isWideScreen = windowSize.width >= 768;

  const handleChangeActiveIndex = (index) => {
    if(isActiveIndex === index) return setIsActiveIndex(-1);
    setIsActiveIndex(index);
  }

  // Hide footer is this pages
  const location = useLocation();
  if(location.pathname === '/basic-trade' || location.pathname === '/advanced-trade' || location.pathname === '/fixed-trade') return;

 
  
  return (
    <OxhainFooter id="footer" className="flex flex-col font-prompt">
        <Box
          className='mobile:pt-8 pt-16 mobile:mb-12 mb-20'
          sx={{
            width: '100%',
            
          }}
        >
          <div className="flex mobile:flex-col tablet:flex-row ipad:flex-row laptop:flex-row desktop:flex-row container mx-auto mobile:px-5 tablet:px-5 ipad:px-2 laptop:px-2 desktop:px-2 w-full justify-between">
            <div className="grid mobile:grid-cols-1 ipad:grid-cols-3 tablet:grid-cols-3 laptop:grid-cols-5 desktop:grid-cols-5 ipad:gap-8 tablet:gap-8 laptop:gap-22 desktop:gap-36 justify-between items-start w-full">
              <div className="flex flex-col justify-start items-start">
                  <Title className={'mobile:mb-5 tablet:mb-5 ipad:mb-8 laptop:mb-11 desktop:mb-11 mobile:text-[16px] text-xl text-left font-medium w-full justify-between flex desktop:pointer-events-none'} onClick={() => handleChangeActiveIndex(0)}>
                    Contact Us
                    {isActiveIndex === 0 ? (
                      <div className="mobile:flex tablet:hidden ipad:hidden laptop:hidden desktop:hidden"><RemoveIcon /></div>
                    ) : (
                      <div className="mobile:flex tablet:hidden ipad:hidden laptop:hidden desktop:hidden"><AddIcon /></div>
                    )}
                  </Title>
                  {(() => {
                    if (isWideScreen) {
                      return(
                        <ul className={`text-left moblie:text-xs text-sm font-normal`}>
                            {getContactUs.map((data, key) => {
                              return (
                                  <li key={key} className='mb-5'><Link to={data.link} underline="none">{data.text}</Link></li>
                              );
                            })}
                        </ul>
                      );
                    }
                  })()}
                  {isActiveIndex === 0 ? (
                    <ul className={`text-left moblie:text-xs text-sm font-normal`}>
                        {getContactUs.map((data, key) => {
                          return (
                              <li key={key} className='mb-5'><Link to={data.link} underline="none">{data.text}</Link></li>
                          );
                        })}
                    </ul>
                  ) : ''}
              </div>
              <div className="flex flex-col justify-start items-start">
                  <Title className={'mobile:mb-5 tablet:mb-5 ipad:mb-8 laptop:mb-11 desktop:mb-11 mobile:text-[16px] text-xl text-left font-medium w-full justify-between flex desktop:pointer-events-none'} onClick={() => handleChangeActiveIndex(1)}>
                    Products
                    {isActiveIndex === 1 ? (
                      <div className="mobile:flex tablet:hidden ipad:hidden laptop:hidden desktop:hidden"><RemoveIcon /></div>
                    ) : (
                      <div className="mobile:flex tablet:hidden ipad:hidden laptop:hidden desktop:hidden"><AddIcon /></div>
                    )}
                  </Title>
                  {(() => {
                    if (isWideScreen) {
                      return(
                        <ul className={`text-left moblie:text-xs text-sm font-normal`}>
                            {getProducts.map((data, key) => {
                              return (
                                  <li key={key} className='mb-5'><Link to={data.link} underline="none">{data.text}</Link></li>
                              );
                            })}
                        </ul>
                      );
                    }
                  })()}
                  {isActiveIndex === 1 ? (
                    <ul className={`text-left moblie:text-xs text-sm font-normal`}>
                        {getProducts.map((data, key) => {
                          return (
                              <li key={key} className='mb-5'><Link to={data.link} underline="none">{data.text}</Link></li>
                          );
                        })}
                    </ul>
                  ) : ''}
              </div>
              <div className="flex flex-col justify-start items-start">
                  <Title className={'mobile:mb-5 tablet:mb-5 ipad:mb-8 laptop:mb-11 desktop:mb-11 mobile:text-[16px] text-xl text-left font-medium w-full justify-between flex desktop:pointer-events-none'} onClick={() => handleChangeActiveIndex(3)}>
                    Service
                    {isActiveIndex === 3 ? (
                      <div className="mobile:flex tablet:hidden ipad:hidden laptop:hidden desktop:hidden"><RemoveIcon /></div>
                    ) : (
                      <div className="mobile:flex tablet:hidden ipad:hidden laptop:hidden desktop:hidden"><AddIcon /></div>
                    )}
                  </Title>
                  {(() => {
                    if (isWideScreen) {
                      return(
                        <ul className={`text-left moblie:text-xs text-sm font-normal`}>
                            {getService.map((data, key) => {
                              return (
                                  <li key={key} className='mb-5'><Link to={data.link} underline="none">{data.text}</Link></li>
                              );
                            })}
                        </ul>
                      );
                    }
                  })()}
                  {isActiveIndex === 3 ? (
                    <ul className={`text-left moblie:text-xs text-sm font-normal`}>
                        {getService.map((data, key) => {
                          return (
                              <li key={key} className='mb-5'><Link to={data.link} underline="none">{data.text}</Link></li>
                          );
                        })}
                    </ul>
                  ) : ''}
              </div>
              <div className="flex flex-col justify-start items-start">
                  <Title className={'mobile:mb-5 tablet:mb-5 ipad:mb-8 laptop:mb-11 desktop:mb-11 mobile:text-[16px] text-xl text-left font-medium w-full justify-between flex desktop:pointer-events-none'} onClick={() => handleChangeActiveIndex(4)}>
                    Business
                    {isActiveIndex === 4 ? (
                      <div className="mobile:flex tablet:hidden ipad:hidden laptop:hidden desktop:hidden"><RemoveIcon /></div>
                    ) : (
                      <div className="mobile:flex tablet:hidden ipad:hidden laptop:hidden desktop:hidden"><AddIcon /></div>
                    )}
                  </Title>
                  {(() => {
                    if (isWideScreen) {
                      return(
                        <ul className={`text-left moblie:text-xs text-sm font-normal`}>
                            {getBusiness.map((data, key) => {
                              return (
                                  <li key={key} className='mb-5'><Link to={data.link} underline="none">{data.text}</Link></li>
                              );
                            })}
                        </ul>
                      );
                    }
                  })()}
                  {isActiveIndex === 4 ? (
                    <ul className={`text-left moblie:text-xs text-sm font-normal`}>
                        {getBusiness.map((data, key) => {
                          return (
                              <li key={key} className='mb-5'><Link to={data.link} underline="none">{data.text}</Link></li>
                          );
                        })}
                    </ul>
                  ) : ''}
              </div>
              <div className="flex flex-col justify-start items-start">
                  <Title className={'mobile:mb-5 tablet:mb-5 ipad:mb-8 laptop:mb-11 desktop:mb-11 mobile:text-[16px] text-xl text-left font-medium w-full justify-between flex desktop:pointer-events-none'} onClick={() => handleChangeActiveIndex(5)}>
                    Legal
                    {isActiveIndex === 5 ? (
                      <div className="mobile:flex tablet:hidden ipad:hidden laptop:hidden desktop:hidden"><RemoveIcon /></div>
                    ) : (
                      <div className="mobile:flex tablet:hidden ipad:hidden laptop:hidden desktop:hidden"><AddIcon /></div>
                    )}
                  </Title>
                  {(() => {
                    if (isWideScreen) {
                      return(
                        <ul className={`text-left moblie:text-xs text-sm font-normal`}>
                            {getLegal.map((data, key) => {
                              return (
                                  <li key={key} className='mb-5'><Link to={data.link} underline="none">{data.text}</Link></li>
                              );
                            })}
                        </ul>
                      );
                    }
                  })()}
                  {isActiveIndex === 5 ? (
                    <ul className={`text-left moblie:text-xs text-sm font-normal`}>
                        {getLegal.map((data, key) => {
                          return (
                              <li key={key} className='mb-5'><Link to={data.link} underline="none">{data.text}</Link></li>
                          );
                        })}
                    </ul>
                  ) : ''}
                  <div className='flex flex-row mobile:mt-3 mt-8'>
                      <div className='flex flex-col mr-3'><Title className='text-xs text-left mb-3 font-medium'>For Android:</Title><img src={ForAndroidPhone} alt={ForAndroidPhone} className="w-max" /></div>
                      <div className='flex flex-col ml-3'><Title className='text-xs text-left mb-3 font-medium'>For Ios:</Title><img src={ForIosPhone} alt={ForIosPhone} className="w-max" /></div>
                  </div>
              </div>
            </div>
          </div>
        </Box>
        <div className='copyright'>
          <p className='py-3 text-base font-normal text-[#FFFFFF] z-10 text-center'>Oxhain 2022</p>
        </div>
    </OxhainFooter>
  );
};

export default FooterBar;