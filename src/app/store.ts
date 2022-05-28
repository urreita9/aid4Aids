import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
	reducer: { cart: cartReducer, products: productReducer, user: userReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
