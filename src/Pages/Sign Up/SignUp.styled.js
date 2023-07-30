import styled from "styled-components";

export const OxhainSignUp = styled.div`
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

export const GradientText = styled.p`
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