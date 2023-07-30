import styled from "styled-components";

export const OxhainDataTable = styled.div`
	.text4 {
		color: ${({ theme }) => theme.colors.text4};
	}

	.header {
		border-bottom: 1px solid ${({ theme }) => theme.colors.background53};
		button:last-child {
			justify-content: end;
			span {
				color: #4949EE;
			}
		}
	}
`;
