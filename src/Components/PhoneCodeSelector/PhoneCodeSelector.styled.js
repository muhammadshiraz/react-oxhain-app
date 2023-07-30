import styled from "styled-components";

export const OxhainPhoneCodeSelector = styled.div`
    width: 100px;
    /* transform: skew(30deg); */
    .select-box--selected-item,
    .select-box--arrow {
        /* transform: skew(-30deg); */
    }
    .select-box--items {
        background-color: #FFFFFF;
        box-shadow: 3px 5px 14px #dddddd;
        width: 170px;
        height: 202px;
        padding: 12px 12px 12px 12px;
        overscroll-behavior: contain;
        overflow-y: scroll;
        overflow-x: hidden;
        margin: 15px 0 0 0;
        left: 0;
        border-radius: 4px;
        .items {
            font-size: 18px;
            color: #000000;
            cursor: pointer;
            text-align: left;
            width: 100%;
            padding-bottom: 8px;
            &:last-child {
                padding-bottom: 0;
            }
        }
        /* width */
        &::-webkit-scrollbar {
            width: 4px;
            border-radius: 4px;
        }
        /* Track */
        &::-webkit-scrollbar-track {
            background: #FFFFFF;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: rgba(73, 73, 238, 1);
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(#B721FF, #21D4FD);
        }
    }
`;