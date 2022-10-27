import axios from 'axios';
const baseUrl = '/api/hotels';

const createHotel = async (formData, token) => {
	const { data } = await axios.post(baseUrl, formData, {
		headers: { 'Content-Type': 'application/json' },
		Authorization: `Bearer ${token}`,
	});
	return data;
};

const hotelService = {
	createHotel,
};

export default hotelService;
