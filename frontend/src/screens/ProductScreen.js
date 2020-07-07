import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { productDetails as fetchProductDetails } from '../actions';

const ProductScreen = (props) => {
	const id = Number(props.match.params.id);
	const productDetails = useSelector((state) => state.productDetails);
	const { product, loading, error } = productDetails;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProductDetails(id));
		return () => {
			//cleanup
		};
	}, []);

	return (
		<div>
			<div>
				<Link className='back-to-result' to='/'>
					Back to result
				</Link>
			</div>
			{loading ? (
				<div> Loading...</div>
			) : error ? (
				<div>{error} </div>
			) : (
				<div className='details'>
					<div className='details-image'>
						<img src={product.imageUrl} alt='product'></img>
					</div>
					<div className='details-info'>
						<ul>
							<li>
								<h4>{product.name}</h4>
							</li>
							<li>
								{product.rating} Stars (${product.numReviews}{' '}
								reviews)
							</li>
							<li>
								price: <b>&#x20B9;{product.price}</b>
							</li>
							<li>
								description:
								<div>{product.description}</div>
							</li>
						</ul>
					</div>
					<div className='details-action'>
						<ul>
							<li>
								price: <b>&#x20B9;{product.price}</b>
							</li>
							<li>status: {product.status}</li>
							<li>
								Qty:{' '}
								<select>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
								</select>
							</li>
							<li>
								<button className='button primary'>
									Add to cart
								</button>
							</li>
						</ul>
					</div>
				</div>
			)}{' '}
		</div>
	);
};

export default ProductScreen;
