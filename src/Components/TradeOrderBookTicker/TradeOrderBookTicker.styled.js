import styled from "styled-components";

export const OxhainTradeOrderBookTicker = styled.div`
    /* Price green/red arrow */
    svg.up {
        transform: rotate(180deg);

        path {
            stroke: ${({ theme }) => theme.colors.text52};
        }
    } 
`;