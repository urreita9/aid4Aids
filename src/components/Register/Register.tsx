import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Form } from '../Form/Form';
import { RegisterContainer } from './Styled';

export interface UserData {
	email: string;
	password: string;
	name: string;
}

export const Register = () => {
	const user = useAppSelector((state) => state.user);
	const navigate = useNavigate();
	const token = localStorage.getItem('token');
	useEffect(() => {
		if (user.logged) {
			navigate('/home');
		}
	}, [user]);
	useEffect(() => {
		if (token) {
			navigate('/home');
		}
	}, []);
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

	const validate = (form: UserData) => {
		let errors: Record<string, string> = {};
		if (!/\S+@\S+\.\S+/.test(form.email)) {
			errors.email = 'Email address is invalid';
		}
		if (!form.password.length || !form.password.trim().length) {
			errors.password = 'Must write a Password';
		}
		if (!form.name.length || !form.name.trim().length) {
			errors.name = 'Must write a Name';
		}
		return errors;
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
				disabled={false}
				validate={validate}
			/>
		</RegisterContainer>
	);
};
