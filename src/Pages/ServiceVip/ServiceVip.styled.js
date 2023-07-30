import styled from "styled-components";

export const OxhainServiceVip = styled.div`
    background: ${({ theme }) => theme.colors.background51};
    font-family: 'Prompt', sans-serif;

    span {
        color: ${({ theme }) => theme.colors.text50};
        font-weight: 300;
    }
    p {
        color: ${({ theme }) => theme.colors.text4};
        font-weight: 300;
    }

    .text53 {
		color: ${({ theme }) => theme.colors.text53};
    }

    .background74 {
		background: ${({ theme }) => theme.colors.background74};
    }

    .item {
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        
        * {
            z-index: 2
        }

        &:nth-child(even) {
            // Right image
        }
    }
`;