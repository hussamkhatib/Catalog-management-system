import SubCategoryCellRenderer from "./components/Products/SubCategoryCellRenderer";

const categories = {
  "Vegetables & Fruits": ["Vegetables", "Fruits", "Frozen Veg"],
  "Dairy, Bread & eggs": ["Milk", "Bread", "Eggs"],
  Munchies: ["Chips", "Nachos"],
};

const subCategoryStyles: any = {
  Vegetables: "bg-green-200",
  Fruits: "bg-red-200",
  "Frozen Veg": "bg-blue-200",
  Milk: "bg-yellow-200",
  Bread: "bg-indigo-200",
  Eggs: "bg-purple-200",
  Chips: "bg-pink-200",
  Nachos: "bg-gray-200",
};

const categoryArr: any = [
  "Vegetables & Fruits",
  "Dairy, Bread & eggs",
  "Munchies",
];

const columnDefs = (category: keyof typeof categories) => [
  {
    headerCheckboxSelection: true,
    checkboxSelection: true,
    suppressColumnsToolPanel: true,
    width: 50,
  },
  {
    field: "title",
    editable: true,
    filter: true,
    sortable: true,
  },
  {
    field: "price",
    editable: true,
    valueParser: ({ newValue }: any) => Number(newValue),
    filter: "agNumberColumnFilter",
    sortable: true,
  },
  {
    field: "subCategory",
    cellEditor: "agSelectCellEditor",
    cellRenderer: SubCategoryCellRenderer,
    cellEditorParams: {
      cellRenderer: SubCategoryCellRenderer,
      values: categories[category],
    },
    editable: true,
    filter: true,
    sortable: true,
  },
];

export { categoryArr, subCategoryStyles, columnDefs };
export default categories;
