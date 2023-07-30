import styled from "styled-components";

export const OxhainTradeStickyFooter = styled.div`
	background-color: ${({ theme }) => theme.colors.header};
	border-top: 1px solid ${({ theme }) => theme.colors.background53};

	.text53 {
		color: ${({ theme }) => theme.colors.text53};
	}
	.text56 {
		color: ${({ theme }) => theme.colors.text56};
	}
	.text57 {
		color: ${({ theme }) => theme.colors.text57};
	}

	.divider {
		position: relative;
		padding-left: 8px;
		padding-right: 14px;

		&::after {
			content: "";
			position: absolute;
			top: 25%;
			right: 0;
			width: 1px;
			height: 50%;
			background: ${({ theme }) => theme.colors.background53};
		}
	}

	.trade-sticky-footer-items {
		&:nth-child(1) {
			display: none;
		}
	}
`;
