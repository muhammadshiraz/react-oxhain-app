import styled from "styled-components";

export const OxhainNews = styled.div`
    .text {
        color: ${({ theme }) => theme.colors.text};
    }
    .text4 {
        color: ${({ theme }) => theme.colors.text4};
    }
    .text5 {
        color: ${({ theme }) => theme.colors.text5};
    }
    .text14 {
        color: ${({ theme }) => theme.colors.text14};
    }
    .text15 {
        color: ${({ theme }) => theme.colors.text15};
    }
    .text16 {
        color: ${({ theme }) => theme.colors.text16};
    }
    .border-top-line-10 {
        border-top: solid 1px ${({ theme }) => theme.colors.borderLine10};
    }
    .border-bottom-line-10 {
        border-bottom: solid 1px ${({ theme }) => theme.colors.borderLine10};
    }
    .border-bottom-line-09 {
        border-bottom: solid 5px ${({ theme }) => theme.colors.borderLine09};
    }
    .border-left-line-07 {
        border-left: solid 1px ${({ theme }) => theme.colors.borderLine07};
    }
    .background-07 {
        background-color: ${({ theme }) => theme.colors.background07};
    }
    .background-08 {
        background-color: ${({ theme }) => theme.colors.background08};
    }
    .svg-fill-6 {
        path {
            stroke: ${({ theme }) => theme.colors.svgFill6};
        }
    }
`;