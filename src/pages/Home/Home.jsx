import React from 'react';
import { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { NavBar } from '../../components/NavBar/NavBar';
import { ProductList } from '../../components/ProductList/ProductList';
import {
	emptyProducts,
	fetchProducts,
} from '../../features/products/productsSlice';

export const Home = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchProducts());

		return () => {
			dispatch(emptyProducts());
		};
	}, []);

	return (
		<>
			<NavBar />
			<ProductList />
		</>
	);
};
