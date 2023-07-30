import styled from 'styled-components';

export const OxhainTradePriceSlider = styled.div`
.text58 {
        color: ${({ theme }) => theme.colors.text58};
}

.rc-slider {
    &-rail {
        background-color: rgba(73, 73, 238, 0.5);
        height: 2px;
        top: 50%;
        transform: translateY(-1px);
    }

    &-track {
        background-color: rgba(73, 73, 238, 1);
        height: 2px;
        top: 50%;
        transform: translateY(-1px);
    }

    &-dot {
        width: 12px;
        height: 12px;
        top: -4px;
        background: rgba(73, 73, 238, 1);
        border-width: 2px;
        border-color: ${({ theme }) => theme.colors.background61};
        cursor: pointer !important;

        //background: url("/price-slider-dot.svg");
        //background-size: cover;

        &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: ${({ theme }) => theme.colors.background61};
            border-radius: 50%;

            transform: scale(0.6);
        }

        &-active {
            &::after {
                background: transparent;
            }
        }
    }

    &-mark {
        display: none;
    }

    &-handle {
        position: relative;
        //background: #4949EE;
        opacity: 1;
        border: none !important;
        box-shadow: none !important;

        &::after {
            //content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 18px;
            height: 18px;
            background: white;
        }

        background: url("/price-slider-handle.svg");
        background-size: cover;
    }
}
`;