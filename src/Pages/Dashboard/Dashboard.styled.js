import styled from "styled-components";

export const DashboardControlSection = styled.div`
    background-color: ${({ theme }) => theme.colors.dashBg};
    .boder-right-line-03 {
        border-right: 1px solid ${({ theme }) => theme.colors.borderLine03};
    }
    .boder-bottom-line-03 {
        border-bottom: 1px solid ${({ theme }) => theme.colors.borderLine03};
    }
    .text4 {
            color: ${({ theme }) => theme.colors.text4};
    }
    .text5 {
        color: ${({ theme }) => theme.colors.text5};
    }
    .text53 {
        color: ${({ theme }) => theme.colors.text53};
    }
    .svg-fill-04 {
        path {
            fill: ${({ theme }) => theme.colors.svgFill4};
        }
    }
    .my-profile-tabs-section {
        button {
            color: ${({ theme }) => theme.colors.text4};
            &.active {
                color: ${({ theme }) => theme.colors.text5};
                svg {
                    #image0_602_19701 {
                        stroke: red;
                        fill: red;
                    }
                }
            }
        }
    }
    .my-profile-control-section {
        #editProfile,
        #Notifications,
        #Password {
            h3 {
                color: ${({ theme }) => theme.colors.text5};
            }
            #editProfileBtn {
                background-color: ${({ theme }) => theme.colors.background03};
                border: 1px solid ${({ theme }) => theme.colors.borderLine04};
                box-shadow: 0px 0px 20px #FFFFFF;
            }
        }
        #Notifications,
        #Password {
            .text4 {
                color: ${({ theme }) => theme.colors.text4};
            }
            .text5 {
                color: ${({ theme }) => theme.colors.text5};
            }
            .noti-date-time {
                svg {
                    path {
                        fill: ${({ theme }) => theme.colors.text4};
                    }
                }
            }
        }
        #Password {

        }
    }
    &.security-control-section,
    &.settings-control-section {
        .inactive {
            text-decoration: underline;
        }
    }
    &.referrals-control-section {

    }
    &.apimanagement-control-section {
        button {
            &.active {
                background-color: #1F1F9C;
                font-weight: 700;
            }
        }
        .apiModal {
            
        }
    }
    .boder-bottom-line-07 {
        border-bottom: 1px solid ${({ theme }) => theme.colors.borderLine07};
    }
`;

export const DashboardLayoutSideBar = styled.div`
    background-color: ${({ theme }) => theme.colors.dashtcBg};
`;

export const DashBox = styled.div`
    background-color: ${({ theme }) => theme.colors.dashboxBg};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    .accSStepsCount {
        p {
            &.active {
                color: ${({ theme }) => theme.colors.dashaccSActiveStepCount};
            }
            span {
                &.active {
                    color: ${({ theme }) => theme.colors.dashaccSActiveStepCount};
                }
            }
        }
        div {
            &.active {
                background-color: ${({ theme }) => theme.colors.dashaccSActiveStepCount};
            }
            &.inactive {
                background-color: ${({ theme }) => theme.colors.dashaccSInActiveStepCount};
            }
        }
    }
    .micScottBtn {
        svg {
            fill: ${({ theme }) => theme.colors.heading1};
        }
    }
    .dashYourBal {
        color: ${({ theme }) => theme.colors.dashYourBal};
    }
    .micScottPrice {
        color: ${({ theme }) => theme.colors.text1};
    }
    .chooseSumBtns {
        button {
            background-color: ${({ theme }) => theme.colors.dashchooseSumBtns};
            border-color: rgba(0, 0, 0, 0.2);
            &.active {
                background-color: ${({ theme }) => theme.colors.dashchooseSumActiveBtns};
                border-color: transparent;
            }
        }
    }
    .boder-left-line {
        &:before {
            content: '';
            position: absolute;
            left: 0;
            height: 96.888%;
            width: 1px;
            background-color: rgba(0, 0, 0, 0.2);
            bottom: 0;
        }
    }
    .boder-bottom-line {
        &:before {
            content: '';
            position: absolute;
            left: 0;
            height: 1px;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.2);
            bottom: 0;
        }
    }
    .boder-bottom-line-01 {
        &:before {
            content: '';
            position: absolute;
            left: 0;
            height: 1px;
            width: 100%;
            background-color: ${({ theme }) => theme.colors.borderLine01};
            bottom: 0;
        }
    }
    &.socialMedia {
        svg { 
            path {
                stroke: ${({ theme }) => theme.colors.svgFill3};
            }
        }
    }
    .orderTable {
        button {
            &.active {
                color: ${({ theme }) => theme.colors.tabColorActive01};
            }
        }
        .MuiTableContainer-root {
            thead {
                th {
                    color: ${({ theme }) => theme.colors.text1};
                    font-weight: 400;
                    font-size: 14px;
                    font-family: 'Prompt', sans-serif;
                    border-color: ${({ theme }) => theme.colors.borderLine03};
                    padding-bottom: 3px;
                    &:first-child {
                        padding-left: 0;
                    }
                    &:last-child {
                        padding-right: 0;
                    }
                }
            }
            tbody {
                th {
                    color: ${({ theme }) => theme.colors.text1};
                    border: 0;
                    &:first-child {
                        padding-left: 0;
                    }
                    &:last-child {
                        padding-right: 0;
                    }
                }
                td {
                    color: ${({ theme }) => theme.colors.text1};
                    border: 0;
                    &:last-child {
                        padding-right: 0;
                    }
                }
            }
        }
    }
    .cancelallOrder {
        background: ${({ theme }) => theme.colors.background01};
        color: ${({ theme }) => theme.colors.text3};
    }
    .MuiStepLabel-label {
        color: ${({ theme }) => theme.colors.text};
    }
    .MuiStepIcon-root {
        /* color: ${({ theme }) => theme.colors.dashaccSActiveStepCount}; */
    }
    .Mui-completed { 
        color: ${({ theme }) => theme.colors.muistepCompleted01} !important;
        .MuiStepConnector-line {
            border-color: ${({ theme }) => theme.colors.muistepCompleted01};
        }
    }
    .svgFill1 {
        svg {
            fill: ${({ theme }) => theme.colors.svgFill1};
            circle {
                fill: ${({ theme }) => theme.colors.svgFill1};
            }
        }
    }
    .text4 {
        color: ${({ theme }) => theme.colors.text4};
    }
    .MuiStep-root {
        text-align: left;
        &:last-child {
            width: 250px;
        }
    }
    .MuiStepLabel-iconContainer {
        .MuiSvgIcon-root {
            color: ${({ theme }) => theme.colors.background02};
            .MuiStepIcon-text {
                fill: ${({ theme }) => theme.colors.text};
             }
        }
    }
`;

