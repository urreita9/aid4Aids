import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserData } from '../../components/Login/Login';

const BASE_URL = 'https://reqres.in/api/login';

type error = string | null;

const initialState: { logged: boolean; error: error; loading: boolean } = {
	logged: false,
	error: null,
	loading: false,
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
			state.logged = false;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(loginUser.pending, (state, action) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(loginUser.fulfilled, (state, action: any) => {
				state.loading = false;

				if (action.payload.token) {
					state.logged = true;
					state.error = null;
				} else {
					state.logged = false;
					state.error = action.payload.response.data.error;
				}
			})
			.addCase(loginUser.rejected, (state, action: any) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
