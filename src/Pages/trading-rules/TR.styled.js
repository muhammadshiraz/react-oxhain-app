import styled from "styled-components";

export const OxhainTradingRules = styled.div`
    .MuiTabPanel-root {
        padding: 0;
        margin-top: 20px;
    }
    .MuiTabs-scroller {
        display: flex;
    }
    .MuiTabs-root {
        min-height: 66px;
        @media (max-width: 768px) {
            min-height: 45px;
        }
    }
    .MuiTabs-flexContainer {
        .MuiButtonBase-root {
            padding: 0;
            align-items: flex-start;
            color: ${({ theme }) => theme.colors.text5};
            font-size: 20px;
            font-weight: 400;
            text-transform: capitalize;
            margin-right: 74px;
            @media (max-width: 768px) {
                margin-right: 45px;
                font-size: 16px;
            }
        }
    }
    .MuiTabs-indicator {
        background-color: #4949EE;
        height: 4px;

    }
    .MuiTableHead-root {
        .MuiTableCell-root {
            color: ${({ theme }) => theme.colors.text};
            font-size: 16px;
            font-weight: 400;
            padding: 0 0 10px 0;
        }
    }
    .MuiTableBody-root {
        .MuiTableCell-root {
            color: ${({ theme }) => theme.colors.text};
            font-size: 16px;
            padding: 30px 0;
            &:first-child {
                font-weight: 500;
            }
            font-weight: 400;
        }
    }
`;
