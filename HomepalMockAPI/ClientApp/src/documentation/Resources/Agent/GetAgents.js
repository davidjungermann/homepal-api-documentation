import React from "react";
import { Returns } from "../../../components/content/returns/Returns";
import { ReturnsItem } from "../../../components/content/returns/ReturnsItem";
import { Table } from "../../../components/content/table/Table";
import { TableItem } from "../../../components/content/table/TableItem";
import { TextUnit } from "../../../components/content/text-unit/TextUnit";
import { Description } from "../../../components/description/Description";
import { Section } from "../../../components/section/Section";
import { Usage } from "../../../components/usage/Usage";
import "../../../index.scss";

export const GetAgents = ({ history }) => {
  return (
    <Section id="get-agents" history={history}>
      <Description>
        <TextUnit header="Get Agents">
          <p>
            From this endpoint, you can retrieve several
            <span className="code-badge">Agents</span>.
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
                <TableItem description="There is no body for this request"></TableItem>
              ),
            },
          ]}
        ></Table>
        <Returns>
          <ReturnsItem icon="success">
            On success, the HTTP status code in the response header is{" "}
            <span className="code-badge">200 OK</span> and the requested
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
                <TableItem description="Sets the number of objects that are returned.">
                  limit
                </TableItem>
              ),
              col2: "Optional",
            },
            {
              col1: (
                <TableItem description="Sets the number of objects skipped before collecting the set of objects to return.">
                  offset
                </TableItem>
              ),
              col2: "Optional",
            },
            {
              col1: (
                <TableItem description="Decides how the returned set of objects are sorted.">
                  sort
                </TableItem>
              ),
              col2: "Optional",
            },
          ]}
        ></Table>
      </Description>
      <Usage>{/* Usage */}</Usage>
    </Section>
  );
};
