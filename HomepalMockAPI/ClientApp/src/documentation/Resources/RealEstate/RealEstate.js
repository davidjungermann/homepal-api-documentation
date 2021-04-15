import React from "react";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";
import { SectionWrapper } from "../../../components/content/section-wrapper/SectionWrapper";

import { CreateRealEstate } from "./CreateRealEstate";
import { DeleteRealEstate } from "./DeleteRealEstate";
import { GetRealEstate } from "./GetRealEstate";
import { GetRealEstates } from "./GetRealEstates";
import { UpdateRealEstate } from "./UpdateRealEstate";

export const RealEstate = () => {
  return (
    <SectionWrapper>
      <Section id="realestate">
        <Description>
          <TextUnit header="RealEstate"></TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>

      <CreateRealEstate/>
      <DeleteRealEstate/>
      <GetRealEstate/>
      <GetRealEstates/>
      <UpdateRealEstate/>
      
    </SectionWrapper>
  );
};
