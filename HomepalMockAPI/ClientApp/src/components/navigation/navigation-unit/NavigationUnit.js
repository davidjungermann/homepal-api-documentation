import React, { Children } from "react";
import "./NavigationUnit.scss";

export const NavigationUnit = ({ children }) => {
  const count = Children.count(children);

  if (count === 1) {
    return <div className="navigation-unit-container">{children}</div>;
  } else if (count > 1) {
    const firstNavigationItem = Children.toArray(children[0]);
    return (
      <div className="navigation-unit-container">
        {firstNavigationItem}
        <ul className="navigation-unit-list">
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
