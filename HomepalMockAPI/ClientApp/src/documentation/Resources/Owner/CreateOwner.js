import React from "react";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";

export const CreateOwner = ({ history }) => {
  return (
    <Section id="create-owner" history={history}>
      <Description>
        <TextUnit header="Create Owner"></TextUnit>
      </Description>
      <Usage>{/* Usage */}</Usage>
    </Section>
  );
};