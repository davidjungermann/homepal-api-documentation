import React from "react";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";
import { SectionWrapper } from "../../../components/content/section-wrapper/SectionWrapper";

import { CreateLeasable } from "./CreateLeasable";
import { DeleteLeasable } from "./DeleteLeasable";
import { GetLeasable } from "./GetLeasable";
import { GetLeasables } from "./GetLeasables";
import { UpdateLeasable } from "./UpdateLeasable";

export const Leasable = () => {
  return (
    <SectionWrapper>
      <Section id="leasable">
        <Description>
          <TextUnit header="Leasable"></TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>

      <CreateLeasable/>
      <DeleteLeasable/>
      <GetLeasable/>
      <GetLeasables/>
      <UpdateLeasable/>
      
    </SectionWrapper>
  );
};
