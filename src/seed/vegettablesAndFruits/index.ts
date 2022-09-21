import fruits from "./fruits";
import vegetables from "./vegetables";
import exotics from "./exotics";
import frozenVeg from "./frozenVeg";

const vegetablesAndFruits = [
  ...fruits,
  ...vegetables,
  ...exotics,
  ...frozenVeg,
];

export default vegetablesAndFruits;
