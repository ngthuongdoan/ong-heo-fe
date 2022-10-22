import styled from "styled-components"

export const StyledNotFoundPage = styled.main`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: "Nunito Sans";
	padding: 70px;
	svg {
		width: 100%;
		visibility: hidden;
	}
	h1 {
		font-size: 120px;
		font-weight: bold;
	}
	h2 {
		font-size: 50px;
		font-weight: bold;
	}
	.btn {
		z-index: 1;
		overflow: hidden;
		background: transparent;
		position: relative;
		padding: 8px 50px;
		border-radius: 30px;
		cursor: pointer;
		font-size: 16px;
		letter-spacing: 2px;
		transition: 0.2s ease;
		font-weight: bold;
		margin: 5px 0px;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	@media screen and (max-width: 768px) {
		padding: 16px;
		flex-direction: column;
		justify-content: center;
		gap: 24px;
		.content {
			text-align: center;
			gap: 16px;
			h1 {
				font-size: 100px;
				line-height: 1;
			}
			h2 {
				font-size: 40px;
			}
		}
	}
`
