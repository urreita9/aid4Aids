import styled from 'styled-components';

export const CartProductContainer = styled.div`
	width: 90%;
	max-width: 300px;
	height: 80px;
	display: flex;
	margin-top: 20px;
	color: #ffffff;
`;

export const CartProductImage = styled.div<{ imgURL: string }>`
	background-image: ${({ imgURL }) => imgURL};
	width: 100px;
	height: 100px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;
