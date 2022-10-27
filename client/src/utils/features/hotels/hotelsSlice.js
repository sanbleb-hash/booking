import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import hotelService from './hotelService';

const initialState = {
	hotel: {},
	hotels: [],
	isLoading: false,
	isError: false,
	errer: '',
};

// create hotel api
export const createHotel = createAsyncThunk(
	'create/hotel',
	async (hotelData, thunkAPI) => {
		const token = thunkAPI.getState().auth.user.token;
		try {
			return await hotelService.createHotel(hotelData, token);
		} catch (err) {
			return thunkAPI.rejectWithValue(err.message);
		}
	}
);

export const hotelSlice = createSlice({
	name: 'hotels',
	initialState,
	reducers: {},
	extraReducers: (builders) => {
		// builders
		// 	.addCase(createHotel.pending, (state) => (state.isLoading = true))
		// 	.addCase(createHotel.fulfilled, (state, action) => {
		// 		state.isLoading = false;
		// 		state.hotel = action.payload;
		// 	});
	},
});

export default hotelSlice.reducer;
