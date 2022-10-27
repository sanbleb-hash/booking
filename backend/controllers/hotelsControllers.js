import Hotel from '../modals/hotelModal.js';
import Room from '../modals/roomModal.js';

export const createHotel = async (req, res) => {
	const hotel = req.body;
	try {
		const createdHotel = await Hotel.create(hotel);
		await createdHotel.save();
		res.status(201).json(createdHotel);
	} catch (err) {
		throw new Error(err.message);
	}
};

export const getHotels = async (req, res) => {
	try {
		const hotels = await Hotel.find({});
		res.status(200).json(hotels);
	} catch (err) {
		throw new Error(err.message);
	}
};

export const getHotel = async (req, res) => {
	const id = req.params.id;
	try {
		if (id) {
			const hotel = await Hotel.find({ id });
			res.status(200).json(hotel);
		}
	} catch (err) {
		throw new Error(err.message);
	}
};

export const createRoom = async (req, res) => {
	const { name, roomNumber, description, price, maxPeople, photos } = req.body;
	const hotelId = req.params.id;
	try {
		// create a room
		const newRoom = await Room.create({
			name,
			roomNumber,
			description,
			price,
			maxPeople,
			photos,
			hotel: hotelId,
		});
		const room = await newRoom.save();
		await Hotel.findByIdAndUpdate(hotelId, {
			$push: { roomNumbers: room.roomNumber },
			new: true,
		});
		res.status(201).send(room);
	} catch (err) {
		throw new Error(err.message);
	}
};

export const editHotel = async (req, res) => {
	const id = req.params.id;
	const hotelDetails = req.body;
	try {
		if (id) {
			const hotel = await Hotel.findByIdAndUpdate(id, {
				$set: {
					...hotelDetails,
					address: hotelDetails.address,
					type: hotelDetails.type,
					name: hotelDetails.name,
					photo: hotelDetails.photo,
				},
				new: true,
			});
			res.status(200).json(hotel);
		}
	} catch (err) {
		throw new Error(err.message);
	}
};

export const deleteHotel = async (req, res) => {
	const id = req.params.id;
	try {
		if (id) {
			const hotel = await Hotel.findById(id);
			await hotel.remove();
			res.status(200).json('hotel deleted');
		}
	} catch (err) {
		throw new Error(err.message);
	}
};
