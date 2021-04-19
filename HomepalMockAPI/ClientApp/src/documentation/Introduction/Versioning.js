import React from "react";
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { Table } from "../../components/content/table/Table";
import { TableItem } from "../../components/content/table/TableItem";
import { NavHashLink as Link } from "react-router-hash-link";

export const Versioning = ({ history }) => {
  return (
    <SectionWrapper>
      <Section id="versioning" history={history}>
        <Description>
          <TextUnit header="Versioning">
            <p>
              The current version is <span className="code-badge">v1</span>.
            </p>
            <p>
              Homepal will implement changes into current API versions, without a new version release, 
              as long as the changes being introduced will not interfere on a greater scale with your integration. 
            </p>
            <p>
              In come cases, endpoints and functionalities can be replaced by others and thus deprecetad. 
              This will always be announced <b>6 months in advance</b> via:
              <ul>
                <li>recurring email reminders.</li>
                <li>in {" "}
                  <Link to="#customer">
                    Upcoming deprecations
                  </Link>
                .
                </li>
                <li>information message in your Dashboard.</li>
              </ul>
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>

      <Section id="upcoming-deprecations" history={history}>
        <Description>
          <TextUnit header="Upcoming deprecations" isSubsection>
            <p>
              Planned upcoming deprecations of the Homebase API are listed below:
            </p>
          </TextUnit>
          <Table
            cols={[
              {
                Header: "DEPRECATION",
                accessor: "col1",
              },
              {
                Header: "VERSION",
                accessor: "col2",
              },
              {
                Header: "WHEN",
                accessor: "col3",
              },
            ]}
            values={[
              {
                col1: (
                  <TableItem description="There are no planned upcoming changes.">
                  </TableItem>
                ),
                col2: "",
                col3: "",
              },
            ]}
          ></Table>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    </SectionWrapper>
  );
};
