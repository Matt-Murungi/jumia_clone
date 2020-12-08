import React from "react";
import { useStateValue } from "../../stateManagement/StateProvider";


import "./CartItem.css";




function CartItem({ cartName, cartImage, cartPrice }) {
    
    const [{cart}, dispatch] = useStateValue();
   
    console.log(cart);
    const removeFromCart = () =>{
        dispatch({
            type: "REMOVE_FROM_CART", 
            id:cartName
        })
    }
    return (
    <tr className="cart__Item">
      <td className="cart__itemDescription">
        <img src={cartImage} alt="" className="cart__itemImage" />
        <div className="cart__itemDetails">
          <p className="cart__itemName">{cartName}</p>
          <div className="cart__itemOptions">
            <p className="cart__itemOptionOne">
              <i className="material-icons">favorite_border</i>MOVE TO SAVED
              ITEMS
            </p>
            <p onClick={removeFromCart} className="cart__itemOptionTwo">
              <i className="material-icons">delete</i>REMOVE
            </p>
          </div>
        </div>
      </td>

      <td className="cart__itemQuantity">1</td>

      <td className="cart__itemPrice">UGX {cartPrice}</td>

      <td className="cart__itemTotal">UGX 37,000</td>
    </tr>
  );
}

export default CartItem;
