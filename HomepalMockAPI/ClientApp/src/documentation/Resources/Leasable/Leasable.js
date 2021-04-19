import React from "react";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";
import { SectionWrapper } from "../../../components/content/section-wrapper/SectionWrapper";

export const Leasable = ({ history }) => {
  return (
    <SectionWrapper>
      <Section id="leasable" history={history}>
        <Description>
          <TextUnit header="Leasable"></TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    </SectionWrapper>
  );
};
