import React from "react";
import { ContainerBlock } from "../../../components/container-block/ContainerBlock";
import { BodyDescription } from "../../../components/content/body-description/BodyDescription";
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

export const CreateBuilding = ({ history, token }) => {
  return (
    <Section id="create-building" history={history}>
      <Description>
        <TextUnit header="Create Building">
          <p>
            From this endpoint, you can create a new
            <span className="code-badge">Building</span>.
          </p>
          <p>
            Since a <span className="code-badge">Building</span> is part of a{" "}
            <span className="code-badge">RealEstate</span>, the{" "}
            <span className="code-badge">real_estate_id</span> attribute must be
            defined, and needs to refer to a{" "}
            <span className="code-badge">RealEstate</span> in the Homebase API,
            when creating a new <span className="code-badge">Building</span>.
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
                <TableItem description="Class that describes the type of Building.">
                  class_descriptor
                </TableItem>
              ),
              col2: "String",
              col3: "Required",
            },
            {
              col1: (
                <TableItem description="Name of the street that Building is situated on.">
                  street_name
                </TableItem>
              ),
              col2: "String",
              col3: "Required",
            },
            {
              col1: (
                <TableItem description="Number that Building is situated on.">
                  street_number
                </TableItem>
              ),
              col2: "String",
              col3: "Required",
            },
            {
              col1: (
                <TableItem description="Postal code of Building.">
                  postal_code
                </TableItem>
              ),
              col2: "String",
              col3: "Required",
            },
            {
              col1: (
                <TableItem description="ID of the RealEstate that Building is part of.">
                  real_estate_id
                </TableItem>
              ),
              col2: "Integer",
              col3: "Required",
            },
          ]}
        ></Table>
        <Returns>
          <ReturnsItem icon="success">
            On success, the HTTP status code in the response header is{" "}
            <span className="code-badge">201 CREATED</span> and the requested
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
                <TableItem description="There are no applicable parameters for this endpoint."></TableItem>
              ),
            },
          ]}
        ></Table>
      </Description>
      <Usage>
        <EndpointExample header="Endpoint" copy baseUrl="api/buildings/{id}">
          <Endpoint request="POST" baseUrl="api/buildings"></Endpoint>
        </EndpointExample>
        <Example header="USAGE EXAMPLE" token={token} copy>
          curl --header "Content-Type: application/json" --request POST --data
          '&#123;"class_descriptor":"ApartmentBuilding",
          "street_name":"Skånegatan", "street_number":"20", "postal_code":"223
          33", "real_estate_id":"1"&#125;' https://localhost:6001/api/buildings
        </Example>

        <BodyDescription
          header={"REQUEST BODY EXAMPLE"}
          copy
          body={{
            class_descriptor: "ApartmentBuilding",
            street_name: "Skånegatan",
            street_number: "20",
            postal_code: "223 33",
            real_estate_id: 1,
          }}
        ></BodyDescription>

        <ContainerBlock header="RESPONSE BODY EXAMPLE">
          <p>There is no response body for this endpoint.</p>
        </ContainerBlock>
      </Usage>
    </Section>
  );
};
