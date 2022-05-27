import React, { useState } from 'react';
import { BookActions } from '../../components/AdminActions/BookActions';
import { AdminButton, AdminContainer, AdminTitle } from './Styled';

export const Admin = () => {
	const [booksMenu, setBooksMenu] = useState(false);
	return (
		<AdminContainer>
			<AdminTitle>Admin</AdminTitle>

			<AdminButton
				onClick={() => {
					setBooksMenu(!booksMenu);
				}}
			>
				Books
			</AdminButton>
			{booksMenu && <BookActions />}
		</AdminContainer>
	);
};
