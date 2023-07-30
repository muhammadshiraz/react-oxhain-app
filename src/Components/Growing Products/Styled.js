import styled from "styled-components";

export const GrowingProducts = styled.div`
    margin: 0 0 150px 0;
    .growingProductsBox {
        background-image: url('../Images/Growing Products/discover-bg.svg');
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 98% 100%;
        .MuiGrid-container {
            height: 494px;
            transition: 1s;
        }
    }
    .viewMoreBtn {
        img {
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
        span {
            background-image: linear-gradient(90deg, #B721FF 0%, #21D4FD 100%);
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            background-size: 100%;
            background-repeat: repeat;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent; 
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
        }
    }
    .growingProductsGridBox {
        width: 100%;
        height: 449px;
        background: linear-gradient(270deg, #B721FF 0%, #21D4FD 100.04%);
        transition: 1s;
        margin: 0 0 0 55px;
        &:hover {
            height: 494px;
            transition: 1s;
            cursor: pointer;
            box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
        }
        .viewMoreBtn {
            transition: 3s;
        }
        .growingProductsGradientBox {
            border: 2px solid;
            height: 100%;
            z-index: 999999;
            background-color: ${({ theme }) => theme.colors.background};
            border-image: linear-gradient(90deg, rgba(163, 58, 255, 1), rgba(40, 205, 254, 1)) 1;
            position: absolute;
            left: 0;
            margin-left: -12px;
            margin-top: -28px;
            margin-right: 12px;
        }
    }
`;
export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.title};
`;
export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.text};
`;