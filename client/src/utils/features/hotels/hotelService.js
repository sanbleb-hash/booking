import axios from 'axios';
const baseUrl = '/api/hotels';

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
};

export default hotelService;
