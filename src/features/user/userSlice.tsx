import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserData } from '../../components/Login/Login';

const BASE_URL = 'https://reqres.in/api/login';

type error = string | null;

interface User {
	logged: boolean;
	error: error;
	loading: boolean;
	isAdmin: boolean;
}
const initialState: User = {
	logged: false,
	error: null,
	loading: false,
	isAdmin: false,
};

export const loginUser = createAsyncThunk(
	'user/loginUser',
	async ({ email, password }: UserData) => {
		try {
			const { data } = await axios.post(BASE_URL, { email, password });
			if (data.token) {
				localStorage.setItem('token', JSON.stringify(data.token));
			}
			return data;
		} catch (error) {
			return error;
		}
	}
);

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout(state) {
			localStorage.removeItem('token');
			state.logged = false;
			state.isAdmin = false;
		},
		checkIfToken(state) {
			const token = localStorage.getItem('token');
			if (token) {
				state.logged = true;
				state.isAdmin =
					JSON.parse(token) === process.env.REACT_APP_ACCESS_TOKEN
						? true
						: false;
			} else {
				state.logged = false;
				state.isAdmin = false;
			}
		},
	},
	extraReducers(builder) {
		builder
			.addCase(loginUser.pending, (state, action) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(loginUser.fulfilled, (state, action: any) => {
				const { token } = action.payload;
				state.loading = false;

				if (token) {
					state.logged = true;
					state.error = null;
					state.isAdmin =
						token === process.env.REACT_APP_ACCESS_TOKEN ? true : false;
				} else {
					state.logged = false;
					state.error = action.payload.response.data.error;
					state.isAdmin = false;
				}
			})
			.addCase(loginUser.rejected, (state, action: any) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const { logout, checkIfToken } = userSlice.actions;

export default userSlice.reducer;
