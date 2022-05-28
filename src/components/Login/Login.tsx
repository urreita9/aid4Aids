import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loginUser } from '../../features/user/userSlice';
import { Form } from '../Form/Form';

export interface UserData {
	email: string;
	password: string;
}

export const Login = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.user);
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
	const onSubmit = (form: UserData) => {
		dispatch(loginUser(form));
	};
	return (
		<>
			<Form
				fieldsArr={fieldsArr}
				formTitle='Login'
				buttonText='Sign In'
				action='login'
				onSubmit={onSubmit}
				link='register'
			/>
			{user.loading && <p>Loading...</p>}
			{user.error && <p>{user.error}</p>}
		</>
	);
};
