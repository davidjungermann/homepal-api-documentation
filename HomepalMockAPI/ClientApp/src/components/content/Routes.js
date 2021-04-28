import React from "react";
import { AboutTheApi } from "../../documentation/Introduction/AboutTheAPI";
import { ConceptualInformation } from "../../documentation/Introduction/ConceptualInformation";
import { Authorization } from "../../documentation/Introduction/Authorization";
import { Validations } from "../../documentation/Introduction/Validations";
import { Errors } from "../../documentation/Introduction/Errors";
import { QueryParameters } from "../../documentation/Introduction/QueryParameters";
import { Versioning } from "../../documentation/Introduction/Versioning";
import { Agent } from "../../documentation/Resources/Agent/Agent";
import { Building } from "../../documentation/Resources/Building/Building";
import { Customer } from "../../documentation/Resources/Customer/Customer";
import { Leasable } from "../../documentation/Resources/Leasable/Leasable";
import { Owner } from "../../documentation/Resources/Owner/Owner";
import { RealEstate } from "../../documentation/Resources/RealEstate/RealEstate";
import { Region } from "../../documentation/Resources/Region/Region";

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
    main: ({ history, token }) => (
      <QueryParameters history={history} token={token}></QueryParameters>
    ),
  },
  {
    main: ({ history }) => <Versioning history={history}></Versioning>,
  },
  {
    main: ({ history, token }) => (
      <Agent history={history} token={token}></Agent>
    ),
  },
  {
    main: ({ history, token }) => (
      <Building history={history} token={token}></Building>
    ),
  },
  {
    main: ({ history, token }) => (
      <Customer history={history} token={token}></Customer>
    ),
  },
  {
    main: ({ history, token }) => (
      <Leasable history={history} token={token}></Leasable>
    ),
  },
  {
    main: ({ history, token }) => (
      <Owner history={history} token={token}></Owner>
    ),
  },
  {
    main: ({ history, token }) => (
      <RealEstate history={history} token={token}></RealEstate>
    ),
  },
  {
    main: ({ history, token }) => (
      <Region history={history} token={token}></Region>
    ),
  },
];
