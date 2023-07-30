import styled from "styled-components";

export const OxhainTextField01 = styled.div`
    .TextField01 {
        font-weight: 400;
        background-color: ${({ theme }) => theme.colors.background06};
        border: 1px solid ${({ theme }) => theme.colors.borderLine08};
        padding: 18px 20px;
        font-size: 18px;
        transform: skew(-30deg);
        text-align: left;
        justify-content: left;
        align-items: center;
        width: 100%;
        &:hover {
            transition: 0.5s;            
            background-color: ${({ theme }) => theme.colors.background06};
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
            input {
                background-color: transparent;
            }
        }
        button,
        .PhoneLine {
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
                color: ${({ theme }) => theme.colors.placeholder01};
            }
        }
    }
`;