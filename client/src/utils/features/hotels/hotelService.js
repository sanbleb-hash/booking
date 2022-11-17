import axios from 'axios';
const baseUrl = process.env.REACT_APP_BACKEND_API + '/api/hotels';

// get featured hotels from backend

const getHotels = async () => {
	const { data } = await axios.get(`${baseUrl}/featured`);

	const { hotels, type, city } = data;
	return { hotels, type, city };
};

// get and search hotels api

const searchHotels = async (keyword, page) => {
	console.log(keyword, page);
	const { data } = await axios.get(
		`${baseUrl}?cities=${keyword}&pageNumber=${page}`
	);

	const { allHotels, pageNumber, pages } = data;
	return { allHotels, pageNumber, pages };
};

// create hotel api
const createHotel = async (formData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const { data } = await axios.post(baseUrl, formData, config);

	return data;
};

// edit hotel api
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
	searchHotels,
};

export default hotelService;
