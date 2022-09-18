const categories = new Map();

categories.set("Vegetables & Fruits", ["Vegetables", "Fruits", "Frozen Veg"]);
categories.set("Dairy, Bread & eggs", ["Milk", "Bread", "Eggs"]);
categories.set("Munchies", ["Chips & Crips", "Nachos"]);

const categoryArr = [...categories.keys()];
export { categoryArr };
export default categories;
