import React from "react";
import { ContainerBlock } from "../../../components/container-block/ContainerBlock";
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

export const DeleteOwner = ({ history, token }) => {
  return (
    <Section id="delete-owner" history={history}>
      <Description>
        <TextUnit header="Delete Owner" isSubsection>
          <p>
            From this endpoint, you can delete an
            <span className="code-badge">Owner</span>.
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
                <TableItem description="The ID of the requested Owner.">
                  id
                </TableItem>
              ),
              col2: "Required",
            },
          ]}
        ></Table>
        <Returns>
          <ReturnsItem icon="success">
            On success, the HTTP status code in the response header is{" "}
            <span className="code-badge">200 OK</span>, and response body
            contains the number of affected rows.
          </ReturnsItem>

          <ReturnsItem icon="error">
            On error, the header status code is an{" "}
            <a href="#errors">error code</a>, and the response body contains an
            error object.
          </ReturnsItem>
        </Returns>
      </Description>
      <Usage>
        <EndpointExample header="Endpoint" copy baseUrl="api/owners/{id}">
          <Endpoint request="DELETE" baseUrl="api/owners/{id}"></Endpoint>
        </EndpointExample>
        <Example header="USAGE EXAMPLE" token={token} copy>
          curl --request DELETE http://localhost:6001/api/owners/1
        </Example>

        <ContainerBlock inactiveContainerBlock header="REQUEST BODY EXAMPLE">
          <p>{"// "}There is no request body for this endpoint.</p>
        </ContainerBlock>

        <ContainerBlock inactiveContainerBlock header="RESPONSE BODY EXAMPLE">
          <p>{"// "}There is no response body for this endpoint.</p>
        </ContainerBlock>
      </Usage>
    </Section>
  );
};
