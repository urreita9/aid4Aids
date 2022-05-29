import styled from 'styled-components';

interface Props {
	open?: {
		isOpen: boolean;
	};
}
export const CartContainer = styled.div<Props>`
	position: fixed;
	z-index: 10;
	width: 100%;
	height: 100%;
	background: rgb(137, 207, 240);
	background: linear-gradient(
		90deg,
		rgba(137, 207, 240, 1) 35%,
		rgba(0, 102, 178, 1) 97%
	);
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: all 3s ease-in-out;
	overflow-y: hidden;
	opacity: ${(isOpen) => (isOpen ? '1' : '0')};
	top: ${(isOpen) => (isOpen ? '0' : 'calc(-100% )')};
`;

export const CartHeader = styled.div`
	width: 100%;
	height: 100px;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const CloseIconContainer = styled.span`
	cursor: pointer;
`;

export const CartProductsContainer = styled.div`
	width: 90%;
	max-width: 400px;
	margin: 0 auto;
	max-height: 330px;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 8px;
		height: 8px;
	}
	&::-webkit-scrollbar-thumb {
		background: #ccc;
		border-radius: 4px;
	}
	&::-webkit-scrollbar-thumb:hover {
		background: #b3b3b3;
		box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
	}
	&::-webkit-scrollbar-thumb:active {
		background-color: #999999;
	}
	&::-webkit-scrollbar-track {
		background: #e1e1e1;
		border-radius: 4px;
	}
	@media (min-width: 768px) {
		max-height: 500px;
	}
`;

export const CartNumbers = styled.div`
	width: 100%;
`;
export const CartNumber = styled.h2`
	font-size: 40px;
	color: #ffffff;
`;
