import { createGlobalStyle } from "styled-components";
import * as theme from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
}
// theme buttons color
.light {
  background-color: ${theme.light.colors.header};
}
.dark {
  background-color: ${theme.dark.colors.header};
}
// theme texts color
.title {
  color: ${({ theme }) => theme.colors.title};
}
.text {
  color: ${({ theme }) => theme.colors.text};
}
.heading1 {
  color: ${({ theme }) => theme.colors.heading1};
}
.text1 {
  color: ${({ theme }) => theme.colors.text1};
}
.text2 {
  color: ${({ theme }) => theme.colors.text2};
}
.text3 {
  color: ${({ theme }) => theme.colors.text3};
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
.border-bottom-line-10 {
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLine10};
}
.border-color-line-11 {
  border-color: ${({ theme }) => theme.colors.borderLine11};
}
.border-color-line-12 {
  border-color: ${({ theme }) => theme.colors.borderLine12};
}
.border-color-line-10 {
  border-color: ${({ theme }) => theme.colors.borderLine10};
}
.border-color-line-13 {
  border-color: ${({ theme }) => theme.colors.borderLine13};
}
.border-color-line-07 {
  border-color: ${({ theme }) => theme.colors.borderLine07};
}
.svg-fill-2 {
  path {
    fill: ${({ theme }) => theme.colors.svgFill2};
  }
}
.background02 {
  background-color: ${({ theme }) => theme.colors.background02};
}
.background09 {
  background-color: ${({ theme }) => theme.colors.background09};
}
.background10 {
  background-color: ${({ theme }) => theme.colors.background10};
}
.background11 {
  background-color: ${({ theme }) => theme.colors.background11};
}
.background12 {
  background-color: ${({ theme }) => theme.colors.background12};
}
.background13 {
  background: ${({ theme }) => theme.colors.background13};
}
.background51 {
  background-color: ${({ theme }) => theme.colors.background51};
}
.linear-gradient-bg-01 {
  background: ${({ theme }) => theme.colors.linearGradientBg01};
}
`;