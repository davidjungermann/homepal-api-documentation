import React, { useState } from "react";
import nextId from "react-id-generator";
import { HeaderItem } from "./header/HeaderItem";
import { NavigationItem } from "./item/NavigationItem";
import { NavigationUnit } from "./navigation-unit/NavigationUnit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Navigation.scss";

export const Navigation = ({ formatUrl, history }) => {
  const [showSearchInformation, setShowSearchInformation] = useState(false);

  const getOS = () => {
    var platform = window.navigator.platform,
      macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K", "darwin"],
      windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
      os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
      os = "Mac";
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = "Windows";
    } else if (!os && /Linux/.test(platform)) {
      os = "Linux";
    }

    return os;
  };

  const searchDescription = () => {
    let os = getOS();

    if (os === "Linux" || os === "Windows") {
      return <span>The Homebase API docs is a single page. Use <b>Ctrl + F</b> to search in your browser!</span>;
    } else if (os === "Mac") {
      return <span>The Homebase API docs is a single page. Use <b>Cmd + F</b> to search in your browser!</span>;
    } else {
      return <span>The Homebase API docs is a single page. Use the search bar in your browser!</span>;
    }
  };

  const renderSearchInformation = () => {
    const description = searchDescription();

    return (
      <div className="search-container">
        {showSearchInformation && 
          <div className="search-popup">
            <p className="description small">
              {description}
            </p>
            <div className="close-popup">
              <button 
              className="close-popup-button"
              onClick={() => setShowSearchInformation(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>
        }
      </div>
    );
  };

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

          <button className="search-button" onClick={() => setShowSearchInformation(true)}>
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
            Search
          </button>
          {renderSearchInformation()}

          <div key={nextId()} className="navigation-list-header">
            <HeaderItem>Introduction</HeaderItem>
          </div>
          <div key={nextId()} className="navigation-list-content">
            <NavigationUnit history={history} formatUrl={formatUrl}>
              <NavigationItem
                label="About the API"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>

            <NavigationUnit history={history} formatUrl={formatUrl}>
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

            <NavigationUnit history={history} formatUrl={formatUrl}>
              <NavigationItem
                label="Authorization"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Test Mode Access Key"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>

            <NavigationUnit history={history} formatUrl={formatUrl}>
              <NavigationItem
                label="Validations"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>

            <NavigationUnit history={history} formatUrl={formatUrl}>
              <NavigationItem
                label="Errors"
                formatUrl={formatUrl}
              ></NavigationItem>
              <NavigationItem
                label="Error Codes"
                formatUrl={formatUrl}
              ></NavigationItem>
            </NavigationUnit>

            <NavigationUnit history={history} formatUrl={formatUrl}>
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

            <NavigationUnit history={history} formatUrl={formatUrl}>
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
            <NavigationUnit history={history} formatUrl={formatUrl}>
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

            <NavigationUnit history={history} formatUrl={formatUrl}>
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

            <NavigationUnit history={history} formatUrl={formatUrl}>
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

            <NavigationUnit history={history} formatUrl={formatUrl}>
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

            <NavigationUnit history={history} formatUrl={formatUrl}>
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

            <NavigationUnit history={history} formatUrl={formatUrl}>
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

            <NavigationUnit history={history} formatUrl={formatUrl}>
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
