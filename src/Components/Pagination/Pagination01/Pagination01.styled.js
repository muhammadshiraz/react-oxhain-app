import styled from "styled-components";

export const OxhainPagination01 = styled.div`
    .MuiPaginationItem-root {
        color: ${({ theme }) => theme.colors.text};
        font-family: 'Prompt', sans-serif;
        font-size: 16px;
        font-weight: normal;
        &.Mui-selected {
            background-color: ${({ theme }) => theme.colors.background03};
            font-weight: 500;
            color: #FFFFFF;
            &:hover {
                background-color: ${({ theme }) => theme.colors.background03};
            }
        }
    }
`;