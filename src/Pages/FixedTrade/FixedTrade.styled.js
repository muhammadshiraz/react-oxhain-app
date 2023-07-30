import styled from "styled-components";

export const OxhainFixedTrade = styled.div`
	background: ${({ theme }) => theme.colors.background51};

	span,
	button {
		color: ${({ theme }) => theme.colors.text50};
	}
	.text50 {
		color: ${({ theme }) => theme.colors.text50};
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
	.text55 {
		color: ${({ theme }) => theme.colors.text55};
	}

	.background54 {
		background: ${({ theme }) => theme.colors.background54};
	}
	.background55 {
		background: ${({ theme }) => theme.colors.background55};
	}
	
	.background60 {
		background: ${({ theme }) => theme.colors.background60};
	}

	.advancedTradeHeader {
		background: ${({ theme }) => theme.colors.background58};
		
		.price-primary {
			position: relative;

			/* Down/Right arrow */
			svg path {
				stroke: ${({ theme }) => theme.colors.text53};;
			}

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

	}

	.layout {
		&-left {
			.client-info {
				background: ${({ theme }) => theme.colors.background61};
				//height: 100%;
				//min-height: 225px;
				//max-height: 275px;
			}
		}

		 &-middle, &-right {
			border: 1px solid ${({ theme }) => theme.colors.background53};
		}

		&-right {
			width: 280px;
		}

		&-middle {
			width: 280px;

			.coin-price-info {
				position: relative;
				* {
					z-index: 10;
				}

				&::after {
					content: "";
					position: absolute;
					top: -12.5%;
					left: -2.5%;
					width: 105%;
					height: 125%;
					background-color: ${({ theme }) => theme.colors.background51};
					z-index: 0;
				}
			}
		}
	}

	.orderbooks,
	.market,
	.market-trades {
		&-item {
			border-radius: 2px;
			font-size: 9px;
		}
		&-item:nth-child(odd) {
			background: ${({ theme }) => theme.colors.background59};
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

	.market {
		&-tabs-header {
			display: none;
		}

		&-table-header {
			span {
				flex: 1 1 100%;
				margin-right: 0;

				&:nth-child(1) {
					text-align: left;
				}
			}
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
			padding-left: 1.2rem;
			padding-right: 1.2rem;

			background: ${({ theme }) => theme.colors.background61};
			padding-bottom: 22px;

			.text55 {
				color: ${({ theme }) => theme.colors.text55};
			}

			input {
				font-weight: light;
			}
		}

		.process-types {
			button {
				padding-left: 18px;
				padding-right: 18px;
				
				&.active {
					background: ${({ theme }) => theme.colors.background61};
	
					span {
						color: ${({ theme }) => theme.colors.text50};
						font-weight: 600;
					}
				}
			}
		}
	}
`;
