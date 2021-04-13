import React from "react";
import "./ArchitecturalOverview.scss";

import { ArchitecturalObject } from './ArchitecturalObject';
import { ArcherContainer, ArcherElement } from 'react-archer';

export const ArchitecturalOverview = ({ history }) => {

  const link = "get-buildings";

  return (
    <div className="architectural-overview-container">
      <ArcherContainer strokeColor='#e0e8f0' strokeWidth={1}>
      <div className="arch-container">
        <div className="arch-column">
          <div className="arch-row">
            <ArcherElement id="region">
              <div className="architectural-overview-badge"
                onClick={() => history.push("#region")}>Region</div>
            </ArcherElement>
          </div>
          <div className="arch-row">
            <ArcherElement 
              id="real-estate"
              relations={[{
                targetId: 'region',
                targetAnchor: 'bottom',
                sourceAnchor: 'top',
                style: { endShape: {"circle":{"radius":0,"fillColor":"#b5e48c","strokeColor":"#e0e8f0","strokeWidth":0}} },
              },{
                targetId: 'owner',
                targetAnchor: 'left',
                sourceAnchor: 'right',
                style: { endShape: {"circle":{"radius":0,"fillColor":"#b5e48c","strokeColor":"#e0e8f0","strokeWidth":0}} },
              }]}>
              <div>
                <ArchitecturalObject 
                  history={history}
                  link="#realestate"
                  cardinalities={[
                    ["top-left", "1"],
                    ["top-right", "*"],
                    ["right-top", "1"],
                    ["right-bottom", "*"],
                    ["bottom-right", "1"],
                    ["bottom-left", "*"],
                    ["left-bottom", "1"],
                    ["left-top", "*"],
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
                style: { endShape: {"circle":{"radius":0,"fillColor":"#b5e48c","strokeColor":"#e0e8f0","strokeWidth":0}} },
              }]}
            >
              <div className="architectural-overview-badge"
                onClick={() => history.push("#building")}>Building</div>
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
              }]}>
              <div className="architectural-overview-badge"
                onClick={() => history.push("#owner")}>Owner</div>
            </ArcherElement>
          </div>
          <div className="arch-row">
          
          </div>
        </div>
        <div className="arch-column">
          <div className="arch-row">
            <ArcherElement id="agent">
              <div className="architectural-overview-badge"
                onClick={() => history.push("#agent")}>Agent</div>
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
                style: { endShape: {"circle":{"radius":0,"fillColor":"#b5e48c","strokeColor":"#e0e8f0","strokeWidth":0}} },
              },{
                targetId: 'owner',
                targetAnchor: 'bottom',
                sourceAnchor: 'top',
                style: { endShape: {"circle":{"radius":0,"fillColor":"#b5e48c","strokeColor":"#e0e8f0","strokeWidth":0}} },
              },{
                targetId: 'customer',
                targetAnchor: 'bottom',
                sourceAnchor: 'top',
                style: { endShape: {"circle":{"radius":0,"fillColor":"#b5e48c","strokeColor":"#e0e8f0","strokeWidth":0}} },
              }]}
            >
              <div className="architectural-overview-badge"
                onClick={() => history.push("#leasable")}>Leasable</div>
            </ArcherElement>
          </div>
        </div>
        <div className="arch-column">
          <div className="arch-row">
              
          </div>
          <div className="arch-row">
            <ArcherElement 
              id="customer"
              relations={[{
                targetId: 'agent',
                targetAnchor: 'bottom',
                sourceAnchor: 'top',
              }]}>
              <div className="architectural-overview-badge"
                onClick={() => history.push("#customer")}>Customer</div>
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
