import { ValueParserParams } from "ag-grid-community";
import SubCategoryCellRenderer from "./components/Products/SubCategoryCellRenderer";

const categories = {
  "Vegetables & Fruits": [
    "Vegetables",
    "Fruits",
    "Flowers & Leaves",
    "Frozen Veg",
  ],
  "Dairy, Bread & eggs": ["Milk", "Bread", "Eggs"],
  Munchies: ["Chips & Crisps", "Nachos", "Popcorn"],
};

const subCategoryStyles = {
  Vegetables: "bg-green-200",
  Fruits: "bg-red-200",
  Exotics: "bg-yellow-200",
  "Flowers & Leaves": "bg-purple-200",
  "Frozen Veg": "bg-blue-200",
  Milk: "bg-yellow-200",
  Bread: "bg-indigo-200",
  Eggs: "bg-purple-200",
  "Chips & Crisps": "bg-pink-200",
  Nachos: "bg-gray-200",
  Popcorn: "bg-green-200",
};

const categoryArr = Object.keys(categories) as (keyof typeof categories)[];

export type CategoryArr = typeof categoryArr;
export type Category = keyof typeof categories;

const columnDefs = (category: Category) => [
  {
    headerCheckboxSelection: true,
    checkboxSelection: true,
    suppressColumnsToolPanel: true,
    width: 50,
  },
  {
    field: "name",
    filter: true,
    sortable: true,
    resizable: true,
    minWidth: 300,
  },
  {
    field: "price",
    valueParser: ({ newValue }: ValueParserParams) => Number(newValue),
    filter: "agNumberColumnFilter",
    sortable: true,
    width: 100,
  },
  {
    field: "oldPrice",
    valueParser: ({ newValue }: ValueParserParams) => Number(newValue),
    filter: "agNumberColumnFilter",
    sortable: true,
    width: 120,
  },
  {
    field: "subCategory",
    cellEditor: "agSelectCellEditor",
    cellRenderer: SubCategoryCellRenderer,
    cellEditorParams: {
      cellRenderer: SubCategoryCellRenderer,
      values: categories[category],
    },
    filter: true,
    sortable: true,
  },
  {
    field: "description",
    filter: true,
    sortable: true,
    flex: 1,
    resizable: true,
    minWidth: 500,
  },
];

export { categoryArr, subCategoryStyles, columnDefs };
export default categories;
