import React from "react";
import { TextUnit } from "./unit/TextUnit"

export const routes = [
  {
    path: "/introduction",
    exact: true,
    main: () => (
      <TextUnit
        header="Introduction"
        content="Lorem Ipsum Dolor"
      ></TextUnit>
    ),
  },
  {
    path: "/about-the-api",
    exact: true,
    main: () => (
      <TextUnit
        header="About the API"
        content="Lorem Ipsum Dolor"
      ></TextUnit>
    ),
  },
  {
    path: "/conceptual-information",
    exact: true,
    main: () => (
      <TextUnit
        header="Conceptual information"
        content="Lorem Ipsum Dolor"
      ></TextUnit>
    ),
  },
  {
    path: "/authorization",
    exact: true,
    main: () => (
      <TextUnit
        header="Authorization"
        content="Lorem Ipsum Dolor"
      ></TextUnit>
    ),
  },
  {
    path: "/validations",
    exact: true,
    main: () => (
      <TextUnit
        header="Validations"
        content="Lorem Ipsum Dolor"
      ></TextUnit>
    ),
  },
  {
    path: "/errors",
    exact: true,
    main: () => (
      <TextUnit
        header="Errors"
        content="Lorem Ipsum Dolor"
      ></TextUnit>
    ),
  },
  {
    path: "/query-parameters",
    exact: true,
    main: () => (
      <TextUnit
        header="Query parameters"
        content="Lorem Ipsum Dolor"
      ></TextUnit>
    ),
  },
  {
    path: "/pagination",
    exact: true,
    main: () => (
      <TextUnit
        header="Pagination"
        content="Lorem Ipsum Dolor"
      ></TextUnit>
    ),
  },
  {
    path: "/sorting",
    exact: true,
    main: () => (
      <TextUnit
        header="Sorting"
        content="Lorem Ipsum Dolor"
      ></TextUnit>
    ),
  },
  {
    path: "/inclusion",
    exact: true,
    main: () => (
      <TextUnit
        header="Inclusion"
        content="Lorem Ipsum Dolor"
      ></TextUnit>
    ),
  },
  {
    path: "/filter",
    exact: true,
    main: () => (
      <TextUnit
        header="Filter"
        content="Lorem Ipsum Dolor"
      ></TextUnit>
    ),
  },
  {
    path: "/versioning",
    exact: true,
    main: () => (
      <TextUnit
        header="Versioning"
        content="Lorem Ipsum Dolor"
      ></TextUnit>
    ),
  },
];
