import React from "react";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { Auth } from "../../components/auth/Auth";
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";
import { NavHashLink as Link } from "react-router-hash-link";

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
              All routes described in the reference documentation are protected
              and can only be reached by a trusted client and with an access
              key.
            </p>
            <p>
              API keys must be included in all requests made to the API. All API
              requests must be made over HTTPS. Calls made over plain HTTP will
              fail. API requests without authentication will also fail.
            </p>
            <p>
              You can generate keys in <Link to="#generate-access-key">Access key</Link>{" "}
              in order to test the API from within the documentation using the
              examples, or using the same access key in your own environment.
            </p>
          </TextUnit>
        </Description>
        <Usage></Usage>
      </Section>
      <Section id="generate-access-key" history={history}>
        <Description>
          <TextUnit header="Generate Access Key" isSubsection>
            <p>
              Generate an access key and include it in your requests in order to
              be authorized.
            </p>
            <p>
              Once generated, your access key is inserted and included in all
              the usage examples in the reference documentation, so you can test
              any example right away.
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
