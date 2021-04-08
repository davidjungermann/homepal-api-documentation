import React from "react";

import "./Header.scss";
import { ReactComponent as Logo } from '../../assets/logo_horizontal_slogan_w.svg';

export const Header = () => {
  return (
    <div className="header-container">
      <Logo className="logotype" />
      <span>Support</span>
    </div>
  );
};
