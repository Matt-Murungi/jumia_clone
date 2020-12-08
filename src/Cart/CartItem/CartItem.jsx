import React from "react";

import "./CartItem.css";
function CartItem() {
  return (
    <tr className="cart__Item">
      <td className="cart__itemDescription">
        <img
          src="https://ug.jumia.is/Ns5Vqpc145mX_iEnsPhASrqGzgI=/fit-in/60x60/filters:fill(white):sharpen(1,0,false):quality(100)/product/06/96034/1.jpg?4974"
          alt=""
          className="cart__itemImage"
        />
        <div className="cart__itemDetails">
          <p className="cart__itemName">Anti-theft Laptop Bag</p>
          <div className="cart__itemOptions">
            <p className="cart__itemOptionOne">
              <i className="material-icons">delete</i>MOVE TO SAVED ITEMS
            </p>
            <p className="cart__itemOptionTwo">
              <i className="material-icons">delete</i>REMOVE
            </p>
          </div>
        </div>
      </td>

      <td className="cart__itemQuantity">1</td>

      <td className="cart__itemPrice">UGX 37,000</td>

      <td className="cart__itemTotal">UGX 37,000</td>
    </tr>
  );
}

export default CartItem;
