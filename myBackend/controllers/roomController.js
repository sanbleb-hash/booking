import Room from '../modals/roomModal.js';

export const getRooms = async (req, res) => {
	const hotel = req.params.hotelId;
	try {
		const rooms = await Room.find({ hotel });
		res.status(200).json(rooms);
	} catch (err) {
		throw new Error(err.message);
	}
};

// get single room
export const findRoom = async (req, res) => {
	const roomId = req.params.id;

	try {
		const room = await Room.findById(roomId);
		res.status(200).json(room);
	} catch (err) {
		throw new Error(err.message);
	}
};

//  edit room
export const editRooms = async (req, res) => {
	const roomId = req.params.id;
	const roomDetails = req.body;
	try {
		const room = await Room.findById(roomId);
		const upDatedRoom = await room.update(roomDetails);
		res.status(200).json('room updated');
	} catch (err) {
		throw new Error(err.message);
	}
};

export const deleteRoom = async (req, res) => {
	const roomId = req.params.id;
	try {
		const room = await Room.findById(roomId);
		await room.remove();
		res.status(200).json('room deleted');
	} catch (err) {
		throw new Error(err.message);
	}
};
