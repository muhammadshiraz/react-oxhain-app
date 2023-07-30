import styled from "styled-components";

export const OxhainLanguageSelector = styled.div`
    width: 100px;
    .select-box--items {
        background-color: #FFFFFF;
        box-shadow: 3px 5px 14px #dddddd;
        width: 5vw;
        height: 10rem;
        padding: 12px 0px 12px 12px;
        overscroll-behavior: contain;
        overflow-y: scroll;
        overflow-x: hidden;
        .items {
            font-size: 16px;
            color: #606060;
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
            width: 3px;
        }
        /* Track */
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: linear-gradient(#B721FF, #21D4FD);
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(#B721FF, #21D4FD);
        }
    }
`;