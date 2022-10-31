import axios from 'axios';
const baseUrl = '/api/hotels';

// get featured hotels from backend

const getHotels = async () => {
	const { data } = await axios.get(`${baseUrl}/featured`);

	const { hotels, type } = data;
	return { hotels, type };
};
// get hotels by type
const getByType = async (type) => {
	const { data } = await axios.get(`${baseUrl}?type=${type}`);
	return data;
};

const createHotel = async (formData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const { data } = await axios.post(baseUrl, formData, config);

	return data;
};
const editHotel = async (formData, hotelId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const { data } = await axios.put(`${baseUrl}/${hotelId}`, formData, config);

	return data;
};

const hotelService = {
	createHotel,
	editHotel,
	getHotels,
	getByType,
};

export default hotelService;
