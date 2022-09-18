const categories = new Map();

categories.set("Vegetables & Fruits", ["Vegetables", "Fruits", "Frozen Veg"]);
categories.set("Dairy, Bread & eggs", ["Milk", "Bread", "Eggs"]);
categories.set("Munchies", ["Chips & Crips", "Nachos"]);

const categoryArr = [...categories.keys()];
const getSubCategory = (category: string) => categories.get(category);

export { categoryArr, getSubCategory };
export default categories;
