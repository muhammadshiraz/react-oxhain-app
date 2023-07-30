import styled from "styled-components";

export const OxhainSearch01 = styled.div`
    .Search01 {
        z-index: 999999;
        font-weight: 400;
        background-color: ${({ theme }) => theme.colors.background02};
        padding: 18px 20px;
        font-size: 18px;
        transform: skew(-30deg);
        text-align: left;
        justify-content: left;
        align-items: center;
        border-radius: 2px;
        width: 100%;
        &:hover {
            transition: 0.5s;            
            /* box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25); */
            input {
                background-color: transparent;
            }
        }
        svg {
            transform: skew(30deg);
        }
        span {
            transform: skew(30deg);
        }
        input {
            transition: 0.5s;
            transform: skew(30deg);
            color: ${({ theme }) => theme.colors.text5};
            text-align: left;
            background-color: transparent;
            width: 100%;            
            height: 100%;
            &:focus-visible {
                outline: none;
            }
            &::placeholder {
                color: ${({ theme }) => theme.colors.placeholder02};
            }
        }
    }
`;