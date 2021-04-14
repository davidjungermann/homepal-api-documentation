import React from "react";
import { TextUnit } from "./text-unit/TextUnit";
import { Section } from "../section/Section";
import { Description } from "../description/Description";
import { Usage } from "../usage/Usage";
import { ArchitecturalOverview } from "./architectural-overview/ArchitecturalOverview";
import { AboutTheApi } from "../../documentation/Introduction/AboutTheAPI";
import { ConceptualInformation } from "../../documentation/Introduction/ConceptualInformation";
import { Authorization } from "../../documentation/Introduction/Authorization";

export const routes = [
  {
    main: ({ history, token }) => (
      <AboutTheApi history={history} token={token}></AboutTheApi>
    ),
  },
  {
    main: ({ history }) => (
      <ConceptualInformation history={history}></ConceptualInformation>
    ),
  },
  {
    main: ({ history, token, setToken, valid, setValid }) => (
      <Authorization
        history={history}
        token={token}
        setToken={setToken}
        valid={valid}
        setValid={setValid}
      ></Authorization>
    ),
  },
  {
    main: ({ history }) => (
      <Section id="validations" history={history}>
        <Description>
          <TextUnit header="Validations">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum
              ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius
              tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas,
              vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis
              urna tristique, eu gravida leo consectetur. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel
              velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur
              ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna
              accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec
              porta. Suspendisse potenti. Vestibulum mattis tristique dolor.
              Ipsum Dolor
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    ),
  },
  {
    main: ({ history }) => (
      <Section id="errors" history={history}>
        <Description>
          <TextUnit header="Errors">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum
              ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius
              tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas,
              vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis
              urna tristique, eu gravida leo consectetur. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel
              velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur
              ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna
              accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec
              porta. Suspendisse potenti. Vestibulum mattis tristique dolor.
              Ipsum Dolor
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    ),
  },
  {
    main: ({ history }) => (
      <Section id="query-parameters" history={history}>
        <Description>
          <TextUnit header="Query parameters">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum
              ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius
              tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas,
              vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis
              urna tristique, eu gravida leo consectetur. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel
              velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur
              ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna
              accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec
              porta. Suspendisse potenti. Vestibulum mattis tristique dolor.
              Ipsum Dolor
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    ),
  },
  {
    main: ({ history }) => (
      <Section id="pagination" history={history}>
        <Description>
          <TextUnit header="Pagination">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum
              ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius
              tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas,
              vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis
              urna tristique, eu gravida leo consectetur. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel
              velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur
              ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna
              accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec
              porta. Suspendisse potenti. Vestibulum mattis tristique dolor.
              Ipsum Dolor
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    ),
  },
  {
    main: ({ history }) => (
      <Section id="sorting" history={history}>
        <Description>
          <TextUnit header="Sorting">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum
              ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius
              tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas,
              vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis
              urna tristique, eu gravida leo consectetur. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel
              velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur
              ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna
              accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec
              porta. Suspendisse potenti. Vestibulum mattis tristique dolor.
              Ipsum Dolor
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    ),
  },
  {
    main: ({ history }) => (
      <Section id="inclusion" history={history}>
        <Description>
          <TextUnit header="Inclusion">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum
              ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius
              tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas,
              vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis
              urna tristique, eu gravida leo consectetur. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel
              velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur
              ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna
              accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec
              porta. Suspendisse potenti. Vestibulum mattis tristique dolor.
              Ipsum Dolor
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    ),
  },
  {
    main: ({ history }) => (
      <Section id="filter" history={history}>
        <Description>
          <TextUnit header="Filter">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum
              ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius
              tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas,
              vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis
              urna tristique, eu gravida leo consectetur. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel
              velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur
              ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna
              accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec
              porta. Suspendisse potenti. Vestibulum mattis tristique dolor.
              Ipsum Dolor
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    ),
  },
  {
    main: ({ history }) => (
      <Section id="versioning" history={history}>
        <Description>
          <TextUnit header="Versioning">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis augue nec augue vestibulum, eu sodales nisl maximus. Nam ut
              fermentum augue. Vivamus diam tortor, ultrices sit amet bibendum
              ut, gravida vel tortor. Vivamus a mollis est. Maecenas varius
              tempus nisi, at mattis sapien rutrum ut. Cras sed sem egestas,
              vehicula augue a, ullamcorper nulla. Praesent lacinia risus quis
              urna tristique, eu gravida leo consectetur. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras imperdiet ultricies metus. Sed vel
              velit eget arcu hendrerit sollicitudin congue quis ex. Curabitur
              ullamcorper vulputate facilisis. Aliquam porttitor nunc nec urna
              accumsan, sit amet congue ipsum viverra. Ut semper vitae felis nec
              porta. Suspendisse potenti. Vestibulum mattis tristique dolor.
              Ipsum Dolor
            </p>
          </TextUnit>
        </Description>
        <Usage>{/* Usage */}</Usage>
      </Section>
    ),
  },
];
