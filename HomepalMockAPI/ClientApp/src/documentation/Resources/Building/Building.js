import React from "react";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";

export const Building = ({ history }) => {
  return (
    <Section id="building" history={history}>
      <Description>
        <TextUnit header="Building"></TextUnit>
      </Description>
      <Usage>{/* Usage */}</Usage>
    </Section>
  );
};