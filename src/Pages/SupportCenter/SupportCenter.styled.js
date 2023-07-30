import styled from "styled-components";

export const OxhainSupportCenter = styled.div`
	background: ${({ theme }) => theme.colors.background51};

    span {
		color: ${({ theme }) => theme.colors.text50};
	}

    p {
		color: ${({ theme }) => theme.colors.text4};
	}

	.banner-input {
		background: transparent;
		border: 2px solid ${({ theme }) => theme.colors.text53};
	}

	.section-divider {
		border-bottom: 1px solid ${({ theme }) => theme.colors.background53};
	}

	.self-service {
		.border {
			border-color: ${({ theme }) => theme.colors.text4};
		}
	}
`;
