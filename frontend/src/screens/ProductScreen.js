import React from 'react'
import data from '../data';
import { Link } from 'react-router-dom';

const ProductScreen = (props) => {
    const id = Number (props.match.params.id);
    const products = data.products;
    const product = products.find(x => x._id === id);
    return(
        <div>
            <div>
                <Link className="back-to-result" to='/' >Back to result</Link>
            </div>
            <div className="details">
                <div className="details-image">
                <img src={product.imageUrl} alt="product"></img>
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.rating} Stars (${product.numReviews} reviews)
                        </li>
                        <li>
                           price: <b>&#x20B9;{product.price}</b>
                        </li>
                        <li>
                            description:
                            <div>
                                {product.description}
                            </div>
                        </li>

                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                            price: <b>&#x20B9;{product.price}</b>
                        </li>
                        <li>
                            status: {product.status}
                        </li>
                        <li>
                            Qty: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </li>
                        <li>
                            <button className="button primary">Add to cart</button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default ProductScreen;