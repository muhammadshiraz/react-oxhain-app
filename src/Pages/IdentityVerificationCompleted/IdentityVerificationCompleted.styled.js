import styled from "styled-components";

export const OxhainIdentityVerificationCompleted = styled.div`
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
`;
