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

export const UpdateRealEstate = ({ history, token }) => {
  return (
    <Section id="update-realestate" history={history}>
      <Description>
        <TextUnit header="Update RealEstate" isSubsection>
          <p>
            From this endpoint, you can edit an
            <span className="code-badge">RealEstate</span>.
          </p>
          <p>
            The <span className="code-badge">id</span> attribute is a unique
            identifier, and can therefore, not be changed.
          </p>
        </TextUnit>
        <h3 className="schema-title title-7">Body Schema</h3>
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
                <TableItem description="Unique ID of RealEstate.">id</TableItem>
              ),
              col2: "Integer",
              col3: "Required",
            },
            {
              col1: (
                <TableItem description="Name of RealEstate.">name</TableItem>
              ),
              col2: "String",
              col3: "Required",
            },
            {
              col1: (
                <TableItem description="Name of Region that RealEstate is situated in.">
                  region_name
                </TableItem>
              ),
              col2: "String",
              col3: "Required",
            },
            {
              col1: (
                <TableItem description="ID of Owner of RealEstate">
                  owner_id
                </TableItem>
              ),
              col2: "Integer",
              col3: "Required",
            },
          ]}
        ></Table>
        <h3 className="schema-title title-7">Path Schema</h3>
        <Table
          inactiveTable
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
                <TableItem description="There are no applicable parameters for this endpoint."></TableItem>
              ),
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
        <EndpointExample header="Endpoint" copy baseUrl="api/realestates">
          <Endpoint request="PUT" baseUrl="api/realestates"></Endpoint>
        </EndpointExample>

        <Example header="USAGE EXAMPLE" token={token} copy>
          curl --header "Content-Type: application/json" --request PUT --data
          '&#123;"id":"1", "name":"Updated RealEstate", "region_name":"Skåne",
          "owner_id":"1"&#125;' http://localhost:6001/api/realestates
        </Example>

        <BodyDescription
          header={"REQUEST BODY EXAMPLE"}
          copy
          body={{
            id: 1,
            name: "Updated RealEstate",
            region_name: "Skåne",
            owner_id: 1,
          }}
        ></BodyDescription>

        <ContainerBlock header="RESPONSE BODY EXAMPLE" inactiveContainerBlock>
          <p>{"// "}There is no response body for this endpoint.</p>
        </ContainerBlock>
      </Usage>
    </Section>
  );
};
