import React from "react";
import { ArchitecturalOverview } from "../../components/content/architectural-overview/ArchitecturalOverview";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { Auth } from "../../components/auth/Auth";

export const Authorization = ({
  history,
  token,
  setToken,
  valid,
  setValid,
}) => {
  return (
    <Section id="authorization" history={history}>
      <Description>
        <TextUnit header="Authorization"></TextUnit>
      </Description>
      <Usage>
        {" "}
        <Auth
          token={token}
          setToken={setToken}
          valid={valid}
          setValid={setValid}
        ></Auth>
      </Usage>
    </Section>
  );
};
