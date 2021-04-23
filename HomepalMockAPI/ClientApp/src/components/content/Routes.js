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
    main: ({ history, token, setCurrentSection }) => (
      <AboutTheApi
        history={history}
        token={token}
        setCurrentSection={setCurrentSection}
      ></AboutTheApi>
    ),
  },
  {
    main: ({ history, setCurrentSection }) => (
      <ConceptualInformation
        history={history}
        setCurrentSection={setCurrentSection}
      ></ConceptualInformation>
    ),
  },
  {
    main: ({
      history,
      token,
      setToken,
      valid,
      setValid,
      setCurrentSection,
    }) => (
      <Authorization
        history={history}
        token={token}
        setToken={setToken}
        valid={valid}
        setValid={setValid}
        setCurrentSection={setCurrentSection}
      ></Authorization>
    ),
  },
  {
    main: ({ history, setCurrentSection }) => (
      <Validations
        history={history}
        setCurrentSection={setCurrentSection}
      ></Validations>
    ),
  },
  {
    main: ({ history, setCurrentSection }) => (
      <Errors history={history} setCurrentSection={setCurrentSection}></Errors>
    ),
  },
  {
    main: ({ history, token, setCurrentSection }) => (
      <QueryParameters
        history={history}
        token={token}
        setCurrentSection={setCurrentSection}
      ></QueryParameters>
    ),
  },
  {
    main: ({ history, setCurrentSection }) => (
      <Versioning
        history={history}
        setCurrentSection={setCurrentSection}
      ></Versioning>
    ),
  },
  {
    main: ({ history, token, setCurrentSection }) => (
      <Agent
        history={history}
        token={token}
        setCurrentSection={setCurrentSection}
      ></Agent>
    ),
  },
  {
    main: ({ history, token, setCurrentSection }) => (
      <Building
        history={history}
        token={token}
        setCurrentSection={setCurrentSection}
      ></Building>
    ),
  },
  {
    main: ({ history, token, setCurrentSection }) => (
      <Customer
        history={history}
        token={token}
        setCurrentSection={setCurrentSection}
      ></Customer>
    ),
  },
  {
    main: ({ history, token, setCurrentSection }) => (
      <Leasable
        history={history}
        token={token}
        setCurrentSection={setCurrentSection}
      ></Leasable>
    ),
  },
  {
    main: ({ history, token, setCurrentSection }) => (
      <Owner
        history={history}
        token={token}
        setCurrentSection={setCurrentSection}
      ></Owner>
    ),
  },
  {
    main: ({ history, token, setCurrentSection }) => (
      <RealEstate
        history={history}
        token={token}
        setCurrentSection={setCurrentSection}
      ></RealEstate>
    ),
  },
  {
    main: ({ history, token, setCurrentSection }) => (
      <Region
        history={history}
        token={token}
        setCurrentSection={setCurrentSection}
      ></Region>
    ),
  },
];
