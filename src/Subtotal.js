import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './Stateprovider';
import { getBasketTotal } from './reducer';
function Subtotal() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
            Subtotal({basket.length} items):<strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type ="checkbox"/>This Order Contains  a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />
       <button>Proceed To CheckOut</button>            
        </div>
    );
}

export default Subtotal
