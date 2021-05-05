import React from "react";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";
import { Table } from "../../components/content/table/Table";
import { TableItem } from "../../components/content/table/TableItem";
import { NavHashLink as Link } from "react-router-hash-link";
import { ContainerBlock } from "../../components/container-block/ContainerBlock";

export const QueryParameters = ({ history, token }) => {
  return (
    <SectionWrapper>
      <Section id="query-parameters" history={history}>
        <Description>
          <div>
            <TextUnit header="Query Parameters">
              <p>
                Homebase utilizes query parameters for filtering the returned data and
                presenting it in a specific way. For example by limiting the amount of 
                returned objects, or sorting it in a certain order.
              </p>
              <p>
                Query parameters are passed with{" "}
                <span className="code-badge">?</span> for the first parameter,
                and <span className="code-badge">&</span> for additional
                parameters, as follows:
              </p>
              <p>
                <div className="code-badge">
                  ?first_query_parameter=value&second_query_parameter=value
                </div>
              </p>
              <p>
                The query parameters are passed <b>together with the URL</b> of the
                desired endpoint, as illustrated in the right column example.
              </p>
              <p>
                Query parameters are <b>always optional</b>, and are never a
                requirement in order to retrieve data from Homebase API.
              </p>
              <p>
                Homebase API uses query parameters for{" "}
                <Link to="#pagination">Pagination</Link> and{" "}
                <Link to="#pagination">Sorting</Link> of returned data.
              </p>
            </TextUnit>
          </div>
        </Description>
        <Usage>
          <ContainerBlock header="QUERY PARAMETER EXAMPLE" copy>
            http://localhost:6001/api/buildings?first_query_parameter=value&second_query_parameter=value
          </ContainerBlock>
        </Usage>
      </Section>

      <Section id="pagination" history={history}>
        <Description>
          <TextUnit header="Pagination" isSubsection>
            <p>
              Pagination is the process of separating digital content into
              discrete pages. In order to change which and how many objects that
              are returned, <span className="code-badge">offset</span>
              and <span className="code-badge">limit</span> are used as query
              parameters.
            </p>
            <p>
              <span className="code-badge">offset</span> sets how many objects
              should be skipped before collecting the result set. The default
              value for <span className="code-badge">offset</span> is <b>0</b>.
              This default value is applied if this query parameter is not
              included in the request.
            </p>
            <p>
              <span className="code-badge">limit</span> sets the maximum number
              of objects that are returned in the result set. The default value
              for <span className="code-badge">limit</span> is <b>10</b>. This
              default value is applied if this query parameter is not included
              in the request.
            </p>
          </TextUnit>
          <Table
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
                    description="Sets the maximum number of objects that are returned in the result set.
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
          <p className="small">
            <span className="code-badge">offset</span> and{" "}
            <span className="code-badge">limit</span> can be applied for
            endpoints that return <b>several</b> objects. They are listed as
            parameters in the <b>path schema</b> of a given resource when
            applicable.
          </p>
        </Description>
        <Usage>
          <ContainerBlock header="QUERY PARAMETER EXAMPLE" copy>
            http://localhost:6001/api/buildings?offset=1&limit=100
          </ContainerBlock>
        </Usage>
      </Section>

      <Section id="sorting" history={history}>
        <Description>
          <TextUnit header="Sorting" isSubsection>
            <p>
              Sorting is the process of arranging objects in a certain order. In
              order to sort a collection according to a certain field,{" "}
              <span className="code-badge">sort</span> is used as a query
              parameter.
            </p>
            <p>
              By default the collection will be arranged in <b>ascending </b>{" "}
              order. In order to sort in <b>descending</b> order add a{" "}
              <span className="code-badge">-</span> before the attribute to base
              the sort on, as follows:{" "}
              <span className="code-badge">sort=-value</span>
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
                  <TableItem description="Sets the attribute to base the sort on. Default: Ascending.">
                    sort
                  </TableItem>
                ),
                col2: "Integer",
                col3: "Optional",
              },
            ]}
          ></Table>
          <p className="small">
            It is possible to sort on all attributes present in
            an object for a given resource.{" "}
            <span className="code-badge">sort</span> can be applied for
            endpoints that return <b>several</b> objects. They are listed as
            parameters in the <b>path schema</b> of a given resource when
            applicable.
          </p>
        </Description>
        <Usage>
          <ContainerBlock header="QUERY PARAMETER EXAMPLE (ASC)" copy>
            http://localhost:6001/api/buildings?sort=street_name
          </ContainerBlock>
          <ContainerBlock header="QUERY PARAMETER EXAMPLE (DESC)" copy>
            http://localhost:6001/api/buildings?sort=-street_name
          </ContainerBlock>
        </Usage>
      </Section>
    </SectionWrapper>
  );
};
