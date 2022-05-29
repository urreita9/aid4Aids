import { added } from '../../features/cart/cartSlice';
import { useAppDispatch } from '../../app/hooks';
import {
	ProductAuthor,
	ProductColumn,
	ProductContainer,
	ProductEditorial,
	ProductImage,
	ProductISBN,
	ProductPrice,
	ProductRow,
	ProductTitle,
} from './Styled';
import { Button } from '../Button/Button';
import { useState } from 'react';

interface Props {
	_id: string;
	title: string;
	imageURL: string;
	price: number;
	author: string;
	publisher: string;
	isbn: number;
}

export const Product = (props: Props) => {
	const [amount, setAmount] = useState(1);
	const dispatch = useAppDispatch();
	const { _id, title, imageURL, price, author, publisher, isbn } = props;

	const handleClick = () => {
		dispatch(
			added({
				id: _id,
				title,
				author,
				price: +price,
				imgURL: imageURL,
				isbn: +isbn,
				publisher,
				amount,
			})
		);
		setAmount(1);
	};

	return (
		<ProductContainer>
			<ProductColumn>
				<ProductImage imgURL={`url(${imageURL})`} />
			</ProductColumn>
			<ProductColumn>
				<ProductRow>
					<ProductISBN>{isbn}</ProductISBN>
					<ProductTitle>{title}</ProductTitle>
					<ProductPrice>${price}</ProductPrice>
					<ProductAuthor>{author}</ProductAuthor>
					<ProductEditorial>{publisher}</ProductEditorial>
				</ProductRow>
				<ProductRow>
					<Button
						onClick={() => {
							if (amount > 1) {
								setAmount(amount - 1);
							}
						}}
						text='-'
					/>
					{amount}
					<Button
						onClick={() => {
							setAmount(amount + 1);
						}}
						text='+'
					/>
					<Button onClick={handleClick} text='Add to Cart' />
				</ProductRow>
			</ProductColumn>
		</ProductContainer>
	);
};
