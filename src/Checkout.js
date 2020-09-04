import React from 'react';
import { useStateValue } from './Stateprovider';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct"

import Subtotal from './Subtotal';
function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className = "checkout_left">
         <img className="checkout_ad"
         src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg "
         alt =""
         />   
         {basket?.length===0 ?(
             <div>
             <h2> Your Shopping Cart is Empty </h2>
             <p>The price and availability of items at Amazon.in are subject to change. 
                 The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.
                 Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
             </div>
         ):(
             <div>
                 <h2 className= "checkout_title">Your Shopping Cart</h2>
                 {basket?.map((item) => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                 ))}
                 
             </div>
         )}
         </div>
         {basket.length>0 && (
             <div className ="checkout_right">
               <Subtotal/>
             </div>
         )}
        </div>
    )
}

export default Checkout
