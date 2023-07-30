import styled from "styled-components";

export const OxhainBanner = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    .svg-fill-05 { 
        path {
            stroke: ${({ theme }) => theme.colors.svgFill5};
        }
    }
`;
export const Title = styled.h2` 
    z-index: 999999;
`;
export const Content = styled.p`
    z-index: 999999;
`;