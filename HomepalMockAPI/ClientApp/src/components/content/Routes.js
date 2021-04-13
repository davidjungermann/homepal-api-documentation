import React from "react";
import { TextUnit } from "./text-unit/TextUnit";
import { Section } from "../section/Section";
import { ContainerBlock } from "../container-block/ContainerBlock";
import { Description } from "../description/Description";
import { Usage } from "../usage/Usage";
import { EndpointList } from "../content/endpoint-list/EndpointList";
import { Endpoint } from "../content/endpoint/Endpoint";
import { BodyDescription } from "../content/body-description/BodyDescription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Example } from "./example/Example";
import { Table } from "./table/Table";
import { TableItem } from "./table/TableItem";
import { Authorization } from "../authorization/Authorization";
import { ArchitecturalOverview } from "../content/architectural-overview/ArchitecturalOverview";

export const routes = [
  {
    main: ({ history }) => (
      <Section id="about-the-api" history={history}>
        <Description>
          <TextUnit header="Homebase API" headerSize="3">
            <p>
              Homebase API connects you to all the data you need within the
              property and real estate business to build innovative applications
              – or simply carry out extensive analytics.
            </p>
            <p>
              This document describes the Homebase API, which is an API based on{" "}
              <a href="https://restfulapi.net/">REST principles</a>. All routes
              described are protected and requires a token-based authentication
              performed via <a href="https://oauth.net/">OAuth</a>. The
              responses of the API are based on{" "}
              <a href="https://jsonapi.org">https://jsonapi.org</a>. Error
              handling is done via{" "}
              <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes">
                standard HTTP status codes
              </a>
              . Lastly, the architectural structure is based on Real Estate
              Core, which is an open ontology for real estate standards.
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
              <FontAwesomeIcon icon={faInfoCircle} /> In order to use our live
              API you need be a customer of Homepal, and also have connected one
              or more data sources to the system.
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
        </Description>
        <Usage>
          <ContainerBlock header="BASE URL" copy>
            https://homebase-api.homepal.se/v1/
          </ContainerBlock>
          <TextUnit header="Usage examples" headerSize="7">
            <p>
              By default, the Homebase API Docs demonstrate using cURL to
              interact with the API over HTTP.
            </p>
          </TextUnit>
          <Example header="USAGE" copy>
            curl
            http://localhost:5000/api/just/some/random/words/for/making/a/long/path
          </Example>
          <EndpointList header="ENDPOINTS">
            <Endpoint
              request="GET"
              baseUrl="v1/buildings"
              link="get-buildings"
              history={history}
            ></Endpoint>
            <Endpoint
              request="GET"
              baseUrl="v1/buildings"
              parameter="/{id}"
              link="get-building"
              history={history}
            ></Endpoint>
            <Endpoint
              request="POST"
              baseUrl="v1/buildings"
              link="create-building"
              history={history}
            ></Endpoint>
            <Endpoint
              request="PUT"
              baseUrl="v1/buildings"
              parameter="/{id}"
              link="update-building"
              history={history}
            ></Endpoint>
            <Endpoint
              request="DELETE"
              baseUrl="v1/buildings"
              parameter="/{id}"
              link="delete-building"
              history={history}
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
    ),
  },
  {
    main: ({ history }) => (
      <Section id="conceptual-information" history={history}>
        <Description>
          <TextUnit header="Conceptual information">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum
              ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius
              tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas,
              vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis
              urna tristique, eu gravida leo consectetur. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel
              velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur
              ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna
              accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec
              porta. Suspendisse potenti. Vestibulum mattis tristique dolor.
              Ipsum Dolor
            </p>
          </TextUnit>
          <ArchitecturalOverview history={history} />
        </Description>
        <Usage></Usage>
      </Section>
    ),
  },
  {
    main: ({ history }) => (
      <Section id="authorization" history={history}>
        <Description>
          <TextUnit header="Authorization"></TextUnit>
          <Authorization>Hej!</Authorization>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    ),
  },
  {
    main: ({ history }) => (
      <Section id="validations" history={history}>
        <Description>
          <TextUnit header="Validations">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum
              ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius
              tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas,
              vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis
              urna tristique, eu gravida leo consectetur. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel
              velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur
              ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna
              accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec
              porta. Suspendisse potenti. Vestibulum mattis tristique dolor.
              Ipsum Dolor
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    ),
  },
  {
    main: ({ history }) => (
      <Section id="errors" history={history}>
        <Description>
          <TextUnit header="Errors">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum
              ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius
              tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas,
              vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis
              urna tristique, eu gravida leo consectetur. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel
              velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur
              ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna
              accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec
              porta. Suspendisse potenti. Vestibulum mattis tristique dolor.
              Ipsum Dolor
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    ),
  },
  {
    main: ({ history }) => (
      <Section id="query-parameters" history={history}>
        <Description>
          <TextUnit header="Query parameters">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum
              ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius
              tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas,
              vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis
              urna tristique, eu gravida leo consectetur. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel
              velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur
              ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna
              accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec
              porta. Suspendisse potenti. Vestibulum mattis tristique dolor.
              Ipsum Dolor
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    ),
  },
  {
    main: ({ history }) => (
      <Section id="pagination" history={history}>
        <Description>
          <TextUnit header="Pagination">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum
              ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius
              tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas,
              vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis
              urna tristique, eu gravida leo consectetur. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel
              velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur
              ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna
              accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec
              porta. Suspendisse potenti. Vestibulum mattis tristique dolor.
              Ipsum Dolor
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    ),
  },
  {
    main: ({ history }) => (
      <Section id="sorting" history={history}>
        <Description>
          <TextUnit header="Sorting">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum
              ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius
              tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas,
              vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis
              urna tristique, eu gravida leo consectetur. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel
              velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur
              ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna
              accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec
              porta. Suspendisse potenti. Vestibulum mattis tristique dolor.
              Ipsum Dolor
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    ),
  },
  {
    main: ({ history }) => (
      <Section id="inclusion" history={history}>
        <Description>
          <TextUnit header="Inclusion">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum
              ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius
              tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas,
              vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis
              urna tristique, eu gravida leo consectetur. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel
              velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur
              ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna
              accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec
              porta. Suspendisse potenti. Vestibulum mattis tristique dolor.
              Ipsum Dolor
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    ),
  },
  {
    main: ({ history }) => (
      <Section id="filter" history={history}>
        <Description>
          <TextUnit header="Filter">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum
              ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius
              tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas,
              vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis
              urna tristique, eu gravida leo consectetur. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel
              velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur
              ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna
              accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec
              porta. Suspendisse potenti. Vestibulum mattis tristique dolor.
              Ipsum Dolor
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    ),
  },
  {
    main: ({ history }) => (
      <Section id="versioning" history={history}>
        <Description>
          <TextUnit header="Versioning">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum
              ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius
              tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas,
              vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis
              urna tristique, eu gravida leo consectetur. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel
              velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur
              ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna
              accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec
              porta. Suspendisse potenti. Vestibulum mattis tristique dolor.
              Ipsum Dolor
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    ),
  },
];
