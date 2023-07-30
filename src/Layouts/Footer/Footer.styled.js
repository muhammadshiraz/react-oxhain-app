import styled from "styled-components";

export const OxhainFooter = styled.div`
    background: ${({ theme }) => theme.colors.linearGradientBg02};
    .MuiGrid-root {
        margin-left: 0;
        width: 100%;
    }
    .MuiGrid-item {
        padding-top: 0;
        padding-left: 0;
        margin-bottom: 1rem;
    }
    .container ul li a {
        /* color: ${({ theme }) => theme.colors.footerNavLink}; */
        color: #FFFFFF;
    }
    svg {
        path {
            fill: ${({ theme }) => theme.colors.footerIcon};
        }
    }
    .copyright {
        position: relative;
        &::before {
            content: "";
            position: absolute;
            left: 0;
            width: 100%;
            height: 1px;
            border: 1px solid rgba(255, 255, 255, 0.6);
        }
        p {
            /* color: ${({ theme }) => theme.colors.copyrightText}; */
        }
    }
`;
export const Title = styled.button`
    /* color: ${({ theme }) => theme.colors.title}; */
    color: #FFFFFF;

    svg {
        path { 
            fill: hsl(0deg 0% 100%);
        }
        
    }
`;