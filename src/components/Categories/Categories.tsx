import { FC } from "react";
import Category from "../Category";

type Props = {
  categories: string[];
};

const Categories: FC<Props> = ({ categories }) => {
  return (
    <div className="col-span-full row-[1] border-y-[1px] border-gray-300  bg-gray-200 overflow-hidden px-4">
      <div className="flex items-center flex-1 overflow-x-auto border-l-[1px] border-gray-300 overflow-y-hidden">
        {categories.map((category) => (
          <Category key={category}>{category}</Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
