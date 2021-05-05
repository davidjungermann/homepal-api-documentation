import React from "react";
import { EndpointExample } from "../../components/content/endpoint-example/EndpointExample";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";
import { Usage } from "../../components/usage/Usage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { NavHashLink as Link } from "react-router-hash-link";

export const AboutTheApi = ({ history, token }) => {
  return (
    <SectionWrapper>
      <Section id="about-the-api" history={history}>
        <Description>
          <TextUnit header="Homebase API" headerSize="3">
            <p>
              Homebase API connects you to all the data you need within the
              property and real estate business to build innovative applications
              – or simply carry out extensive analysis.
            </p>
            <p>
              This document describes the Homebase API, which is an API based on{" "}
              <a
                href="https://restfulapi.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                REST principles
              </a>
              . All routes described are protected and requires a key-based
              authentication. The data format used in Homebase API is{" "}
              <a
                href="https://jsonapi.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                JSON
              </a>
              . Error handling is done via{" "}
              <a
                href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"
                target="_blank"
                rel="noopener noreferrer"
              >
                standard HTTP status codes
              </a>
              . Lastly, the architectural structure is based on{" "}
              <a
                href="https://www.realestatecore.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Real Estate Core
              </a>
              , which is an open ontology for real estate standards.
            </p>
            <p>
              The documentation starts of by describing general information
              about the API that is always applied, and is later organized by
              resource type of the API. For each resource, the documentation
              lists:
            </p>
            <ul>
              <li>the available endpoints,</li>
              <li>body and path schemas for available endpoints,</li>
              <li>information on what an endpoint returns,</li>
              <li>response and request body examples,</li>
              <li>usage examples for available endpoints</li>
            </ul>
            <p>
              Conceptual information concerning a given resource, along with
              descriptions of body and path schemas, and information on what a
              given endpoint returns is always presented in the left column.
              Endpoints, response and request body examples, as well as usage
              examples are always presented in the right column.
            </p>
            <p className="small">
              <FontAwesomeIcon icon={faExclamationTriangle} /> The API changes
              every now and then, and endpoints are deprecated. If you are using
              the API make sure to check in on{" "}
              <Link to="#upcoming-deprecations">Upcoming deprecations</Link>{" "}
              from time to time. Note that we will always notice you in advance!
            </p>
          </TextUnit>
        </Description>
        <Usage>
        <div className="padding-50"/>
          <EndpointExample
            header="BASE URL"
            baseUrl="http://localhost:6001/"
            copy
          >
            http://localhost:6001/
          </EndpointExample>
          <div className="padding-50"/>
          <TextUnit header="LOOKING FOR EXAMPLES?" headerSize="7">
            <p>
              This right column is used for demonstrating <b>endpoints</b>, <b>usage</b>, <b>response</b>- and <b>request body</b> examples throughout the documentation.
            </p>
            <p>
              By default, the Homebase API Docs demonstrates usage examples with{" "}
              <a
                href="https://curl.se/"
                target="_blank"
                rel="noopener noreferrer"
              >
                cURL
              </a>{" "}
              to interact with the API over HTTP.
            </p>
          </TextUnit>
        </Usage>
      </Section>
    </SectionWrapper>
  );
};
