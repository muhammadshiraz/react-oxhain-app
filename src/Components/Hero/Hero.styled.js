import styled from "styled-components";

export const OxhainHero = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    z-index: 0;
    padding-bottom: 30px;
    .MuiGrid-root {
        margin-left: 0;
        width: 100%;
        display: flex;
        height: 100%;
        align-items: center;
    }
    .heroContent {
        z-index: 999999;
    }
    .MuiGrid-item {
        padding-top: 0;
        padding-left: 0;
        margin-bottom: 0;
    }
    /* .ellipseGreen {
        width: 441px;
        left: -100px;
        top: -100px;
        height: 441px;
    } */
    .ellipseGreen {
        width: 441px;
        height: 441px;
        top: 100px;
        left: -217px;
        background: linear-gradient(90deg, rgba(32, 156, 255, 0.7) 0%, rgba(104, 224, 207, 0.7) 100%);
        filter: blur(200px);
    }
    /* .ellipsePurple {
        bottom: -15rem;
        right: 10px;
        z-index: 0;
    } */
    .ellipsePurple {
        width: 714px;
        height: 714px;
        background: linear-gradient(90deg, rgba(255, 88, 88, 0.7) 0%, rgba(240, 152, 25, 0.7) 100%);
        filter: blur(200px);
        right: 18rem;
        top: 40rem;
    }
    /* .ellipseYellow {
        width: 448px;
        height: 448px;
        bottom: 15rem;
        right: 0;
    } */
    .ellipseYellow {
        width: 530px;
        height: 530px;
        bottom: 15rem;
        right: 0px;
        background: linear-gradient(90deg, rgba(82, 113, 196, 0.7) 0%, rgba(177, 159, 255, 0.7) 48%, rgba(236, 161, 254, 0.7) 100%);
        border-radius: 100% 100% 0 0;
        transform: rotate(270deg);
        filter: blur(100px);
    }
    #heroEmailParallelogram {
        .heroEmailParallelogramInput {
            display: flex;
            font-weight: 400;
            font-size: 14px;
            /* border: 2px solid;
            border-image: linear-gradient(90deg, rgba(66, 174, 254, 1), rgba(158, 64, 255, 1)) 1; */
            border: 1px solid #9D9DA4;
            /* transform: skew(-30deg); */
            text-align: left;
            justify-content: left;
            align-items: center;
            border-radius: 4px;
            background: rgba(157, 157, 164, 0.1);
            &:hover {
                transition: 0.5s;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }
            input {
                transition: 0.5s;
                /* transform: skew(30deg); */
                text-align: left;
                width: 100%;
                background: transparent;
                height: 100%;
                padding: 15px 35px;
                &:focus-visible {
                    outline: none;
                }
                &::placeholder {
                    color: ${({ theme }) => theme.colors.text16};
                }
            }
        }
        button {
            background: #4949EE;
            border-radius: 4px;
            display: flex;
            /* transform: skew(-30deg); */
            text-align: left;
            justify-content: center;
            align-items: center;
            padding: 15px 40px;
            transition: 0.5s;
            &:hover {
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                transition: 0.5s;
            }
            img {
                /* transform: skew(30deg); */
            }
        }
    }
    /* @media screen and (max-width: 1199px) {
        .oxhainEllipse {
            margin-right: auto;
            margin-top: 5px;
            left: 0;
            justify-content: center;
            display: flex;
        }
        .heroContent {
            padding: 0 15px;
        }
        #heroEmailParallelogram input {
            font-size: 12px;
            color: #FFFFFF;
        }
        #heroEmailParallelogram input::placeholder {
            color: #000000;
        }
    }
    @media screen and (max-width: 992px) {
        .heroContent .heroTitle {
            font-size: 32px;
            text-align: center;
        }
        .heroContent .heroSub {
            font-size: 16px;
            margin-top: 1.2rem;
            text-align: center;
        }
        .oxhainEllipse {
            margin-right: auto;
            margin-top: 5px;
            left: 0;
            justify-content: center;
            display: flex;
        }
    } */
`;
export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.title};
`;
export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.text4};
`;
export const OxhainEllipse = styled.div`
    margin-right: -185px;
    z-index: 999999;
    margin-top: 0;
    background-repeat: no-repeat;
    width: 180px;
    height: 100%;
`;
