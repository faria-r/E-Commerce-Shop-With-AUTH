import React, { useState } from 'react';
import {Link, useLoaderData}  from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {products,previousCart} = useLoaderData();
    const [cart,setcart] = useState(previousCart);

    const handleRemoveItem = (id) => {
      const remainingProducts = cart.filter(product => product.id !== id);
      setcart(remainingProducts);
    removeFromDb(id);
    }

    const clearCart = ()=>{
        setcart([]);
        deleteShoppingCart();
}
    return (
        <div className='shop-container'>
           <div className='orders-container'>
            {
                cart.map(product => <ReviewItem
                key={product.id}
                product = {product}
               handleRemoveItem = {handleRemoveItem}
                ></ReviewItem>)
            }

           </div>
           <div className='cart-container'>
            <Cart cleatCart={clearCart} cart={cart}>

            <Link to='/shipping'>
                <button>Proceed Shipping</button>
            </Link>
            </Cart>
           </div>
        </div>
    );
};

export default Orders;