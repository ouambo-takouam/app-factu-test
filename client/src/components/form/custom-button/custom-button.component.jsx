import styled, { css } from 'styled-components';

export const CustomButton = styled.button`
	position: ${({ $position }) => $position};
	top: ${({ $top }) => $top};
	padding: 8px 20px;
	padding: ${({ $padding }) => $padding};
	width: ${({ $width }) => $width};
	height: ${({ $height }) => $height};
	border: 1px solid rgb(141, 144, 150);
	border-color: ${({ $bcolor }) => $bcolor};
	border-radius: ${(props) => (props.$rounded ? '50px' : '2px')};
	border-radius: ${({ $radius }) => $radius};
	color: ${({ $color }) => $color};
	margin-top: 15px;
	margin-top: ${({ $mtop }) => $mtop};
	margin-bottom: 15px;
	margin-bottom: ${({ $mbottom }) => $mbottom};
	margin-left: ${({ $mleft }) => $mleft};
	font-size: 15px;
	font-weight: ${({ $weight }) => $weight};
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;

	span {
		margin-right: 6px;
	}

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
