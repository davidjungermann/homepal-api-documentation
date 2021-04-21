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
import { CreateCustomer } from "./CreateCustomer";
import { DeleteCustomer } from "./DeleteCustomer";
import { GetCustomers } from "./GetCustomers";
import "../../../index.scss";

export const Customer = ({ history, token }) => {
  return (
    <SectionWrapper>
      <Section id="customer" history={history}>
        <Description>
          <TextUnit header="Customer">
            <p>
              A <span className="code-badge">Customer</span> describes a person
              or legal person in the Homebase API, currently acting as a
              Customer in the context.
            </p>

            <p>
              Customer is a <b>subclass</b> of{" "}
              <Link to="#agent" smooth>
                <span className="code-badge">Agent</span>
              </Link>
              . The <span className="code-badge">id</span> attribute references
              the <span className="code-badge">id</span> attribute in{" "}
              <span className="code-badge">Agent</span>. Subsequently, this
              means that a <span className="code-badge">Customer</span> must
              also be defined as an <span className="code-badge">Agent</span>.
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
                  <TableItem description="Unique ID of Customer.">id</TableItem>
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
              baseUrl="api/customers"
              link="get-customers"
            ></Endpoint>
            <Endpoint
              request="POST"
              baseUrl="api/customers"
              link="create-customer"
            ></Endpoint>
            <Endpoint
              request="DELETE"
              baseUrl="api/customers"
              parameter="/{id}"
              link="delete-customer"
            ></Endpoint>
          </EndpointList>
          <BodyDescription
            header={"CUSTOMER OBJECT EXAMPLE"}
            copy
            body={{
              id: 1,
            }}
          ></BodyDescription>
        </Usage>
      </Section>

      <GetCustomers history={history} token={token} />
      <CreateCustomer history={history} token={token} />
      <DeleteCustomer history={history} token={token} />
    </SectionWrapper>
  );
};
