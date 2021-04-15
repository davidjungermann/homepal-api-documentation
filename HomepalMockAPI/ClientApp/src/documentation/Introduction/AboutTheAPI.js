import React from "react";
import { ContainerBlock } from "../../components/container-block/ContainerBlock";
import { BodyDescription } from "../../components/content/body-description/BodyDescription";
import { EndpointList } from "../../components/content/endpoint-list/EndpointList";
import { Endpoint } from "../../components/content/endpoint/Endpoint";
import { Example } from "../../components/content/example/Example";
import { Returns } from "../../components/content/returns/Returns";
import { ReturnsItem } from "../../components/content/returns/ReturnsItem";
import { Table } from "../../components/content/table/Table";
import { TableItem } from "../../components/content/table/TableItem";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

export const AboutTheApi = ({ history, token }) => {
  return (
    <Section id="about-the-api" history={history}>
      <Description>
        <TextUnit header="Homebase API" headerSize="3">
          <p>
            Homebase API connects you to all the data you need within the
            property and real estate business to build innovative applications –
            or simply carry out extensive analytics.
          </p>
          <p>
            This document describes the Homebase API, which is an API based on{" "}
            <a href="https://restfulapi.net/">REST principles</a>. All routes
            described are protected and requires a token-based authentication
            performed via <a href="https://oauth.net/">OAuth</a>. The responses
            of the API are based on{" "}
            <a href="https://jsonapi.org">https://jsonapi.org</a>. Error
            handling is done via{" "}
            <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes">
              standard HTTP status codes
            </a>
            . Lastly, the architectural structure is based on Real Estate Core,
            which is an open ontology for real estate standards.
          </p>
          <p>
            You can use the Homebase API in{" "}
            <a href="#authorization">test mode</a>, which does not affect your
            live data or interact with the banking networks.
          </p>
          <p>
            The documentation is organized by resource type. For each resource
            type, the documentation lists the available endpoints, one or more
            data representations, JSON objects, the supported methods (GET,
            POST, PATCH, DELETE), as well as at least one usage example.
          </p>
          <p className="small">
            <FontAwesomeIcon icon={faInfoCircle} /> In order to use our live API
            you need be a customer of Homepal, and also have connected one or
            more data sources to the system.
          </p>
          <p className="small">
            <FontAwesomeIcon icon={faExclamationTriangle} /> The API changes
            every now and then, and endpoints are deprecated. If you are using
            the API make sure to check in on Deprecation from time to time. We
            will of course notice you in advance!
          </p>
        </TextUnit>
        <Table
          //values och cols här kan flyttas ut i en separat fil för att det ska bli lättare att läsa!
          cols={[
            {
              Header: "BODY SCHEMA",
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
                <TableItem description="Unique UUID of the Buildings.">
                  id
                </TableItem>
              ),
              col2: "String",
              col3: "Required",
            },
            {
              col1: (
                <TableItem description="The entity class. See enumerated values for further information.">
                  class
                </TableItem>
              ),
              col2: "String",
              col3: "Required",
            },
            {
              col1: (
                <TableItem description="Description goes here.">
                  street_name
                </TableItem>
              ),
              col2: "String",
              col3: "Required",
            },
            {
              col1: (
                <TableItem description="Description goes here.">
                  street_number
                </TableItem>
              ),
              col2: "String",
              col3: "Required",
            },
            {
              col1: (
                <TableItem description="Description goes here.">
                  postal_code
                </TableItem>
              ),
              col2: "String",
              col3: "Required",
            },
            {
              col1: (
                <TableItem description="Description goes here.">
                  real_estate_id
                </TableItem>
              ),
              col2: "String",
              col3: "Required",
            },
          ]}
        ></Table>
        <Returns>
          <ReturnsItem icon="success">
            On success, the HTTP status code in the response header is 201
            CREATED and the response body is empty
          </ReturnsItem>

          <ReturnsItem icon="error">
            On error, the header status code is an <a href="#errors">error code</a>, and the
            response body contains an error object
          </ReturnsItem>
        </Returns>
      </Description>
      <Usage>
        <ContainerBlock header="BASE URL" copy>
          https://homebase-api.homepal.se/v1/
        </ContainerBlock>
        <TextUnit header="Usage examples" headerSize="7">
          <p>
            By default, the Homebase API Docs demonstrate using cURL to interact
            with the API over HTTP.
          </p>
        </TextUnit>
        <Example header="USAGE" token={token} copy>
          curl
          https://localhost:6001/api/just/some/random/words/for/making/a/long/path
        </Example>
        <Example header="USAGE2" token={token} copy>
          curl https://localhost:6001/api/agents
        </Example>
        <EndpointList header="ENDPOINTS">
          <Endpoint
            request="GET"
            baseUrl="v1/buildings"
            link="get-buildings"
          ></Endpoint>
          <Endpoint
            request="GET"
            baseUrl="v1/buildings"
            parameter="/{id}"
            link="get-building"
          ></Endpoint>
          <Endpoint
            request="POST"
            baseUrl="v1/buildings"
            link="create-building"
          ></Endpoint>
          <Endpoint
            request="PUT"
            baseUrl="v1/buildings"
            parameter="/{id}"
            link="update-building"
          ></Endpoint>
          <Endpoint
            request="DELETE"
            baseUrl="v1/buildings"
            parameter="/{id}"
          ></Endpoint>
        </EndpointList>
        <BodyDescription
          header={"ARRAY OBJECT EXAMPLE"}
          copy
          body={[
            {
              id: 1,
              class_descriptor: "ApartmentBuilding",
              street_name: "Skånegatan",
              street_number: "20",
              postal_code: "223 33",
              real_estate_id: 1,
            },
            {
              id: 2,
              class_descriptor: "ApartmentBuilding",
              street_name: "Umeåvägen",
              street_number: "18",
              postal_code: "333 44",
              real_estate_id: 2,
            },
            {
              id: 3,
              class_descriptor: "LaundryBuilding",
              street_name: "Drottninggatan",
              street_number: "12",
              postal_code: "453 11",
              real_estate_id: 3,
            },
          ]}
        ></BodyDescription>
        <BodyDescription
          header={"OBJECT EXAMPLE"}
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
  );
};
