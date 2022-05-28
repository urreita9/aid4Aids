import React from 'react';
import { Form } from '../Form/Form';
import { RegisterContainer } from './Styled';
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
	const onSubmit = () => {
		console.log('register');
	};
	return (
		<RegisterContainer>
			<Form
				fieldsArr={fieldsArr}
				formTitle='Register'
				buttonText='Sign Up'
				action='register'
				onSubmit={onSubmit}
				link='login'
			/>
		</RegisterContainer>
	);
};
