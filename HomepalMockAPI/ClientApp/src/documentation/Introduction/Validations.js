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
              Homepal validates input data to the Homebase API in every possible way and ensures 
              safe and formatted data. There is no need worrying about this.
            </p>
            <p>
              However, we do encourage running your own validations.
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    </SectionWrapper>
  );
};
