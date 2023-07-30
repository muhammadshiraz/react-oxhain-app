import styled from "styled-components";

export const OxhainPlatformSecurity = styled.div`
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

    .background65 {
		background: ${({ theme }) => theme.colors.background65};
    }

	.background66 {
		background-color: ${({ theme }) => theme.colors.background66};
	}

	.content-tabs {
		span {
			font-weight: 400;
		}

		.active {
			position: relative;

			p {
				color: ${({ theme }) => theme.colors.text50} !important;
				font-weight: 500;
			}

			&::after {
				content: "";
				position: absolute;
				width: 100%;
				height: 6px;
				bottom: 0;
				left: 0;
				background: ${({ theme }) => theme.colors.background03};
			}
		}
	}

	.platform-security-tab {
		&-item {
			position: relative;
			border: 2px solid ${({ theme }) => theme.colors.text53};
			border-radius: 2px;

			* {
				z-index: 2;
			}

			&::before {
				position: absolute;
				content: "";
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: ${({ theme }) => theme.colors.background51};
				z-index: 1;
			}

			&::after {
				position: absolute;
				content: "";
				top: 12px;
				left: 12px;
				width: 100%;
				height: 100%;
				background: ${({ theme }) => theme.colors.background68};
				z-index: 0;
				border-radius: 2px;
			}
		}
	}

	.compliance-security-tab {
		&-table {
			position: relative;

			* {
				z-index: 2;
			}

			&::before {
				position: absolute;
				content: "";
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: ${({ theme }) => theme.colors.background51};
				border: 2px solid ${({ theme }) => theme.colors.background69};
				z-index: 1;
			}

			&::after {
				position: absolute;
				content: "";
				top: 12px;
				left: 12px;
				width: 100%;
				height: 100%;
				background: ${({ theme }) => theme.colors.background67};
				z-index: 0;
				border-radius: 2px;
			}
		}
	}

	.vulnerability-plan-tab {
		position: relative;

		&-item {
			position: relative;
			z-index: 2;

			&::before {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: ${({ theme }) => theme.colors.background51};
				border: 1px solid ${({ theme }) => theme.colors.text53};
				transform: skew(-30deg);
			}

			p {
				b {
					color: ${({ theme }) => theme.colors.text53};
					cursor: pointer;
				}
			}
		}

		@media (min-width: 984px) {
			&::after {
				position: absolute;
				content: "";
				top: 12px;
				left: 12px;
				width: 99%;
				height: 100%;
				background: ${({ theme }) => theme.colors.background70};
				z-index: 0;
				border-radius: 2px;
				transform: skew(-30deg);
			}
		}
	}
`;
