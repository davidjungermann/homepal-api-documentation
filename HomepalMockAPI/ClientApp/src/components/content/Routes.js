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
    main: () => <GetAgents></GetAgents>,
  },
  {
    main: () => <GetAgent></GetAgent>,
  },
  {
    main: () => <CreateAgent></CreateAgent>,
  },
  {
    main: () => <UpdateAgent></UpdateAgent>,
  },
  {
    main: () => <DeleteAgent></DeleteAgent>,
  },
  {
    main: () => <Building></Building>,
  },
  {
    main: () => <GetBuildings></GetBuildings>,
  },
  {
    main: () => <GetBuilding></GetBuilding>,
  },
  {
    main: () => <CreateBuilding></CreateBuilding>,
  },
  {
    main: () => <UpdateBuilding></UpdateBuilding>,
  },
  {
    main: () => <DeleteBuilding></DeleteBuilding>,
  },
  {
    main: () => <Customer></Customer>,
  },
  {
    main: () => <GetCustomers></GetCustomers>,
  },
  {
    main: () => <GetCustomer></GetCustomer>,
  },
  {
    main: () => <CreateCustomer></CreateCustomer>,
  },
  {
    main: () => <DeleteCustomer></DeleteCustomer>,
  },
  {
    main: () => <Leasable></Leasable>,
  },
  {
    main: () => <GetLeasables></GetLeasables>,
  },
  {
    main: () => <GetLeasable></GetLeasable>,
  },
  {
    main: () => <CreateLeasable></CreateLeasable>,
  },
  {
    main: () => <UpdateLeasable></UpdateLeasable>,
  },
  {
    main: () => <DeleteLeasable></DeleteLeasable>,
  },
  {
    main: () => <Owner></Owner>,
  },
  {
    main: () => <GetOwners></GetOwners>,
  },
  {
    main: () => <GetOwner></GetOwner>,
  },
  {
    main: () => <CreateOwner></CreateOwner>,
  },
  {
    main: () => <DeleteOwner></DeleteOwner>,
  },
  {
    main: () => <RealEstate></RealEstate>,
  },
  {
    main: () => <GetRealEstates></GetRealEstates>,
  },
  {
    main: () => <GetRealEstate></GetRealEstate>,
  },
  {
    main: () => <CreateRealEstate></CreateRealEstate>,
  },
  {
    main: () => <UpdateRealEstate></UpdateRealEstate>,
  },
  {
    main: () => <DeleteRealEstate></DeleteRealEstate>,
  },
  {
    main: () => <Region></Region>,
  },
  {
    main: () => <GetRegions></GetRegions>,
  },
  {
    main: () => <CreateRegion></CreateRegion>,
  },
  {
    main: () => <DeleteRegion></DeleteRegion>,
  },
];
