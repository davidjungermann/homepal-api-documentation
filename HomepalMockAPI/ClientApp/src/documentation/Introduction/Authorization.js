import React from "react";
import { ArchitecturalOverview } from "../../components/content/architectural-overview/ArchitecturalOverview";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { Auth } from "../../components/auth/Auth";
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";

export const Authorization = ({
  history,
  token,
  setToken,
  valid,
  setValid,
}) => {
  return (
    <SectionWrapper>
      <Section id="authorization" history={history}>
        <Description>
          <TextUnit header="Authorization">
          <p>
          All routes described in the reference documentation are protected and can only be reached by a trusted client and with an access token. 
          </p>
          <p>
          The Homebase API uses token-based authentication that is performed via OAuth. API tokens must be included in the header of all requests made to the API. All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.
          </p>
          <p>
          You can generate tokens and find your existing ones in your <a>dashboard</a>, or read more about it below in <a>Live mode access tokens</a>.
          </p>
          <p>
          You can make requests within the documentation, in the sandbox, or on your own, by using test tokens to test our API before you go live. Read more about it below in <a>Test mode access tokens</a>.
          </p>
          </TextUnit>
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
    </SectionWrapper>
  );
};
