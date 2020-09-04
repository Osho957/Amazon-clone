import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './Stateprovider';
function CheckoutProduct({id,title,image,price,rating}) {
    const [{},dispatch] = useStateValue();
    console.log(id,title,image,price,rating);
    const removeFromCart =()=>{
        dispatch({
            type: 'REMOVE_FROM_CART',
                id:id,
        });
    }
    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct_img" src ={image}
            alt=""/>
            <div className="checkoutproduct_info">
                <p className="checkoutproduct_title">{title}</p>
                <p className="checkoutproduct_price">
            <small>₹</small>
            <strong>{price}</strong>
           </p>
           <div className="checkoutproduct_rating">
               {
                   Array(rating)
                   .fill()
                   .map((_) => (
                       <p>⭐</p>
                   ))
               }
            </div>
            <button onClick={removeFromCart}>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
