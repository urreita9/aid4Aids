import styled from 'styled-components';

export const ButtonWidget = styled.button`
	/* width: fit-content; */
	font-size: 14px;
	font-weight: 600;
	margin: 0 auto;
	border-radius: 5px;
	padding: 10px;
	color: black;
	border-width: 0;
	background-color: #ffffff;
	border: 2px #89cff0 solid;
	cursor: pointer;
	&:hover {
		color: #ffffff;
		background: #89cff0;
	}
`;
