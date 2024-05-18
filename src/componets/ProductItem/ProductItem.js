import React from "react";
import "./ProductItem.scss";
import { useNavigate } from "react-router-dom";
const ProductItem = ({ _id, image, title, description, price, category }) => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav(`/product/${_id}`)}
      key={_id}
      className="product-card"
    >
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <div className="product-footer">
          <span className="product-price">${price}</span>
          <span className="product-category">{category}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
