import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL =
	'https://crudcrud.com/api/22923a258ece4eba9cb17a0dd9a9f854/unicorns';

interface Product {
	_id: string;
	isbn: number;
	title: string;
	publisher: string;
	author: string;
	imageURL: string;
	price: number;
}

interface productState {
	products: Product[];
	status: string;
	error: string | null;
}

const initialState: productState = {
	products: [],
	status: '',
	error: null,
};

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		try {
			const { data } = await axios.get<Product[]>(BASE_URL);
			return [...data];
		} catch (error) {
			return error;
		}
	}
);

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		emptyProducts(state) {
			state.products = [];
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(fetchProducts.fulfilled, (state, action: any) => {
				state.status = 'succeeded';
				state.products = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action: any) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const { emptyProducts } = productsSlice.actions;

export default productsSlice.reducer;
