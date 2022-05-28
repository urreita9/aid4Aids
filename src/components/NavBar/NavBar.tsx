import { CartAmount, CartContainer, Logo, NavBarContainer } from './Styled';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
	const { products } = useAppSelector((state) => state.cart);

	const navigate = useNavigate();
	const goTo = (route: string) => {
		navigate(`/${route}`);
	};

	return (
		<NavBarContainer>
			<Logo onClick={() => goTo('home')} />
			<CartContainer onClick={() => goTo('cart')}>
				<RiShoppingCartLine
					color='#FFFFFF'
					size={30}
					style={{ marginRight: '10px' }}
				/>
				<CartAmount>{products.length}</CartAmount>
			</CartContainer>
		</NavBarContainer>
	);
};
