import React from "react";
import { ContainerBlock } from "../../../components/container-block/ContainerBlock";
import { EndpointExample } from "../../../components/content/endpoint-example/EndpointExample";
import { EndpointList } from "../../../components/content/endpoint-list/EndpointList";
import { Endpoint } from "../../../components/content/endpoint/Endpoint";
import { Example } from "../../../components/content/example/Example";
import { Returns } from "../../../components/content/returns/Returns";
import { ReturnsItem } from "../../../components/content/returns/ReturnsItem";
import { Table } from "../../../components/content/table/Table";
import { TableItem } from "../../../components/content/table/TableItem";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";
import "../../../index.scss";

export const GetAgents = ({ history, token }) => {
  return (
    <Section id="get-agents" history={history}>
      <Description>
        <TextUnit header="Get Agents">
          <p>
            From this endpoint, you can retrieve several
            <span className="code-badge">Agents</span>.
          </p>
        </TextUnit>
        <h5 className="schema-title">Body Schema</h5>
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
                <TableItem description="There is no body for this request"></TableItem>
              ),
            },
          ]}
        ></Table>
        <Returns>
          <ReturnsItem icon="success">
            On success, the HTTP status code in the response header is{" "}
            <span className="code-badge">200 OK</span> and the requested
            resources are displayed in the response body.
          </ReturnsItem>

          <ReturnsItem icon="error">
            On error, the header status code is an{" "}
            <a href="#errors">error code</a>, and the response body contains an
            error object.
          </ReturnsItem>
        </Returns>
        <h5 className="schema-title">Path Schema</h5>
        <Table
          cols={[
            {
              Header: "PARAMETER",
              accessor: "col1", // accessor is the "key" in the data
            },
            {
              Header: "REQUIRED",
              accessor: "col2",
            },
          ]}
          values={[
            {
              col1: (
                <TableItem description="Sets the number of objects that are returned.">
                  limit
                </TableItem>
              ),
              col2: "Optional",
            },
            {
              col1: (
                <TableItem description="Sets the number of objects skipped before collecting the set of objects to return.">
                  offset
                </TableItem>
              ),
              col2: "Optional",
            },
            {
              col1: (
                <TableItem description="Decides how the returned set of objects are sorted.">
                  sort
                </TableItem>
              ),
              col2: "Optional",
            },
          ]}
        ></Table>
      </Description>
      <Usage>
        <EndpointExample header="Endpoint" copy baseUrl="api/agents">
          <Endpoint request="GET" baseUrl="api/agents"></Endpoint>
        </EndpointExample>
        <Example header="USAGE2" token={token} copy>
          curl https://localhost:6001/api/agents
        </Example>
      </Usage>
    </Section>
  );
};
