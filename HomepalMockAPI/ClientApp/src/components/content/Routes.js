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
import { GetCustomer } from "../../documentation/Resources/Customer/GetCustomer";
import { GetCustomers } from "../../documentation/Resources/Customer/GetCustomers";
import { CreateCustomer } from "../../documentation/Resources/Customer/CreateCustomer";
import { DeleteCustomer } from "../../documentation/Resources/Customer/DeleteCustomer";
import { GetLeasable } from "../../documentation/Resources/Leasable/GetLeasable";
import { GetLeasables } from "../../documentation/Resources/Leasable/GetLeasables";
import { CreateLeasable } from "../../documentation/Resources/Leasable/CreateLeasable";
import { UpdateLeasable } from "../../documentation/Resources/Leasable/UpdateLeasable";
import { DeleteLeasable } from "../../documentation/Resources/Leasable/DeleteLeasable";
import { GetOwner } from "../../documentation/Resources/Owner/GetOwner";
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
    main: ({ history }) => <Versioning history={history}></Versioning>,
  },
  {
    main: ({ history }) => <Agent history={history}></Agent>,
  },
  {
    main: ({ history }) => <GetAgents history={history}></GetAgents>,
  },
  {
    main: ({ history }) => <GetAgent history={history}></GetAgent>,
  },
  {
    main: ({ history }) => <CreateAgent history={history}></CreateAgent>,
  },
  {
    main: ({ history }) => <UpdateAgent history={history}></UpdateAgent>,
  },
  {
    main: ({ history }) => <DeleteAgent history={history}></DeleteAgent>,
  },
  {
    main: ({ history }) => <Building history={history}></Building>,
  },
  {
    main: ({ history }) => <GetBuildings history={history}></GetBuildings>,
  },
  {
    main: ({ history }) => <GetBuilding history={history}></GetBuilding>,
  },
  {
    main: ({ history }) => <CreateBuilding history={history}></CreateBuilding>,
  },
  {
    main: ({ history }) => <UpdateBuilding history={history}></UpdateBuilding>,
  },
  {
    main: ({ history }) => <DeleteBuilding history={history}></DeleteBuilding>,
  },
  {
    main: ({ history }) => <Customer history={history}></Customer>,
  },
  {
    main: ({ history }) => <GetCustomers history={history}></GetCustomers>,
  },
  {
    main: ({ history }) => <GetCustomer history={history}></GetCustomer>,
  },
  {
    main: ({ history }) => <CreateCustomer history={history}></CreateCustomer>,
  },
  {
    main: ({ history }) => <DeleteCustomer history={history}></DeleteCustomer>,
  },
  {
    main: ({ history }) => <Leasable history={history}></Leasable>,
  },
  {
    main: ({ history }) => <GetLeasables history={history}></GetLeasables>,
  },
  {
    main: ({ history }) => <GetLeasable history={history}></GetLeasable>,
  },
  {
    main: ({ history }) => <CreateLeasable history={history}></CreateLeasable>,
  },
  {
    main: ({ history }) => <UpdateLeasable history={history}></UpdateLeasable>,
  },
  {
    main: ({ history }) => <DeleteLeasable history={history}></DeleteLeasable>,
  },
  {
    main: ({ history }) => <Owner history={history}></Owner>,
  },
  {
    main: ({ history }) => <GetOwners history={history}></GetOwners>,
  },
  {
    main: ({ history }) => <GetOwner history={history}></GetOwner>,
  },
  {
    main: ({ history }) => <CreateOwner history={history}></CreateOwner>,
  },
  {
    main: ({ history }) => <DeleteOwner history={history}></DeleteOwner>,
  },
  {
    main: ({ history }) => <RealEstate history={history}></RealEstate>,
  },
  {
    main: ({ history }) => <GetRealEstates history={history}></GetRealEstates>,
  },
  {
    main: ({ history }) => <GetRealEstate history={history}></GetRealEstate>,
  },
  {
    main: ({ history }) => (
      <CreateRealEstate history={history}></CreateRealEstate>
    ),
  },
  {
    main: ({ history }) => (
      <UpdateRealEstate history={history}></UpdateRealEstate>
    ),
  },
  {
    main: ({ history }) => (
      <DeleteRealEstate history={history}></DeleteRealEstate>
    ),
  },
  {
    main: ({ history }) => <Region history={history}></Region>,
  },
  {
    main: ({ history }) => <GetRegions history={history}></GetRegions>,
  },
  {
    main: ({ history }) => <CreateRegion history={history}></CreateRegion>,
  },
  {
    main: ({ history }) => <DeleteRegion history={history}></DeleteRegion>,
  },
];
