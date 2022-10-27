import express from 'express';
import {
	createHotel,
	createRoom,
	deleteHotel,
	editHotel,
	getHotel,
	getHotels,
} from '../controllers/hotelsControllers.js';

const handler = express.Router();

handler.route('/').get(getHotels).post(createHotel);
handler
	.route('/:id')
	.get(getHotel)
	.post(createRoom)
	.put(editHotel)
	.delete(deleteHotel);

export default handler;
