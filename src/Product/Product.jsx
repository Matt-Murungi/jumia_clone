import React from "react";

import "./Product.css";
import BlackFridayProductItems from "./BlackFridayProductItem/BlackFridayProductItem";

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

    <BlackFridayProductItems productName="CocaCola Bundle of Joy" productPrice="Shs.12,000"/>
    <BlackFridayProductItems productName="CocaCola Bundle of Joy" productPrice="Shs.12,000"/>
    <BlackFridayProductItems productName="CocaCola Bundle of Joy" productPrice="Shs.12,000"/>
    <BlackFridayProductItems productName="CocaCola Bundle of Joy" productPrice="Shs.12,000"/>

    </div>

    
    </div>
  );
}

export default Product;
