import React, { useState } from "react";
import "./RegisterPage.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utils/api";
const RegisterPage = () => {
  let defaultData = {
    name: "",
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(defaultData);
  const nav = useNavigate();

  const handleUserRegister = async (e) => {
    e.preventDefault();
    try {
      if (
        userData.email === "" ||
        userData.password === "" ||
        userData.name === ""
      ) {
        alert("Please Fill all Fields");
        return;
      }

      let data = await axios.post(`${API_URL}/auth/register`, userData);
      alert(data.data.message);
      setUserData(defaultData);
      nav("/login")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleUserRegister} className="register_form">
        <input
          required
          placeholder="Enter Name"
          value={userData.name}
          type="text"
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          required
          placeholder="Enter Email"
          value={userData.email}
          type="text"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          required
          placeholder="Enter Password"
          value={userData.password}
          type="password"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <button onClick={handleUserRegister}>Register</button>
        <p className="clickable-paragraph" onClick={() => nav("/login")}>
          Alread have account ? Login Now !
        </p>
      </form>
    </>
  );
};

export default RegisterPage;
