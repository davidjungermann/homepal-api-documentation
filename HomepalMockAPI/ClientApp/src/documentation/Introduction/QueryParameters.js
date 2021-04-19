import React from "react";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";
import { Table } from "../../components/content/table/Table";
import { TableItem } from "../../components/content/table/TableItem";

export const QueryParameters = ({ history }) => {
  return (
    <SectionWrapper>
      <Section id="query-parameters" history={history}>
        <Description>
          <TextUnit header="Query Parameters">
            <p>
<<<<<<< HEAD
              Homebase utilizes query parameters for presenting the returned data in a specific way.
=======
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis
              augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum ut,
              gravida vel tortor. Vivamus a mollis est. Maecenas varius tempus
              nisi, at mattis sapien rutrum ut. Cras sed sem egestas, vehicula
              augue a, ullamcorper nulla. Praesent lacinia risus quis urna
              tristique, eu gravida leo consectetur. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Cras imperdiet ultricies metus. Sed vel velit eget
              arcu hendrerit sollicitudin congue quis ex. Curabitur ullamcorper
              vulputate facilisis. Aliquam porttitor nunc nec urna accumsan, sit
              amet congue ipsum viverra. Ut semper vitae felis nec porta.
              Suspendisse potenti. Vestibulum mattis tristique dolor. Ipsum Dolor
>>>>>>> 8d9a582dd4511031c87a1a3ea0dc310562577d16
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>

      <Section id="pagination" history={history}>
        <Description>
          <TextUnit header="Pagination" isSubsection>
            <p>
            Pagination is the process of separating digital content into discrete pages. 
            All routes which returns many records is set by default to return the ten first records. 
            In order to change which and how many records that are returned <span className="code-badge">offset</span> 
            and <span className="code-badge">limit</span> are used as query parameters.
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
                  <TableItem description="Sets the number of records to skip before starting to collect the result set. 
                  Default: 0">
                    offset
                  </TableItem>
                ),
                col2: "Integer",
                col3: "Optional",
              },
              {
                col1: (
                  <TableItem description="Sets the numbers of records to return.
                  Default: 10">
                    limit
                  </TableItem>
                ),
                col2: "Integer",
                col3: "Optional",
              },
            ]}
          ></Table>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>

      <Section id="sorting" history={history}>
        <Description>
          <TextUnit header="Sorting" isSubsection>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis
              augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum ut,
              gravida vel tortor. Vivamus a mollis est. Maecenas varius tempus
              nisi, at mattis sapien rutrum ut. Cras sed sem egestas, vehicula
              augue a, ullamcorper nulla. Praesent lacinia risus quis urna
              tristique, eu gravida leo consectetur. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Cras imperdiet ultricies metus. Sed vel velit eget
              arcu hendrerit sollicitudin congue quis ex. Curabitur ullamcorper
              vulputate facilisis. Aliquam porttitor nunc nec urna accumsan, sit
              amet congue ipsum viverra. Ut semper vitae felis nec porta.
              Suspendisse potenti. Vestibulum mattis tristique dolor. Ipsum Dolor
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    </SectionWrapper>
  );
};
