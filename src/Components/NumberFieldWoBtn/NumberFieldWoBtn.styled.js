import styled from "styled-components";

export const OxhainNumberFieldWoBtn = styled.div`
    .numberInput {
        font-weight: 400;
        background: #FBFBFB;
        padding: 15px 20px;
        font-size: 18px;
        border: 1.8px solid;
        border-image: linear-gradient(90deg, rgba(33, 212, 253, 1), rgba(183, 33, 255, 1)) 1.5;
        transform: skew(-30deg);
        text-align: left;
        justify-content: left;
        align-items: center;
        margin-left: -10px;
        width: 100%;
        &.correct-code {
            border-image: linear-gradient(90deg,#33FF00 , #33FF00) 1.5;
        }
        &.wrong-code {
            border-image: linear-gradient(90deg,#ff0000 , #ff0000) 1.5;
        }
        &:hover {
            transition: 0.5s;            
            background: rgba(33, 212, 253, 0.2);
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
            input {
                background: transparent;
            }
        }
        input {
            transition: 0.5s;
            transform: skew(30deg);
            text-align: left;
            background: #FBFBFB;
            width: 100%;            
            height: 100%;
            &:focus-visible {
                outline: none;
            }
            &::placeholder {
                color: #979797;
            }
        }
    }
`;