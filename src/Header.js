import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './Stateprovider';

function Header() {
  const [{basket}] = useStateValue();
  console.log(basket);
    return (
        <nav className="header">
           <Link to ="/">
           <img className="header_logo"  
            src ="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
            alt=""
            />

           </Link>
           <div className ="header_search">
           <input type ="text" className="header_searchInput"/>
           <SearchIcon className="header_searchIcon"/>
           </div>

          <div className="header_Nav">
            <Link to ="/Login" className="header_Link">
            <div className="header_Option">
            <span className="header_OptionLine1">Hello</span>
            <span className="header_OptionLine2">Sign In</span>
          </div>

            </Link>
            <Link to ="/" className="header_Link">
            <div className="header_Option">
            <span className="header_OptionLine1">Returns</span>
            <span className="header_OptionLine2">& Orders</span>
          </div>

            </Link>
            <Link to ="/" className="header_Link">
            <div className="header_Option">
            <span className="header_OptionLine1">Your</span>
            <span className="header_OptionLine2">Prime</span>
          </div>
          
            </Link>
            <Link to ="/Checkout" className="header_Link">
            <div className="header_optionBasket">
                <ShoppingBasketIcon/>
    <span className="header_OptionLine2 header_BasketCount">{basket?.length}</span>
            </div>
            </Link>

          </div>
          
        </nav>
    )
}

export default Header
