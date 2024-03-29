import express from 'express';
import { verify } from '../middleware/verify.js';
import {
	createHotel,
	createRoom,
	deleteHotel,
	editHotel,
	getHotel,
	getHotels,
	getHotelsByType,
	hotels,
} from '../controllers/hotelsControllers.js';
import {
	deleteRoom,
	editRooms,
	findRoom,
	getRooms,
} from '../controllers/roomController.js';

const handler = express.Router();

handler.route('/').get(hotels).post(verify, createHotel);
handler.route('/featured').get(getHotels);
handler.route('/type').get(getHotelsByType);
handler
	.route('/:id')
	.get(getHotel)
	.post(verify, createRoom)
	.put(verify, editHotel)
	.delete(verify, deleteHotel);
handler.get('/rooms/:hotelId', getRooms);
handler
	.route('/rooms/:hotelId/:id')
	.get(findRoom)
	.put(verify, editRooms)
	.delete(verify, deleteRoom);

export default handler;
