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

export const RealEstate = ({ history }) => {
  return (
    <SectionWrapper>
      <Section id="realestate" history={history}>
        <Description>
          <TextUnit header="RealEstate">
            <p>
              A <span className="code-badge">RealEstate</span> describes a
              RealEstate in the Homebase API.
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
                  <TableItem description="Unique ID of RealEstate.">id</TableItem>
                ),
                col2: "Integer",
                col3: "Required",
              },
              {
                col1: (
                  <TableItem description="Class that describes the type of RealEstate.">
                    class_descriptor
                  </TableItem>
                ),
                col2: "String",
                col3: "Required",
              },
              {
                col1: (
                  <TableItem description="Name of the street that RealEstate is situated on.">
                    street_name
                  </TableItem>
                ),
                col2: "String",
                col3: "Required",
              },
              {
                col1: (
                  <TableItem description="Number that RealEstate is situated on.">
                    street_number
                  </TableItem>
                ),
                col2: "String",
                col3: "Required",
              },
              {
                col1: (
                  <TableItem description="Postal code of RealEstate.">
                    postal_code
                  </TableItem>
                ),
                col2: "String",
                col3: "Required",
              },
              {
                col1: (
                  <TableItem description="ID of the RealEstate that RealEstate is part of.">
                    real_estate_id
                  </TableItem>
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
              baseUrl="api/realestates"
              link="get-realestates"
            ></Endpoint>
            <Endpoint
              request="GET"
              baseUrl="api/realestates"
              parameter="/{id}"
              link="get-realestate"
            ></Endpoint>
            <Endpoint
              request="POST"
              baseUrl="api/realestates"
              link="create-realestate"
            ></Endpoint>
            <Endpoint
              request="PUT"
              baseUrl="api/realestates"
              link="update-realestate"
            ></Endpoint>
            <Endpoint
              request="DELETE"
              baseUrl="api/realestates"
              parameter="/{id}"
              link="delete-realestate"
            ></Endpoint>
          </EndpointList>
          <BodyDescription
            header={"REALESTATE OBJECT EXAMPLE"}
            copy
            body={{
              id: 1,
              class_descriptor: "ApartmentRealEstate",
              street_name: "Skånegatan",
              street_number: "20",
              postal_code: "223 33",
              real_estate_id: 1,
            }}
          ></BodyDescription>
        </Usage>
      </Section>
    </SectionWrapper>
  );
};
