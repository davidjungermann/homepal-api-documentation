import React, { Children, useState } from "react";
import "./NavigationUnit.scss";

export const NavigationUnit = ({ children, history, formatUrl, start }) => {
  const count = Children.count(children);
  const [open, setOpen] = useState("navigation-unit-list-closed");

  history.listen((location) => {
    if (location.hash === "#" + formatUrl(start)) {
      setOpen("navigation-unit-list-open");
    } else {
      setOpen("navigation-unit-list-closed");
    }
  });

  const toggleOpen = () => {
    if (open === "navigation-unit-list-closed") {
      setOpen("navigation-unit-list-open");
    } else {
      setOpen("navigation-unit-list-closed");
    }
  };

  if (count === 1) {
    return (
      <div className="navigation-unit-container">
        <div className="navigation-unit-single-item">{children}</div>
      </div>
    );
  } else if (count > 1) {
    const firstNavigationItem = Children.toArray(children[0]);
    return (
      <div className="navigation-unit-container">
        <div className="navigation-unit-header" onClick={() => toggleOpen()}>
          {firstNavigationItem}
        </div>

        <ul className={open}>
          {Children.map(children, (item, index) => {
            if (index !== 0) {
              return item;
            }
          })}
        </ul>
      </div>
    );
  }
};
