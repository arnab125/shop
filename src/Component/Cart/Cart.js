//functional component
import React, { useEffect } from 'react';
//import cart css
import './Cart.css';
import { useState } from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    let price = 0;
    let shipping = 0;

    for(const product of cart){
        price = price + product.price;
        shipping = shipping + product.shipping;
        
    }
const tax = (price*0.1).toFixed(2);
const grandTotal = (price + shipping + Number(tax)).toFixed(2);

    return (
        <div className='cartdiv'>
            <h3>Order Summary :</h3>
            <h4>Items Ordered : {cart.length}</h4>
            <h4>Total Price : $ {price}</h4>
            <h4>Shipping Price : $ {shipping} </h4>
            <h4>Tax + VAT : $ {tax} </h4>
            <h4>Grand Total : $ {grandTotal} </h4>


        </div>
    );
}

export default Cart;