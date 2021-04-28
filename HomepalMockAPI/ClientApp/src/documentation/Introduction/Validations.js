import React from "react";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";
import { NavHashLink as Link } from "react-router-hash-link";

export const Validations = ({ history }) => {
  return (
    <SectionWrapper>
      <Section id="validations" history={history}>
        <Description>
          <div className="padding-100">
            <TextUnit header="Validations">
              <p>
                For the purpose of this prototype, there are currently no
                validations of data inputs to the Homebase API, other than the
                basic typing constraints placed on attributes for objects, as
                well as the key constraints described in{" "}
                <Link to="#database-properties">Database Properties</Link>.
              </p>
              <p>
                Typing constraints for attributes are described under each
                resource.{" "}
              </p>
            </TextUnit>
          </div>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    </SectionWrapper>
  );
};
