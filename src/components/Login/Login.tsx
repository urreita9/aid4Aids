import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loginUser } from '../../features/user/userSlice';
import { Form } from '../Form/Form';
import { LoginContainer } from './Styled';

export interface UserData {
	email: string;
	password: string;
}

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
	const onSubmit = (form: UserData) => {
		dispatch(loginUser(form));
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
			/>
			{user.loading && <p>Loading...</p>}
			{user.error && <p>{user.error}</p>}
		</LoginContainer>
	);
};
