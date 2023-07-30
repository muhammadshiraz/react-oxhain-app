import styled from "styled-components";

export const OxhainLogIn = styled.div`
    .MuiTabs-root {
        min-height: max-content;
    }
    .MuiTabPanel-root {
        padding: 0;
        margin-top: 52px;
    }
    .MuiButtonBase-root {
        margin: 0;
        padding: 0;
        text-transform: capitalize;
        justify-content: flex-start;
        font-size: 20px;
        font-weight: 400;
        align-items: start;
        color: ${({ theme }) => theme.colors.text4};
        width: max-content;
        min-width: max-content;
        max-width: max-content;
        min-height: max-content;
        max-height: max-content;
        height: max-content;
        padding-bottom: 18px;
        &.emailTab {
            margin-left: 42px;
        }
        &.qRCodeTab {
            margin-left: 42px;
        }
        &.Mui-selected {
            /* background: linear-gradient(90deg, #21D4FD 0%, #B721FF 100%); */
            background-color: #4949EE;
            position: relative;
            font-weight: 700;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            &::before {
                content: '';
                background: #4949EE;
                position: absolute;
                left: 0%;
                bottom: 0;
                height: 4px;
                width: 100%;
            }
        }
    }
    .MuiTabs-indicator {
        background: linear-gradient(90deg, #21D4FD 0%, #B721FF 100%);
        display: none;
    }
    .MuiFormControlLabel-root {
        margin: 0;
    }
`;

export const OxhainVerification = styled.div`
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .character {
        width: 70px;
        height: 130px;
        background: #FBFBFB;
        font-size: 52px;
        font-weight: 300;
        color: #000000;
        background-origin: border-box;
        background-clip: content-box, border-box;
        border: 1px solid transparent;
        background-image: linear-gradient(white, white), radial-gradient(circle at top left, #9D9DA4,#9D9DA4);
        border-radius: 4px;
        margin-left: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 1199px) {
            width: 65px;
            height: 120px;
            margin-left: 15px;
            font-size: 20px;
        }
        @media (max-width: 768px) {
            width: 40px;
            height: 70px;
            margin-left: 8px;
            font-size: 14px;
        }
        &.correct-code {
            background-image: linear-gradient(white, white), radial-gradient(circle at top left, #33FF00,#33FF00);
        }
        &.wrong-code {
            background-image: linear-gradient(white, white), radial-gradient(circle at top left, #ff0000,#ff0000);
        }
        &:first-child {
            margin-left: 0;
        }
        &:hover {
            border: 1px solid transparent;
            border-image: radial-gradient(circle at top left, #21D4FD,#B721FF);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            
        }
    }
    .character--inactive {
        /* border: 1px solid; */
        /* border-image: linear-gradient(175deg,#21D4FD 0%,#B721FF 100%) 1; */
    }
    .character--selected {
        /* border: 1px solid; */
        /* border-image: linear-gradient(175deg,#21D4FD 0%,#B721FF 100%) 1; */
    }
`;

export const GradientText = styled.p`
    background: rgba(73, 73, 238, 1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    &.gradient-underline {
        border-bottom: 1px solid;
        border-image: linear-gradient(90deg, #4949EE 0%, #4949EE 100%) 1;
    }
    &.google-gradient-underline {
        text-decoration: underline;
        text-decoration-color: rgba(73,73,238,1);
    }
`;

export const GradientNumber = styled.p`
    background: linear-gradient(90deg, #21D4FD 0%, #B721FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.colors.text5};
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.text};
`;