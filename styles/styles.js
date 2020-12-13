import styled from "@emotion/styled";
import { mobile, tabletDown } from "../utils/mediaQuery";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-content: center;
	justify-content: center;
`;

export const IconContainer = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 2;
	justify-content: center;
	display: flex;

	${tabletDown} {
		height: 80%;
		flex-direction: column;
	}
`;

export const Description = styled.div`
	width: 70%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	${tabletDown} {
		width: 100%;
		align-items: center;
	}

	p {
		width: 32rem;
		color: #a6a6a6;
		font-size: 1.1rem;

		${tabletDown} {
			font-size: 0.9rem;
		}

		${mobile} {
			width: 20rem;
		}
	}
`;

export const Icon = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;

	img {
		align-self: center;
		width: calc(22rem + 15px);
		height: 8.5rem;

		${tabletDown} {
			width: calc(18rem + 15px);
			height: 7.5rem;
		}
	}
`;

export const ContactContainer = styled.div`
	width: 100%;
	height: 5rem;
	position: absolute;
	z-index: 2;
	align-self: flex-end;
	margin-bottom: 1.5rem;

	p {
		margin: 0;
		padding: 0;

		margin-left: 2.5rem;

		line-height: 21px;

		color: #a6a6a6;
	}

	a {
		margin: 0;
		padding: 0;

		margin-left: 2.5rem;

		line-height: 21px;

		text-decoration: none;
		color: #a6a6a6;
	}
`;
