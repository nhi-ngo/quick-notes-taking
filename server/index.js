import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import authRoutes from './routes/auth.js';

const app = express();
dotenv.config();

mongoose.set('strictQuery', true);

app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use('/posts', postRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => res.send('Hello to Notes API'));

const PORT = process.env.PORT;

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
