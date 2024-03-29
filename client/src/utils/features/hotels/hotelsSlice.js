import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import hotelService from './hotelService';

const initialState = {
	hotel: {},
	hotels: [],
	types: [],
	page: 1,
	pages: 1,
	isLoading: false,
	isError: false,
	error: '',
};

// get hotels api

export const getHotels = createAsyncThunk('get/hotels', async (_, thunkAPI) => {
	try {
		return await hotelService.getHotels();
	} catch (err) {
		return thunkAPI.rejectWithValue(err.message);
	}
});

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
	async (hotelData, thunkAPI) => {
		const token = thunkAPI.getState().auth.user.token;
		const id = thunkAPI.getState().hotels.hotel._id;
		try {
			return await hotelService.editHotel(hotelData, id, token);
		} catch (err) {
			return thunkAPI.rejectWithValue(err.message);
		}
	}
);

// get hotels by search
export const searchHotels = createAsyncThunk(
	'search/hotels',
	async ({ keyword, page }, thunkAPI) => {
		console.log(keyword);
		try {
			return await hotelService.searchHotels(keyword, page);
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
			.addCase(getHotels.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getHotels.fulfilled, (state, action) => {
				state.isLoading = false;
				state.hotels = action.payload.hotels;
				state.types = action.payload.type;
				state.city = action.payload.city;
			})
			.addCase(getHotels.rejected, (state, action) => {
				state.isError = true;
				state.error = action.payload;
			})
			.addCase(searchHotels.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(searchHotels.fulfilled, (state, action) => {
				state.isLoading = false;
				state.hotels = action.payload.allHotels;
				state.page = action.payload.pageNumber;
				state.pages = action.payload.pages;
			})
			.addCase(searchHotels.rejected, (state, action) => {
				state.isError = true;
				state.error = action.payload;
			})
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
			})
			.addCase(editHotel.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(editHotel.fulfilled, (state, action) => {
				state.isLoading = false;
				state.hotel = action.payload;
			})
			.addCase(editHotel.rejected, (state, action) => {
				state.isError = true;
				state.error = action.payload;
			});
	},
});

export default hotelSlice.reducer;
