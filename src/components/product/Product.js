import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './product.css'
import Rating from 'react-rating';
const Product = (props) => {
    // console.log(props.product);
    const { img, name, seller, price, stock, star } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <h1> </h1>
            </div>
            <img src={img} alt="productImage" />

            <div>
                <h2 className="product-name">{name}</h2>
                <p><small>by:{seller}</small></p>
                <p>price: ${price} </p>
                <p>only {stock} left in stock - order soon</p>
                <Rating 
                initialRating={star}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star text-warning"
                readonly
                />
                <br />
                <button 
                onClick ={()=>props.handleToCart(props.product)}
                className="product-btn">add to cart {element}</button>
            </div>

        </div>
    );
};

export default Product;