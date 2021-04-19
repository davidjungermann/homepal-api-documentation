import React from "react";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";
import { Table } from "../../components/content/table/Table";
import { TableItem } from "../../components/content/table/TableItem";
import { BodyDescription } from "../../components/content/body-description/BodyDescription";

export const Errors = ({ history }) => {
  return (
    <SectionWrapper>
      <Section id="errors" history={history}>
        <Description>
          <TextUnit header="Errors">
            <p>
              Hombase uses conventional HTTP response codes to indicate the success or failure of an API request. 
              In general: 
              Codes in the <span className="code-badge">2xx</span> range indicate success. 
              Codes in the <span className="code-badge">4xx</span> range indicate an error that failed given the information provided. 
              Codes in the <span className="code-badge">5xx</span> range indicate an error with Hompal's servers.
            </p>
            <p>
              Apart from the response code, unsuccessful responses return a JSON object containing the following information:
            </p>
          </TextUnit>
          <Table
            cols={[
              {
                Header: "KEY",
                accessor: "col1",
              },
              {
                Header: "TYPE",
                accessor: "col2",
              },
            ]}
            values={[
              {
                col1: (
                  <TableItem description="Link to the RFC section.">
                    type
                  </TableItem>
                ),
                col2: "String",
              },
              {
                col1: (
                  <TableItem description="The title of error returned.">
                    title
                  </TableItem>
                ),
                col2: "String",
              },
              {
                col1: (
                  <TableItem description="The status code of error returned.">
                    status
                  </TableItem>
                ),
                col2: "Integer",
              },
              {
                col1: (
                  <TableItem description="No idea.">
                    traceId
                  </TableItem>
                ),
                col2: "String",
              },
            ]}
          ></Table>
          <p>
            All errors are returned with the same structure.
          </p>
        </Description>
        <Usage>
          <BodyDescription
            header={"OBJECT EXAMPLE"}
            copy
            body={{
              type: "https://tools.ietf.org/html/rfc7231#section-6.5.1",
              title: "Bad Request",
              status: 400,
              traceId: "00-4ee4dffc43e1a144bc4b10a069870bde-21a097bd7fe84f4e-00",
            }}
          ></BodyDescription>
        </Usage>
      </Section>
      
      <Section id="error-codes" history={history}>
        <Description>
          <TextUnit header="Error codes" isSubsection>
            <p>
              Hombase API uses the following response status codes:
            </p>
          </TextUnit>
          <Table
            cols={[
              {
                Header: "STATUS",
                accessor: "col1",
              },
              {
                Header: "ERROR",
                accessor: "col2",
              },
            ]}
            values={[
              {
                col1: (
                  <TableItem description="The server cannot or will not process the request.">
                    400
                  </TableItem>
                ),
                col2: "BadRequest",
              },
            ]}
          ></Table>
          <p>
            We recommend writing code that gracefully handles all possible errors.
          </p>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    </SectionWrapper>
  );
};
