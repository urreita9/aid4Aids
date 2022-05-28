import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
	reducers: {
		//Add
		added(state, action: PayloadAction<Product>) {
			state.products = [...state.products, action.payload];
		},
		//Remove
		//Empty
		empty(state) {
			state.products = [];
		},
	},
});

export const { added, empty } = cartSlice.actions;

export default cartSlice.reducer;
