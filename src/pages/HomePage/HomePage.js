import axios from "axios";

import React, { useEffect, useState } from "react";
import { API_URL } from "../../utils/api";
import "./HomePage.scss";
import ProductList from "../../componets/ProductList/ProductList";

const HomePage = () => {
  const [userSearch, setUserSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const timerSearch = setTimeout(() => {
      searchProducts(userSearch.trim());
    }, 1000);

    return () => {
      clearTimeout(timerSearch);
    };
  }, [userSearch]);

  const searchProducts = async (search) => {
    try {
      let data = await axios.get(`${API_URL}/products?search=${search}`);
      console.log(data);
      setProducts(data.data.data);
    } catch (error) {}
  };

  return (
    <>
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          value={userSearch}
          placeholder="Search for products..."
          onChange={(e) => setUserSearch(e.target.value)}
        />
      </div>

      <ProductList products={products} />
    </>
  );
};

export default HomePage;
