import styled from "styled-components";

export const OxhainAboutUs = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
`;

export const AboutOxhain = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    margin-top: 6.5rem;
    margin-bottom: 6.5rem;
`;

export const OxhainNEL = styled.div`
    width: 100%;
    height: 299px;
    background: linear-gradient(90deg, rgba(183, 33, 255, 0.3) 0%, rgba(33, 212, 253, 0.3) 100%);
    margin-top: 5rem;
    margin-bottom: 5rem;
    .oxhainNELTopLine {
        position: absolute;
        top: -1.8rem;
    }
    .oxhainNELBottomLine {
        position: absolute;
        bottom: -1.8rem;
    }
    svg {
        path {
            stroke: ${({ theme }) => theme.colors.plusIcon};
        }
    }
`;

export const FourPrinciplesofOxhain = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    margin-top: 8.5rem;
    margin-bottom: 8.5rem;
    .viewMoreBtn {
        &:hover {
            img {
                filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            }
            span {
                filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            }
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
`;

export const Ecosystem = styled.div`
    background: linear-gradient(90deg, rgba(183, 33, 255, 0.3) 0%, rgba(33, 212, 253, 0.3) 100%);
    margin-top: 8.5rem;
    .ecosystemTopLine {
        position: absolute;
        top: -1.8rem;
    }
    .ecosystemBottomLine {
        position: absolute;
        bottom: -1.8rem;
    }
    .ecosystem-parent-clock-bg {
        /* .oxhainIco {
            transform: 'rotate(0deg)';
        }
        .academyIco {
            transform: 'rotate(30deg)';
        }
        .labIco {
            transform: 'rotate(30deg)';
        } */
        .ecosystem-child-clock-bg {}
    }
`;

export const OxhainRoadMap = styled.div`
    min-height: 48rem;
    background-color: ${({ theme }) => theme.colors.background};
    margin-top: 8.5rem;
    .dot-ellipse-active-line {
        width: 500px;
        height: 300px;
        position: absolute;
        bottom: 30px;
        left: 165.88px;
        z-index: 2;
    }
    .dotsEllipse {
        left: 0;
        right: 0;
        height: 100%;
        width: max-content;
        margin-left: auto;
        margin-right: auto;
        .dotsGridEllipse {
            /* width: 100%;
            height: 100%;
            -webkit-box-pack: justify;
            justify-content: space-between; */
            .dotEllipseBox {
                max-width: 100%;
                width: 115px;
                .activeYear {
                    position: relative;
                    &::before {
                        content: '';
                        position: absolute;
                        width: 48px;
                        height: 1px;
                        left: 0;
                        right: 0;
                        bottom: 13px;
                        background: linear-gradient(90deg,#21D4FD 0.14%,#B721FF 100.14%);
                        margin-right: auto;
                    }
                }
                .activeYearBdr {
                    position: relative;
                    width: 145px;
                    height: 50px;
                    top: 10px;
                    &::before {
                        content: '';
                        position: absolute;
                        width: 50px;
                        height: 55px;
                        left: 22px;
                        right: 0;
                        bottom: 0;
                        border-color: #21D4FD;
                        border-left: 1px solid #21D4FD;
                        margin-right: auto;
                    }
                }
                img {
                    position: relative;
                    &.active {
                        box-shadow: 0px 0px 30px #21d4fd;
                        background-color: transparent;
                        border-radius: 100px;
                    }
                }
                .dotEllipseBoxTitle {
                    width: 100%;
                    height: 2.5rem;
                }
                .dotEllipseBoxXaxis {
                    height: 18px;
                    margin-top: 0.2rem;
                }
            }
        }
    }
`;

export const OxhainLogoEllipse = styled.div`
    background: linear-gradient(180deg, rgba(33, 212, 253, 0.5) 0%, rgba(183, 33, 255, 0.5) 100%);
    border-radius: 100%;
    width: 300px;
    height: 300px;
    img {
        width: 164px;
        height: 164px;
    }
`;

export const AboutOxhainEllipse = styled.div`
    position: absolute;
    z-index: 999999;
    margin-top: 0;
    right: 0;
    top: 0;
    margin-left: 25px;
`;

export const GradientTitle = styled.h5`
    background: linear-gradient(90deg, #B721FF 0.32%, #21D4FD 100.32%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;

export const GradientNumber = styled.h5`
    background: linear-gradient(180deg, #21D4FD 0%, #B721FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;

export const GradientYear = styled.h5`
    background: linear-gradient(338deg,#21D4FD 0%,#B721FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.colors.title};
    font-size: 32px;
    position: relative;
    &.bottom-gradient-line {
        &::before {
            content: '';
            position: absolute;
            width: 65px;
            height: 3px;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 50px;
            background: linear-gradient(90deg, #21D4FD 0.14%, #B721FF 100.14%);
            margin-left: auto;
            margin-right: auto;
        }
    }
`;

export const ClockTitle = styled.h4`
    color: ${({ theme }) => theme.colors.title};
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.text};
`;

export const Number = styled.h4`
    color: ${({ theme }) => theme.colors.title};   
`;