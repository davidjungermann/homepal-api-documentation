import React, { useState } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import "./NavigationItem.scss";

export const NavigationItem = ({ label, formatUrl, history }) => {

  const debounce = (func, wait) => {
    let timeout;
    return function(...args) {
      const context = this;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    };
  };

  history.listen((location) => {
    //const onChange = debounce(event => setQuery(event?.target?.value))
    debounce(console.log(label));

  });

  return (
    <div className="navigation-item-container">
      <Link
        to={"#" + formatUrl(label)}
        activeClassName="active"
        className="list-item-label"
      >
        <span>{label}</span>
      </Link>
    </div>
  );
};
