import React, { useEffect, useState } from "react";
import "./ProductPage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utils/api";

const ProductPage = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      let data = await axios.get(`${API_URL}/products/${id}`);
      setProduct(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="product-page-container">
      <div className="product-item-image">
        <img
          src={product?.image}
          alt="Wireless Bluetooth Headphones"
          class="product-image"
        />
      </div>
      <div class="product-section-details">
        <h2 class="product-title-right">{product?.title}</h2>
        <p class="product-description-right">{product?.description}</p>
        <p class="product-price-right">${product?.price}</p>
        <p class="product-category-right">{product?.category}</p>
        <button class="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
