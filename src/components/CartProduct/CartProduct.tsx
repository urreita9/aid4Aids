import React from 'react';
import { CartProductContainer } from './Styled';
import {
	ProductColumn,
	ProductImage,
	ProductPrice,
	ProductTitle,
} from '../Product/Styled';

interface Props {
	imgURL: string;
	price: number;
	title: string;
}
export const CartProduct = ({ imgURL, title, price }: Props) => {
	return (
		<CartProductContainer>
			<ProductColumn>
				<ProductImage />
			</ProductColumn>
			<ProductColumn>
				<ProductTitle>{title}</ProductTitle>
				<ProductPrice>{price}</ProductPrice>
			</ProductColumn>
		</CartProductContainer>
	);
};
