import React from "react";

import "./Product.css";
import ProductItem from "./ProductItem/ProductItem";

function Product() {
  return (
    <div className="product">
      <div className="product_heading">
        <p className="product_headingTitle">In The Meantime Continue To Shop</p>
        <div className="product_headingSort">
          <p className="product_headingSortTitle">Sort By</p>
          {/* TODO: Create DropDown */}
        </div>
      </div>
      <p className="product_itemNumber">4019 Products found</p>

      <div className="product__row">
        <ProductItem
          productName={"Hisense Fridge"}
          productPrice={800000}
          productImage={
            "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/18097/1.jpg?4397"
          }
        />
      </div>
    </div>
  );
}

export default Product;
