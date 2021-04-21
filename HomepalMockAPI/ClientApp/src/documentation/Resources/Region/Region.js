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
import { CreateRegion } from "./CreateRegion";
import { DeleteRegion } from "./DeleteRegion";
import { GetRegions } from "./GetRegions";
import "../../../index.scss";

export const Region = ({ history, token }) => {
  return (
    <SectionWrapper>
      <Section id="region" history={history}>
        <Description>
          <TextUnit header="Region">
            <p>
              A <span className="code-badge">Region</span> describes a
              Region in the Homebase API.
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
                  <TableItem description="Unique name of Region.">name</TableItem>
                ),
                col2: "String",
                col3: "Required",
              },
            ]}
          ></Table>
        </Description>
        <Usage>
          <EndpointList header="ENDPOINTS">
            <Endpoint
              request="GET"
              baseUrl="api/regions"
              link="get-regions"
            ></Endpoint>
            <Endpoint
              request="POST"
              baseUrl="api/regions"
              link="create-region"
            ></Endpoint>
            <Endpoint
              request="DELETE"
              baseUrl="api/regions"
              parameter="/{id}"
              link="delete-Region"
            ></Endpoint>
          </EndpointList>
          <BodyDescription
            header={"REGION OBJECT EXAMPLE"}
            copy
            body={{
              name: "Skåne",
            }}
          ></BodyDescription>
        </Usage>
      </Section>

      <GetRegions history={history} token={token}/>
      <CreateRegion history={history} token={token}/>
      <DeleteRegion history={history} token={token}/>

    </SectionWrapper>
  );
};
