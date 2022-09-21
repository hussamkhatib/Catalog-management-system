import munchies from "./munchies";
import dairyBreadMilk from "./dairyBreadMilk";
import vegetablesAndFruits from "./vegettablesAndFruits";

const products = [...munchies, ...dairyBreadMilk, ...vegetablesAndFruits].sort(
  () => Math.random() - 0.5
);

export default products;
