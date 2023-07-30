import styled from "styled-components";

export const OxhainAffiliate = styled.div`
    .sectionCommissions02 {
        background: linear-gradient(360deg, rgba(73, 73, 238, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
    }
    .sectionCommissions04 {
        .commissionsBox01 {
            &::before {
                content: '';
                width: 97%;
                height: 1px;
                position: absolute;
                background: linear-gradient(90deg,#7014F6 100%,#628BF7 100%);
                bottom: 0;
                left: 0;
            }
            /* border-bottom: 1px solid;
            border-image: linear-gradient(90deg,#7014F6 100%,#628BF7 100%) 1; */
        }
        .commissionsBox02 {
            /* border-left: 1px solid;
            border-top: 1px solid;
            border-image: linear-gradient(90deg,#7014F6 100%,#628BF7 100%) 1; */
            &::before {
                content: '';
                width: 98%;
                height: 1px;
                position: absolute;
                background: linear-gradient(90deg,#7014F6 100%,#628BF7 100%);
                top: 0;
                left: 0;
            }
            &::after {
                content: '';
                width: 1px;
                height: 95%;
                position: absolute;
                background: linear-gradient(90deg,#7014F6 100%,#628BF7 100%);
                top: 0;
                left: 0;
            }
        }
        .commissionsBox03 {
            /* border-right: 1px solid;
            border-bottom: 1px solid;
            border-image: linear-gradient(90deg,#7014F6 100%,#628BF7 100%) 1; */
            &::before {
                content: '';
                width: 100%;
                height: 1px;
                position: absolute;
                background: linear-gradient(90deg,#7014F6 100%,#628BF7 100%);
                bottom: 0;
                left: 0;
            }
            &::after {
                content: '';
                width: 1px;
                height: 95%;
                position: absolute;
                background: linear-gradient(90deg,#7014F6 100%,#628BF7 100%);
                bottom: 0;
                right: 0;
            }
        }
        .commissionsBox04 {
            /* border-top: 1px solid;
            border-image: linear-gradient(90deg,#7014F6 100%,#628BF7 100%) 1; */
            &::before {
                content: '';
                width: 97%;
                height: 1px;
                position: absolute;
                background: linear-gradient(90deg,#7014F6 100%,#628BF7 100%);
                top: 0;
                right: 0;
            }
        }
    }
`;