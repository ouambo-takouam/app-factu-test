import styled, { css } from 'styled-components';

export const CustomButton = styled.button`
	padding: 8px 20px;
	padding: ${({ $padding }) => $padding};
	width: ${({ $width }) => $width};
	border: 2px solid rgb(141, 144, 150);
	border-color: ${({ $bcolor }) => $bcolor};
	border-radius: ${(props) => (props.$rounded ? '50px' : '2px')};
	margin-top: 15px;
	margin-bottom: 15px;
	font-size: 15px;
	font-weight: ${({ $weight }) => $weight};
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		background: ${({ $hcolor }) => $hcolor};
		box-shadow: ${({ $hshadow }) => $hshadow};
	}

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
