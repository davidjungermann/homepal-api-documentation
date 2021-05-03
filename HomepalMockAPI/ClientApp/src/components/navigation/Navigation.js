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
            <NavigationUnit>
              <NavigationItem
                label="About the API"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit>
              <NavigationItem
                label="Conceptual Information"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Conceptual Overview"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Database Properties"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Enumerated Values"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit>
              <NavigationItem
                label="Authorization"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Generate Access Key"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit>
              <NavigationItem
                label="Validations"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit>
              <NavigationItem
                label="Errors"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Error Codes"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit>
              <NavigationItem
                label="Query Parameters"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Pagination"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Sorting"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit>
              <NavigationItem
                label="Versioning"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Upcoming Deprecations"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
            </NavigationUnit>
          </div>
          <div key={nextId()} className="navigation-list-header">
            <HeaderItem>Resources</HeaderItem>
          </div>
          <div key={nextId()} className="navigation-list-content">
            <NavigationUnit>
              <NavigationItem
                label="Agent"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Get Agents"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Get Agent"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Create Agent"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Update Agent"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Delete Agent"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit>
              <NavigationItem
                label="Building"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Get Buildings"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Get Building"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Create Building"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Update Building"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Delete Building"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit>
              <NavigationItem
                label="Customer"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Get Customers"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Create Customer"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Delete Customer"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit>
              <NavigationItem
                label="Leasable"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Get Leasables"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Get Leasable"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Create Leasable"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Update Leasable"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Delete Leasable"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit>
              <NavigationItem
                label="Owner"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Get Owners"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Create Owner"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Delete Owner"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit>
              <NavigationItem
                label="RealEstate"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Get RealEstates"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Get RealEstate"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Create RealEstate"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Update RealEstate"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Delete RealEstate"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
            </NavigationUnit>
            <NavigationUnit>
              <NavigationItem
                label="Regions"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Get Regions"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Create Region"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
              <NavigationItem
                label="Delete Region"
                formatUrl={formatUrl}
                history={history}
              ></NavigationItem>
            </NavigationUnit>
          </div>
        </ul>
      </div>
    </React.Fragment>
  );
};
