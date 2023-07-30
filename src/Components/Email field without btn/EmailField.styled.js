import styled from "styled-components";

export const OxhainEmailField = styled.div`
    .EmailInput {
        font-weight: 400;
        /* background: #FBFBFB; */
        padding: 0 20px;
        font-size: 18px;
        /* border: 1.8px solid;
        border-image: linear-gradient(90deg, rgba(33, 212, 253, 1), rgba(183, 33, 255, 1)) 1.5; */
        background-color: ${({ theme }) => theme.colors.background04};
        border: 1px solid ${({ theme }) => theme.colors.borderLine05};
        border-radius: 4px;
        /* transform: skew(-30deg); */
        text-align: left;
        justify-content: left;
        align-items: center;
        /* margin-left: -10px; */
        &:focus,
        &:hover {
            /* transition: 0.5s;
            background: rgba(33, 212, 253, 0.2);
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25); */
            transition: 0.5s;
            outline: none;
            color: ${({ theme }) => theme.colors.text};
            border: 1.5px solid ${({ theme }) => theme.colors.borderLine06};
            background-color: ${({ theme }) => theme.colors.background05};
            input {
                background: transparent;
            }
        }
        button,
        .PhoneLine {
            /* transform: skew(30deg); */
        }
        input {
            transition: 0.5s;
            /* transform: skew(30deg); */
            text-align: left;
            background-color: ${({ theme }) => theme.colors.background04};
            width: 100%;
            height: 100%;
            &:focus-visible {
                outline: none;
            }
            &::placeholder {
                color: ${({ theme }) => theme.colors.text16};
            }
        }
    }
`;