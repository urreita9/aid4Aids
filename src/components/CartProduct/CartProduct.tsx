import { CartProductContainer, CartProductImage } from './Styled';
import { ProductColumn, ProductPrice, ProductTitle } from '../Product/Styled';
import { RiCloseFill } from 'react-icons/ri';
import { Button } from '../Button/Button';
import { useAppDispatch } from '../../app/hooks';
import { remove } from '../../features/cart/cartSlice';

interface Props {
	id: string;
	imgURL: string;
	price: number;
	title: string;
	amount: number;
}
export const CartProduct = ({ id, imgURL, title, price, amount }: Props) => {
	const dispatch = useAppDispatch();

	const deleteFromCart = () => {
		dispatch(remove(id));
	};
	return (
		<CartProductContainer>
			<ProductColumn>
				<CartProductImage imgURL={`url(${imgURL})`} />
			</ProductColumn>
			<ProductColumn>
				<ProductTitle>{title}</ProductTitle>
				<ProductPrice>${price}</ProductPrice>
				<ProductPrice>Quantity: {amount}</ProductPrice>
				<Button onClick={deleteFromCart} text='Delete' />
			</ProductColumn>
		</CartProductContainer>
	);
};
