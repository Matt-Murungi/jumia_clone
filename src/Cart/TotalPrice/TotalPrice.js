import React from 'react'
import { useStateValue } from '../../stateManagement/StateProvider'
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from '../../stateManagement/reducer';

import './TotalPrice.css'

function TotalPrice() {
    const [{cart}, dispatch] = useStateValue();
    return (
        <div className="totalPrice">
           <CurrencyFormat 
           
           thousandSeparator={true}
           prefix={"UGX "}
           displayType={"text"}
           value={getCartTotal(cart)}
           />  
        </div>
    )
}

export default TotalPrice
