import React from "react";

import "./Header.scss";
import { ReactComponent as Logo } from '../../assets/logo_horizontal_slogan_w.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCopy } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <div className="header-container">
      <div className="logotype-container">
        <Logo className="logotype" />
        <span>for developers.</span>
      </div>
      <div className="nav-menu-container">
        <span className="nav-menu-item">Support</span>
        <span className="nav-menu-item">
          Dashboard 
        </span>
      </div>
    </div>
  );
};
