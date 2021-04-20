import React from "react";
import { ArchitecturalOverview } from "../../components/content/architectural-overview/ArchitecturalOverview";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";
import { NavHashLink as Link } from "react-router-hash-link";

export const ConceptualInformation = ({ history }) => {
  return (
    <SectionWrapper>
      <Section id="conceptual-information" history={history}>
        <Description>
          <TextUnit header="Conceptual information">
            <p>
              The API and its object structure is based on (but not limited to){" "}
              <a href="https://www.realestatecore.io/" target="_blank" rel="noopener noreferrer">
                Real Estate Core
              </a>
              , which is an open ontology for real estate standards. 
              The ontology describes the data model of a building and its components. 
              For example that the highest level in the hierarchy is <span className="code-badge">RealEstate</span> 
              which consists of 1 or more <span className="code-badge">Building</span> and is part of a <span className="code-badge">Region</span>.
            </p>
            <p>
              To get a better conceptual understanding of the API:s resources and their relations  
              we recommend the {" "}
              <Link to="#conceptual-overview">
                Conceptual overview
              </Link>
              .
            </p>
          </TextUnit>
        </Description>
        <Usage></Usage>
      </Section>

      <Section id="conceptual-overview" history={history}>
        <Description>
          <TextUnit header="Conceptual overview" isSubsection>
            <p>
              The hierarchy and cardinality of the API resources are described below.
              Click on a resource to read more about it.
            </p>
          </TextUnit>
          <ArchitecturalOverview history={history} />
        </Description>
        <Usage></Usage>
      </Section>

      <Section id="super-classes" history={history}>
        <Description>
          <TextUnit header="Super classes" isSubsection>
            <p>
              Homebase uses inheritance to reflect the behaviour of some entities.
            </p>
            <p>
              For instance a Residential Premise is a sub class of a Leasable. This means that an entity with a relation to a Leasable can be any entity which have Leasable as a super class.
            </p>
            <p>
              Below we go into more details about the different super classes.
            </p>
          </TextUnit>
        </Description>
        <Usage></Usage>
      </Section>
    </SectionWrapper>
  );
};
