import NumericCellEditor from "./components/Products/NumericCellEditor";

const categories = new Map();

categories.set("Vegetables & Fruits", ["Vegetables", "Fruits", "Frozen Veg"]);
categories.set("Dairy, Bread & eggs", ["Milk", "Bread", "Eggs"]);
categories.set("Munchies", ["Chips & Crips", "Nachos"]);

const categoryArr = [...categories.keys()];
const getSubCategory = (category: string) => categories.get(category);

const columnDefs = (category: any) => [
  {
    headerCheckboxSelection: true,
    checkboxSelection: true,
    width: 50,
  },
  {
    field: "title",
    editable: true,
  },
  {
    field: "price",
    sorting: true,
    editable: true,
    cellRenderer: NumericCellEditor,
    valueParser: (params: any) => Number(params.newValue),
  },
  {
    field: "subCategory",
    cellEditor: "agSelectCellEditor",

    cellEditorParams: (params: any) => {
      console.log({ params });
      return {
        values: categories.get(category),
      };
    },
    editable: true,
  },
];

export { categoryArr, getSubCategory, columnDefs };
export default categories;
