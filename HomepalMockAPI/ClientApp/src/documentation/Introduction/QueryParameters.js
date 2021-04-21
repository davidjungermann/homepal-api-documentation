import React from "react";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";
import { Table } from "../../components/content/table/Table";
import { TableItem } from "../../components/content/table/TableItem";
import { Example } from "../../components/content/example/Example";

export const QueryParameters = ({ history, token }) => {
  return (
    <SectionWrapper>
      <Section id="query-parameters" history={history}>
        <Description>
          <TextUnit header="Query Parameters">
            <p>
              Homebase utilizes query parameters for presenting the returned
              data in a specific way.
            </p>
            <p>
              Query Parameters are passed with{" "}
              <span className="code-badge">?</span> with the URL of the
              endpoint, see examples below.
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>

      <Section id="pagination" history={history}>
        <Description>
          <TextUnit header="Pagination" isSubsection>
            <p>
              Pagination is the process of separating digital content into
              discrete pages. In order to change which and how many records that
              are returned <span className="code-badge">offset</span>
              and <span className="code-badge">limit</span> are used as query
              parameters.
            </p>
            <p>
              The default value for <span className="code-badge">offset</span>{" "}
              is <b>0</b>. Offset sets how many objects should be skipped before
              collecting the result set.
            </p>
            <p>
              The default value for <span className="code-badge">limit</span> is{" "}
              <b>10</b>. Limit sets the maximum number of objects that are
              returned in the result set.
            </p>
          </TextUnit>
          <Table
            //values och cols här kan flyttas ut i en separat fil för att det ska bli lättare att läsa!
            cols={[
              {
                Header: "QUERY PARAMETER",
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
                  <TableItem
                    description="Sets the number of objects to skip before starting to collect the result set. 
                  Default: 0"
                  >
                    offset
                  </TableItem>
                ),
                col2: "Integer",
                col3: "Optional",
              },
              {
                col1: (
                  <TableItem
                    description="Sets the numbers of objects to return in the result set.
                  Default: 10"
                  >
                    limit
                  </TableItem>
                ),
                col2: "Integer",
                col3: "Optional",
              },
            ]}
          ></Table>
          <p>
            <span className="code-badge">offset</span> and{" "}
            <span className="code-badge">limit</span> can be applied for
            endpoints that return several objects. They are listed as parameters
            in the <b>Path Schema</b> where applicable for a given resource.
          </p>
        </Description>
        <Usage>
          <Example header="USAGE" token={token} copy>
            curl https://homebase-api.homepal.se/v1/buildings?offset=1&limit=100
          </Example>
        </Usage>
      </Section>

      <Section id="sorting" history={history}>
        <Description>
          <TextUnit header="Sorting" isSubsection>
            <p>
              Sorting is the process of arranging records in a certain order. In
              order to sort a collection according to a certain field,{" "}
              <span className="code-badge">sort</span> is used as a query
              parameter.
            </p>
          </TextUnit>
          <Table
            cols={[
              {
                Header: "QUERY PARAMETER",
                accessor: "col1",
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
                  <TableItem
                    description="Sets the key to sort after.
                  By default the collection will be arranged in ascending order, in order to sort in descending order add a minus (U+002D HYPHEN-MINUS, “-“) before the sorting field.
                  In order to sort a collection on multiple fields use comma-separation (U+002C COMMA, “,”) between the sorting fields."
                  >
                    sort
                  </TableItem>
                ),
                col2: "Integer",
                col3: "Optional",
              },
            ]}
          ></Table>
          <p>
            The supported keys to sort after are listed within every documented
            resource. If the server does not support sorting as specified in the
            query parameter sort, it returns error{" "}
            <span className="code-badge">400 Bad Request</span>.
          </p>
        </Description>
        <Usage>
          <Example header="USAGE" token={token} copy>
            curl
            https://homebase-api.homepal.se/v1/buildings?sort=class_descriptor
          </Example>
        </Usage>
      </Section>
    </SectionWrapper>
  );
};
