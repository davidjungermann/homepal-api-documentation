import React from "react";
import { ContainerBlock } from "../../../components/container-block/ContainerBlock";
import { BodyDescription } from "../../../components/content/body-description/BodyDescription";
import { EndpointExample } from "../../../components/content/endpoint-example/EndpointExample";
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

export const GetRegions = ({ history, token }) => {
  return (
    <Section id="get-regions" history={history}>
      <Description>
        <TextUnit header="Get Regions" isSubsection>
          <p>
            From this endpoint, you can retrieve information on several
            <span className="code-badge">Regions</span>.
          </p>
        </TextUnit>
        <h3 className="schema-title title-7">Body Schema</h3>
        <Table
          inactiveTable
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
                <TableItem description="There is no request body for this endpoint."></TableItem>
              ),
            },
          ]}
        ></Table>
        <h3 className="schema-title title-7">Path Schema</h3>
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
      </Description>
      <Usage>
        <EndpointExample header="ENDPOINT" copy baseUrl="api/regions">
          <Endpoint request="GET" baseUrl="api/regions"></Endpoint>
        </EndpointExample>
        <Example header="USAGE EXAMPLE" token={token} copy>
          curl --request GET http://localhost:6001/api/regions
        </Example>

        <ContainerBlock header="REQUEST BODY EXAMPLE" inactiveContainerBlock>
          <p>{"// "}There is no request body for this endpoint.</p>
        </ContainerBlock>

        <BodyDescription
          header={"RESPONSE BODY EXAMPLE"}
          copy
          body={[
            {
              name: "Skåne",
            },
            {
              name: "Norrland",
            },
            {
              name: "Södermanland",
            },
          ]}
        ></BodyDescription>
      </Usage>
    </Section>
  );
};
