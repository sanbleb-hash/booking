import express from 'express';
import { registerUser, userLogin } from '../controllers/userController.js';

const handler = express.Router();

handler.post('/register', registerUser);
handler.post('/', userLogin);

export default handler;
