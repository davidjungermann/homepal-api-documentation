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

export const Agent = ({ history }) => {
  return (
    <SectionWrapper>
      <Section id="agent" history={history}>
        <Description>
          <TextUnit header="Agent">
            <p>
              An <span className="code-badge">Agent</span> describes a person or
              legal person in the Homebase API. Agent is a <b>superclass</b> of{" "}
              <Link to="#customer">
                <span className="code-badge">Customer</span>
              </Link>{" "}
              and{" "}
              <Link to="#owner">
                <span className="code-badge">Owner</span>
              </Link>
              .
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
                  <TableItem description="Unique ID of Agent.">id</TableItem>
                ),
                col2: "Integer",
                col3: "Required",
              },
              {
                col1: <TableItem description="Name of Agent.">name</TableItem>,
                col2: "String",
                col3: "Required",
              },
            ]}
          ></Table>
        </Description>
        <Usage>
          <EndpointList header="ENDPOINTS">
            <Endpoint
              request="GET"
              baseUrl="api/agents"
              link="get-agents"
            ></Endpoint>
            <Endpoint
              request="GET"
              baseUrl="api/agents"
              parameter="/{id}"
              link="get-agent"
            ></Endpoint>
            <Endpoint
              request="POST"
              baseUrl="api/agents"
              link="create-agent"
            ></Endpoint>
            <Endpoint
              request="PUT"
              baseUrl="api/agents"
              link="update-agent"
            ></Endpoint>
            <Endpoint
              request="DELETE"
              baseUrl="api/agents"
              parameter="/{id}"
              link="delete-agent"
            ></Endpoint>
          </EndpointList>
          <BodyDescription
            header={"AGENT OBJECT EXAMPLE"}
            copy
            body={{
              id: 1,
              name: "Mitt Malmö",
            }}
          ></BodyDescription>
        </Usage>
      </Section>
    </SectionWrapper>
  );
};
