import React from 'react'

import './BlackFridayProductItem.css'

function BlackFridayProductItems({productName, productPrice}) {
    return (
        <div className="product__item">
   
        <img
        className="blackFridayProduct__itemImage"
          src="https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/86105/1.jpg?7319"
          alt=""
        />
  
    <p className="blackFridayProduct__itemName">{productName}</p>
      <p className="blackFridayProduct__itemPrice">{productPrice}</p>
    </div>
    )
}

export default BlackFridayProductItems



