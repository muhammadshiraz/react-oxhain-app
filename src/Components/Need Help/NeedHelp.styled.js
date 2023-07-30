import styled from "styled-components";

export const NeedHelp = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    margin: 0 0 150px 0;
    background-repeat: no-repeat;
    background-position: left 0;
    background-size: 100%;
    padding: 15px 0;
    .learnMoreBtn {
        &::hover {
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            transition: 0.5s;
        }
        span {
            background-image: linear-gradient(90deg, #B623FF 0%, #28CEFE 100%);
            background-size: 100%;
            background-repeat: repeat;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent; 
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
        }
    }
    .supportGrid {
        background-repeat: no-repeat;
        background-position: left 0;
        background-size: 95%;
        width: 420px;
        height: 255px;
    }
    .blogsGrid {
        background-repeat: no-repeat;
        background-position: left 0;
        background-size: 95%;
        width: 420px;
        height: 255px;
    }
    .newsGrid {
        background-repeat: no-repeat;
        background-position: left 0;
        background-size: 95%;
        width: 420px;
        height: 255px;
    }
    .needBoxEllipse {
        width: 185px;
        height: 80px;
        border-radius: 50px;
    }
    .needHelpGrid {
        padding-top: 30px;
        padding-bottom: 30px;
    }
`;
export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.title};
`;
export const Paragraph = styled.h2`
    color: ${({ theme }) => theme.colors.text};
`;