//functional component
import React, { useEffect } from 'react';
import './Shop.css';
import { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';
import { getStoredCart } from '../../utilities/fakedb';



const Shop = () => {
  const [products,setProducts] = useState([]);
  const [cart,SetCart] =useState([])
  useEffect(()=>{
    fetch('./products.JSON')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])

  useEffect(()=>{
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart){
      const addedProduct = products.find(product=>product.id===id);
      if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    SetCart(savedCart)
  },[products])

  const addToCart = (selectedProduct) => {
    //console.log('Product Added',product);
    const key = selectedProduct.id;
    let newCart = [];
    const exists = cart.find(product=>product.id == selectedProduct.id)
    if (!exists){
        selectedProduct.quantity = 1;
        newCart = [...cart,selectedProduct]
    }
    else{
        const remaining = cart.filter(product=>product.id !== selectedProduct.id)
        exists.quantity = exists.quantity + 1;
        newCart = [...remaining,exists]
    }
    SetCart(newCart);
    addToDb(key);//or addToDb(selectedProduct.quantity)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;


    