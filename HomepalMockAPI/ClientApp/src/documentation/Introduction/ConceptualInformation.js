import React from "react";
import { ArchitecturalOverview } from "../../components/content/architectural-overview/ArchitecturalOverview";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";

export const ConceptualInformation = () => {
  return (
    <SectionWrapper>
      <Section id="conceptual-information">
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
          <ArchitecturalOverview />
        </Description>
        <Usage></Usage>
      </Section>
    </SectionWrapper>
  );
};
