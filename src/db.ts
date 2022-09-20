import Dexie, { Table } from "dexie";

interface Product {
  id?: number;
  title: string;
  category: string;
  subCategory: string;
  price: null;
}

export class MySubClassedDexie extends Dexie {
  // 'products' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  products!: Table<Product>;

  constructor() {
    super("catalog-management-system-db");
    this.version(1).stores({
      products: "++id, title, price,category, subCategory",
    });
  }
}

const db = new MySubClassedDexie();
export default db;
