import React from "react";
import { ArchitecturalOverview } from "../../components/content/architectural-overview/ArchitecturalOverview";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";
import { NavHashLink as Link } from "react-router-hash-link";
import { Table } from "../../components/content/table/Table";
import { TableItem } from "../../components/content/table/TableItem";
import { BodyDescription } from "../../components/content/body-description/BodyDescription";

export const ConceptualInformation = ({ history }) => {
  return (
    <SectionWrapper>
      <Section id="conceptual-information" history={history}>
        <Description>
          <TextUnit header="Conceptual Information">
            <p>
              The API and its object structure is based on (but not limited to){" "}
              <a
                href="https://www.realestatecore.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Real Estate Core
              </a>
              , which is an open ontology for real estate standards. The
              ontology describes the data model of a building and its
              components. <b>Note:</b> For the purpose of this prototype, the
              ontology has been simplified.
            </p>
            <p>
              To get a better conceptual understanding of the API's resources
              and their relations we recommend the{" "}
              <Link to="#conceptual-overview">Conceptual Overview</Link>.
            </p>
          </TextUnit>
        </Description>
        <Usage></Usage>
      </Section>

      <Section id="conceptual-overview" history={history}>
        <Description>
          <TextUnit header="Conceptual Overview" isSubsection>
            <p>
              Each object in the simplified ontology represents a{" "}
              <b>resource</b> in the API. In turn, each resource has a set of{" "}
              <b>endpoints</b> that can be used to read and modify data related
              to the resource.
            </p>
            <p>
              The hierarchy and cardinality of the API resources are described
              below. Click on a resource to read more about its object
              structure, attributes and endpoints.
            </p>
          </TextUnit>
          <ArchitecturalOverview history={history} />
        </Description>
        <Usage></Usage>
      </Section>

      <Section id="database-properties" history={history}>
        <Description>
          <TextUnit header="Database Properties" isSubsection>
            <p>
              The database behind the Homebase API has properties that
              developers should consider when using the API.
            </p>
            <p>
              All objects have a unique identifier, which <b>cannot</b> be
              modified.
            </p>
            <p>
              The database is built on a <b>foreign key</b> structure. This
              means that objects in the API often are related to other objects
              based on the <b>unique identifier</b> present in the related
              object.
            </p>

            <p>
              An example of this is <span className="code-badge">Leasable</span>
              , which has three separate foreign keys that relate the object to
              other resources in the API. In the example to the right, the
              attributes: <span className="code-badge">customer_id</span>,{" "}
              <span className="code-badge">owner_id</span> and{" "}
              <span className="code-badge">building_id</span> reference other
              objects from other resources in the API.
            </p>
            <p>
              This means, that in order to <b>create</b> a new{" "}
              <span className="code-badge">Leasable</span>, and other objects
              with foreign keys, these attributes must be defined, and must
              reference already existing objects in the API.
            </p>
            <p>
              This foreign key structure also ensures that the database is
              consistent, by leveraging <b>cascading changes</b>. If an object,
              higher up in the hierarchy, like{" "}
              <span className="code-badge">Building</span>, is deleted. Objects
              from other resources, like{" "}
              <span className="code-badge">Leasables</span>, that reference the
              deleted object, will also be deleted.
            </p>
          </TextUnit>
        </Description>
        <Usage>
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
              building_id: 1,
            }}
          ></BodyDescription>
        </Usage>
      </Section>

      <Section id="enumerated-values" history={history}>
        <Description>
          <TextUnit header="Enumerated Values" isSubsection>
            <p>
              Some resources have <b>enumerated values</b>. Essentially, this
              means that an attribute for an object can be one of several,
              predetermined options.
            </p>
            <p>
              Where applicable, these enumerated values will be listed along
              with the resource.
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    </SectionWrapper>
  );
};
