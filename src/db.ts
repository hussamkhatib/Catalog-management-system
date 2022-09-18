import Dexie, { Table } from "dexie";

interface Product {
  id?: number;

  title: string;
  category: string;
  subCategory: string;
}

export class MySubClassedDexie extends Dexie {
  // 'products' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  products!: Table<Product>;

  constructor() {
    super("myDatabase");
    this.version(1).stores({
      products: "++id, title,category,subCategory",
    });
  }
}

const db = new MySubClassedDexie();
export default db;
