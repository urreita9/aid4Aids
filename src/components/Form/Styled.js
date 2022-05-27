import styled from 'styled-components';

export const FormContainer = styled.form`
	width: 100%;
	height: 100%;
	max-width: 400px;
	height: 500px;
	display: flex;
	flex-direction: column;
	background-color: tomato;
	border-width: 5px;
	margin: 0 auto;
`;

export const FormTitle = styled.h2`
	letter-spacing: 2px;
	font-size: 24px;
	font-weight: 600;
`;

export const FormControl = styled.div`
	width: 90%;
	margin: 0 auto;
	padding: 10px;
`;

export const FormLabel = styled.label`
	display: block;
	font-size: 14px;
	font-weight: 600;
	margin-bottom: 5px;
`;

export const FormInput = styled.input`
	outline: none;
	border: 1px solid black;
	width: 60%;
	padding: 10px;
	font-size: 14px;
	border-radius: 5px;
`;

export const SubmitButton = styled.button`
	width: 60%;
	margin: 0 auto;
	background-color: green;
`;
