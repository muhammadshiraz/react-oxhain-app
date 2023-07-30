import styled from "styled-components";

export const OxhainMultipleCrypto = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    .cryoptoEductaionMainBox {
        .multipleTabContextBox {
            width: 100%;
            background-repeat: no-repeat;
            background-size: 90%;
            padding-top: 12px;
            padding-bottom: 12px;
        }
    }
    #tablist {
        .MuiButtonBase-root {
            text-transform: capitalize;
            font-family: 'Exo', sans-serif;
            font-size: 22px;
            font-weight: 500;
            color: ${({ theme }) => theme.colors.tabColor};
            &.MuiButtonBase-root.Mui-selected {
                background-image: linear-gradient(90deg, #B721FF 0%, #21D4FD 100%);
                background-size: 100%;
                font-size: 22px;
                font-weight: 600;
                background-repeat: repeat;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent; 
                -moz-background-clip: text;
                -moz-text-fill-color: transparent;
            }
        }
        .MuiTabs-flexContainer {
            justify-content: space-around;
        }
        .css-1aquho2-MuiTabs-indicator {
            background: linear-gradient(90deg, #B721FF 0%, #21D4FD 100%);
        }
    }
    .multipleCryptoGridRoot {
        margin: 5rem 0;
    }
    .multipleCryptoGridBox {
        padding: 0;
    }
    .educationEllipse,
    .tradingEllipse,
    .securityEllipse {
        width: 625px;
        position: relative;
        div {
            position: absolute;
            right: 0px;
            left: 15px;
        }
    }
    .moreEducationBtn {
        background: linear-gradient(90deg, #B721FF 0%, #21D4FD 100%);
        display: flex;
        transform: skew(-30deg);
        text-align: left;
        justify-content: center;
        align-items: center;
        padding: 15px 30px;
        width: 260px;
        height: 55px;
        transition: 1s;
    }
    .moreEducationBtn:hover {
        transition: 1s;
        box-shadow: 0 4px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .moreEducationBtn span {
        transform: skew(30deg);
        font-size: 16px;
    }
    .moreEducationBtn img {
        transform: skew(30deg);
        margin-left: 13px;
    }
`;
export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.title};
`;
export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.text};
`;