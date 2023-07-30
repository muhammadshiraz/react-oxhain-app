import styled from "styled-components";

export const ThemeContainer = styled.div`
    padding: 15px 0;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.background};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const ThemeButton = styled.button`
    margin: 0 5px;
    padding: 10px;
    font-size: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 5px;
    width: 20px;
    height: 20px;
    cursor: pointer;
`;