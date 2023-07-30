import styled from "styled-components";

export const OxhainTextField04 = styled.div`
    .TextField04 {
        font-weight: 300;
        padding: 12px 8px;
        font-size: 14px;
        background: rgba(157, 157, 164, 0.2);
        border: 1px solid rgba(157, 157, 164, 0.5);
        text-align: left;
        justify-content: left;
        align-items: center;
        border-radius: 2px;
        width: 100%;
        &.correct-code {
            background-image: linear-gradient(white, white), radial-gradient(circle at top left, #33FF00,#33FF00);
        }
        &.wrong-code {
            background-image: linear-gradient(white, white), radial-gradient(circle at top left, #ff0000,#ff0000);
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
            text-align: left;
            color: #ffffff;
            background: transparent;
            width: 100%;            
            height: 100%;
            &:focus-visible {
                outline: none;
            }
            &::placeholder {
                color: rgba(255, 255, 255, 0.38);
            }
        }
    }
`;