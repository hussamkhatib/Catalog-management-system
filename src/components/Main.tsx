import Categories from "./Categories";
import { categoryArr } from "../constants";
import Products from "./Products/Products";

const Main = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen">
      <Categories categories={categoryArr} />
      <Products />
    </div>
  );
};

export default Main;
