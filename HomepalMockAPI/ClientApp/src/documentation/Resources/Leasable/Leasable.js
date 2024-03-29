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
import { CreateLeasable } from "./CreateLeasable";
import { DeleteLeasable } from "./DeleteLeasable";
import { GetLeasable } from "./GetLeasable";
import { GetLeasables } from "./GetLeasables";
import { UpdateLeasable } from "./UpdateLeasable";
import "../../../index.scss";

export const Leasable = ({ history, token }) => {
  return (
    <SectionWrapper>
      <Section id="leasable" history={history}>
        <Description>
          <TextUnit header="Leasable">
            <p>
              A <span className="code-badge">Leasable</span> describes a
              leasable space in the Homebase API.
            </p>
            <p>
              Leasable is part of{" "}
              <Link to="#building">
                <span className="code-badge">Building</span>
              </Link>{" "}
              and has an{" "}
              <Link to="#owner">
                <span className="code-badge">Owner</span>
              </Link>
              , as well as a
              <Link to="#customer">
                <span className="code-badge">Customer</span>
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
                  <TableItem description="Unique ID of Leasable.">id</TableItem>
                ),
                col2: "Integer",
                col3: "Required",
              },
              {
                col1: (
                  <TableItem description="Class that describes the type of Leasable.">
                    class_descriptor
                  </TableItem>
                ),
                col2: "String",
                col3: "Required",
              },
              {
                col1: (
                  <TableItem description="Price per month of Leasable in SEK.">
                    price
                  </TableItem>
                ),
                col2: "Integer",
                col3: "Required",
              },
              {
                col1: (
                  <TableItem description="Description of Leasable.">
                    description
                  </TableItem>
                ),
                col2: "String",
                col3: "Required",
              },
              {
                col1: (
                  <TableItem description="Size of leasable in m².">
                    size
                  </TableItem>
                ),
                col2: "Integer",
                col3: "Required",
              },
              {
                col1: (
                  <TableItem description="ID of Customer on Leasable.">
                    customer_id
                  </TableItem>
                ),
                col2: "Integer",
                col3: "Required",
              },
              {
                col1: (
                  <TableItem description="ID of Owner on Leasable.">
                    owner_id
                  </TableItem>
                ),
                col2: "Integer",
                col3: "Required",
              },
              {
                col1: (
                  <TableItem description="ID of Leasable that Leasable belongs to.">
                    leasable_id
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
                col1: <TableItem>Leasable</TableItem>,
                col2: "String",
              },
              {
                col1: <TableItem>GaragePremise</TableItem>,
                col2: "String",
              },
              {
                col1: <TableItem>StoragePremise</TableItem>,
                col2: "String",
              },
              {
                col1: <TableItem>OfficePremise</TableItem>,
                col2: "String",
              },
              {
                col1: <TableItem>CoffeePremise</TableItem>,
                col2: "String",
              },
              {
                col1: <TableItem>EducationalPremise</TableItem>,
                col2: "String",
              },
              {
                col1: <TableItem>HotelPremise</TableItem>,
                col2: "String",
              },
              {
                col1: <TableItem>LaboratoryPremise</TableItem>,
                col2: "String",
              },
              {
                col1: <TableItem>LightIndustryPremise</TableItem>,
                col2: "String",
              },
              {
                col1: <TableItem>RestaurantPremise</TableItem>,
                col2: "String",
              },
              {
                col1: <TableItem>RetailPremise</TableItem>,
                col2: "String",
              },
            ]}
          ></Table>
        </Description>
        <Usage>
          <EndpointList header="ENDPOINTS">
            <Endpoint
              request="GET"
              baseUrl="api/leasables"
              link="get-leasables"
            ></Endpoint>
            <Endpoint
              request="GET"
              baseUrl="api/leasables"
              parameter="/{id}"
              link="get-leasable"
            ></Endpoint>
            <Endpoint
              request="POST"
              baseUrl="api/leasables"
              link="create-leasable"
            ></Endpoint>
            <Endpoint
              request="PUT"
              baseUrl="api/leasables"
              link="update-leasable"
            ></Endpoint>
            <Endpoint
              request="DELETE"
              baseUrl="api/leasables"
              parameter="/{id}"
              link="delete-leasable"
            ></Endpoint>
          </EndpointList>
          <BodyDescription
            header={"LEASABLE OBJECT EXAMPLE"}
            copy
            body={{
              id: 1,
              class_descriptor: "ResidentialPremise",
              price: 3483,
              description: "Apartment in central Malmö",
              size: 73,
              customer_id: 5,
              owner_id: 1,
              leasable_id: 1,
            }}
          ></BodyDescription>
        </Usage>
      </Section>

      <GetLeasables history={history} token={token} />
      <GetLeasable history={history} token={token} />
      <CreateLeasable history={history} token={token} />
      <UpdateLeasable history={history} token={token} />
      <DeleteLeasable history={history} token={token} />
    </SectionWrapper>
  );
};
