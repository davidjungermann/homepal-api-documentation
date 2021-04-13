import React from "react";
import "./ArchitecturalOverview.scss";

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
              <div className="architectural-overview-badge">Region</div>
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
              <div className="architectural-overview-badge">Real Estate</div>
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
              <div className="architectural-overview-badge">Building</div>
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
              <div className="architectural-overview-badge">Owner</div>
            </ArcherElement>
          </div>
          <div className="arch-row">
          
          </div>
        </div>
        <div className="arch-column">
          <div className="arch-row">
            <ArcherElement id="agent">
              <div className="architectural-overview-badge">Agent</div>
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
              <div className="architectural-overview-badge">Leasable</div>
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
              <div className="architectural-overview-badge">Customer</div>
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
