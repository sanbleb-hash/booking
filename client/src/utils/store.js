import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import hotelReducer from './features/hotels/hotelsSlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		hotels: hotelReducer,
	},
});

export default store;
