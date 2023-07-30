import styled from "styled-components";

export const OxhainBanner = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    height: 480px;
    .ellipseGreen {
        /* width: 441px;
        left: -100px;
        top: 0;
        height: 441px; */
        width: 441px;
        height: 441px;
        top: -10rem;
        left: -217px;
        background: linear-gradient(90deg, #9890E3 0%, #B1F4CF 100%);
        filter: blur(100px);
    }
    .ellipsePurple {
        /* bottom: 0;
        right: 10px;
        z-index: 0; */
        
        
        /* width: 714px;
        height: 714px;
        background: linear-gradient(90deg, #7028E4 0%, #E5B2CA 100%);
        filter: blur(200px);
        right: 18rem;
        top: 40rem; */
        width: 614px;
        height: 764px;
        background: linear-gradient(90deg,#7028E4 0%,#E5B2CA 100%);
        -webkit-filter: blur(200px);
        filter: blur(200px);
        right: 25rem;
        top: 18rem;
    }
    .ellipseYellow {
        /* width: 512px;
        height: 445px;
        bottom: 0;
        right: 0;
        top: 0; */
        width: 530px;
        height: 530px;
        bottom: 0;
        right: 0px;
        background: linear-gradient(169deg, #FDDB92 0%, #D1FDFF 100%);
        border-radius: 100% 100% 0 0;
        transform: rotate(270deg);
        filter: blur(100px);
    }
`;
export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.title};
    font-weight: 500;
    font-size: 38px;
    z-index: 999999;
`;
export const Content = styled.p`
    color: ${({ theme }) => theme.colors.text};
    font-weight: 400;
    font-size: 28px;
    z-index: 999999;
`;
export const Button = styled.button`    
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;    
    background: linear-gradient(90deg, hsla(281, 100%, 56%, 1), hsla(191, 98%, 56%, 1));
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);
    transform: skew(-30deg);
    width: 230px;
    height: 50px;
    text-align: center;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    z-index: 999999;
    span {
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
`;
export const JoinUsEllipse = styled.div`
    position: absolute;
    z-index: 999999;
    margin-top: 0;
    height: 100%;
    left: 12.8rem;
    top: 2.8rem;
`;