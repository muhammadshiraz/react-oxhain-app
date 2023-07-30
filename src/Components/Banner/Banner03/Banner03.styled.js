import styled from "styled-components";

export const OxhainBanner = styled.div`
    /* background-color: ${({ theme }) => theme.colors.background}; */
    height: 350px;
    .svg-fill-05 { 
        path {
            stroke: ${({ theme }) => theme.colors.svgFill5};
        }
    }
    .text5 {
        color: ${({ theme }) => theme.colors.text5};
    }
    .ellipseLeft {
        width: 840px;
        height: 840px;
        left: calc(50% - 840px/2 - 1100px);
        top: calc(50% - 840px/2 - 386px);
        background: linear-gradient(90deg, rgba(173, 252, 219, 0.7) 11.27%, rgba(0, 254, 254, 0.7) 110.8%);
        filter: blur(200px);
    }
    .ellipseRight {
        width: 500px;
        height: 500px;
        left: calc(50% - 500px/2 + 1024px);
        top: calc(50% - 500px/2 + 0px);
        background: linear-gradient(90deg,rgba(57,30,232,0.6) 0%,rgba(41,204,255,0.6) 85.2%);
        -webkit-filter: blur(200px);
        filter: blur(200px);
        -webkit-transform: rotate(-180deg);
        -ms-transform: rotate(-180deg);
        transform: rotate(-180deg);
    }
    .ellipseBottom {
        width: 714px;
        height: 714px;
        background: linear-gradient(180deg, #FFA7A7 60.88%, #EEB9D2 95.03%);
        filter: blur(200px);
        left: calc(50% - 714px/2);
        bottom: calc(50% - 714px/0.7);
    }
`;
export const Title = styled.h2`
    color: rgba(255, 255, 255, 0.87);
    font-size: 40px;
    z-index: 999999;
`;
export const Content = styled.p`
    color: rgba(255, 255, 255, 0.6);
    z-index: 999999;
`;