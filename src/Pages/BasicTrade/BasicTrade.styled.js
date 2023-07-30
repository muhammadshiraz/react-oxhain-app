import styled from "styled-components";

export const OxhainBasicTrade = styled.div`
	background: ${({ theme }) => theme.colors.background51};
	.closeMarginBtn {
		color: #4949EE;
	}
	span,
	button {
		color: ${({ theme }) => theme.colors.text50};
	}

	.header-bg {
		background: ${({ theme }) => theme.colors.header};
	}

	.text51 {
		color: ${({ theme }) => theme.colors.text51};
	}

	.text52 {
		color: ${({ theme }) => theme.colors.text52};
	}

	.text53 {
		color: ${({ theme }) => theme.colors.text53};
	}

	.text5y {
		color: ${({ theme }) => theme.colors.text5y};
	}

	.divider {
		border-bottom: 1px solid ${({ theme }) => theme.colors.borderLine51};
	}

	.basicTradeHeader {
		.left {
			background-color: ${({ theme }) => theme.colors.background61};
		}

		.price-primary {
			position: relative;

			&::after {
				content: "";
				position: absolute;
				top: 12.5%;
				right: 0;
				width: 1px;
				height: 75%;
				background: ${({ theme }) => theme.colors.background53};
			}
		}

		.text4 {
			color: ${({ theme }) => theme.colors.text4};
		}

		.right {
			min-width: 290px;
			
			input {
				background: ${({ theme }) => theme.colors.background52};
				border: 1px solid ${({ theme }) => theme.colors.borderLine50};
	
				&::placeholder {
					color: ${({ theme }) => theme.colors.text54};
				}
	
				&:focus {
					outline: none;
				}
			}
		}

	}

	.orderbooks,
	.market,
	.market-trades {
		&-item:nth-child(even) {
			background: ${({ theme }) => theme.colors.background50};
		}
	}

	.left,
	.right {
		min-width: 290px;
		padding-left: 6px;
		padding-right: 6px;
	}

	.market-actions button {
		margin-bottom: 6px;

		&.active {
			color: ${({ theme }) => theme.colors.text53};
			border-bottom: 1px solid ${({ theme }) => theme.colors.text53};
			font-weight: 600;
		}
	}

	.orderForm {
		.background54 {
			background: ${({ theme }) => theme.colors.background54};

			&:active {
				background: ${({ theme }) => theme.colors.background56};
			}
		}

		.background55 {
			background: ${({ theme }) => theme.colors.background55};

			&:active {
				background: ${({ theme }) => theme.colors.background57};
			}
		}

		&-content {
			background: ${({ theme }) => theme.colors.background61};

			.text55 {
				color: ${({ theme }) => theme.colors.text55};
			}

			input {
				font-weight: light;
			}
		}

		.process-types {
			.active {
				background: ${({ theme }) => theme.colors.background61};
				border-top: 2px solid ${({ theme }) => theme.colors.text53};

				span {
					color: ${({ theme }) => theme.colors.text53};
					font-weight: 600;
				}
			}
		}
	}

	.client-info {
		background: ${({ theme }) => theme.colors.background61};
	}

	.grayscale-svg {
		path {
			filter: grayscale(1);
		}
	}

	.overflow-y-auto {
		::-webkit-scrollbar {
			width: 4px;
		}

		::-webkit-scrollbar-track {
			background: transparent;
		}

		::-webkit-scrollbar-thumb {
			background-color: ${({ theme }) => theme.colors.text53};
			border-radius: 24px;
		}
	}
`;
