import axios from "axios";

import React, { useEffect, useState } from "react";
import { API_URL } from "../../utils/api";
import "./HomePage.scss";
import ProductList from "../../componets/ProductList/ProductList";

const HomePage = () => {
  const [userSearch, setUserSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timerSearch = setTimeout(() => {
      searchProducts(userSearch.trim());
    }, 1000);

    return () => {
      clearTimeout(timerSearch);
    };
  }, [userSearch]);

  const searchProducts = async (search="") => {
    try {
      setIsLoading(true);
      let data = await axios.get(`${API_URL}/products?search=${search}`);
      console.log(data);
      setProducts(data.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(()=>{
    searchProducts()
  },[])

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

      {isLoading?<p className="loading-text">Loading ....</p>:<ProductList products={products} />}
    </>
  );
};

export default HomePage;
