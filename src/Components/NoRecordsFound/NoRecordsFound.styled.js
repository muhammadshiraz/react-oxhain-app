import styled from "styled-components";

export const NoRecordsFound = styled.div`
    background-color: ${({ theme }) => theme.colors.background01};
    p {
        color: ${({ theme }) => theme.colors.text2};;
    }
`;
