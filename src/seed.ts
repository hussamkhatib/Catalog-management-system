const vegetablesAndFruits = [
  {
    title: "Cucumber (Southekai)",
    price: 39,
    category: "Vegetables & Fruits",
    subCategory: "Vegetables",
  },
  {
    title: "Cherry Tomato",
    price: 40,
    category: "Vegetables & Fruits",
    subCategory: "Vegetables",
  },
  {
    title: "Green Lettuce",
    price: 40,
    category: "Vegetables & Fruits",
    subCategory: "Exotics",
  },
  {
    title: "Lemongrass (Nimbe Hullu)",
    price: 12,
    category: "Vegetables & Fruits",
    subCategory: "Exotics",
  },
  {
    title: "Kimia Dates - Packet (Kharjura)",
    price: 250,
    category: "Vegetables & Fruits",
    subCategory: "Fruits",
  },
  {
    title: "Kiran Watermelon (Kallangadi)",
    price: 92,
    category: "Vegetables & Fruits",
    subCategory: "Fruits",
  },
];

const DairyBreadEggs = [
  {
    title: "Nandini Good Life Toned Milk",
    price: 31,
    category: "Dairy, Bread & eggs",
    subCategory: "Milk",
  },
  {
    title: "Nandini Good Life Toned Milk",
    price: 80,
    category: "Dairy, Bread & eggs",
    subCategory: "Milk",
  },
  {
    title: "Britannia Milk Bread",
    price: 50,
    category: "Dairy, Bread & eggs",
    subCategory: "Bread",
  },
  {
    title: "Nilgiris Plain Bread Sticks",
    price: 45,
    category: "Dairy, Bread & eggs",
    subCategory: "Bread",
  },
  {
    title: "UPF Healthy Brown eggs",
    price: 355,
    category: "Dairy, Bread & eggs",
    subCategory: "Eggs",
  },
  {
    title: "Table White eggs - 30 Pieces Tray",
    price: 199,
    category: "Dairy, Bread & eggs",
    subCategory: "Eggs",
  },
];

const munchies = [
  {
    title: "Bingo Original Style Chilli Potato Chips",
    price: 18,
    category: "Munchies",
    subCategory: "Chips & Crisps",
  },
  {
    title: "Cheetos Cheez Puffs",
    price: 39,
    category: "Munchies",
    subCategory: "Chips & Crisps",
  },
  {
    title: "Cornitos Nachos & Salsa Combo",
    price: 221,
    category: "Munchies",
    subCategory: "Nachos",
  },
  {
    title: "Doritos Cheese Nachos",
    price: 59,
    category: "Munchies",
    subCategory: "Nachos",
  },
];

const products = [...vegetablesAndFruits, ...DairyBreadEggs, ...munchies];

export default products;
