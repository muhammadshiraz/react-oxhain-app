import styled from "styled-components";

export const OxhainSelect01 = styled.div`
    svg {
        path {
            fill: ${({ theme }) => theme.colors.svgFill2};
        }
    }
    .select-box--items {
        background-color: #FFFFFF;
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        width: max-content;
        height: 116px;
        padding: 12px 12px;
        overscroll-behavior: contain;
        margin: 0;
        right: 0;
        top: 35px;
        &:before {
            content:"";
            position: absolute;
            right: 11px;
            top: -10px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 10px 10px 10px;
            border-color: transparent transparent #FFFFFF transparent;
            z-index:9999;
        }
        .items {
            color: hsla(0, 0%, 0%, 1);
            font-size: 14px;
            cursor: pointer;
            text-align: left;
            width: 100%;
            padding-bottom: 8px;
            &:last-child {
                padding-bottom: 0;
            }
            &:hover {
                font-weight: 500;
            }
        }
    }
`;