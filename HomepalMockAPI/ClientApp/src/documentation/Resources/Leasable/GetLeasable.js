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

export const GetLeasable = ({ history, token }) => {
  return (
    <Section id="get-leasable" history={history}>
      <Description>
        <TextUnit header="Get Leasable" isSubsection>
          <p>
            From this endpoint, you can retrieve information about a
            <span className="code-badge">Leasable</span>.
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
                <TableItem description="The ID of the requested Leasable.">
                  id
                </TableItem>
              ),
              col2: "Required",
            },
          ]}
        ></Table>
      </Description>
      <Usage>
        <EndpointExample header="Endpoint" copy baseUrl="api/leasables/{id}">
          <Endpoint request="GET" baseUrl="api/leasables/{id}"></Endpoint>
        </EndpointExample>
        <Example header="USAGE EXAMPLE" token={token} copy>
          curl --request GET http://localhost:6001/api/leasables/1
        </Example>

        <ContainerBlock header="REQUEST BODY EXAMPLE" inactiveContainerBlock>
          <p>{"// "}There is no request body for this endpoint.</p>
        </ContainerBlock>

        <BodyDescription
          header={"RESPONSE BODY EXAMPLE"}
          copy
          body={{
            id: 1,
            class_descriptor: "ResidentialPremise",
            price: 3483,
            description: "Apartment in central Malmö",
            size: 73,
            customer_id: 5,
            owner_id: 1,
            building_id: 1,
          }}
        ></BodyDescription>
      </Usage>
    </Section>
  );
};
