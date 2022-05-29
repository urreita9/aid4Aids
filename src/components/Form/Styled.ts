import styled from 'styled-components';

export const FormContainer = styled.form`
	width: 90%;
	height: 100%;
	max-width: 400px;
	display: flex;
	flex-direction: column;
	/* background-color: tomato; */
	border-width: 5px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

export const FormSeparator = styled.div`
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
	width: 80%;
	font-size: 14px;
	font-weight: 600;
	margin: 0 auto;
	border-radius: 5px;
	padding: 10px;
	color: black;
	border-width: 0;
	background-color: ${(props) => (props.disabled ? 'grey' : '#89CFF0')};
	cursor: ${(props) => (props.disabled ? '' : 'pointer')}; ;
`;
