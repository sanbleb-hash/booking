import express from 'express';
import { getRooms } from '../controllers/roomController.js';

const handler = express.Router();

handler.get('/', getRooms);

export default handler;
