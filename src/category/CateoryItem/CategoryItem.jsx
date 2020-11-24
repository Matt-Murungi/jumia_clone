import React from "react";

import "./CategoryItem.css";

import Icon from 'react-web-vector-icons';

function CategoryItem({ label, icon, color }) {
  const styles = {
    color: color,

  };
  return (
    <div className="category__item">
   <i className="material-icons category__itemIcon" style={styles}>
     {icon}
   </i>
      <p className="category__itemLabel">{label}</p>
    </div>
  );
}

export default CategoryItem;
