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
                style: { endShape: {"circle":{"radius":0,"fillColor":"#b5e48c","strokeColor":"#e0e8f0","strokeWidth":0}} },
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
                  link="#agent">
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
              relations={[{
                targetId: 'agent',
                targetAnchor: 'bottom',
                sourceAnchor: 'top',
              }]}>
              <div>
                <ArchitecturalObject 
                  history={history}
                  link="#leasable"
                  cardinalities={[
                    ["bottom-right", "1"],
                ]}>
                  Leasable
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
