import React, { useState } from "react";
import axios from "axios";
import "./Authorization.scss";

export const Authorization = () => {
  const [token, setToken] = useState("");
  const [isValid, setIsValid] = useState("");

  const fetchToken = async () => {
    const response = await axios.get("https://localhost:6001/api/authtoken");
    setToken(response.data.value);
  };

  const validateToken = async () => {
    const response = await axios.get(
      "https://localhost:6001/api/authtoken/" + token
    );
    setIsValid(response.data.isValid.toString());
    console.log(response.data.isValid);
  };
  return (
    <div className="authorization-container">
      <p className="token">{token}</p>
      {!token && (
        <button className="primary-button" onClick={fetchToken}>Generate authorization token</button>
      )}
      {token && (
        <button className="primary-button" onClick={validateToken}>Validate authorization token</button>
      )}
      <p className="is-valid">Validity: {isValid}</p>
    </div>
  );
};
