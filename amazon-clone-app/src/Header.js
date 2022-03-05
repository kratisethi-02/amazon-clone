import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket,user }, dispatch] = useStateValue();

  const handleAuthentication = () =>{
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link  to="/">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to = {!user && "/login"}>  
        {/* ABOVE line makes a clean transition btw signin and signout ..... 
        if user is signed in and then clicks sign out the page wont get 
        refreshed again but signout will change to signin and when user
         clicks on signin then it will redirect to login page     */}
       
       
       
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">Hello {user ? user?.email : 'Guest'}</span>
          <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>
        
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/cart">
                <div className="header__optionBasket">
          <ShoppingCartIcon className="header__shoppingCartIcon " />
          <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                                                                    {/* ? means if basket goes undefined or show some errors the app wont freak out and will handle the stuff gracefully itself */}
        
        </div>
        </Link>

      </div>
    </div>
  );
}

export default Header;