import React from "react";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";
import { SectionWrapper } from "../../../components/content/section-wrapper/SectionWrapper";

import { CreateRegion } from "./CreateRegion";
import { DeleteRegion } from "./DeleteRegion";
import { GetRegions } from "./GetRegions";

export const Region = () => {
  return (
    <SectionWrapper>
      <Section id="region">
        <Description>
          <TextUnit header="Region"></TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>

      <CreateRegion/>
      <DeleteRegion/>
      <GetRegions/>
      
    </SectionWrapper>
  );
};
