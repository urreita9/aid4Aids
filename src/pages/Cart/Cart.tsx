import { CartContainer } from './Styled';
import { NavBar } from '../../components/NavBar/NavBar';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CartProduct } from '../../components/CartProduct/CartProduct';
import { empty } from '../../features/cart/cartSlice';

export const Cart = () => {
	const { products } = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();
	const handleEmptyCart = () => {
		dispatch(empty());
	};
	return (
		<>
			<NavBar />
			<CartContainer>
				{products.map((product) => (
					<CartProduct
						imgURL={product.imgURL}
						title={product.title}
						price={product.price}
					/>
				))}
				{products?.length && (
					<button onClick={handleEmptyCart}>Empty Cart</button>
				)}
			</CartContainer>
		</>
	);
};
