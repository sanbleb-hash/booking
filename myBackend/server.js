import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authUser from './routes/userRoutes.js';
import hotelsRoutes from './routes/hotelsRoutes.js';
import { signature } from './routes/upload.js';

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

dotenv.config();
connectDB();

// routes
app.get('/', (req, res) => res.send('app running...'));
app.use('/api/auth', authUser);
app.use('/api/hotels', hotelsRoutes);
app.use('/api/resource/upload', signature);

// connection
app.listen(process.env.PORT, () =>
	console.log('app running...on port ' + ' ' + process.env.PORT)
);
