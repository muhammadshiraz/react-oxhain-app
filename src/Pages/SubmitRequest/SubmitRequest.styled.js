import styled from "styled-components";

export const OxhainSubmitRequest = styled.div`
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
		position: relative;
		border: 2px solid ${({ theme }) => theme.colors.text53};

		* {
			z-index: 10;
		}

		&-dropdown {
			background: transparent;
			border: 1px solid ${({ theme }) => theme.colors.background63};

			&-inner {
				background: ${({ theme }) => theme.colors.background51};
				border: 1px solid ${({ theme }) => theme.colors.background63};
				border-top: none;
				transform: scale(1.0015);

				&-item:hover {
					background: ${({ theme }) => theme.colors.background53};
				}
			}
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
			background: ${({ theme }) => theme.colors.background63};
			z-index: 0;
			border-radius: 2px;
		}
	}

	.overflow-y-auto {
		margin-right: 5px;

		::-webkit-scrollbar {
			width: 6px;
		}

		::-webkit-scrollbar-track {
			background: transparent;
		}

		::-webkit-scrollbar-thumb {
			background-color: ${({ theme }) => theme.colors.text50};
			border-radius: 24px;
		}
	}
`;
