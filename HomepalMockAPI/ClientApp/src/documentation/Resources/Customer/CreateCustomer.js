import React from "react";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";

export const CreateCustomer = () => {
  return (
    <Section id="create-customer">
      <Description>
        <TextUnit header="Create Customer"></TextUnit>
      </Description>
      <Usage>{/* Usage */}</Usage>
    </Section>
  );
};
