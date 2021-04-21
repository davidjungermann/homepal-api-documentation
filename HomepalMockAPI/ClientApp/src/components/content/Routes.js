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
import { GetAgents } from "../../documentation/Resources/Agent/GetAgents";
import { GetAgent } from "../../documentation/Resources/Agent/GetAgent";
import { CreateAgent } from "../../documentation/Resources/Agent/CreateAgent";
import { UpdateAgent } from "../../documentation/Resources/Agent/UpdateAgent";
import { DeleteAgent } from "../../documentation/Resources/Agent/DeleteAgent";
import { GetBuilding } from "../../documentation/Resources/Building/GetBuilding";
import { GetBuildings } from "../../documentation/Resources/Building/GetBuildings";
import { CreateBuilding } from "../../documentation/Resources/Building/CreateBuilding";
import { UpdateBuilding } from "../../documentation/Resources/Building/UpdateBuilding";
import { DeleteBuilding } from "../../documentation/Resources/Building/DeleteBuilding";
import { GetCustomers } from "../../documentation/Resources/Customer/GetCustomers";
import { CreateCustomer } from "../../documentation/Resources/Customer/CreateCustomer";
import { DeleteCustomer } from "../../documentation/Resources/Customer/DeleteCustomer";
import { GetLeasable } from "../../documentation/Resources/Leasable/GetLeasable";
import { GetLeasables } from "../../documentation/Resources/Leasable/GetLeasables";
import { CreateLeasable } from "../../documentation/Resources/Leasable/CreateLeasable";
import { UpdateLeasable } from "../../documentation/Resources/Leasable/UpdateLeasable";
import { DeleteLeasable } from "../../documentation/Resources/Leasable/DeleteLeasable";
import { GetOwners } from "../../documentation/Resources/Owner/GetOwners";
import { CreateOwner } from "../../documentation/Resources/Owner/CreateOwner";
import { DeleteOwner } from "../../documentation/Resources/Owner/DeleteOwner";
import { GetRealEstate } from "../../documentation/Resources/RealEstate/GetRealEstate";
import { GetRealEstates } from "../../documentation/Resources/RealEstate/GetRealEstates";
import { CreateRealEstate } from "../../documentation/Resources/RealEstate/CreateRealEstate";
import { UpdateRealEstate } from "../../documentation/Resources/RealEstate/UpdateRealEstate";
import { DeleteRealEstate } from "../../documentation/Resources/RealEstate/DeleteRealEstate";
import { GetRegions } from "../../documentation/Resources/Region/GetRegions";
import { CreateRegion } from "../../documentation/Resources/Region/CreateRegion";
import { DeleteRegion } from "../../documentation/Resources/Region/DeleteRegion";
import { EnumeratedValues } from "../../documentation/Introduction/EnumeratedValues";

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
      <EnumeratedValues history={history}></EnumeratedValues>
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
    main: ({ history }) => <Agent history={history}></Agent>,
  },
  {
    main: ({ history, token }) => (
      <GetAgents history={history} token={token}></GetAgents>
    ),
  },
  {
    main: ({ history, token }) => (
      <GetAgent history={history} token={token}></GetAgent>
    ),
  },
  {
    main: ({ history, token }) => (
      <CreateAgent history={history} token={token}></CreateAgent>
    ),
  },
  {
    main: ({ history, token }) => (
      <UpdateAgent history={history} token={token}></UpdateAgent>
    ),
  },
  {
    main: ({ history, token }) => (
      <DeleteAgent history={history} token={token}></DeleteAgent>
    ),
  },
  {
    main: ({ history }) => <Building history={history}></Building>,
  },
  {
    main: ({ history, token }) => (
      <GetBuildings history={history} token={token}></GetBuildings>
    ),
  },
  {
    main: ({ history, token }) => (
      <GetBuilding history={history} token={token}></GetBuilding>
    ),
  },
  {
    main: ({ history, token }) => (
      <CreateBuilding history={history} token={token}></CreateBuilding>
    ),
  },
  {
    main: ({ history, token }) => (
      <UpdateBuilding history={history} token={token}></UpdateBuilding>
    ),
  },
  {
    main: ({ history, token }) => (
      <DeleteBuilding history={history} token={token}></DeleteBuilding>
    ),
  },
  {
    main: ({ history }) => <Customer history={history} t></Customer>,
  },
  {
    main: ({ history, token }) => (
      <GetCustomers history={history} token={token}></GetCustomers>
    ),
  },
  {
    main: ({ history, token }) => (
      <CreateCustomer history={history} token={token}></CreateCustomer>
    ),
  },
  {
    main: ({ history, token }) => (
      <DeleteCustomer history={history} token={token}></DeleteCustomer>
    ),
  },
  {
    main: ({ history }) => <Leasable history={history}></Leasable>,
  },
  {
    main: ({ history, token }) => (
      <GetLeasables history={history} token={token}></GetLeasables>
    ),
  },
  {
    main: ({ history, token }) => (
      <GetLeasable history={history} token={token}></GetLeasable>
    ),
  },
  {
    main: ({ history, token }) => (
      <CreateLeasable history={history} token={token}></CreateLeasable>
    ),
  },
  {
    main: ({ history, token }) => (
      <UpdateLeasable history={history} token={token}></UpdateLeasable>
    ),
  },
  {
    main: ({ history, token }) => (
      <DeleteLeasable history={history} token={token}></DeleteLeasable>
    ),
  },
  {
    main: ({ history }) => <Owner history={history}></Owner>,
  },
  {
    main: ({ history, token }) => (
      <GetOwners history={history} token={token}></GetOwners>
    ),
  },

  {
    main: ({ history, token }) => (
      <CreateOwner history={history} token={token}></CreateOwner>
    ),
  },
  {
    main: ({ history, token }) => (
      <DeleteOwner history={history} token={token}></DeleteOwner>
    ),
  },
  {
    main: ({ history }) => <RealEstate history={history}></RealEstate>,
  },
  {
    main: ({ history, token }) => (
      <GetRealEstates history={history} token={token}></GetRealEstates>
    ),
  },
  {
    main: ({ history, token }) => (
      <GetRealEstate history={history} token={token}></GetRealEstate>
    ),
  },
  {
    main: ({ history, token }) => (
      <CreateRealEstate history={history} token={token}></CreateRealEstate>
    ),
  },
  {
    main: ({ history, token }) => (
      <UpdateRealEstate history={history} token={token}></UpdateRealEstate>
    ),
  },
  {
    main: ({ history, token }) => (
      <DeleteRealEstate history={history} token={token}></DeleteRealEstate>
    ),
  },
  {
    main: ({ history }) => <Region history={history}></Region>,
  },
  {
    main: ({ history, token }) => (
      <GetRegions history={history} token={token}></GetRegions>
    ),
  },
  {
    main: ({ history, token }) => (
      <CreateRegion history={history} token={token}></CreateRegion>
    ),
  },
  {
    main: ({ history, token }) => (
      <DeleteRegion history={history} token={token}></DeleteRegion>
    ),
  },
];
