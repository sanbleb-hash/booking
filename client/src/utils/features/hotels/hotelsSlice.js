import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import hotelService from './hotelService';

const initialState = {
	hotel: {},
	hotels: [],
	isLoading: false,
	isError: false,
	error: '',
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
// edit hotel api
export const editHotel = createAsyncThunk(
	'edit/hotel',
	async ({ hotelData, _ }, thunkAPI) => {
		const token = thunkAPI.getState().auth.user.token;
		const id = thunkAPI.getState().auth.hotel._id;
		try {
			console.log(id);
			return await hotelService.editHotel(hotelData, id, token);
		} catch (err) {
			return thunkAPI.rejectWithValue(err.message);
		}
	}
);

export const hotelSlice = createSlice({
	name: 'hotels',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(createHotel.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createHotel.fulfilled, (state, action) => {
				state.isLoading = false;
				state.hotel = action.payload;
			})
			.addCase(createHotel.rejected, (state, action) => {
				state.isError = true;
				state.error = action.payload;
			});
	},
});

export default hotelSlice.reducer;
