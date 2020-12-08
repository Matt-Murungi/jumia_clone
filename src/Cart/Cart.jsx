import React from "react";
import { useStateValue } from "../stateManagement/StateProvider";
import CartItem from "./CartItem/CartItem";

import "./Cart.css";
import TotalPrice from "./TotalPrice/TotalPrice";

function Cart() {
  const [{ cart }] = useStateValue();

  return (
    <div className="cart">
      <h1 className="cart__title">Cart ({cart?.length} item)</h1>

      {cart?.length === 0 ? (
        <div className="cart__empty">
          <img
            src="https://www.jumia.ug/images/oshun/cart/empty-cart.png"
            alt=""
          />
          <h2>Your Cart is empty</h2>
        </div>
      ) : (
        <table className="cart__table">
          <tr className="cart__tableHeading">
            <th>ITEM</th>
            <th>QUANTITY</th>
            <th>UNIT PRICE</th>
            <th>SUB TOTAL</th>
          </tr>

          {cart.map((item) => {
            return (
              <CartItem
                cartName={item.productName}
                cartImage={item.productImage}
                cartPrice={item.productPrice}
              />
            );
          })}
        </table>
      )}

      <div className="cart__total">
        <p>Total: </p>
        <TotalPrice />
      </div>
    </div>
  );
}

export default Cart;
