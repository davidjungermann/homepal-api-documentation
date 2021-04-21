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
import { CreateBuilding } from "./CreateBuilding";
import { DeleteBuilding } from "./DeleteBuilding";
import { GetBuilding } from "./GetBuilding";
import { GetBuildings } from "./GetBuildings";
import { UpdateBuilding } from "./UpdateBuilding";
import "../../../index.scss";

export const Building = ({ history, token }) => {
  return (
    <SectionWrapper>
      <Section id="building" history={history}>
        <Description>
          <TextUnit header="Building">
            <p>
              A <span className="code-badge">Building</span> describes a
              building in the Homebase API.
            </p>
            <p>
              A <span className="code-badge">Building</span> is part of a{" "}
              <Link to="#realestate" smooth>
                <span className="code-badge">RealEstate</span>.
              </Link>
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
                  <TableItem description="Unique ID of Building.">id</TableItem>
                ),
                col2: "Integer",
                col3: "Required",
              },
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
          <h3 className="schema-title title-7">Enumerated Values</h3>
          <Table
            cols={[
              {
                Header: "ENUMERATED VALUE",
                accessor: "col1", // accessor is the "key" in the data
              },
              {
                Header: "TYPE",
                accessor: "col2",
              },
            ]}
            values={[
              {
                col1: <TableItem>Building</TableItem>,
                col2: "String",
              },
              {
                col1: <TableItem>ApartmentBuilding</TableItem>,
                col2: "String",
              },
              {
                col1: <TableItem>EnvironmentalBuilding</TableItem>,
                col2: "String",
              },
              {
                col1: <TableItem>LaundryBuilding</TableItem>,
                col2: "String",
              },
            ]}
          ></Table>
        </Description>
        <Usage>
          <EndpointList header="ENDPOINTS">
            <Endpoint
              request="GET"
              baseUrl="api/buildings"
              link="get-buildings"
            ></Endpoint>
            <Endpoint
              request="GET"
              baseUrl="api/buildings"
              parameter="/{id}"
              link="get-building"
            ></Endpoint>
            <Endpoint
              request="POST"
              baseUrl="api/buildings"
              link="create-building"
            ></Endpoint>
            <Endpoint
              request="PUT"
              baseUrl="api/buildings"
              link="update-building"
            ></Endpoint>
            <Endpoint
              request="DELETE"
              baseUrl="api/buildings"
              parameter="/{id}"
              link="delete-building"
            ></Endpoint>
          </EndpointList>
          <BodyDescription
            header={"BUILDING OBJECT EXAMPLE"}
            copy
            body={{
              id: 1,
              class_descriptor: "ApartmentBuilding",
              street_name: "Skånegatan",
              street_number: "20",
              postal_code: "223 33",
              real_estate_id: 1,
            }}
          ></BodyDescription>
        </Usage>
      </Section>

      <GetBuildings history={history} token={token}/>
      <GetBuilding history={history} token={token}/>
      <CreateBuilding history={history} token={token}/>
      <UpdateBuilding history={history} token={token}/>
      <DeleteBuilding history={history} token={token}/>

    </SectionWrapper>
  );
};
