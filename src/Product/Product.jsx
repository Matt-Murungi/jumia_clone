import React from "react";

import "./Product.css";

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
    </div>
  );
}

export default Product;
