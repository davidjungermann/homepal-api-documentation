import React from "react";
import nextId from "react-id-generator";
import { HeaderItem } from "./header/HeaderItem";
import { NavigationItem } from "./navigation-unit/NavigationItem";
import { NavigationUnit } from "./navigation-unit/NavigationUnit";

import "./Navigation.scss";

export const Navigation = ({ items, formatUrl, history }) => {
  return (
    <React.Fragment>
      <div className="navigation-container">
        <div className="navigation-header">
          <span>
            <h1 className="title-7">Homebase API</h1>
          </span>
          <span id="docs-text" className="title-7">
            Docs
          </span>
        </div>

        <select id="version" name="version">
          <option value="v1">v1 (latest)</option>
        </select>
        {/* If more than one navigation item is passed to NavigationUnit, the first item becomes the header, and subsequent items are placed in a list. */}
        <ul className="navigation-list">
          <div key={nextId()} className="navigation-list-header">
            <HeaderItem>Introduction</HeaderItem>
          </div>
          <div key={nextId()} className="navigation-list-content">
            <NavigationUnit
              history={history}
              formatUrl={formatUrl}
              start="About the API"
            >
              <NavigationItem
                label="About the API"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit
              history={history}
              formatUrl={formatUrl}
              start="Conceptual Information"
            >
              <NavigationItem
                label="Conceptual Information"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Conceptual Overview"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Database Properties"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Enumerated Values"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit
              history={history}
              formatUrl={formatUrl}
              start="Authorization"
            >
              <NavigationItem
                label="Authorization"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Generate Access Key"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit
              history={history}
              formatUrl={formatUrl}
              start="Validations"
            >
              <NavigationItem
                label="Validations"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit
              history={history}
              formatUrl={formatUrl}
              start="Errors"
            >
              <NavigationItem
                label="Errors"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Error Codes"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit
              history={history}
              formatUrl={formatUrl}
              start="Query Parameters"
            >
              <NavigationItem
                label="Query Parameters"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Pagination"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Sorting"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit
              history={history}
              formatUrl={formatUrl}
              start="Versioning"
            >
              <NavigationItem
                label="Versioning"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Upcoming Deprecations"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>
          </div>
          <div key={nextId()} className="navigation-list-header">
            <HeaderItem>Resources</HeaderItem>
          </div>
          <div key={nextId()} className="navigation-list-content">
            <NavigationUnit
              history={history}
              formatUrl={formatUrl}
              start="Agent"
            >
              <NavigationItem
                label="Agent"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Get Agents"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Get Agent"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Create Agent"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Update Agent"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Delete Agent"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit
              history={history}
              formatUrl={formatUrl}
              start="Building"
            >
              <NavigationItem
                label="Building"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Get Buildings"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Get Building"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Create Building"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Update Building"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Delete Building"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit
              history={history}
              formatUrl={formatUrl}
              start="Customer"
            >
              <NavigationItem
                label="Customer"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Get Customers"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Create Customer"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Delete Customer"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit
              history={history}
              formatUrl={formatUrl}
              start="Leasable"
            >
              <NavigationItem
                label="Leasable"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Get Leasables"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Get Leasable"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Create Leasable"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Update Leasable"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Delete Leasable"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit
              history={history}
              formatUrl={formatUrl}
              start="Owner"
            >
              <NavigationItem
                label="Owner"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Get Owners"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Create Owner"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Delete Owner"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit
              history={history}
              formatUrl={formatUrl}
              start="RealEstate"
            >
              <NavigationItem
                label="RealEstate"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Get RealEstates"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Get RealEstate"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Create RealEstate"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Update RealEstate"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Delete RealEstate"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit
              history={history}
              formatUrl={formatUrl}
              start="Region"
            >
              <NavigationItem
                label="Region"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Get Regions"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Create Region"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Delete Region"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>
          </div>
        </ul>
      </div>
    </React.Fragment>
  );
};
