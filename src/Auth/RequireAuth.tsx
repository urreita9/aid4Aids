import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
	const navigate = useNavigate();
	const token = localStorage.getItem('token');
	useEffect(() => {
		if (!token) {
			navigate('/login');
		} else if (JSON.parse(token) !== process.env.REACT_APP_ACCESS_TOKEN) {
			console.log('TOKEN', token);
			navigate('/home');
		}
	}, [token]);

	return children;
};
