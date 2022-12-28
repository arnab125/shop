//functional component
import React, { useEffect } from 'react';
import { useState } from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    const addToCart = props.addToCart;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>Price : $ {price}</p>
                <p>Rating : {ratings} ★</p>
                <div className='cart'>
                    <button onClick={()=>addToCart(props.product)}><b>Add To Cart</b>  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                    
                </div>
            </div>
        </div>
    );
};

export default Product;