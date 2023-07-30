import styled from "styled-components";

export const OxhainServiceFaq = styled.div`
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

    .item {
        position: relative;
		height: fit-content;
        border: 2px solid ${({ theme }) => theme.colors.text53};
        border-radius: 2px;

        * {
            z-index: 2;
        }

        &::before {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${({ theme }) => theme.colors.background51};
            z-index: 1;
        }

        &::after {
            position: absolute;
            content: "";
            top: 12px;
            left: 12px;
            width: 100%;
            height: 100%;
            background: ${({ theme }) => theme.colors.background73};
            z-index: 0;
            border-radius: 2px;
        }
    }
`;