import { CartProductContainer, CartProductImage } from './Styled';
import { ProductColumn, ProductPrice, ProductTitle } from '../Product/Styled';

interface Props {
	imgURL: string;
	price: number;
	title: string;
}
export const CartProduct = ({ imgURL, title, price }: Props) => {
	return (
		<CartProductContainer>
			<ProductColumn>
				<CartProductImage imgURL={`url(${imgURL})`} />
			</ProductColumn>
			<ProductColumn>
				<ProductTitle>{title}</ProductTitle>
				<ProductPrice>${price}</ProductPrice>
			</ProductColumn>
		</CartProductContainer>
	);
};
