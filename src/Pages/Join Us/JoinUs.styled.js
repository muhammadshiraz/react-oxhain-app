import styled from "styled-components";
import ApplicationReviewEllipse from '../../Assets/Images/JoinUs/ApplicationReview/application-review-ellipse.svg';

export const OxhainJoinUs = styled.div``;
export const WorkatOxhain = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    padding-top: 6rem;
    padding-bottom: 6rem;
    .workatOxhainCard {
        width: 100%;
        height: 270px;
        &:before {
            content: '';
            position: absolute;
            width: 530px;
            height: 270px;
            background: linear-gradient(270deg, #B721FF 0%, #21D4FD 100.04%);
            transition: 0.5s;
            left: 10px;
            top: 10px;
        }
        &:hover {
            height: 270px;
            transition: 0.5s;
            cursor: pointer;
            background: ${({ theme }) => theme.colors.linearGradientBg};
            box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);
            .viewMoreBtn:not(:hover) { 
                display: flex;
            }
        }
        &:first-child {
            margin-right: 3rem;
        }
        &:last-child {
            margin-left: 3rem;
        }
        .workatOxhainGradientCard {
            border: 2px solid;
            width: 530px;
            height: 100%;
            z-index: 999999;
            background: ${({ theme }) => theme.colors.linearGradientBg};
            border-image: linear-gradient(90deg, rgba(163, 58, 255, 1), rgba(40, 205, 254, 1)) 1;
            position: absolute;
            left: 0;
            .viewMoreBtn {
                display: none;
                &:hover {
                    display: flex;
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
        }
    }
`;
export const ChooseYourTeam = styled.div`    
    margin-top: 5rem;
    margin-bottom: 5rem;
    position: relative;
    .chooseTeamTopLine {
        position: absolute;
        top: -1.2rem;
    }
    .chooseTeamBottomLine {
        position: absolute;
        bottom: -1.2rem;
    }
    .chooseTeamBg {
        height: 414px;
    }
    .chooseteamCard {
        width: 100%;
        height: 90px;
        &:first-child {
            margin-right: 1rem;
            margin-left: 1rem;
        }
        &:nth-child(2) {
            margin-left: 1rem;
            margin-right: 1rem;
        }
        &:last-child {
            margin-left: 1rem;
            margin-right: 1rem;
        }
        &:before {
            content: '';
            position: absolute;
            width: 320px;
            height: 90px;
            background: linear-gradient(270deg, #B721FF 0%, #21D4FD 100.04%);
            transform: skew(-30deg);
            transition: 0.5s;
            left: 10px;
            top: 10px;
            box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);
        }
        .chooseteamGradientCard {
            border: 2px solid;
            width: 320px;
            height: 100%;
            z-index: 999999;
            background: ${({ theme }) => theme.colors.linearGradientBg};
            transform: skew(-30deg);
            border-image: linear-gradient(90deg, rgba(163, 58, 255, 1), rgba(40, 205, 254, 1)) 1;
            position: absolute;
            left: 0;
            h4 {
                transform: skew(30deg);
            }
        }
        &:hover {
            cursor: pointer;
        }
    }
    .chooseteam-button-group {
        justify-content: flex-end;
        display: flex;
        margin-left: auto;
        margin-top: 3rem;
        .chooseteamViewBtn {
            &:hover {
                .bottomButtonLine {
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    transition: 0.3s;
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
    }
`;
export const DiversifiedBenefits = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    padding-top: 3rem;
    padding-bottom: 3rem;
    .divBenefitsBtn {
        height: 150px;
        position: relative;
        p {
            &.active {
                text-shadow: ${({ theme }) => theme.colors.textShadow};
            }
        }
        img {
            transition: 0.5s;
        }
        &:hover {
            &.divBenefitsBtn > img {
                filter: ${({ theme }) => theme.colors.divBenefitsBtnSLinehadow};
                transition: 0.5s;
            }
        }
    }
    .devLine,
    .healthLine {
        p {
            top: 0.88rem;
        }
    }
    .welfareLine,
    .benefitsLine {
        p {
            top: 2.3rem;
        }
    }
    .holidaysLine,
    .workLine {
        p {
            z-index: 1;
            top: 3.8rem;
        }
    }
    #divBenefitsEllipse {
        width: 425px;
        height: 425px;
        padding: 15px 15px;
        border-radius: 100%;
        background: ${({ theme }) => theme.colors.divBenefitsEllipseBg};
        margin-left: 35px;
        margin-right: 35px;
        #nestedDivBenefitsEllipse {
            width: 395px;
            height: 395px;
            border-radius: 100%;
            background: ${({ theme }) => theme.colors.nestedDivBenefitsEllipseBg};
        }
    }
    .divBenefitsContentEllipse {
        position: relative;
        margin-left: 35px;
        margin-right: 35px;
        width: 425px;
        height: 425px;
        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            left : 0;
            right: 0;
            border-radius: 100%;
            background: ${({ theme }) => theme.colors.divBenefitsContentEllipseBg};
            filter: blur(100px);
            z-index: 2;
        }
        .nestedDivBenefitsContentEllipse {
            width: 395px;
            padding: 15px 3.5rem;
            height: 395px;
            border-radius: 100%;
            background: ${({ theme }) => theme.colors.nestedDivBenefitsContentEllipseBg};
            z-index: 999999;
        }
    }
`;
export const ApplicationReview = styled.div`
    margin-top: 8rem;
    margin-bottom: 6.5rem;
    position: relative;
    .applicationReviewTopLine {
        position: absolute;
        top: -2.2rem;
    }
    .applicationReviewBottomLine {
        position: absolute;
        bottom: -2.2rem;
    }
    .applicationReviewBg {
        height: 590px;
    }
    #ar-01,
    #int-02,
    #ofr-03 {
        position: relative;
        &::before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            right: 0;
            background-image: url(${ApplicationReviewEllipse});
            background-repeat: no-repeat;
            background-position: center right;
            left: 1rem;
        }
    }
`;
export const ApplyNow = styled.button`    
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;    
    background: linear-gradient(90deg, hsla(281, 100%, 56%, 1), hsla(191, 98%, 56%, 1));
    transform: skew(-30deg);
    width: 230px;
    height: 50px;
    text-align: center;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    z-index: 999999;
    &:hover {
        box-shadow: ${({ theme }) => theme.colors.applyNowbuttonShadow};
    }
    span {
        transform: skew(30deg);        
        background-color: ${({ theme }) => theme.colors.applyNowbuttonText};
        background-image: linear-gradient(90deg, ${({ theme }) => theme.colors.applyNowbuttonText} 100%, ${({ theme }) => theme.colors.applyNowbuttonText} 100%);
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }
`;
export const Title = styled.h3`
    color: ${({ theme }) => theme.colors.title};
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
`;
export const CardTitle = styled.h4`
    color: ${({ theme }) => theme.colors.title};
    font-style: normal;
    font-size: 20px;
`;
export const DBTitle = styled.h4`
    color: ${({ theme }) => theme.colors.title};
`;

export const GradientTitle = styled.h5`
    background: linear-gradient(180deg, #B721FF 0%, #21D4FD 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 128px;
    background-clip: text;
    text-fill-color: transparent;
`;
export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.text};
`;