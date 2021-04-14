import React from "react";
import axios from "axios";
import "./Auth.scss";
import { TokenContainer } from "../content/token-container/TokenContainer";

export const Auth = ({ token, setToken, valid, setValid }) => {
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
      {!token ? (
        <button className="primary-button" onClick={fetchToken}>
          Generate authorization token
        </button>
      ) : (
        <TokenContainer className="token" header="TOKEN" copy>
          {token}
        </TokenContainer>
      )}
    </div>
  );
};
