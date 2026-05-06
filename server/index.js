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

const connect = () => {
	mongoose
		.connect(process.env.MONGO_URI)
		.then(() => console.log('Connected to DB'))
		.catch((err) => console.log(err));
};

app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use('/posts', postRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => res.send('Hello to Notes API'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
	connect();
	console.log(`Server running on port ${PORT}`);
});
