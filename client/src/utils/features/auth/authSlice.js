import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	isLoading: false,
	isError: false,
	errer: '',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		registerStart: (state) => {
			return (state.isLoading = true);
		},
		registerUser: (state, action) => {
			state.isLoading = false;
			state.user = action.payload;
		},
		registerError: (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.errer = action.payload;
		},
	},
});

export const { registerStart, registerUser, registerError } = authSlice.actions;
export default authSlice.reducer;
