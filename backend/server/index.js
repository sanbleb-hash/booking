import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET,
});
const upload = multer({
	storage: multer.memoryStorage({}),
	limits: { fileSize: 5 * 1024 * 1024 },
	fileFilter: (req, file, cb) => {
		let ext = path.extname(file.originalname);
		if (ext !== '.jpg' && ext !== '.png' && ext !== '.jpeg') {
			return cb(new Error('Only images are allowed'));
		}
		cb(null, true);
	},
});

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.use(cors());
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
	res.send('Hello World');
});
app.post('/api/upload', upload.single('image'), async (req, res) => {
	try {
		const result = await cloudinary.uploader.upload(req.file.path);
		res.send(result);
	} catch (err) {
		res.send(err);
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${process.env.PORT || port}`);
});
