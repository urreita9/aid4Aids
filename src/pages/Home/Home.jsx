import { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { NavBar } from '../../components/NavBar/NavBar';
import { ProductList } from '../../components/ProductList/ProductList';
import {
	emptyProducts,
	fetchProducts,
} from '../../features/products/productsSlice';
import { checkIfToken } from '../../features/user/userSlice';
import { HomeTitle } from './Styled';

export const Home = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchProducts());

		return () => {
			dispatch(emptyProducts());
		};
	}, []);
	useEffect(() => {
		dispatch(checkIfToken());
	}, []);

	return (
		<>
			<NavBar />
			<HomeTitle>Welcome to the Story Shop</HomeTitle>
			<ProductList />
		</>
	);
};
