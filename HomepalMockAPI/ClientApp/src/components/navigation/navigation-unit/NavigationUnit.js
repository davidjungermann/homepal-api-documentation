import React, { Children, useState } from "react";
import "./NavigationUnit.scss";

export const NavigationUnit = ({ children, history, formatUrl }) => {
  const [open, setOpen] = useState("navigation-unit-list-closed");

  const count = Children.count(children);

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
    var labels = [];
    Children.map(children, (item) => {
      labels.push("#" + formatUrl(item.props.label));
    });

    history.listen((location) => {
      if (labels.includes(location.hash)) {
        setOpen("navigation-unit-list-open");
      } else {
        setOpen("navigation-unit-list-closed");
      }
    });

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
