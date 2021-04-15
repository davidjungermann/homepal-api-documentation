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
    main: ({ token }) => <AboutTheApi token={token}></AboutTheApi>,
  },
  {
    main: () => <ConceptualInformation></ConceptualInformation>,
  },
  {
    main: ({ token, setToken, valid, setValid }) => (
      <Authorization
        token={token}
        setToken={setToken}
        valid={valid}
        setValid={setValid}
      ></Authorization>
    ),
  },
  {
    main: () => <Validations></Validations>,
  },
  {
    main: () => <Errors></Errors>,
  },
  {
    main: () => <QueryParameters></QueryParameters>,
  },
  {
    main: () => <Versioning></Versioning>,
  },
  {
    main: () => <Agent></Agent>,
  },
  {
    main: () => <Building></Building>,
  },
  {
    main: () => <Customer></Customer>,
  },
  {
    main: () => <Leasable></Leasable>,
  },
  {
    main: () => <Owner></Owner>,
  },
  {
    main: () => <RealEstate></RealEstate>,
  },
  {
    main: () => <Region></Region>,
  },
];
