import React, { useState } from "react";
import { useStateValue } from "../../stateManagement/StateProvider";

import "./ProductItem.css";

function ProductItem({ productName, productPrice, productImage }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        productName: productName,
        productPrice: productPrice,
        productImage: productImage,
      },
    });
  };
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      className="productItem"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img src={productImage} alt="" className="productItem__image" />
      <div className="productItem__detail">
        <p className="productItem__name">{productName}</p>
        <p className="productItem__price">UGX {productPrice}</p>
        {/* TODO: create rating  */}
      </div>

      {isShown ? (
        <button onClick={addToBasket} className="productItem__button">
          ADD TO CART
        </button>
      ) : null}
    </div>
  );
}

export default ProductItem;
