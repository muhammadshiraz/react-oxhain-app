import styled from "styled-components";

export const CryptoInMinutes = styled.div`
    margin: 164px 0 100px 0;
    .MuiGrid-container {
        margin-left: 0px;
        background-repeat: no-repeat;
        background-size: 100%;
        width: 100%;
        height: 320px;
        background-position: left center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .createAnAccount {
            padding: 0 65px 0 42px;
        }
        .startTrading {
            padding: 0 42px 0 100px;
        }
    }
    .viewMoreBtn span {
        background-image: linear-gradient(90deg, #B721FF 0%, #21D4FD 100%);
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }
    .viewMoreBtn:hover .bottomButtonLine {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transition: 0.5s;
    }
`;
export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.title};
`;
export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.text};
`;