import styled from "styled-components";

export const OxhainBreadcumb01 = styled.div`
	a {
		color: ${({ theme }) => theme.colors.text50};
        font-family: 'Prompt', sans-serif;
        font-weight: 500;
		font-size: 14px;
	}

	.svg-fill-05 {
		height: 14px;
		path {
			stroke: ${({ theme }) => theme.colors.svgFill5};
		}
	}
`;
