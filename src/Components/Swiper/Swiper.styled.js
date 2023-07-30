import styled from "styled-components";

export const OxhainSwiper = styled.div`
    position: relative;
    width: 100%;
    max-height: 100%;
`;

export const OxhainSwiperBg = styled.div`
    height: 380px;
    margin-top: -1.3%;
    margin-bottom: -1.3%;
    padding-left: 9.3rem;
    .MuiContainer-root {
        height: 338px;
    }
    .marquee {
        justify-content: center;
        margin-right: 40px;
        span {
            display: flex !important;
            z-index: 999999;
            div {
                white-space: initial !important;
                align-items: center !important;
                padding-top: 15px;
                padding-bottom: 15px;
            }
            .hidden {
                display: none;
            }
        }
        .swiperCoins:hover .hidden {
            display: flex;
        }
    }
    .react-multi-carousel-track li:first-child,
    .react-multi-carousel-track li:last-child {
        margin-left: 0;
        margin-right: 0;
    }
    .swiperCoins {
        cursor: pointer;
        width: 328px;
        height: 84px;
        background: linear-gradient(270deg, #B721FF 0%, #21D4FD 100.04%);
        margin-left: 1.2%;
        transition: 0.5s;
        &:hover {
            margin-top: 12px;
            height: 270px !important;
            z-index: 999999;
            .innerswiperCoinsBox {
                height: 270px !important;
                transition: 0.5s;
                margin-top: -10px;
                z-index: 999999;
            }
            .coinsLogo {
                width: 85px;
                position: absolute;
                left: 25px;
                top: 18.5px;
                transition: 0.5s;
            }
        }
        .innerswiperCoinsBox {
            border: 2px solid;
            border-image: linear-gradient(90deg,rgba(131,53,240,1),rgba(13,164,255,1)) 1;
            background: rgba(255,255,255,0.3);
            position: absolute;
            left: 0;
            right: 10px;
            top: 0;
            bottom: 10px;
            margin-left: -10px;
            margin-top: -10px;
            -webkit-transition: 0.5s;
            transition: 0.5s;
        }
    }
    .swiperNextBtn {
        &:hover .bottomButtonLine {
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            transition: 0.3s;
        }
        span {
            background-image: linear-gradient(90deg, #B721FF 0%, #21D4FD 100%);
            background-size: 100%;
            background-repeat: repeat;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent; 
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
        }
    }
    .carousel-button-group {
        justify-content: flex-end;
        display: flex;
        margin-right: 8rem;
        margin-left: auto;
        position: absolute;
        bottom: 3.8rem;
        right: 0;
        z-index: 2;
    }
`;