import styled from 'styled-components';

export const OxhainPriceField = styled.input`
    background: ${({ theme }) => theme.colors.background53};
  
    &::placeholder {
        color: ${({ theme }) => theme.colors.text55};
    }

    &:focus {
        outline: none;
    }

    /* Chrome, Safari, Edge, Opera */
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    [type="number"] {
        -moz-appearance: textfield;
    }
`;