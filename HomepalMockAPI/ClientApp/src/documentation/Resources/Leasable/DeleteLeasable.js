import React from "react";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";

export const DeleteLeasable = ({ history }) => {
  return (
    <Section id="delete-leasable" history={history}>
      <Description>
        <TextUnit header="Delete Leasable"></TextUnit>
      </Description>
      <Usage>{/* Usage */}</Usage>
    </Section>
  );
};
