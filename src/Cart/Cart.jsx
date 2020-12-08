
import React from 'react'
import { useStateValue } from '../stateManagement/StateProvider'
import CartItem from './CartItem/CartItem';

import "./Cart.css"

function Cart() {
    const [{cart}] = useStateValue();

    return (
        <div className="cart">
            <h1 className="cart__title">
                Cart( 1 item)
            </h1>

        <table className="cart__table">
            <tr className="cart__tableHeading">
                <th>ITEM</th>
                <th>QUANTITY</th>
                <th>UNIT PRICE</th>
                <th>SUB TOTAL</th>
            </tr>
           <CartItem />
           <CartItem />
        </table>
        </div>
    )
}

export default Cart
