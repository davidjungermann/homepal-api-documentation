import React from "react";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";

export const DeleteRegion = () => {
  return (
    <Section id="delete-region">
      <Description>
        <TextUnit header="Delete Region"></TextUnit>
      </Description>
      <Usage>{/* Usage */}</Usage>
    </Section>
  );
};
