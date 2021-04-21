import React from "react";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";
import { SectionWrapper } from "../../../components/content/section-wrapper/SectionWrapper";
import { Table } from "../../../components/content/table/Table";
import { TableItem } from "../../../components/content/table/TableItem";
import { EndpointList } from "../../../components/content/endpoint-list/EndpointList";
import { Endpoint } from "../../../components/content/endpoint/Endpoint";
import { BodyDescription } from "../../../components/content/body-description/BodyDescription";
import { NavHashLink as Link } from "react-router-hash-link";
import "../../../index.scss";

export const Owner = ({ history }) => {
  return (
    <SectionWrapper>
      <Section id="owner" history={history}>
        <Description>
          <TextUnit header="Owner">
            <p>
              An <span className="code-badge">Owner</span> describes a person
              or legal person in the Homebase API, currently acting as a
              Owner in the context.
            </p>

            <p>
              Owner is a <b>subclass</b> of{" "}
              <Link to="#agent">
                <span className="code-badge">Agent</span>
              </Link>
              . The <span className="code-badge">id</span>{" "}
              attribute references the <span className="code-badge">id</span>{" "}
              attribute in <span className="code-badge">Agent</span>.
              Subsequently, this means that a{" "}
              <span className="code-badge">Owner</span> must also be defined
              as an <span className="code-badge">Agent</span>.
            </p>
          </TextUnit>
          <Table
            cols={[
              {
                Header: "ATTRIBUTE",
                accessor: "col1", // accessor is the "key" in the data
              },
              {
                Header: "TYPE",
                accessor: "col2",
              },
              {
                Header: "REQUIRED",
                accessor: "col3",
              },
            ]}
            values={[
              {
                col1: (
                  <TableItem description="Unique ID of Owner.">id</TableItem>
                ),
                col2: "Integer",
                col3: "Required",
              },
            ]}
          ></Table>
        </Description>
        <Usage>
          <EndpointList header="ENDPOINTS">
            <Endpoint
              request="GET"
              baseUrl="api/owners"
              link="get-owners"
            ></Endpoint>
            <Endpoint
              request="POST"
              baseUrl="api/owners"
              link="create-owner"
            ></Endpoint>
            <Endpoint
              request="DELETE"
              baseUrl="api/owners"
              parameter="/{id}"
              link="delete-owner"
            ></Endpoint>
          </EndpointList>
          <BodyDescription
            header={"OWNER OBJECT EXAMPLE"}
            copy
            body={{
              id: 1,
            }}
          ></BodyDescription>
        </Usage>
      </Section>
    </SectionWrapper>
  );
};
