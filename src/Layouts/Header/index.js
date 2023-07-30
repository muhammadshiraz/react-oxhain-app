import React, { useState } from "react";
import { func, string } from "prop-types";
import Box from "@material-ui/core/Box";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { elastic as Menu } from "react-burger-menu";
import useWindowSize from "../../Hooks/useWindowSize";
import BurgerIcon from "../../Assets/Icons/Header/menu-bar.png";
import CrossIcon from "../../Assets/Icons/Header/close.gif";
import SunIcon from "../../Assets/Icons/Header/sun.svg";
import MoonIcon from "../../Assets/Icons/Header/moon.svg";
import Language from "../../Assets/Icons/Header/language.svg";
import LogoLight from "../../Assets/Images/Header/LogoLight.svg";
import LogoDark from "../../Assets/Images/Header/LogoDark.svg";
import { ReactComponent as DownArrow } from '../../Assets/Icons/Dashboard/Navbar/down-arrow.svg';
import Profile from '../../Assets/Icons/Dashboard/Navbar/profile.svg';
import { ReactComponent as Help } from '../../Assets/Icons/Dashboard/Navbar/help.svg';
import { ReactComponent as Setting } from '../../Assets/Icons/Dashboard/Navbar/setting.svg';
import { Header, DashNavTitle, DashNavButton } from "./Header.styled";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "25px",
    top: "25px",
  },
  bmBurgerBars: {
    background:
      "linear-gradient(90deg, rgba(33, 212, 253, 0.3) 0%, rgba(183, 33, 255, 0.3) 100%)",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenu: {
    background: "#FFFFFF",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#FFFFFF",
    display: "none",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "flex",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const navList = [
  {
    label: "Home",
    currentname: "",
    pathname: "/",
    root: "/",
  },
  {
    label: "Markets",
    currentname: "markets",
    pathname: "/markets",
    root: "markets",
  },
  {
    label: "Spot",
    currentname: "spot",
    pathname: "/spot",
    root: "spot",
  },
  {
    label: "Derivetaives",
    currentname: "derivetaives",
    pathname: "/derivetaives",
    root: "derivetaives",
  },
  {
    label: "Copy Trading",
    currentname: "copy-trading",
    pathname: "/copy-trading",
    root: "copy-trading",
  },
];

export const NavBar = ({ theme, toggleTheme, isDashTitle }) => {
  // Hide footer is this pages
  const [isLoggedIn, setLoggedIn] = React.useState(true);
  const [isDashIn, setIsDash] = React.useState(true);
  const [headerBg, setheaderBg] = React.useState("");
  const [switchIcon, setswitchIcon] = React.useState(MoonIcon);
  const [logo, setLogo] = useState(LogoLight);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const windowSize = useWindowSize();
  const isWideScreen = windowSize.width >= 992;
  const listenScrollEvent = (event) => {
    if (window.scrollY > 20) {
      return setheaderBg("headerBg");
    } else if (window.scrollY < 5) {
      return setheaderBg("");
    }
  };
  function ThemeSwitchButton() {
    if (theme === "dark") {
      setswitchIcon(MoonIcon);
    } else {
      setswitchIcon(SunIcon);
    }
  }

  const dashboard = location.pathname === '/dashboard';
  const myprofile = window.location.pathname === "/dashboard/my-profile";
  const security = window.location.pathname === "/dashboard/security";
  const referrals = window.location.pathname === "/dashboard/referrals";
  const apimanagement = window.location.pathname === "/dashboard/api-management";
  const settings = window.location.pathname === "/dashboard/settings";
  const fixedtrade = window.location.pathname === "/fixed-trade";
  const basictrade = window.location.pathname.includes("/basic-trade");
  const gifting = window.location.pathname === "/gifting";

  React.useEffect(() => {
    if (theme === "dark") {
      // ThemeSwitchLogo();
      setLogo(LogoDark);
    } else {
      // ThemeSwitchLogo();
      setLogo(LogoLight);
    }

    if (dashboard || myprofile || security || referrals || apimanagement || settings || basictrade || fixedtrade || gifting) {
      setLoggedIn(localStorage.getItem('user_id') ? false : true);
      setIsDash(localStorage.getItem('user_id') ? false : true);
    } 
    if(gifting) {
      setIsDash(logo);
    }
    if (location.pathname === "/") {
      setLoggedIn(true);
      setIsDash(true);
    }

    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, [isLoggedIn, isDashIn, theme]);

  //if (location.pathname === '/fixed-trade') return;

  return (
    <Header
      id="header"
      //   className={`Nav w-full ${location.pathname === "/" 
      //   ? `${headerBg} fixed top-0` 
      //   : "innerPgHeaderBg fixed top-0"
      // }`}

      className={
        location.pathname === "/"
          ? `Nav fixed top-0 w-full z-[9999999] ${headerBg}`
          : location.pathname === "/dashboard"
            || location.pathname === "/dashboard/my-profile"
            || location.pathname === "/dashboard/security"
            || location.pathname === "/dashboard/referrals"
            || location.pathname === "/dashboard/api-management"
            || location.pathname === "/dashboard/settings"
            || location.pathname === "/fixed-trade"
            ? "Nav w-full dashNavBg right-0 z-[1]"
            : `Nav fixed top-0 w-full z-[9999999] innerPgHeaderBg`
      }
    >
      <Box
        className="navBar items-start w-full mx-auto h-full font-prompt"
      >
        <div className="absolute flex-row my-4 gap-y-4 h-12 left-20 md:hidden lg:hidden xl:hidden 2xl:hidden xsLogo">
          <button
            type="button"
            className="outline-0"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="Oxhain" className="w-[150px]" />
          </button>
        </div>
        {(() => {
          if (isWideScreen) {
            return (
              <div className="flex flex-row navbar__horizontal__tabs justify-between items-center h-full px-7">
                <div className="flex flex-col justify-center items-center h-max">
                  {isDashIn && (
                    <button
                      type="button"
                      className="flex justify-center items-center outline-0"
                      onClick={() => navigate("/")}
                    >
                      <img src={logo} alt="Oxhain" className="w-32" />
                    </button>
                  )}
                  <DashNavTitle className="font-prompt text-2xl font-medium">
                    {isDashTitle}
                  </DashNavTitle>
                </div>
                {isDashIn && (
                  <div className="flex flex-col justify-center content-end items-center my-4 gap-y-4 h-max">
                    <ul className="flex">
                      {navList.map((item, key) => {
                        const isTabActive = item.currentname;
                        return (
                          <li
                            key={key}
                            className={
                              splitLocation[1] === isTabActive ? "active" : ""
                            }
                          >
                            <Link
                              to={item.pathname}
                              label={item.label}
                              className="ipad:text-sm text-lg font-medium"
                            >
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                <div className="flex flex-row justify-center content-end items-center my-4 gap-y-4 h-max">
                  {isLoggedIn ?
                    <div className="flex flex-row">
                      <button
                        type="button"
                        onClick={() => navigate("/sign-up")}
                        id="signUpBtn"
                        className={
                          splitLocation[1] === "sign-up" ? "active" : ""
                        }
                      >
                        <span>Sign Up</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => navigate("/login")}
                        id="loginBtn"
                        className={splitLocation[1] === "login" ? "active" : ""}
                      >
                        <span>Log In</span>
                      </button>
                      <button
                        type="button"
                        onClick={toggleTheme}
                        className="switcherIconBtn outline-none"
                      >
                        <img
                          src={switchIcon}
                          onClick={ThemeSwitchButton}
                          alt="Switcher Icon"
                        />
                      </button>
                      <button type="button" className="languageIcon outline-none">
                        <img src={Language} alt="Language" />
                      </button>
                    </div>
                    :
                    <div className="flex flex-row">
                      <DashNavButton type="button" className="flex flex-row items-center font-normal text-sm font-prompt mr-2">Wallet <DownArrow className="ml-1" /></DashNavButton>
                      <DashNavButton type="button" className="flex flex-row items-center font-normal text-sm font-prompt mx-2">Orders <DownArrow className="ml-1" /></DashNavButton>
                      <DashNavButton type="button" className="flex flex-row justify-center items-center mx-2"><img src={Profile} alt="Profile" className="w-[17px]" /></DashNavButton>
                      <DashNavButton type="button" className="flex flex-row justify-center items-center mx-2">Downloads</DashNavButton>
                      <DashNavButton type="button" className="flex flex-row justify-center items-center mx-2">English</DashNavButton>
                      <DashNavButton type="button" className="flex flex-row justify-center items-center mx-2" onClick={() => window.location.href = "/basic-trade/BTC_USDT"}>BTC/USDT</DashNavButton>
                      <DashNavButton type="button" className="flex flex-row justify-center items-center mx-2 switcherIconBtn outline-none" onClick={toggleTheme}>
                        <img
                          src={switchIcon}
                          onClick={ThemeSwitchButton}
                          alt="Switcher Icon"
                        />
                      </DashNavButton>
                      <button type="button" className="languageIcon outline-none">
                        <img src={Language} alt="Language" />
                      </button>
                      <DashNavButton type="button" className="flex flex-row justify-center items-center mx-2"><Help /></DashNavButton>
                      <DashNavButton type="button" className="flex flex-row justify-center items-center ml-2"><Setting /></DashNavButton>
                    </div>
                  }
                </div>
              </div>
            );
          } else {
            return (
              <Menu
                styles={styles}
                customBurgerIcon={<img src={BurgerIcon} alt="Burger Icon" />}
                customCrossIcon={<img src={CrossIcon} alt="Close" />}
              >
                <div className="flex flex-col navbar__vertical__tabs">
                  <div className="flex flex-col my-4 gap-y-4 h-max items-start">
                    <button
                      type="button"
                      className="flex justify-center items-center outline-0"
                      onClick={() => navigate("/")}
                    >
                      <img src={logo} alt="Oxhain" className="w-[155px]" />
                    </button>
                  </div>
                  <div className="flex-row items-center my-4 gap-y-4 h-max">
                    <ul className="flex flex-col text-left">
                      {navList.map((item, key) => {
                        const isTabActive = item.currentname;
                        return (
                          <li
                            key={key}
                            className={
                              splitLocation[1] === isTabActive ? "active" : ""
                            }
                          >
                            <Link to={item.pathname} label={item.label} className="text-base font-normal">
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="flex flex-row justify-center items-center my-4 gap-y-4 h-max">
                    <button
                      type="button"
                      onClick={() => navigate("/sign-up")}
                      id="xssignUpBtn"
                      className={splitLocation[1] === "sign-up" ? "active" : ""}
                    >
                      <span>Sign Up</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate("/login")}
                      id="xsloginBtn"
                      className={splitLocation[1] === "login" ? "active" : ""}
                    >
                      <span>Log In</span>
                    </button>
                  </div>
                </div>
              </Menu>
            );
          }
        })()}
      </Box>
    </Header>
  );
};

NavBar.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default NavBar;
