import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loginUser } from '../../features/user/userSlice';
import { Errors, Form as MyForm } from '../../hooks/useForm';
import { Form } from '../Form/Form';
import { LoginContainer } from './Styled';

export const Login = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.user);
	const navigate = useNavigate();
	const token = localStorage.getItem('token');
	useEffect(() => {
		if (user.logged) {
			navigate('/');
		}
	}, [user]);
	useEffect(() => {
		if (token) {
			navigate('/');
		}
	}, []);
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
	const onSubmit = (form: MyForm) => {
		dispatch(loginUser(form));
	};

	const validate = (form: MyForm) => {
		let errors: Errors = {};
		if (form.email === 'string' && !/\S+@\S+\.\S+/.test(form.email)) {
			errors.email = 'Email address is invalid';
		}
		if (
			form.password === 'string' &&
			(!form.password.length || !form.password.trim().length)
		) {
			errors.password = 'Must write a Password';
		}
		return errors;
	};
	return (
		<LoginContainer>
			<Form
				fieldsArr={fieldsArr}
				formTitle='Login'
				buttonText='Sign In'
				action='login'
				onSubmit={onSubmit}
				link='register'
				disabled={false}
				validate={validate}
			/>
			{user.loading && <p>Loading...</p>}
			{user.error && <p>{user.error}</p>}
		</LoginContainer>
	);
};
