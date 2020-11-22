import React from "react";

import "./CategoryItem.css";

function CategoryItem({ label, icon, color }) {
  const styles = {
    color: { color },
  };
  return (
    <div className="category__item">
      <i style={styles} class="material-icons category__itemIcon">
        {icon}
      </i>
      <p className="category__itemLabel">{label} </p>
    </div>
  );
}

export default CategoryItem;
