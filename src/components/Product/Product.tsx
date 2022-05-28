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
	ProductTitle,
} from './Styled';

export const Product = () => {
	const dispatch = useAppDispatch();
	const handleClick = () => {
		dispatch(
			added({
				title: 'holo',
				author: 'Lazarolo',
				price: 23,
				imgURL:
					'https://images-na.ssl-images-amazon.com/images/I/81EwuoduKML.jpg',
				isbn: 1951627547,
				publisher: 'Arcade',
			})
		);
	};
	return (
		<ProductContainer>
			<ProductColumn>
				<ProductImage />
			</ProductColumn>
			<ProductColumn>
				<ProductISBN>781492032793</ProductISBN>
				<ProductTitle>Learning Apache Drill</ProductTitle>
				<ProductPrice>$42.26</ProductPrice>
				<ProductAuthor>Tony Tony</ProductAuthor>
				<ProductEditorial>Capaldo</ProductEditorial>
				<button onClick={handleClick}>Add to Cart</button>
			</ProductColumn>
		</ProductContainer>
	);
};
