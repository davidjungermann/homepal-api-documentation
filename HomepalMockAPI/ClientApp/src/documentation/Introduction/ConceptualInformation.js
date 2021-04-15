import React from "react";
import { ArchitecturalOverview } from "../../components/content/architectural-overview/ArchitecturalOverview";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { SubTextUnit } from "../../components/content/text-unit/SubTextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { Table } from "../../components/content/table/Table";
import { TableItem } from "../../components/content/table/TableItem";
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";

export const ConceptualInformation = () => {
  return (
    <SectionWrapper>
      <Section id="conceptual-information">
        <Description>
          <TextUnit header="Conceptual information">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum
              ut, gravida vel tortor.
            </p>
            <p>
              Vivamus a mollis est. Maecenas varius tempus nisi, at mattis
              sapien rutrum ut. Cras sed sem egestas, vehicula augue a,
              ullamcorper nulla. Praesent lacinia risus quis urna tristique.
            </p>
          </TextUnit>
        </Description>
        <Usage></Usage>
      </Section>

      <Section id="conceptual-overview">
        <Description>
          <TextUnit header="Conceptual overview" isSubsection>
            <p>
              Vivamus a mollis est. Maecenas varius tempus nisi, at mattis
              sapien rutrum ut. Cras sed sem egestas, vehicula augue a,
              ullamcorper nulla. Praesent lacinia risus quis urna tristique.
            </p>
          </TextUnit>
          <ArchitecturalOverview />
        </Description>
        <Usage></Usage>
      </Section>

      <Section id="super-classes">
        <Description>
          <TextUnit header="Super classes" isSubsection>
            <p>
              Homebase uses inheritance to reflect the behaviour of some entities.
            </p>
            <p>
              For instance a Residential Premise is a sub class of a Leasable. This means that an entity with a relation to a Leasable can be any entity which have Leasable as a super class.
            </p>
            <p>
              Below we go into more details about the different super classes.
            </p>
          </TextUnit>
          <SubTextUnit header="Agent">
            <p>
              An Agent is a physical or legal person.
              A Customer or an Owener inherits of Agent and specifies that the Agent is a Customer or Owner.
            </p>
          </SubTextUnit>
          <Table
            //values och cols här kan flyttas ut i en separat fil för att det ska bli lättare att läsa!
            cols={[
              {
                Header: "SUB CLASSES",
                accessor: "col1", // accessor is the "key" in the data
              },
            ]}
            values={[
              {
                col1: (
                  <TableItem description="Description.">
                    Owner
                  </TableItem>
                ),

              },
              {
                col1: (
                  <TableItem description="Description.">
                    Customer
                  </TableItem>
                ),
              },
            ]}
          ></Table>
        </Description>
        <Usage></Usage>
      </Section>
    </SectionWrapper>
  );
};
