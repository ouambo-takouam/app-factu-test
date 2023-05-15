import styled, { css } from 'styled-components';

export const CustomButton = styled.button`
	padding: 5px 25px;
	height: 44px;
	min-height: 44px;
	width: ${(props) => props.$fullwidth && '100%'};
	border: 2px solid rgb(141, 144, 150);
	border-radius: ${(props) => (props.$rounded ? '50px' : '2px')};
	margin-top: 15px;
	margin-bottom: 15px;
	font-size: 15px;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;

	${(props) =>
		props.$validate &&
		css`
			background: #2ca01c;
			border: none;
			color: #fff;

			&:hover {
				background: rgba(16, 128, 0, 0.9);
				box-shadow: none;
			}
		`}
`;
