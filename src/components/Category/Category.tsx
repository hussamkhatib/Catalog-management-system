import { FC } from "react";

type Props = {
  children: string;
};

const Category: FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center gap-x-1 px-1.5 py-2 w-max hover:text-black text-gray-600 bg-gray-100 border-r-[1px] border-gray-300 text-sm">
      {children}
    </div>
  );
};

export default Category;
