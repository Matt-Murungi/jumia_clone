import React, { useState } from "react";

import "./ProductItem.css";

function ProductItem() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      className="productItem"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img
        src="https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/18097/1.jpg?4397"
        alt=""
        className="productItem__image"
      />
      <div className="productItem__detail">

      <p className="productItem__name">
        Hisense Single Door Refrigerator 229L -Silver
      </p>
      <p className="productItem__price">UGX 880,000</p>
      {/* TODO: create rating  */}
      </div>

      {isShown ? (
        <button className="productItem__button">ADD TO CART</button>
      ) : null
      }
    </div>
   
  );
}

export default ProductItem;
