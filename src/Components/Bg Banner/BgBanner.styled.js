import styled from "styled-components";

export const OxhainBgBanner = styled.div`
    position: relative;
    height: 480px;
`;

export const OverlayBg = styled.div`
    background: rgba(0, 0, 0, 0.28);
    width: 100%;
    height: 163px;
`;

export const Title = styled.h2`
    &::before {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        background: #FFFFFF;
        border-radius: 100%;
        left: 0;
    }
    max-width: 282px;
    min-width: 282px;
    position: relative;
    color: hsla(0, 0%, 100%, 1);
    font-weight: 500;
    font-size: 38px;
    z-index: 999999;
    &::after {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        background: #FFFFFF;
        border-radius: 100%;
        right: 0;
    }
`;

export const Content = styled.p`
    color: hsla(0, 0%, 100%, 1);
    font-weight: 400;
    font-size: 28px;
    z-index: 999999;
`;