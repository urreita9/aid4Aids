import React from 'react';
import { Form } from '../Form/Form';

export const Login = () => {
	const fieldsArr = [
		{
			label: 'Email',
			name: 'email',
			type: 'email',
		},

		{
			label: 'Password',
			name: 'password',
			type: 'password',
		},
	];
	const onSubmit = (form) => {
		console.log('login');
	};
	return (
		<Form
			fieldsArr={fieldsArr}
			formTitle='Login'
			buttonText='Login'
			action='login'
			onSubmit={onSubmit}
		/>
	);
};
