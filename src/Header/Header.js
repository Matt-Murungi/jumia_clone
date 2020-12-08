import React from "react";

import { useStateValue } from "../stateManagement/StateProvider";
import {Link} from "react-router-dom";
import Person from "@material-ui/icons/PersonOutline";
import Help from "@material-ui/icons/HelpOutline"
import ShoppingCart from "@material-ui/icons/ShoppingCartOutlined"
import "./Header.css";

function Header() {
  const [{cart}] = useStateValue();
  return (
    <nav className="header">
      <Link to="/">
      <img
        src="https://getcake.com/wp-content/uploads/2017/03/Jumia-logo.png"
        alt=""
        className="header__logo"
        />
        </Link>

      <input type="text" className="header__searchBar" />

      <button className="header__searchButton">SEARCH</button>

      <div className="header__nav">
        <div className="header__navOption">
          <Person />
          <span>Login</span>
        </div>
        <div className="header__navOption">
          <Help />
          <span>Help</span>
        </div>
        <Link to="/cart" className="header__navOption">
          <ShoppingCart />
       
  <p className="header__navOptionCartNumber">{cart?.length}</p>

          <span>Cart</span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
