import React from "react";
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
    main: ({ history }) => <DeleteAgent history={history}></DeleteAgent>,
  },
];
