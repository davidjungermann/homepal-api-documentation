import React from "react";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";
import { NavHashLink as Link } from "react-router-hash-link";

export const EnumeratedValues = ({ history }) => {
  return (
    <SectionWrapper>
      <Section id="enumerated-values" history={history}>
        <Description>
          <TextUnit header="Enumerated Values">
            <p>
              Some resources have <b>enumerated values</b>.
            </p>
            
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    </SectionWrapper>
  );
};
