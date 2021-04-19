/* Denna hade man kunnat autogenerera ganska lätt från API:t med lite tillägg. */

export const items = [
  {
    label: "Introduction",
    items: [
      { label: "About the API" },
      { 
        label: "Conceptual information",
        items: [
          { label: "Conceptual Overview" },
          { label: "Super classes" },
        ],
      },
      { label: "Authorization",
        items: [
          { label: "Access key" },
        ],
      },
      { label: "Validations" },
      { 
        label: "Errors",
        items: [
          { label: "Error codes" },
        ],
      },
      {
        label: "Query Parameters",
        items: [
          { label: "Pagination" },
          { label: "Sorting" },
        ],
      },
      { 
        label: "Versioning",
        items: [
          { label: "Upcoming deprecations" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        label: "Agent",
        items: [
          { label: "Get Agents" },
          { label: "Get Agent" },
          { label: "Create Agent" },
          { label: "Update Agent" },
          { label: "Delete Agent" },
        ],
      },
      {
        label: "Building",
        items: [
          { label: "Get Buildings" },
          { label: "Get Building" },
          { label: "Create Building" },
          { label: "Update Building" },
          { label: "Delete Building" },
        ],
      },
      {
        label: "Customer",
        items: [
          { label: "Get Customers" },
          { label: "Get Customer" },
          { label: "Create Customer" },
          { label: "Delete Customer" },
        ],
      },
      {
        label: "Leasable",
        items: [
          { label: "Get Leasables" },
          { label: "Get Leasable" },
          { label: "Create Leasable" },
          { label: "Update Leasable" },
          { label: "Delete Leasable" },
        ],
      },
      {
        label: "Owner",
        items: [
          { label: "Get Owners" },
          { label: "Get Owner" },
          { label: "Create Owner" },
          { label: "Delete Owner" },
        ],
      },
      {
        label: "RealEstate",
        items: [
          { label: "Get RealEstates" },
          { label: "Get RealEstate" },
          { label: "Create RealEstate" },
          { label: "Update RealEstate" },
          { label: "Delete RealEstate" },
        ],
      },
      {
        label: "Region",
        items: [
          { label: "Get Regions" },
          { label: "Create Region" },
          { label: "Delete Region" },
        ],
      },
    ],
  },
];
