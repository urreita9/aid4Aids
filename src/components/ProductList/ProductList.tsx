import { Product } from '../Product/Product';
import { ListContainer } from './Styled';
import { useAppSelector } from '../../app/hooks';

export const ProductList = () => {
	const { products } = useAppSelector((state) => state.products);
	return (
		<ListContainer>
			{products.map((product) => (
				<Product {...product} />
			))}
		</ListContainer>
	);
};
