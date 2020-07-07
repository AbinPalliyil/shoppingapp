import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const HomeScreen = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const {data} = await axios.get('/api/products');
			setProducts(data);
		}
		fetchData();
		return () => {
			//
		}
	}, [])
	return (
		<ul className='products'>
			{products.map((product) => {
				return (
					<li key={product._id}>
						<div className='product'>
						<Link to={`/products/${product._id}`}>
 
							<img
								className='product-image'
								src='/images/shirtslim.jpg'
								alt='shirt'
							/>
								<div className='product-name'>
									{product.name}
								</div>
							</Link>
							<div className='product-brand'>{product.brand}</div>
							<div className='product-price'>
								&#x20B9;{product.price}
							</div>
							<div className='product-rating'>
								{product.rating} stars ({product.numReviews}{' '}
								reviews)
							</div>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default HomeScreen;
