import styled from "@emotion/styled";

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
`;
