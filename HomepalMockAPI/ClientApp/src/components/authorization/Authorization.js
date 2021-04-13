import React from "react";
import axios from "axios";
import "./Authorization.scss";

export const Authorization = ({ token, setToken, valid, setValid }) => {
  const fetchToken = async () => {
    const response = await axios.get("https://localhost:6001/api/authtoken");
    setToken(response.data.value);
  };

  const validateToken = async () => {
    const response = await axios.get(
      "https://localhost:6001/api/authtoken/" + token
    );
    setValid(response.data.isValid.toString());
  };
  return (
    <div className="authorization-container">
      <p className="token">{token}</p>
      {!token && (
        <button className="primary-button" onClick={fetchToken}>
          Generate authorization token
        </button>
      )}
      {token && (
        <button className="primary-button" onClick={validateToken}>
          Validate authorization token
        </button>
      )}
      <p className="is-valid">Validity: {valid}</p>
    </div>
  );
};
