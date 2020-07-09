import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";

import config from './config'
import data from './data';
import userRoute from './routes/user'

dotenv.config();

const monogoDbUrl = config.MONGODB_URL;

mongoose.connect(monogoDbUrl, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: true,
	useUnifiedTopology: true

}).catch(err => console.log(err))

const app = express();

app.use("/api/users", userRoute )

app.get('/api/products/:id', (req, res) => {
    const productId = Number (req.params.id);
    const product = data.products.find(x => x._id === productId)
	if (product) {
		return res.send(product);
	} else {
		res.status(404).send({ msg: 'Product not found' });
	}
});

app.get('/api/products', (req, res) => {
	res.send(data.products);
});

app.listen(5000, () => {
	console.log('Server is running on 5000');
});
