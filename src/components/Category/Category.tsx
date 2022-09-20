import classNames from "classnames";
import { useAtom } from "jotai";
import { FC } from "react";
import activeTabAtom from "../../atom";

type Props = {
  children: string;
};

const Category: FC<Props> = ({ children }) => {
  const [activeTab, setActiveTab] = useAtom(activeTabAtom);
  return (
    <button
      onClick={() => setActiveTab(children)}
      className={classNames(
        children === activeTab ? "bg-gray-100" : "bg-gray-300",
        "flex items-center gap-x-1 px-1.5 py-2 w-max hover:text-black text-gray-600 border-r-[1px] border-gray-400 text-sm"
      )}
    >
      {children}
    </button>
  );
};

export default Category;
