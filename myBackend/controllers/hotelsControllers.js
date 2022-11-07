import Hotel from '../modals/hotelModal.js';
import Room from '../modals/roomModal.js';

//create a hotel instance
export const createHotel = async (req, res) => {
	const hotel = req.body;
	const user = req.user;
	if (!user) return res.status(401).send('user not found');
	try {
		const createdHotel = await Hotel.create({ ...hotel, user: user });
		await createdHotel.save();
		res.status(201).json(createdHotel);
	} catch (err) {
		throw new Error(err.message);
	}
};

// get  hotels by type
export const getHotelsByType = async (req, res) => {
	try {
		const hotelsByType = await Hotel.find({
			type: req.query.type,
		});
		res.status(200).json(hotelsByType);
	} catch (err) {
		throw new Error(err.message);
	}
};

// get featured hotels
export const getHotels = async (req, res) => {
	try {
		const type = await Hotel.distinct('type');
		const city = await Hotel.distinct('city');

		const hotels = await Hotel.find({ featured: true }).limit(5);
		res.status(200).json({ hotels, type, city });
	} catch (err) {
		throw new Error(err.message);
	}
};

// get ll hotels
export const hotels = async (req, res) => {
	const cities = req.query.cities
		? {
				city: {
					$regex: req.query.cities,
					$options: 'i',
				},
		  }
		: {};
	const pageSize = 5;
	const pageNumber = Number(req.query.pageNumber) || 1;

	try {
		const count = await Hotel.countDocuments({ ...cities });
		const allHotels = await Hotel.find({ ...cities })
			.limit(pageSize)
			.skip(pageNumber * (pageNumber - 1));
		res
			.status(200)
			.json({ allHotels, pageNumber, pages: Math.ceil(count / pageSize) });
	} catch (err) {
		throw new Error(err.message);
	}
};

export const getHotel = async (req, res) => {
	const id = req.params.id;
	try {
		if (id) {
			const hotel = await Hotel.findById(id);
			res.status(200).json(hotel);
		}
	} catch (err) {
		throw new Error(err.message);
	}
};

export const createRoom = async (req, res) => {
	const user = req.user;
	if (!user) return res.status(401).send('user not found');
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
	const user = req.user;
	if (!user) return res.status(401).send('user not found');
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
	const user = req.user;
	if (!user) return res.status(401).send('user not found');
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
