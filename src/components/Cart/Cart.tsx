import {
	CartNumber,
	CartContainer,
	CartHeader,
	CartNumbers,
	CartProductsContainer,
	CloseIconContainer,
} from './Styled';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CartProduct } from '../CartProduct/CartProduct';
import { empty } from '../../features/cart/cartSlice';
import { RiCloseFill } from 'react-icons/ri';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';
interface Props {
	toggle: () => void;
	isOpen: boolean;
}

export const Cart = ({ toggle, isOpen }: Props) => {
	const [cartTotal, setCartTotal] = useState(0);
	const { products } = useAppSelector((state) => state.cart);
	const { logged } = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();
	const handleEmptyCart = () => {
		dispatch(empty());
	};
	const navigate = useNavigate();

	useEffect(() => {
		countTotal();
	}, [products.length]);

	const countTotal = () => {
		const total = products.reduce((accum, product) => accum + product.price, 0);
		setCartTotal(+total.toFixed(2));
	};

	const handleCheckout = () => {
		console.log('CHECKOUT');
	};
	return (
		<>
			<CartContainer open={{ isOpen }}>
				<CartHeader>
					<CloseIconContainer>
						<RiCloseFill
							color='#FFFFFF'
							size={30}
							style={{ marginRight: '20px' }}
							onClick={toggle}
						/>
					</CloseIconContainer>
				</CartHeader>

				<CartProductsContainer>
					{products.map((product) => (
						<CartProduct
							imgURL={product.imgURL}
							title={product.title}
							price={product.price}
						/>
					))}
				</CartProductsContainer>

				<CartNumbers>
					<CartNumber>{products?.length} Items</CartNumber>
					<CartNumber>Total: ${cartTotal}</CartNumber>
				</CartNumbers>
				{logged ? (
					products?.length ? (
						<Button onClick={handleCheckout} text='Checkout' />
					) : null
				) : (
					<Button
						onClick={() => {
							navigate('/login');
						}}
						text='Login'
					/>
				)}
				{products?.length ? (
					<Button onClick={handleEmptyCart} text='Empty Cart' />
				) : null}
			</CartContainer>
		</>
	);
};
