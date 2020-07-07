import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { productDetails as fetchProductDetails } from '../actions';

const ProductScreen = (props) => {

    // Set initial setup
	const id = Number(props.match.params.id);
	const [qty, setQty] = useState(1);
	const productDetails = useSelector((state) => state.productDetails);
	const { product, loading, error } = productDetails;
	const dispatch = useDispatch();

    // Fetch product details
	useEffect(() => {
		dispatch(fetchProductDetails(id));
		return () => {
			//cleanup
		};
    }, []);

    // handle add to keart
    const handleAddToKart = () => {
        props.history.push(`cart/${id}?qty=${qty}`)
    }
    


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
							<li>status: {product.countInStock > 0 ? "In stock": "Out of stock"}</li>
							<li>
								Qty:{' '}
								<select
									value={qty}
									onChange={(e) => setQty(e.target.value)}>
									{[
										...Array(product.countInStock).keys(),
									].map((x) => (
										<option value={x + 1}>{x + 1}</option>
									))}
								</select>
							</li>
							<li>
                            {product.countInStock > 0 &&
								<button onClick={handleAddToKart} className='button primary'>
									Add to cart
								</button>
                            }
							</li>
						</ul>
					</div>
				</div>
			)}{' '}
		</div>
	);
};

export default ProductScreen;
