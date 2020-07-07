import express from 'express';
import data from './data';

const app = express();

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