export const DashBoxText = styled.p`
    color: ${({ theme }) => theme.colors.heading1};
    &.dash-text-underline {
        border-bottom: 1px solid;
        border-color: ${({ theme }) => theme.colors.dashTextUnderline};
    }
    svg {
        path {
            stroke: ${({ theme }) => theme.colors.svgFill1};
        }
    }
`;

export const DashBoxParagraph = styled.p`
    color: ${({ theme }) => theme.colors.text1};
    &.dash-text-underline {
        border-bottom: 1px solid;
        border-color: ${({ theme }) => theme.colors.dashTextUnderline};
    }
`;

export const DashBoxTab = styled.button`
    color: ${({ theme }) => theme.colors.text1};
    &.dash-text-underline {
        border-bottom: 1px solid;
        border-color: ${({ theme }) => theme.colors.dashTextUnderline};
    }
`;

export const DashTextField = styled.input`
    background-color: ${({ theme }) => theme.colors.dashInputBg};
    color: #3f3f3f;
    &:focus,
    &:hover {
        outline: none;
        color: ${({ theme }) => theme.colors.text};
        border: 1px solid ${({ theme }) => theme.colors.dashInputBg};
        background-color: transparent;
    }
`;

export const DashTextField01 = styled.input`
    background-color: ${({ theme }) => theme.colors.background04};
    border: 1px solid ${({ theme }) => theme.colors.borderLine05};
    color: ${({ theme }) => theme.colors.text};
    &:focus,
    &:hover {
        outline: none;
        color: ${({ theme }) => theme.colors.text};
        border: 1px solid ${({ theme }) => theme.colors.borderLine06};
        background-color: ${({ theme }) => theme.colors.background05};
    }
`;

export const DashVisaCard = styled.div`
    background-color: ${({ theme }) => theme.colors.visaCardBg};
`;

export const DashMinSubText = styled.p`
    color: ${({ theme }) => theme.colors.minSubText};
`;


export const RegularUser = styled.button`
    color: ${({ theme }) => theme.colors.dashRegBtn};
    &.dash-btn-underline {
        &:before {
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            height: 1px;
            background: ${({ theme }) => theme.colors.dashRegBtn};;
            bottom: 0;
            border-radius: 100px;
        }
    }
`;

export const TabContext = styled.div`
    background-color: ${({ theme }) => theme.colors.dashtcBg};
    .oxhain-tab-list {
        li {
            &.active {
                &:before {
                    content: '';
                    position: absolute;
                    left: 10px;
                    width: 7px;
                    height: 70px;
                    background: ${({ theme }) => theme.colors.dashtabactiveLine};
                    border-radius: 100px;
                }
            }
        }
    }
`;

export const NavLayoutComponent = styled.div`
    background-color: ${({ theme }) => theme.colors.dashNav};
`;

export const NavButton = styled.button`
    color: ${({ theme }) => theme.colors.dashNavBtn};
    svg {
        color: ${({ theme }) => theme.colors.dashNavBtnSvg};
    }
`;

export const NavTitle = styled.h2`
    color: ${({ theme }) => theme.colors.dashNavTitle};
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.title};
`;