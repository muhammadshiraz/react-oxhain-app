import styled from "styled-components";

export const OxhainSupportCenterBlog = styled.div`
	background: ${({ theme }) => theme.colors.background51};
	font-family: "Prompt", sans-serif;

	.text53 {
		background: ${({ theme }) => theme.colors.text53};
	}

	.text16 {
		color: ${({ theme }) => theme.colors.text16};
	}

	.borderLine05 {
		border-color: ${({ theme }) => theme.colors.borderLine05};
	}

	.background07 {
		background: ${({ theme }) => theme.colors.background07};
	}
	.background71 {
		background: ${({ theme }) => theme.colors.background71};
	}
	.background72 {
		background: ${({ theme }) => theme.colors.background72};
	}

	span {
		color: ${({ theme }) => theme.colors.text50};
		font-weight: 300;
	}
	p {
		color: ${({ theme }) => theme.colors.text4};
		font-weight: 300;
	}

	.blog {
		&-item {
			&-date {
				color: ${({ theme }) => theme.colors.text16};
			}
		}

		.swiper-pagination {
			margin-top: 2rem;
			position: relative;

			.swiper-pagination-bullet {
				width: 30px;
				height: 4px;
				border-radius: 0px;
				background: ${({ theme }) => theme.colors.borderLine05};

				&-active {
					width: 48px;
					background: ${({ theme }) => theme.colors.text53};
				}
			}
		}

		.swiper-button-prev,
		.swiper-button-next {
			background: ${({ theme }) => theme.colors.text53};
			color: #fff;
			width: 50px;
			height: 50px;
			border-radius: 50%;
			padding: 3rem;

			zoom: 0.45;
			transform: translateY(-50%);
		}
	}

	.search-input {
		color: ${({ theme }) => theme.colors.text16};
		background: ${({ theme }) => theme.colors.background71};
		border: 1px solid ${({ theme }) => theme.colors.borderLine05};
	}

	input:focus {
		outline: none;
	}
`;
