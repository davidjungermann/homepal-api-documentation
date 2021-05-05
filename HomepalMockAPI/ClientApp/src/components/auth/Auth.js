import React from "react";
import axios from "axios";
import "./Auth.scss";
import { TokenContainer } from "../content/token-container/TokenContainer";
import { ContainerBlock } from "../container-block/ContainerBlock";

export const Auth = ({ token, setToken, valid, setValid }) => {
  const fetchToken = async () => {
    const response = await axios.get("/api/authtoken");
    setToken(response.data.value);
  };

  // const validateToken = async () => {
  //   const response = await axios.get(
  //     "http://localhost:6001/api/authtoken/" + token
  //   );
  //   setValid(response.data.isValid.toString());
  // };

  return (
    <div className="authorization-container">
      <div className="authorization-button">
        {token ? (
          <TokenContainer header="YOUR API KEY" copy>
            {token}
          </TokenContainer>
        ) : (
          <ContainerBlock header="YOUR API KEY" inactiveContainerBlock>
            <span>{"//"} There is no generated key yet.</span>
          </ContainerBlock>
        )}
        <button className="primary-button" onClick={fetchToken}>
          Generate access key
        </button>
        <p className="small">
          Pressing the button will generate a test mode key and auto-insert the
          key in the usage examples of the documentation.
        </p>
      </div>
    </div>
  );
};
