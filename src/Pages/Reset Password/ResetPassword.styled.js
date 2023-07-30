import styled from "styled-components";

export const OxhainResetPassword = styled.div`
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
        padding-bottom: 6px;
        &.emailTab {
            margin-left: 42px;
        }
        &.qRCodeTab {
            margin-left: 42px;
        }
        &.Mui-selected {
            background: linear-gradient(90deg, #21D4FD 0%, #B721FF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
    }
    .MuiTabs-indicator {
        background: linear-gradient(90deg, #21D4FD 0%, #B721FF 100%);
    }
    .MuiFormControlLabel-root {
        margin: 0;
    }
    .MuiCheckbox-root {
        padding: 0;
        margin-right: 5px;
        &.Mui-checked {
            background-color: #B721FF;
            background: linear-gradient(90deg, #B721FF 0%, #21D4FD 100%);
            background-size: 100%;
            background-repeat: repeat;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent; 
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
        }
        .PrivateSwitchBase-input {
            border: 1px solid;
            border-image: linear-gradient(#B721FF, #21D4FD) 1;            
        }
    }
`;

export const GradientText = styled.p`
    background: linear-gradient(90deg, #21D4FD 0%, #B721FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    border-bottom: 1px solid;
    border-image: linear-gradient(90deg,#21D4FD 0%,#B721FF 100%) 1;
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.colors.text5};
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.text};
`;