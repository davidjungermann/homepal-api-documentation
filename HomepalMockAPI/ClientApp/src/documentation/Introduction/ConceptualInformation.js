import React from "react";
import { ArchitecturalOverview } from "../../components/content/architectural-overview/ArchitecturalOverview";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";

export const ConceptualInformation = ({ history }) => {
  return (
    <SectionWrapper>
      <Section id="conceptual-information" history={history}>
        <Description>
          <TextUnit header="Conceptual information">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis
              augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum ut,
              gravida vel tortor.
            </p>
            <p>
              Vivamus a mollis est. Maecenas varius tempus nisi, at mattis sapien
              rutrum ut. Cras sed sem egestas, vehicula augue a, ullamcorper
              nulla. Praesent lacinia risus quis urna tristique.
            </p>
          </TextUnit>
        </Description>
        <Usage></Usage>
      </Section>

      <Section id="conceptual-overview" history={history}>
        <Description>
          <TextUnit header="Conceptual Overview" isSubsection>
            <p>
              Nam ut fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum ut,
              gravida vel tortor.
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
