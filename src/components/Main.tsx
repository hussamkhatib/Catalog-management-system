import Categories from "./Categories";
import { categoryArr } from "../category";

const Main = () => {
  return (
    <div className="grid grid-cols-[6rem_1fr]">
      <Categories categories={categoryArr} />
    </div>
  );
};

export default Main;
