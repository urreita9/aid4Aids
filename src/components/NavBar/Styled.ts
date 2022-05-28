import styled from 'styled-components';

export const NavBarContainer = styled.nav`
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: rgb(137, 207, 240);
	background: linear-gradient(
		90deg,
		rgba(137, 207, 240, 1) 35%,
		rgba(0, 102, 178, 1) 97%
	);
`;

export const Logo = styled.div`
	width: 80px;
	height: 80px;
	background-image: url(https://images-platform.99static.com//o5_Q8pUagynJuidDta7JRMJ7_K8=/311x281:1652x1622/fit-in/590x590/99designs-contests-attachments/74/74026/attachment_74026482);
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	margin-left: 10px;
	border-radius: 50%;
`;