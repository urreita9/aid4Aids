import React from 'react';
import { Form } from '../Form/Form';
// import { RegisterContainer, Title, TitleContainer } from './Styled';

export const Register = () => {
	const fieldsArr = [
		{
			label: 'Email',
			name: 'email',
			type: 'email',
		},
		{
			label: 'Name',
			name: 'name',
			type: 'text',
		},
		{
			label: 'Password',
			name: 'password',
			type: 'password',
		},
	];
	return (
		<Form fieldsArr={fieldsArr} formTitle='Register' buttonText='Register' />
	);
};
