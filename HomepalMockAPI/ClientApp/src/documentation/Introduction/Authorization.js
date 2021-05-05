import React from "react";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { Auth } from "../../components/auth/Auth";
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";
import { NavHashLink as Link } from "react-router-hash-link";
import { ContainerBlock } from "../../components/container-block/ContainerBlock";

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
              requests must be made over HTTP. API requests without
              authentication will also fail.
            </p>
            <p>
              You can receive an access key by contacting our{" "}
              <Link to="#">Support</Link>.
            </p>
            <p>
              You can generate test mode keys in{" "}
              <Link to="#test-mode-access-key">Test Mode Access Key</Link> in order to test
              the API from within the documentation using the examples, or using
              the same access key in your own environment.
            </p>
          </TextUnit>
        </Description>
        <Usage>
          <ContainerBlock header="ACCESS KEY USAGE">
            curl --request &lt;REQUEST&gt; &lt;URL&gt;{"\n"}
            -u <b>&lt;YOUR&#95;API&#95;KEY&gt;:</b>
          </ContainerBlock>
          <p className="small">
            The -u flag specifies the key, and the colon prevents cURL from
            asking for a password.
          </p>
        </Usage>
      </Section>
      <Section id="test-mode-access-key" history={history}>
        <Description>
          <div className="padding-100">
            <TextUnit header="Test Mode Access Key" isSubsection>
              <p>
                Generate a test mode access key and include it in your requests in order
                to be authorized against the test environment.
              </p>
              <p>
                Once generated, your key is inserted and included in all
                usage examples in the reference documentation in order for you to
                test any example right away.
              </p>
            </TextUnit>
          </div>
        </Description>
        <Usage>
          <div className="padding-100">
            <Auth
              token={token}
              setToken={setToken}
              valid={valid}
              setValid={setValid}
            ></Auth>
          </div>
        </Usage>
      </Section>
    </SectionWrapper>
  );
};
