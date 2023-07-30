import styled from "styled-components";

export const OxhainAdvancedTrade = styled.div`
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
				height: 100%;
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

	.orderForm {
		.process-types {
			&-item {
				/*&:not(:last-child) {*/
				&.divider {
					border-left: 1px solid ${({ theme }) => theme.colors.background53};
					border-right: 1px solid ${({ theme }) => theme.colors.background53};
				}

				&.active span {
					color: ${({ theme }) => theme.colors.text50};
					font-weight: 600;
				}
			}
		}

		&-tab-items {
			position: relative;
			background: ${({ theme }) => theme.colors.background53};
			height: 30px;

			&-rect {
				position: absolute;
				left: 1%;
				top: 7.5%;
				width: 50%;
				height: 85%;
				transition: left .35s;
				border-radius: 2px;
				
				&.buy {
					background: ${({ theme }) => theme.colors.background54};
				}

				&.sell {
					left: 49%;
					background: ${({ theme }) => theme.colors.background55};
				}
			}
		}
		
		.input-spoiler {
			font-size: 12px;
			padding-left: 11px;
			border-left: 1px solid ${({ theme }) => theme.colors.background53};
		}
	}

	.assets-title {
		border-bottom: 1px solid ${({ theme }) => theme.colors.background53};
	}
`;
