import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user'))
		: null,
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
			localStorage.setItem('user', JSON.stringify(state.user.payload));
		},
		registerError: (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.errer = action.payload;
		},
		userLogout: (state) => {
			return { ...state, user: localStorage.removeItem('user') };
		},
	},
});

export const { registerStart, registerUser, registerError, userLogout } =
	authSlice.actions;
export default authSlice.reducer;
