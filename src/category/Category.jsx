import React from "react";
import "./Category.css";

import CategoryItem from "./CateoryItem/CategoryItem";

function Category() {
  return (
    <div className="category">
      <div className="category__row">
        <CategoryItem
          label={"All Deals"}
          icon={"loyalty"}
          color={"red"}
        />
        <CategoryItem
          label={"Flash Sales"}
          icon={"loyalty"}
          color={"#C3BFF7"}
        />
        <CategoryItem
          label={"Express"}
          icon={"directions_bus"}
          color={"#FAC11C"}
        />
        <CategoryItem
          label={"Vouchers"}
          icon={"confirmation_number"}
          color={"#FF4E00"}
        />
        <CategoryItem
          label={"10k Store"}
          icon={"store"}
          color={"#FA966A"}
        />
        <CategoryItem
          label={"Jumia Global Deals"}
          icon={"brightness_7"}
          color={"#3F48CC"}
        />
      </div>
    </div>
    
  );
}

export default Category;
