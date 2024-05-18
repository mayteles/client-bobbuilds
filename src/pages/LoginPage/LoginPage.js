import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/api";
import axios from "axios";

const LoginPage = () => {
  const nav = useNavigate();
  let defaultData = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(defaultData);

  const handleLoginUser = async (e) => {
    e.preventDefault();
    if (
      userData.email === "" ||
      userData.password === "" ||
      userData.name === ""
    ) {
      alert("Please Fill all Fields");
      return;
    }
    try {
      let data = await axios.post(`${API_URL}/auth/login`, userData);
      localStorage.setItem("user-ecommerce-auth-token", data.data.token);
      localStorage.setItem("user-ecommerce", JSON.stringify(data.data.user));
      alert(data.data.message);
      setUserData(defaultData);
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleLoginUser} className="register_form">
        <input
          placeholder="Enter Email"
          value={userData.email}
          type="text"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          placeholder="Enter Password"
          value={userData.password}
          type="password"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <button onClick={handleLoginUser}>Login</button>
        <p className="clickable-paragraph" onClick={() => nav("/register")}>
          New user ? Signup Now !
        </p>
      </form>
    </>
  );
};

export default LoginPage;
