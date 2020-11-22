import React from "react";
import "./Category.css";

import CategoryItem from "./CateoryItem/CategoryItem";

function Category() {
  return (
    <div className="category">
      <div className="category__row">
        <CategoryItem
          label={"All Deal"}
          icon={"local_offer"}
          color={"#FE021F"}
        />
        <CategoryItem
          label={"All Deal"}
          icon={"local_offer"}
          color={"#FE021F"}
        />
        <CategoryItem
          label={"All Deal"}
          icon={"local_offer"}
          color={"#FE021F"}
        />
        <CategoryItem
          label={"All Deal"}
          icon={"local_offer"}
          color={"#FE021F"}
        />
        <CategoryItem
          label={"All Deal"}
          icon={"local_offer"}
          color={"#FE021F"}
        />
        <CategoryItem
          label={"All Deal"}
          icon={"local_offer"}
          color={"#FE021F"}
        />
      </div>
    </div>
    
  );
}

export default Category;
