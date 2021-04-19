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
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";
import { Usage } from "../../components/usage/Usage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

export const AboutTheApi = ({ history, token }) => {
  return (
    <SectionWrapper>
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
        </Usage>
      </Section>
    </SectionWrapper>
  );
};
