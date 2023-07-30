import styled from "styled-components";

export const Header = styled.div`
    /* background-color: ${({ theme }) => theme.colors.header}; */
    .bm-menu {
        width: 100% !important;
    }
    .bm-menu-wrap {
        height: 100% !important;
    }
    height: 80px;
    &.headerBg {
        background-color: ${({ theme }) => theme.colors.header};
    }
    &.innerPgHeaderBg {
        background-color: ${({ theme }) => theme.colors.header};
    }
    &.dashNavBg {
        background-color: ${({ theme }) => theme.colors.dashNav};
    }
    .navbar__horizontal__tabs ul li a,
    .navbar__vertical__tabs ul li a {
        color: ${({ theme }) => theme.colors.navLinks};
     }
    .navbar__horizontal__tabs ul li.active a,
    .navbar__vertical__tabs ul li.active a {
        font-weight: 700;
        color: #4949EE;
        /* background-color: rgba(33, 212, 253, 1);
        background-image: linear-gradient(90deg, rgba(33, 212, 253, 1), rgba(183, 33, 255, 1));
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent; */
        position: relative;
        /* padding-bottom: 3px; */
        /* &:before {
            content: '';
            width: 100%;
            height: 1.5px;
            background-color: rgba(33, 212, 253, 1);
            background-image: linear-gradient(90deg, rgba(33, 212, 253, 0%), rgba(183, 33, 255, 100%));
            position: absolute;
            left: 0;
            bottom: 0px;
            border-radius: 10px;
        } */
    }
    .navbar__horizontal__tabs .MuiTabs-flexContainer {
        justify-content: space-around;
    }
    .navbar__horizontal__tabs {
        /* padding: 0 52.85px; */
    }
    .navbar__horizontal__tabs ul li {
        margin-right: 30px;
        @media (max-width: 1024px) {
            margin-right: 20px;
        }
    }
    .navbar__horizontal__tabs ul li:last-child {
        margin-right: 0;
    }
    .navbar__vertical__tabs ul li {
        border-bottom: 1px solid #e5e7eb;
        padding: 8px 0;
        margin-bottom: 5px;
        width: 100%;
    }
    //********** NavBar Horizontal Buttons Style **********//
    .navbar__horizontal__tabs #signUpBtn {
        background-color: #4949EE;
    }
    .navbar__horizontal__tabs #loginBtn {
        border: 1px solid #4949EE;
    }
    .navbar__horizontal__tabs #signUpBtn,
    .navbar__horizontal__tabs #loginBtn {
        display: flex;
        font-weight: 400;
        font-size: 12px;
        border-radius: 2px;
        /* border: 2px solid; */
        /* border-image: linear-gradient(90deg, rgba(146, 254, 157, 1), rgba(0, 212, 255, 1)) 1; */
        transform: skew(-30deg);
        width: 100px;
        height: 30px;
        text-align: center;
        justify-content: center;
        align-items: center;
        transition: 0.5s;
    }
    .navbar__horizontal__tabs .switcherIconBtn {
        border-left: 1px solid;
        border-right: 1px solid;
        border-color: ${({ theme }) => theme.colors.borderLine07};
        text-align: center;
        justify-content: center;
        align-items: center;
        margin-left: 25px;
        padding: 0px 8px; 
    }
    .navbar__horizontal__tabs .languageIcon {
        /* border-right: 1px solid; */
        /* border-image: linear-gradient(rgba(33, 212, 253, 0.5), rgba(183, 33, 255, 0.5)) 1; */
        /* border-color: ${({ theme }) => theme.colors.borderLine07}; */
        margin-left: 8px;
    }
    .navbar__horizontal__tabs #signUpBtn:hover {
        box-shadow: ${({ theme }) => theme.colors.buttonShadow};
        transition: 0.5s;
    }
    .navbar__horizontal__tabs #loginBtn:hover {
        box-shadow: ${({ theme }) => theme.colors.buttonShadow};
        transition: 0.5s;
    }
    .navbar__horizontal__tabs #signUpBtn span {
        transform: skew(30deg);
        background-color: ${({ theme }) => theme.colors.buttonText};
        background-image: linear-gradient(90deg, ${({ theme }) => theme.colors.buttonText} 100%, ${({ theme }) => theme.colors.buttonText} 100%);
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }
    .navbar__horizontal__tabs #loginBtn span {
        transform: skew(30deg);
        /* background-color: #7EF7AC;
        background-image: linear-gradient(90deg, #7EF7AC 0%, #16D2F1 100%); */
        color: #4949EE;
        /* background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent; */
    }
    .navbar__horizontal__tabs #signUpBtn {
        margin-right: 5px;
    }
    .navbar__horizontal__tabs #loginBtn {
        margin-left: 5px;
    }
    .navbar__horizontal__tabs #signUpBtn {
        /* background: linear-gradient(90deg, #92FE9D 0%, #00C9FF 100%); */
        background: #4949EE;
    }
    .navbar__horizontal__tabs #signUpBtn.active span {
        background-color: #FFFFFF;
        background-image: linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%);
    }
    //********** NavBar Vertical Buttons Style **********//
    .navbar__vertical__tabs #xsloginBtn {
        border: 1px solid #4949EE;
    }
    .navbar__vertical__tabs #xssignUpBtn,
    .navbar__vertical__tabs #xsloginBtn {
        display: flex;
        font-weight: 400;
        font-size: 12px;
        /* border: 2px solid;
        border-image: linear-gradient(90deg, rgba(146, 254, 157, 1), rgba(0, 212, 255, 1)) 1; */
        transform: skew(-30deg);
        width: 100px;
        height: 30px;
        border-radius: 2px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    .navbar__vertical__tabs #xssignUpBtn span {
        background-image: linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%);
    }
    .navbar__vertical__tabs #xssignUpBtn span {
        transform: skew(30deg);
        background-color: #FFFFFF;
        background-image: linear-gradient(90deg, #FFFFFF 100%, #FFFFFF 100%);
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }
    .navbar__vertical__tabs #xsloginBtn span {
        transform: skew(30deg);
        /* background-color: #7EF7AC;
        background-image: linear-gradient(90deg, #7EF7AC 0%, #16D2F1 100%); */
        color: #4949EE;
        /* background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent; */
    }
    .navbar__vertical__tabs #xssignUpBtn {
        margin-right: 5px;
    }
    .navbar__vertical__tabs #xsloginBtn {
        margin-left: 5px;
    }
    .navbar__vertical__tabs #xssignUpBtn {
        background-color: #4949EE;
    }
    .navbar__vertical__tabs #xssignUpBtn.active span {
        background-color: #FFFFFF;
        background-image: linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%);
    }
    @media screen and (max-width: 1099px) {
        .xsLogo {
            display: none;
        }
    }
    @media screen and (max-width: 1024px) {
        .xsLogo {
            display: none;
        }
    }
    @media screen and (max-width: 992px) {
        .xsLogo {
            display: flex;
        }
    }
`;

export const DashNavTitle = styled.h2`
    color: ${({ theme }) => theme.colors.dashNavTitle};
`;

export const DashNavButton = styled.button`
    color: ${({ theme }) => theme.colors.dashNavBtn};
    svg {
        color: ${({ theme }) => theme.colors.dashNavBtnSvg};
    }
`;