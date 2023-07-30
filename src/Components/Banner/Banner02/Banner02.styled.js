import styled from "styled-components";

export const OxhainBanner = styled.div`
    .svg-fill-05 { 
        path {
            stroke: ${({ theme }) => theme.colors.svgFill5};
        }
    }
`;
export const Title = styled.h2`
    color: #FFFFFF;
    z-index: 999999;
`;
export const Content = styled.p`
    color: rgba(255, 255, 255, 0.6);
    z-index: 999999;
`;