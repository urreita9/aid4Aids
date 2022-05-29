import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { BookActions } from '../../components/AdminActions/BookActions';
import { Button } from '../../components/Button/Button';
import { checkIfToken } from '../../features/user/userSlice';
import { AdminContainer, AdminTitle, ButtonWrapper } from './Styled';

export const Admin = () => {
	const [booksMenu, setBooksMenu] = useState(false);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(checkIfToken());
	}, []);

	return (
		<AdminContainer>
			<AdminTitle>Admin</AdminTitle>

			<ButtonWrapper>
				<Button
					onClick={() => {
						setBooksMenu(!booksMenu);
					}}
					text='Books'
				/>
				<Button
					onClick={() => {
						navigate('/');
					}}
					text='Home'
				/>
			</ButtonWrapper>

			{booksMenu && <BookActions />}
		</AdminContainer>
	);
};
