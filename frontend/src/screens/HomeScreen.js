import React, { useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {listProduct} from '../actions'


const HomeScreen = () => {

	 const productList = useSelector(state => state.products);
	 const { products, error, loading} = productList;
	 const dispatch = useDispatch()

	useEffect(() => {
		dispatch(listProduct());
		return () => {
			//
		}
	}, [])
	return (
		 loading ? <div> Loading ... </div>
		 : error ? <div> {error}</div>
		 :
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
