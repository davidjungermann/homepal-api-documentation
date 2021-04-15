import React from "react";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";

export const UpdateLeasable = ({ history }) => {
  return (
    <Section id="update-leasable" history={history}>
      <Description>
        <TextUnit header="Update Leasable"></TextUnit>
      </Description>
      <Usage>{/* Usage */}</Usage>
    </Section>
  );
};