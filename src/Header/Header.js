import React from "react";

import Person from "@material-ui/icons/PersonOutline";
import Help from "@material-ui/icons/HelpOutline"
import ShoppingCart from "@material-ui/icons/ShoppingCartOutlined"
import "./Header.css";
import { useStateValue } from "../stateManagement/StateProvider";

function Header() {
  const [{cart}] = useStateValue();
  return (
    <nav className="header">
      <img
        src="https://getcake.com/wp-content/uploads/2017/03/Jumia-logo.png"
        alt=""
        className="header__logo"
      />

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
        <div className="header__navOption">
          <ShoppingCart />
       
  <p className="header__navOptionCartNumber">{cart?.length}</p>

          <span>Cart</span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
