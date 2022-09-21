import munchies from "./munchies";
import dairyBreadMilk from "./dairyBreadMilk";
import vegetablesAndFruits from "./vegettablesAndFruits";

const products = [...munchies, ...dairyBreadMilk, ...vegetablesAndFruits].sort(
  () => Math.random() - 0.5
);

export type Product = {
  name?: string;
  brand?: string;
  description?: string;
  oldPrice?: number;
  price?: number;
  category?: string;
  subCategory?: string;
};

export default products;
