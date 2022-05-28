import { CartAmount, CartContainer, Logo, NavBarContainer } from './Styled';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useAppSelector } from '../../app/hooks';

export const NavBar = () => {
	const { products } = useAppSelector((state) => state.cart);

	return (
		<NavBarContainer>
			<Logo />
			<CartContainer>
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
