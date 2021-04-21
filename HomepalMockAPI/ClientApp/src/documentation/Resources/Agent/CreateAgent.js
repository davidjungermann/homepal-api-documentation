import React from "react";
import { ContainerBlock } from "../../../components/container-block/ContainerBlock";
import { BodyDescription } from "../../../components/content/body-description/BodyDescription";
import { EndpointExample } from "../../../components/content/endpoint-example/EndpointExample";
import { EndpointList } from "../../../components/content/endpoint-list/EndpointList";
import { Endpoint } from "../../../components/content/endpoint/Endpoint";
import { Example } from "../../../components/content/example/Example";
import { Returns } from "../../../components/content/returns/Returns";
import { ReturnsItem } from "../../../components/content/returns/ReturnsItem";
import { Table } from "../../../components/content/table/Table";
import { TableItem } from "../../../components/content/table/TableItem";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";
import "../../../index.scss";

export const CreateAgent = ({ history, token }) => {
  return (
    <Section id="create-agent" history={history}>
      <Description>
        <TextUnit header="Create Agent">
          <p>
            From this endpoint, you can create a new
            <span className="code-badge">Agent</span>.
          </p>
        </TextUnit>
        <h3 className="schema-title title-7">Body Schema</h3>
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
                <TableItem description="The name of Agent subject for creation.">
                  name
                </TableItem>
              ),
              col2: "String",
              col3: "Required",
            },
          ]}
        ></Table>
        <Returns>
          <ReturnsItem icon="success">
            On success, the HTTP status code in the response header is{" "}
            <span className="code-badge">201 CREATED</span> and the requested
            resources are displayed in the response body.
          </ReturnsItem>

          <ReturnsItem icon="error">
            On error, the header status code is an{" "}
            <a href="#errors">error code</a>, and the response body contains an
            error object.
          </ReturnsItem>
        </Returns>
        <h3 className="schema-title title-7">Path Schema</h3>
        <Table
          cols={[
            {
              Header: "PARAMETER",
              accessor: "col1", // accessor is the "key" in the data
            },
            {
              Header: "REQUIRED",
              accessor: "col2",
            },
          ]}
          values={[
            {
              col1: (
                <TableItem description="There are no applicable parameters for this endpoint."></TableItem>
              ),
            },
          ]}
        ></Table>
      </Description>
      <Usage>
        <EndpointExample header="Endpoint" copy baseUrl="api/agents">
          <Endpoint request="POST" baseUrl="api/agents"></Endpoint>
        </EndpointExample>
        <Example header="USAGE EXAMPLE" token={token} copy>
          curl --request POST https://localhost:6001/api/agents/ \ {"\n"}
          --header "Content-Type: application/json" \ {"\n"}
          --data '&#123;"name":"New Agent"&#125;' \ {"\n"}
        </Example>

        <BodyDescription
          header={"REQUEST BODY EXAMPLE"}
          copy
          body={{
            name: "New Agent",
          }}
        ></BodyDescription>

        <ContainerBlock header="RESPONSE BODY EXAMPLE">
          <p>There is no response body for this endpoint.</p>
        </ContainerBlock>
      </Usage>
    </Section>
  );
};
