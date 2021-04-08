import React from "react";
import { TextUnit } from "./text-unit/TextUnit";
import { Section } from "../section/Section";
import { ContainerBlock } from "../container-block/ContainerBlock";
import { Description } from "../description/Description";
import { Usage } from "../usage/Usage";

export const routes = [
  {
    main: (history) => (
      <Section id="introduction" history={history}>
        <Description>
          <TextUnit
            header="Introduction"
            content="Lorem ipsum dolor sit amet, consectetur adi. Sed mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas, vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis urna tristique, eu gravida leo consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec porta. Suspendisse potenti. Vestibulum mattis tristique dolor. Ipsum Dolor"
          ></TextUnit>
        </Description>
        <Usage>
          <ContainerBlock header="Example">
            curl http://localhost:5000/api/agents
          </ContainerBlock>
        </Usage>
      </Section>
    ),
  },
  {
    main: (history) => (
      <Section id="about-the-api" history={history}>
        <Description>
        <TextUnit
          header="About the API"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas, vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis urna tristique, eu gravida leo consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec porta. Suspendisse potenti. Vestibulum mattis tristique dolor. Ipsum Dolor"
        ></TextUnit>
        </Description>
        <Usage>
          <ContainerBlock header="Example">
            curl http://localhost:5000/api/agents
          </ContainerBlock>
        </Usage>
      </Section>
    ),
  },
  {
    main: (history) => (
      <Section id="conceptual-information" history={history}>
        <Description>
        <TextUnit
          header="Conceptual information"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas, vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis urna tristique, eu gravida leo consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec porta. Suspendisse potenti. Vestibulum mattis tristique dolor. Ipsum Dolor"
        ></TextUnit>
        </Description>
        <Usage>
          <ContainerBlock header="Example">
            curl http://localhost:5000/api/agents
          </ContainerBlock>
        </Usage>
      </Section>
    ),
  },
  {
    main: (history) => (
      <Section id="authorization" history={history}>
        <Description>
          <TextUnit
            header="Authorization"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas, vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis urna tristique, eu gravida leo consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec porta. Suspendisse potenti. Vestibulum mattis tristique dolor. Ipsum Dolor"
          ></TextUnit>
        </Description>
        <Usage>
          {/* Usage */}
        </Usage>
      </Section>
    ),
  },
  {
    main: (history) => (
      <Section id="validations" history={history}>
        <Description>
          <TextUnit
            header="Validations"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas, vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis urna tristique, eu gravida leo consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec porta. Suspendisse potenti. Vestibulum mattis tristique dolor. Ipsum Dolor"
          ></TextUnit>
        </Description>
        <Usage>
          {/* Usage */}
        </Usage>
      </Section>
    ),
  },
  {
    main: (history) => (
      <Section id="errors" history={history}>
        <Description>
          <TextUnit
            header="Errors"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas, vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis urna tristique, eu gravida leo consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec porta. Suspendisse potenti. Vestibulum mattis tristique dolor. Ipsum Dolor"
          ></TextUnit>
        </Description>
        <Usage>
          {/* Usage */}
        </Usage>
      </Section>
    ),
  },
  {
    main: (history) => (
      <Section id="query-parameters" history={history}>
        <Description>
          <TextUnit
            header="Query parameters"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas, vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis urna tristique, eu gravida leo consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec porta. Suspendisse potenti. Vestibulum mattis tristique dolor. Ipsum Dolor"
          ></TextUnit>
        </Description>
        <Usage>
          {/* Usage */}
        </Usage>
      </Section>
    ),
  },
  {
    main: (history) => (
      <Section id="pagination" history={history}>
        <TextUnit
          header="Pagination"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas, vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis urna tristique, eu gravida leo consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec porta. Suspendisse potenti. Vestibulum mattis tristique dolor. Ipsum Dolor"
        ></TextUnit>
      </Section>
    ),
  },
  {
    main: (history) => (
      <Section id="sorting" history={history}>
        <TextUnit
          header="Sorting"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas, vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis urna tristique, eu gravida leo consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec porta. Suspendisse potenti. Vestibulum mattis tristique dolor. Ipsum Dolor"
        ></TextUnit>
      </Section>
    ),
  },
  {
    main: (history) => (
      <Section id="inclusion" history={history}>
        <TextUnit
          header="Inclusion"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas, vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis urna tristique, eu gravida leo consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec porta. Suspendisse potenti. Vestibulum mattis tristique dolor. Ipsum Dolor"
        ></TextUnit>
      </Section>
    ),
  },
  {
    main: (history) => (
      <Section id="filter" history={history}>
        <TextUnit
          header="Filter"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas, vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis urna tristique, eu gravida leo consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec porta. Suspendisse potenti. Vestibulum mattis tristique dolor. Ipsum Dolor"
        ></TextUnit>
      </Section>
    ),
  },
  {
    main: (history) => (
      <Section id="versioning" history={history}>
        <TextUnit
          header="Versioning"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas, vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis urna tristique, eu gravida leo consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec porta. Suspendisse potenti. Vestibulum mattis tristique dolor. Ipsum Dolor"
        ></TextUnit>
      </Section>
    ),
  },
];
