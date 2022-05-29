import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
	id: string;
	isbn: number;
	imgURL: string;
	price: number;
	title: string;
	author: string;
	publisher: string;
	amount: number;
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
			const copyOfState = [...state.products];

			const exist = copyOfState.find(
				(product) => product.id === action.payload.id
			);
			if (exist) {
				state.products = copyOfState.map((product) => {
					if (product.id === action.payload.id) {
						product.amount += action.payload.amount;
						return product;
					} else {
						return product;
					}
				});
			} else {
				state.products = [...state.products, action.payload];
			}
		},
		//Remove
		remove(state, action) {
			const filtered = state.products.filter(
				(product) => product.id !== action.payload
			);
			state.products = filtered;
		},
		//Empty
		empty(state) {
			state.products = [];
		},
	},
});

export const { added, empty, remove } = cartSlice.actions;

export default cartSlice.reducer;
