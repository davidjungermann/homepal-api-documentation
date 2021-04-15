import React from "react";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";
import { SectionWrapper } from "../../../components/content/section-wrapper/SectionWrapper";

import { CreateCustomer } from "./CreateCustomer";
import { DeleteCustomer } from "./DeleteCustomer";
import { GetCustomer } from "./GetCustomer";
import { GetCustomers } from "./GetCustomers";

export const Customer = () => {
  return (
    <SectionWrapper>
      <Section id="customer">
        <Description>
          <TextUnit header="Customer"></TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>

      <CreateCustomer/>
      <DeleteCustomer/>
      <GetCustomer/>
      <GetCustomers/>

    </SectionWrapper>
  );
};
