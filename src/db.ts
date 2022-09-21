import Dexie, { Table, Transaction } from "dexie";
import products from "./seed";

interface Product {
  id?: number;
  category: string;
}

export class MySubClassedDexie extends Dexie {
  // 'products' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  products!: Table<Product>;

  constructor() {
    super("catalog-management-system-db");
    this.version(1).stores({
      products: "++id,category",
    });
  }
}

const db = new MySubClassedDexie();
db.on("populate", function (transaction: Transaction) {
  transaction.table("products").bulkAdd(products);
});
export default db;
