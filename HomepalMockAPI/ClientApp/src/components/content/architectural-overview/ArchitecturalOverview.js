import React, { useRef } from "react";
import "./ArchitecturalOverview.scss";

import { ArchitecturalObject } from "./ArchitecturalObject";
import { ArcherContainer, ArcherElement } from "react-archer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCity,
  faCube,
  faMapMarkedAlt,
  faUser,
  faUserCircle,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

export const ArchitecturalOverview = ({ history }) => {
  //const gray_1 = "#f6f9fc";
  //const gray_2 = "#e0e8f0";
  const gray_3 = "#cdd6e0";
  //const gray_4 = "#a5b5c4";
  //const gray_5 = "#97a7ba";
  //const gray_6 = "#4c5f72";

  //const midnight = "#0c273b";
  //const white = "#ffffff";

  //const lime = "#b5e48c";
  //const lime_light = "#d9ed92";
  const lime_dark = "#99d98c";

  const primaryStyle = {
    noCurves: "true",
    strokeWidth: "2",
    strokeColor: lime_dark,
    strokeDasharray: "4,4",
    endShape: {
      circle: {
        radius: -1,
        fillColor: "#99d98c",
        strokeColor: "#99d98c",
        strokeWidth: -1,
      },
    },
  };
  const secondaryStyle = {
    noCurves: "true",
    strokeWidth: "1",
    strokeColor: gray_3,
    endShape: { arrow: { arrowLength: 10, arrowThickness: 6 } },
  };

  const archerContainerRef = useRef(null);

  return (
    <div className="architectural-overview-container">
      <ArcherContainer ref={archerContainerRef}>
        <div className="arch-container">
          <div className="arch-column">
            <div className="arch-row">
              <ArcherElement id="region">
                <div id={"test-id"}>
                  <ArchitecturalObject
                    history={history}
                    title="Region"
                    link="region"
                    cardinalities={[["bottom-right", "1"]]}
                  >
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </ArchitecturalObject>
                </div>
              </ArcherElement>
            </div>
            <div className="arch-row">
              <ArcherElement
                id="real-estate"
                relations={[
                  {
                    targetId: "region",
                    targetAnchor: "bottom",
                    sourceAnchor: "top",
                    style: primaryStyle,
                  },
                  {
                    targetId: "owner",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: primaryStyle,
                  },
                ]}
              >
                <div>
                  <ArchitecturalObject
                    history={history}
                    title="Real Estate"
                    link="realestate"
                    cardinalities={[
                      ["top-right", "*"],
                      ["right-top", "*"],
                      ["bottom-right", "1"],
                    ]}
                  >
                    <FontAwesomeIcon icon={faCity} />
                  </ArchitecturalObject>
                </div>
              </ArcherElement>
            </div>
            <div className="arch-row">
              <ArcherElement
                id="building"
                relations={[
                  {
                    targetId: "real-estate",
                    targetAnchor: "bottom",
                    sourceAnchor: "top",
                    style: primaryStyle,
                  },
                ]}
              >
                <div>
                  <ArchitecturalObject
                    history={history}
                    title="Building"
                    link="building"
                    cardinalities={[
                      ["top-right", "*"],
                      ["right-top", "1"],
                    ]}
                  >
                    <FontAwesomeIcon icon={faBuilding} />
                  </ArchitecturalObject>
                </div>
              </ArcherElement>
            </div>
          </div>
          <div className="arch-column">
            <div className="arch-row"></div>
            <div className="arch-row">
              <ArcherElement
                id="owner"
                relations={[
                  {
                    targetId: "agent",
                    targetAnchor: "bottom",
                    sourceAnchor: "top",
                    style: secondaryStyle,
                  },
                ]}
              >
                <div>
                  <ArchitecturalObject
                    history={history}
                    title="Owner"
                    link="owner"
                    cardinalities={[
                      ["left-top", "1"],
                      ["bottom-left", "1"],
                    ]}
                  >
                    <FontAwesomeIcon icon={faUserTie} />
                  </ArchitecturalObject>
                </div>
              </ArcherElement>
            </div>
            <div className="arch-row"></div>
          </div>
          <div className="arch-column">
            <div className="arch-row">
              <ArcherElement id="agent">
                <div>
                  <ArchitecturalObject
                    history={history}
                    title="Agent"
                    link="agent"
                    additionalClass="abstract"
                  >
                    <FontAwesomeIcon icon={faUserCircle} />
                  </ArchitecturalObject>
                </div>
              </ArcherElement>
            </div>
            <div className="arch-row"></div>
            <div className="arch-row">
              <ArcherElement
                id="leasable"
                relations={[
                  {
                    targetId: "building",
                    targetAnchor: "right",
                    sourceAnchor: "left",
                    style: primaryStyle,
                  },
                  {
                    targetId: "owner",
                    targetAnchor: "bottom",
                    sourceAnchor: "top",
                    style: primaryStyle,
                  },
                  {
                    targetId: "customer",
                    targetAnchor: "bottom",
                    sourceAnchor: "top",
                    style: primaryStyle,
                  },
                ]}
              >
                <div>
                  <ArchitecturalObject
                    history={history}
                    title="Leasable"
                    link="leasable"
                    cardinalities={[
                      ["top-right", "*"],
                      ["top-left", "*"],
                      ["left-top", "*"],
                    ]}
                  >
                    <FontAwesomeIcon icon={faCube} />
                  </ArchitecturalObject>
                </div>
              </ArcherElement>
            </div>
          </div>
          <div className="arch-column">
            <div className="arch-row"></div>
            <div className="arch-row">
              <ArcherElement
                id="customer"
                strokeColor="blue"
                relations={[
                  {
                    targetId: "agent",
                    targetAnchor: "bottom",
                    sourceAnchor: "top",
                    style: secondaryStyle,
                  },
                ]}
              >
                <div>
                  <ArchitecturalObject
                    history={history}
                    title="Customer"
                    
                    cardinalities={[["bottom-right", "1"]]}
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </ArchitecturalObject>
                </div>
              </ArcherElement>
            </div>
            <div className="arch-row"></div>
          </div>
        </div>
      </ArcherContainer>
    </div>
  );
};
