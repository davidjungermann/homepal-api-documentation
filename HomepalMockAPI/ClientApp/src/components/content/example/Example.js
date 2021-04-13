import React, { useState, useEffect } from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";
import "./Example.scss";

export const Example = ({ children, header, copy, token }) => {
  const [content, setContent] = useState(children);
  const [copied, setCopied] = useState(false);
  const [authToken, setAuthToken] = useState(token);

  useEffect(() => {
    setAuthToken(token);
  }, [token]);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
  };

  const handleAuthCopy = () => {
    navigator.clipboard.writeText(content + " -u " + authToken + ":");
    setCopied(true);
  };

  const handleLeave = () => {
    setCopied(false);
  };

  return (
    <React.Fragment>
      {authToken ? (
        <React.Fragment>
          <ContainerBlock
            header={header}
            copy={copy}
            handleCopy={handleAuthCopy}
            copied={copied}
            handleLeave={handleLeave}
            token={authToken}
          >
            <span className="dollar-sign">$ </span>
            {content}
          </ContainerBlock>
        </React.Fragment>
      ) : (
        <ContainerBlock
          header={header}
          copy={copy}
          handleCopy={handleCopy}
          copied={copied}
          handleLeave={handleLeave}
        >
          <span className="dollar-sign">$ </span>
          {content}
        </ContainerBlock>
      )}
    </React.Fragment>
  );
};
