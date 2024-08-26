// import  { useState } from "react";
// import { FilterMatchMode, FilterOperator } from "primereact/api";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { InputText } from "primereact/inputtext";
// import { IconField } from "primereact/iconfield";
// import { InputIcon } from "primereact/inputicon";
// import { MultiSelect } from "primereact/multiselect";
// import { Dropdown } from "primereact/dropdown";
// import { Tag } from "primereact/tag";

// export default function BasicDemo() {
//   const representatives = [
//     { name: "Amy Elsner", image: "amyelsner.png" },
//     { name: "Anna Fali", image: "annafali.png" },
//     { name: "Asiya Javayant", image: "asiyajavayant.png" },
//     { name: "Bernardo Dominic", image: "bernardodominic.png" },
//     { name: "Elwin Sharvill", image: "elwinsharvill.png" },
//     { name: "Ioni Bowcher", image: "ionibowcher.png" },
//     { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
//     { name: "Onyama Limba", image: "onyamalimba.png" },
//     { name: "Stephen Shaw", image: "stephenshaw.png" },
//     { name: "XuXue Feng", image: "xuxuefeng.png" },
//   ];

//   const statuses = [
//     "unqualified",
//     "qualified",
//     "new",
//     "negotiation",
//     "renewal",
//   ];

//   const customers = [
//     {
//       id: 1,
//       name: "John Doe",
//       country: { name: "USA", code: "us" },
//       representative: representatives[0],
//       status: "new",
//       verified: true,
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       country: { name: "Canada", code: "ca" },
//       representative: representatives[1],
//       status: "qualified",
//       verified: false,
//     },
//     {
//       id: 3,
//       name: "Robert Brown",
//       country: { name: "UK", code: "uk" },
//       representative: representatives[2],
//       status: "negotiation",
//       verified: true,
//     },
//     {
//       id: 4,
//       name: "Emily White",
//       country: { name: "Australia", code: "au" },
//       representative: representatives[3],
//       status: "renewal",
//       verified: false,
//     },
//   ];

//   const [filters, setFilters] = useState({
//     global: { value: null, matchMode: FilterMatchMode.CONTAINS },
//     name: {
//       operator: FilterOperator.AND,
//       constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
//     },
//     "country.name": {
//       operator: FilterOperator.AND,
//       constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
//     },
//     representative: { value: null, matchMode: FilterMatchMode.IN },
//     status: {
//       operator: FilterOperator.OR,
//       constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
//     },
//   });

//   const [selectedCustomer, setSelectedCustomer] = useState(null);

//   const getSeverity = (status) => {
//     switch (status) {
//       case "unqualified":
//         return "danger";
//       case "qualified":
//         return "success";
//       case "new":
//         return "info";
//       case "negotiation":
//         return "warning";
//       case "renewal":
//         return null;
//       default:
//         return null;
//     }
//   };

//   const countryBodyTemplate = (rowData) => (
//     <div className="flex align-items-center gap-2">
//       <img
//         alt={rowData.country.code}
//         src={`https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png`}
//         className={`flag flag-${rowData.country.code}`}
//         style={{ width: "24px" }}
//       />
//       <span>{rowData.country.name}</span>
//     </div>
//   );

//   const representativeBodyTemplate = (rowData) => (
//     <div className="flex align-items-center gap-2">
//       <img
//         alt={rowData.representative.name}
//         src={`https://primefaces.org/cdn/primereact/images/avatar/${rowData.representative.image}`}
//         width="32"
//       />
//       <span>{rowData.representative.name}</span>
//     </div>
//   );

//   const representativeFilterTemplate = (options) => (
//     <MultiSelect
//       value={options.value}
//       options={representatives}
//       itemTemplate={representativesItemTemplate}
//       onChange={(e) => options.filterCallback(e.value)}
//       optionLabel="name"
//       placeholder="Any"
//       className="p-column-filter"
//     />
//   );

//   const representativesItemTemplate = (option) => (
//     <div className="flex align-items-center gap-2">
//       <img
//         alt={option.name}
//         src={`https://primefaces.org/cdn/primereact/images/avatar/${option.image}`}
//         width="32"
//       />
//       <span>{option.name}</span>
//     </div>
//   );

//   const statusBodyTemplate = (rowData) => (
//     <Tag value={rowData.status} severity={getSeverity(rowData.status)} />
//   );

//   const statusFilterTemplate = (options) => (
//     <Dropdown
//       value={options.value}
//       options={statuses}
//       onChange={(e) => options.filterCallback(e.value, options.index)}
//       itemTemplate={statusItemTemplate}
//       placeholder="Select One"
//       className="p-column-filter"
//       showClear
//     />
//   );

//   const statusItemTemplate = (option) => (
//     <Tag value={option} severity={getSeverity(option)} />
//   );

//   const onGlobalFilterChange = (event) => {
//     const value = event.target.value;
//     let _filters = { ...filters };
//     _filters["global"].value = value;
//     setFilters(_filters);
//   };

//   const renderHeader = () => {
//     const value = filters["global"] ? filters["global"].value : "";
//     return (
//       <IconField iconPosition="left">
//         <InputIcon className="pi pi-search" />
//         <InputText
//           type="search"
//           value={value || ""}
//           onChange={(e) => onGlobalFilterChange(e)}
//           placeholder="Global Search"
//         />
//       </IconField>
//     );
//   };

//   const header = renderHeader();

//   return (
//     <div className="card mt-10 border-2 mx-auto p-4 border-r-4">
//       <DataTable
//         value={customers}
//         paginator
//         rows={5}
//         header={header}
//         filters={filters}
//         onFilter={(e) => setFilters(e.filters)}
//         selection={selectedCustomer}
//         onSelectionChange={(e) => setSelectedCustomer(e.value)}
//         selectionMode="single"
//         dataKey="id"
//         emptyMessage="No customers found."
//         tableStyle={{ minWidth: "50rem" }}
//       >
//         <Column
//           field="name"
//           header="Name"
//           sortable
//           filter
//           filterPlaceholder="Search"
//           style={{ width: "25%" }}
//         ></Column>
//         <Column
//           header="Country"
//           body={countryBodyTemplate}
//           sortable
//           sortField="country.name"
//           filter
//           filterField="country.name"
//           filterPlaceholder="Search"
//           style={{ width: "25%" }}
//         ></Column>
//         <Column
//           header="Agent"
//           body={representativeBodyTemplate}
//           sortable
//           sortField="representative.name"
//           filter
//           filterField="representative"
//           showFilterMatchModes={false}
//           filterElement={representativeFilterTemplate}
//           filterMenuStyle={{ width: "14rem" }}
//           style={{ width: "25%" }}
//         ></Column>
//         <Column
//           field="status"
//           header="Status"
//           body={statusBodyTemplate}
//           sortable
//           filter
//           filterElement={statusFilterTemplate}
//           filterMenuStyle={{ width: "14rem" }}
//           style={{ width: "25%" }}
//         ></Column>
//       </DataTable>
//     </div>
//   );
// }
