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
import { CreateRealEstate } from "./CreateRealEstate";
import { DeleteRealEstate } from "./DeleteRealEstate";
import { GetRealEstate } from "./GetRealEstate";
import { GetRealEstates } from "./GetRealEstates";
import { UpdateRealEstate } from "./UpdateRealEstate";
import "../../../index.scss";

export const RealEstate = ({ history, token }) => {
  return (
    <SectionWrapper>
      <Section id="realestate" history={history}>
        <Description>
          <TextUnit header="RealEstate">
            <p>
              A <span className="code-badge">RealEstate</span> describes a
              RealEstate in the Homebase API.
            </p>
            <p>
              A RealEstate is a part of a{" "}
              <span className="code-badge">
                <Link to="#region">Region</Link>
              </span>
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
                  <TableItem description="Unique ID of RealEstate.">
                    id
                  </TableItem>
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
              name: "Alfa",
              region_name: "Skåne",
              owner_id: 1,
            }}
          ></BodyDescription>
        </Usage>
      </Section>

      <GetRealEstates history={history} token={token} />
      <GetRealEstate history={history} token={token} />
      <CreateRealEstate history={history} token={token} />
      <UpdateRealEstate history={history} token={token} />
      <DeleteRealEstate history={history} token={token} />
    </SectionWrapper>
  );
};
