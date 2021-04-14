import React from "react";
import "./ArchitecturalOverview.scss";

import { ArchitecturalObject } from './ArchitecturalObject';
import { ArcherContainer, ArcherElement } from 'react-archer';

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

  const primaryStyle = { strokeWidth:"2", strokeColor:lime_dark, strokeDasharray:"4,4", endShape: {"circle":{"radius":-1,"fillColor":"#99d98c","strokeColor":"#99d98c","strokeWidth":-1}} };
  const secondaryStyle = { strokeWidth:"1", strokeColor:gray_3, endShape: {"arrow":{"arrowLength":10,"arrowThickness":6}} };

  return (
    <div className="architectural-overview-container">
      <ArcherContainer noCurves="true">
      <div className="arch-container">
        <div className="arch-column">
          <div className="arch-row">
            <ArcherElement id="region">
            <div>
                <ArchitecturalObject 
                  history={history}
                  link="#region"
                  cardinalities={[
                    ["bottom-right", "1"],
                ]}>
                  Region
                </ArchitecturalObject>
              </div>
            </ArcherElement>
          </div>
          <div className="arch-row">
            <ArcherElement 
              id="real-estate"
              relations={[{
                targetId: 'region',
                targetAnchor: 'bottom',
                sourceAnchor: 'top',
                style: primaryStyle,
              },{
                targetId: 'owner',
                targetAnchor: 'left',
                sourceAnchor: 'right',
                style: primaryStyle,
              }]}>
              <div>
                <ArchitecturalObject 
                  history={history}
                  link="#realestate"
                  cardinalities={[
                    ["top-right", "*"],
                    ["right-top", "*"],
                    ["bottom-right", "1"],
                ]}>
                  Real Estate
                </ArchitecturalObject>
              </div>
            </ArcherElement>
          </div>
          <div className="arch-row">
            <ArcherElement
              id="building"
              relations={[{
                targetId: 'real-estate',
                targetAnchor: 'bottom',
                sourceAnchor: 'top',
                style: primaryStyle,
              }]}
            >
              <div>
                <ArchitecturalObject 
                    history={history}
                    link="#building"
                    cardinalities={[
                      ["top-right", "*"],
                      ["right-top", "1"],
                  ]}>
                    Building
                  </ArchitecturalObject>
                </div>
            </ArcherElement>
          </div>
        </div>
        <div className="arch-column">
          <div className="arch-row">
          
          </div>
          <div className="arch-row">
            <ArcherElement 
              id="owner"
              relations={[{
                targetId: 'agent',
                targetAnchor: 'bottom',
                sourceAnchor: 'top',
                style: secondaryStyle,
              }]}>
              <div>
                <ArchitecturalObject 
                  history={history}
                  link="#owner"
                  cardinalities={[
                    ["left-top", "1"],
                    ["bottom-left", "1"],
                ]}>
                  Owner
                </ArchitecturalObject>
              </div>
            </ArcherElement>
          </div>
          <div className="arch-row">
          
          </div>
        </div>
        <div className="arch-column">
          <div className="arch-row">
            <ArcherElement id="agent">
              <div>
                <ArchitecturalObject 
                  history={history}
                  link="#agent"
                  additionalClass="abstract">
                  Agent
                </ArchitecturalObject>
              </div>
            </ArcherElement>
          </div>
          <div className="arch-row">
          
          </div>
          <div className="arch-row">
            <ArcherElement
              id="leasable"
              relations={[{
                targetId: 'building',
                targetAnchor: 'right',
                sourceAnchor: 'left',
                style: primaryStyle,
              },{
                targetId: 'owner',
                targetAnchor: 'bottom',
                sourceAnchor: 'top',
                style: primaryStyle,
              },{
                targetId: 'customer',
                targetAnchor: 'bottom',
                sourceAnchor: 'top',
                style: primaryStyle,
              }]}
            >
              <div>
                <ArchitecturalObject 
                  history={history}
                  link="#leasable"
                  cardinalities={[
                    ["top-right", "*"],
                    ["top-left", "*"],
                    ["left-top", "*"],
                ]}>
                  Leasable
                </ArchitecturalObject>
              </div>
            </ArcherElement>
          </div>
        </div>
        <div className="arch-column">
          <div className="arch-row">
              
          </div>
          <div className="arch-row">
            <ArcherElement 
              id="customer"
              strokeColor="blue"
              relations={[{
                targetId: 'agent',
                targetAnchor: 'bottom',
                sourceAnchor: 'top',
                style: secondaryStyle,
              }]}>
              <div>
                <ArchitecturalObject 
                  history={history}
                  link="#customer"
                  cardinalities={[
                    ["bottom-right", "1"],
                ]}>
                  Customer
                </ArchitecturalObject>
              </div>
            </ArcherElement>
          </div>
          <div className="arch-row">
          
          </div>
        </div>
      </div>
      </ArcherContainer>
    </div>
  );
};
