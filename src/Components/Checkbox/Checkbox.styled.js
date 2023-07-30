import styled from "styled-components";
import CheckTick from "../../Assets/Images/CheckBox/check-tick.svg";

export const OxhainFormGroup = styled.div`
    .MuiCheckbox-root {
        padding: 0 !important;
        margin-right: 8px !important;
        width: 15px !important;
        height: 15px !important;
        opacity: 1;
        position: relative;
        svg {
            opacity: 0;
        }
        &:before {
            content: '';
            position: absolute;
            left: 0;
            width: 15px;
            height: 15px;
            /* background: linear-gradient(90deg, #21D4FD 0%, #B721FF 100%); */
            background: #4949EE;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            border: 2px solid;
            /* border-image: linear-gradient(90deg,#21D4FD 0%,#B721FF 100%) 1; */
            border-radius: 2px;
            /* border-image: linear-gradient(90deg,#4949EE 0%,#4949EE 100%) 2; */
            opacity: 1;
        }
        input {
            opacity: 0;
            width: 15px !important;
            height: 15px !important;
        }
        &.Mui-checked {
            border-radius: 2px;
            /* background: linear-gradient(90deg, #B721FF 0%, #21D4FD 100%); */
            background: linear-gradient(90deg, #4949EE 0%, #4949EE 100%);
            &:before {
                opacity: 1;
                border: 0px solid;
                background-image: url(${CheckTick});
                background-size: 10px 13.5px;
                background-position: center center;
                background-repeat: no-repeat;
                -webkit-background-clip: initial;
                background-color: transparent;
            }
        }
        .PrivateSwitchBase-input {
            border: 2px solid;
            border-image: linear-gradient(#B721FF, #21D4FD) 1;
        }
    }
    .MuiFormControlLabel-label {
        font-size: 14px;
        line-height: normal;
    }
    .MuiSvgIcon-root {
        width: 15px !important;
        height: 15px !important;
    }
`;