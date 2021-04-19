import React from "react";
import { Example } from "../../../components/content/example/Example";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";

export const CreateAgent = ({ history, token }) => {
  return (
    <Section id="create-agent" history={history}>
      <Description>
        <TextUnit header="Create Agent"></TextUnit>
      </Description>
      <Usage>
        <Example header="USAGE EXAMPLE" token={token} copy>
          curl --header "Content-Type: application/json" --request POST --data
          '&#123;"name":"NyAgent"&#125;' https://localhost:6001/api/agents
        </Example>
      </Usage>
    </Section>
  );
};
