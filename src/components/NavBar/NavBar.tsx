import { CartAmount, CartContainer, Logo, NavBarContainer } from './Styled';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../features/user/userSlice';
import { Cart } from '../Cart/Cart';
import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';

type isOpen = boolean;

export const NavBar = () => {
	const [isOpen, setIsOpen] = useState<any>(false);
	const [cartAmount, setCartAmount] = useState(0);
	const { products } = useAppSelector((state) => state.cart);
	const { isAdmin, logged } = useAppSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		countCartAmount();
	}, [products]);

	const goTo = (route: string) => {
		navigate(`${route}`);
	};

	const logoutUser = () => {
		dispatch(logout());
	};

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const countCartAmount = () => {
		const total = products.reduce(
			(accum, product) => accum + product.amount,
			0
		);
		setCartAmount(total);
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
				<CartAmount>{cartAmount}</CartAmount>
			</CartContainer>
			{isOpen && <Cart toggle={toggle} isOpen={isOpen} />}
		</NavBarContainer>
	);
};
