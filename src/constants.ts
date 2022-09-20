const categories = new Map();

categories.set("Vegetables & Fruits", ["Vegetables", "Fruits", "Frozen Veg"]);
categories.set("Dairy, Bread & eggs", ["Milk", "Bread", "Eggs"]);
categories.set("Munchies", ["Chips & Crips", "Nachos"]);

const categoryArr = [...categories.keys()];
const getSubCategory = (category: string) => categories.get(category);

const columnDefs = [
  {
    headerCheckboxSelection: true,
    checkboxSelection: true,
    width: 50,
  },
  {
    field: "title",
    editable: true,
  },
  { field: "price", sorting: true, editable: true },
  { field: "subCategory", editable: true },
];

export { categoryArr, getSubCategory, columnDefs };
export default categories;
