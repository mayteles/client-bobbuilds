import React from "react";
import "./ProductList.scss";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem {...product} />
      ))}
    </div>
  );
};

export default ProductList;
