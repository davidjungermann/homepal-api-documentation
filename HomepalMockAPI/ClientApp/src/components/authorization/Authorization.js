import React, { useState } from "react";
import axios from "axios";
import "./Authorization.scss";

export const Authorization = () => {
  const [token, setToken] = useState("");

  const fetchToken = async () => {
    const response = await axios.get("https://localhost:6001/api/authtoken");
    setToken(response.data.value);
  };
  return (
    <div className="authorization-container">
      <p className="token">{token}</p>
      <button className="primary-button" onClick={fetchToken}>Generate authorization token</button>
    </div>
  );
};
