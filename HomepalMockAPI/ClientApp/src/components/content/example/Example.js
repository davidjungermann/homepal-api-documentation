import React, { useState, useEffect } from "react";
import { ContainerBlock } from "../../container-block/ContainerBlock";
import "./Example.scss";
import ReactDOMServer from 'react-dom/server';

export const Example = ({ children, header, copy, token}) => {
  const [content] = useState(children);
  const [copied, setCopied] = useState(false);
  const [authToken, setAuthToken] = useState(token);

  useEffect(() => {
    setAuthToken(token);
  }, [token]);

  const handleCopy = () => {
    if (Array.isArray(content)) {
      navigator.clipboard.writeText(content.join(''));
    } else {
      navigator.clipboard.writeText(content);
    }
    setCopied(true);
  };

  const handleAuthCopy = () => {
    if (Array.isArray(content)) {
      navigator.clipboard.writeText(content.join('') + "-u " + authToken + ":");
    } else {
      navigator.clipboard.writeText(content + "-u " + authToken + ":");
    }
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
            {/* <span className="dollar-sign">$ </span> */}
            <pre>{content}</pre>
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
          {/* <span className="dollar-sign">$ </span> */}
          <span>{content}</span>
        </ContainerBlock>
      )}
    </React.Fragment>
  );
};
