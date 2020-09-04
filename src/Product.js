import React from 'react'
import './Product.css';
import { Button } from '@material-ui/core';
import { useStateValue } from './Stateprovider';

function Product({id,title,image,price,rating}) {
    const [{},dispatch] = useStateValue();

    const addToCart =() => {
         dispatch({
             type: 'ADD_TO_CART',
             item: {
                 id:id,
                 title:title,
                 image:image,
                 price:price,
                 rating:rating,

            },

         });
    };
    return (
        <div className ="product">
            <div className ="product_info">
            <p>{title}</p>
            <p className="product_price">
            <small>₹</small>
            <strong>{price}</strong>
           </p>
           <div className="product_rating">
               {
                   Array(rating)
                   .fill()
                   .map((_) => (
                       <p>⭐</p>
                   ))
               }
            </div>
            </div>

           <img src ={image} alt="" />
           <Button onClick={addToCart}>Add To Cart</Button>
        </div>
    );
}

export default Product
