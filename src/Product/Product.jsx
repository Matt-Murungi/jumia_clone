import React from "react";

import "./Product.css";
import ProductItem from "./ProductItem/ProductItem";

function Product() {
  return (
    <div className="product">
      <div className="product__heading">
        <p className="product__headingTitle">
          Black Friday Deals | Up to 80% Off
        </p>
        <div className="product__headingTitleMore">
          See All <span className="material-icons">keyboard_arrow_right</span>{" "}
        </div>
      </div>

    <div className="product__row">

    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    </div>
    </div>
  );
}

export default Product;
