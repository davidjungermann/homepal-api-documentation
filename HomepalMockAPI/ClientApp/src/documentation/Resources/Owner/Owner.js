import React from "react";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";
import { SectionWrapper } from "../../../components/content/section-wrapper/SectionWrapper";

import { CreateOwner } from "./CreateOwner";
import { DeleteOwner } from "./DeleteOwner";
import { GetOwner } from "./GetOwner";
import { GetOwners } from "./GetOwners";

export const Owner = () => {
  return (
    <SectionWrapper>
      <Section id="owner">
        <Description>
          <TextUnit header="Owner"></TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>

      <CreateOwner/>
      <DeleteOwner/>
      <GetOwner/>
      <GetOwners/>
      
    </SectionWrapper>
  );
};
