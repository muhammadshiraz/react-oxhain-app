import styled from "styled-components";

export const OxhainReqestForm = styled.div`
	background: ${({ theme }) => theme.colors.background51};
	font-family: 'Prompt', sans-serif;

	span {
		color: ${({ theme }) => theme.colors.text50};
		font-weight: 300;
	}
	p {
		color: ${({ theme }) => theme.colors.text4};
		font-weight: 300;
	}

	.form {
		input {
			background: ${({ theme }) => theme.colors.background64};

			&:focus {
				background: ${({ theme }) => theme.colors.background05};
				border: 1px solid ${({ theme }) => theme.colors.background65};
				
				outline: none;
			}
		}
	}
`;
