import React from "react";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";
import { SectionWrapper } from "../../../components/content/section-wrapper/SectionWrapper";
import { CreateAgent } from "./CreateAgent";
import { DeleteAgent } from "./DeleteAgent";
import { GetAgent } from "./GetAgent";
import { GetAgents } from "./GetAgents";
import { UpdateAgent } from "./UpdateAgent";

export const Agent = () => {
  return (
    <SectionWrapper>
      <Section id="agent">
        <Description>
          <TextUnit header="Agent"></TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>

      <CreateAgent/>
      <DeleteAgent/>
      <GetAgent/>
      <GetAgents/>
      <UpdateAgent/>

    </SectionWrapper>
  );
};
