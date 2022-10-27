import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authUser from './routes/userRoutes.js';

const app = express();

// middlewares
app.use(express.json());

dotenv.config();
connectDB();

// routes
app.get('/', (req, res) => res.send('app running...'));
app.use('/api/auth', authUser);

// connection
app.listen(process.env.PORT, () =>
	console.log('app running...on port ' + ' ' + process.env.PORT)
);
