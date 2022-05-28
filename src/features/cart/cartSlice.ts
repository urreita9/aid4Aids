import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../components/Product/Product';

interface Product {
	isbn: number;
	imgURL: string;
	price: number;
	title: string;
	author: string;
	publisher: string;
}

interface cartState {
	products: Product[];
}

const initialState: cartState = {
	products: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
});
