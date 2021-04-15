import React from "react";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";
import { SectionWrapper } from "../../../components/content/section-wrapper/SectionWrapper";

import { CreateBuilding } from "./CreateBuilding";
import { DeleteBuilding } from "./DeleteBuilding";
import { GetBuilding } from "./GetBuilding";
import { GetBuildings } from "./GetBuildings";
import { UpdateBuilding } from "./UpdateBuilding";

export const Building = () => {
  return (
    <SectionWrapper>
      <Section id="building">
        <Description>
          <TextUnit header="Building"></TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>

      <CreateBuilding/>
      <DeleteBuilding/>
      <GetBuilding/>
      <GetBuildings/>
      <UpdateBuilding/>
      
    </SectionWrapper>
  );
};
