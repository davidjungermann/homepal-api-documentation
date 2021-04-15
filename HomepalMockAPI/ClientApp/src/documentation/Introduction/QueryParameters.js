import React from "react";
import { TextUnit } from "../../components/content/text-unit/TextUnit";
import { Description } from "../../components/description/Description";
import { Section } from "../../components/section/Section";
import { Usage } from "../../components/usage/Usage";
import { SectionWrapper } from "../../components/content/section-wrapper/SectionWrapper";

export const QueryParameters = ({ history }) => {
  return (
    <SectionWrapper>
      <Section id="query-parameters" history={history}>
        <Description>
          <TextUnit header="Query Parameters">
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

      <Section id="pagination" history={history}>
      <Description>
        <TextUnit header="Pagination" isSubsection>
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
