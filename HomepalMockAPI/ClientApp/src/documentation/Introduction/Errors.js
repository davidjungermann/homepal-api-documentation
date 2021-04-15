import React from "react";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";
import { Table } from "../../components/content/table/Table";
import { TableItem } from "../../components/content/table/TableItem";
import { BodyDescription } from "../../components/content/body-description/BodyDescription";

export const Errors = () => {
  return (
    <SectionWrapper>
      <Section id="errors">
        <Description>
          <TextUnit header="Errors">
            <p>
              Hombase uses conventional HTTP response codes to indicate the
              success or failure of an API request. In general: Codes in the{" "}
              <span className="code-badge">2xx</span> range indicate success.
              Codes in the <span className="code-badge">4xx</span> range
              indicate an error that failed given the information provided.
              Codes in the <span className="code-badge">5xx</span> range
              indicate an error with Hompal's servers.
            </p>
            <p>
              Apart from the response code, unsuccessful responses return a JSON
              object containing the following information:
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
            ]}
            values={[
              {
                col1: (
                  <TableItem description="The code of error returned.">
                    status
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
                  <TableItem description="A human-readable message giving more details about the error.">
                    detail
                  </TableItem>
                ),
                col2: "String",
              },
            ]}
          ></Table>
          <p>All errors are returned with the same structure.</p>
        </Description>
        <Usage>
          <BodyDescription
            header={"OBJECT EXAMPLE"}
            copy
            body={{
              status: "401",
              title: "Unauthorized",
              detail: "",
            }}
          ></BodyDescription>
        </Usage>
      </Section>

      <Section id="error-codes">
        <Description>
          <TextUnit header="Error codes" isSubsection>
            <p>Hombase API uses the following response status codes:</p>
          </TextUnit>
          <Table
            //values och cols här kan flyttas ut i en separat fil för att det ska bli lättare att läsa!
            cols={[
              {
                Header: "STATUS",
                accessor: "col1", // accessor is the "key" in the data
              },
              {
                Header: "ERROR",
                accessor: "col2",
              },
            ]}
            values={[
              {
                col1: (
                  <TableItem description="The server can not or will not process the request.">
                    400
                  </TableItem>
                ),
                col2: "BadRequest",
              },
              {
                col1: <TableItem description="null">401</TableItem>,
                col2: "Unauthorized",
              },
              {
                col1: (
                  <TableItem description="A resource with the specified ID was not found.">
                    404
                  </TableItem>
                ),
                col2: "NotFound",
              },
              {
                col1: (
                  <TableItem description="There was a conflict with data existing in the database.">
                    409
                  </TableItem>
                ),
                col2: "Conflict",
              },
              {
                col1: (
                  <TableItem description="Required field missing or invalid value.">
                    422
                  </TableItem>
                ),
                col2: "UnprocessableEntity",
              },
              {
                col1: (
                  <TableItem description="Internal server error.">
                    500
                  </TableItem>
                ),
                col2: "InternalServerError",
              },
            ]}
          ></Table>
          <p>
            We recommend writing code that gracefully handles all possible
            errors.
          </p>
        </Description>
        <Usage>
          <BodyDescription
            header={"OBJECT EXAMPLE"}
            copy
            body={{
              status: "401",
              title: "Unauthorized",
              detail: "",
            }}
          ></BodyDescription>
        </Usage>
      </Section>
    </SectionWrapper>
  );
};
