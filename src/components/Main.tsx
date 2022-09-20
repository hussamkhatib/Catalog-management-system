import Categories from "./Categories";
import Products from "./Products/Products";

const Main = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen">
      <Categories />
      <Products />
    </div>
  );
};

export default Main;
