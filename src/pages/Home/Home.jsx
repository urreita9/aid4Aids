import React from 'react';
import { NavBar } from '../../components/NavBar/NavBar';
import { ProductList } from '../../components/ProductList/ProductList';

export const Home = () => {
	return (
		<>
			<NavBar />
			<ProductList />
		</>
	);
};
