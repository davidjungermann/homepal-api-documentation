import React from "react";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";

export const Validations = ({ history }) => {
  return (
    <SectionWrapper>
      <Section id="validations" history={history}>
        <Description>
          <TextUnit header="Validations">
            <p>
              Currently there are no validations of data inputs to the Homebase API.
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    </SectionWrapper>
  );
};
