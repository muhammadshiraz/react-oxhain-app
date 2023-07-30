import styled from "styled-components";

export const OxhainSelect02 = styled.div`
    .MuiFormLabel-root {
        font-family: 'Prompt', sans-serif;
        color: ${({ theme }) => theme.colors.text};
        font-size: 14px;
        font-weight: 400;
        line-height: 1.8375em;
        &.Mui-focused {
            color: ${({ theme }) => theme.colors.text};
        }
    }
    .MuiInputBase-root {
        color: ${({ theme }) => theme.colors.text};
        border-radius: 2px;
        border: 1px solid ${({ theme }) => theme.colors.borderLine02};
        background: ${({ theme }) => theme.colors.select2Bg};
        .MuiOutlinedInput-notchedOutline {
            border-color: ${({ theme }) => theme.colors.borderLine02};
        }
        &.Mui-focused {
           .MuiOutlinedInput-notchedOutline {
                border-color: ${({ theme }) => theme.colors.borderLine02};
                border-width: 1px;
                outline: none;
           } 
        }
        &:hover,
        &:focus {
            outline: none; 
            .MuiOutlinedInput-notchedOutline {
                border-color: ${({ theme }) => theme.colors.borderLine02};
                outline: none;
            }
        }
    }
    svg {
        path {
            fill: ${({ theme }) => theme.colors.svgFill2};
        }
    }
`;