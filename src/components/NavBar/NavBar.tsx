import { CartAmount, CartContainer, Logo, NavBarContainer } from './Styled';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../features/user/userSlice';
import { Cart } from '../Cart/Cart';
import { useState } from 'react';
import { Button } from '../Button/Button';

type isOpen = boolean;

export const NavBar = () => {
	const [isOpen, setIsOpen] = useState<any>(false);
	const { products } = useAppSelector((state) => state.cart);
	const { isAdmin, logged } = useAppSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const goTo = (route: string) => {
		navigate(`${route}`);
	};

	const logoutUser = () => {
		dispatch(logout());
	};

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<NavBarContainer>
			<Logo onClick={() => goTo('/')} />
			{isAdmin && <Button onClick={() => goTo('/admin')} text='Admin' />}
			{logged ? (
				<Button onClick={logoutUser} text='Logout' />
			) : (
				<Button onClick={() => goTo('/login')} text='Login' />
			)}
			<CartContainer onClick={toggle}>
				<RiShoppingCartLine
					color='#FFFFFF'
					size={30}
					style={{ marginRight: '10px' }}
				/>
				<CartAmount>{products.length}</CartAmount>
			</CartContainer>
			{isOpen && <Cart toggle={toggle} isOpen={isOpen} />}
		</NavBarContainer>
	);
};
