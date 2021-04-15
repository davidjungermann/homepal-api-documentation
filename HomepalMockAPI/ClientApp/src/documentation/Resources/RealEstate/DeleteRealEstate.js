import React from "react";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";

export const DeleteRealEstate = ({ history }) => {
  return (
    <Section id="delete-realestate" history={history}>
      <Description>
        <TextUnit header="Delete RealEstate"></TextUnit>
      </Description>
      <Usage>{/* Usage */}</Usage>
    </Section>
  );
};