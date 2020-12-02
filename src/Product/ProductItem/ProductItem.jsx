import React from 'react'

import './ProductItem.css'

function ProductItem() {
    return (
        <div className="product__item">
   
        <img
        className="product__itemImage"
          src="https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/86105/1.jpg?7319"
          alt=""
        />
  
      <p className="product__itemName">CocaCola Bundle of Joy</p>
      <p className="product__itemPrice">UGX 12,000</p>
    </div>
    )
}

export default ProductItem
