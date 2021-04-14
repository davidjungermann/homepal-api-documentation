import React from "react";
import { TextUnit } from "./text-unit/TextUnit";
import { Section } from "../section/Section";
import { Description } from "../description/Description";
import { Usage } from "../usage/Usage";
import { AboutTheApi } from "../../documentation/Introduction/AboutTheAPI";
import { ConceptualInformation } from "../../documentation/Introduction/ConceptualInformation";
import { Authorization } from "../../documentation/Introduction/Authorization";
import { Validations } from "../../documentation/Introduction/Validations";
import { Errors } from "../../documentation/Introduction/Errors";
import { QueryParameters } from "../../documentation/Introduction/QueryParameters";
import { Pagination } from "../../documentation/Introduction/Pagination";
import { Sorting } from "../../documentation/Introduction/Sorting";
import { Inclusion } from "../../documentation/Introduction/Inclusion";
import { Filter } from "../../documentation/Introduction/Filter";
import { Versioning } from "../../documentation/Introduction/Versioning";

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
    main: ({ history }) => <Validations history={history}></Validations>,
  },
  {
    main: ({ history }) => <Errors history={history}></Errors>,
  },
  {
    main: ({ history }) => (
      <QueryParameters history={history}></QueryParameters>
    ),
  },
  {
    main: ({ history }) => <Pagination history={history}></Pagination>,
  },
  {
    main: ({ history }) => <Sorting history={history}></Sorting>,
  },
  {
    main: ({ history }) => <Inclusion history={history}></Inclusion>,
  },
  {
    main: ({ history }) => <Filter history={history}></Filter>,
  },
  {
    main: ({ history }) => <Versioning history={history}></Versioning>,
  },
];
