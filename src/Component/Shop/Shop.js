//functional component
import React, { useEffect } from 'react';
import './Shop.css';
import { useState } from 'react';
import Product from '../Product/Product';



const Shop = () => {
  const [products,setProducts] = useState([]);
  const [cart,SetCart] =useState([])
  useEffect(()=>{
    fetch('./products.JSON')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])

  const addToCart = (product) => {
    console.log('Product Added',product);
    //pop up notification
    SetCart([...cart,product])
    }
    

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.key}
                        addToCart={addToCart}
                        product={product}></Product>
                    )}
            </div> 
            <div className='cart-container'>
                <h3>Selected Product: {cart.length}</h3>
            </div>
        </div>
    );
};

export default Shop;


    