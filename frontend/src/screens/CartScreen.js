import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, removeFromCart } from '../actions';
import { Link } from 'react-router-dom';

const CartScreen = (props) => {
	const productId = props.match.params.id;
	const qty = props.location.search
		? Number(props.location.search.split('=')[1])
		: 1;

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
    const dispatch = useDispatch();
    
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId))
    }

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty));
		}
	}, []);

	const chekoutHandler = () => {
		props.history.push("/signin?redirect=shipping")
	}
	return (
		<div className='cart'>
			<div className='cart-list'>
				<ul className='cart-list-container'>
					<li>
						<h3>Shopping Cart</h3>
						<div>Price</div>
					</li>
					{cartItems.length === 0 ? (
						<div>Cart item is empty</div>
					) : (
						cartItems.map((item) => (
                            <li key={item.product}>
							<div>
								<div className='cart-image'>
									<img  src={item.imageUrl} alt='' />
								</div>
								<div className='cart-name'>
									<div>
                                    <Link to={`/products/${item.product}`}>
                                    {item.name}
                                    </Link>
                                    </div>
									<div>
										Qty:
										<select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
											<option value='1'>1</option>
											<option value='2'>2</option>
											<option value='3'>3</option>
										</select>
                                        <button className="button" onClick={() => removeFromCartHandler(item.product)}>Delete</button>
									</div>
									<div className="cart-price">{item.price}</div>
								</div>
							</div>
                            </li>
						))
					)}
				</ul>
			</div>
			<div className='cart-action'>
				<h3>
					Sub Total({cartItems.reduce((a, c) => a + c.qty, 0)} items)
					: &#x20B9;(
					{cartItems.reduce((a, c) => a + c.price * c.qty, 0)})
				</h3>
				<button
					onClick={chekoutHandler}
					className='button primary'
					disabled={cartItems.length === 0}>
					Checkout
				</button>
			</div>
		</div>
	);
};

export default CartScreen;
