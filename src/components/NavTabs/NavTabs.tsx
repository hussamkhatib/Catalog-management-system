import { FC } from "react";
import Tab from "../Tab";

type Props = {
  tabs: string[];
};

const Navtabs: FC<Props> = ({ tabs }) => {
  return (
    <div className="col-span-full row-[1] border-y-[1px] border-gray-300  bg-gray-200 overflow-hidden px-4">
      <div className="flex items-center flex-1 overflow-x-auto border-l-[1px] border-gray-300 overflow-y-hidden">
        {tabs.map((tab) => (
          <Tab key={tab}>{tab}</Tab>
        ))}
      </div>
    </div>
  );
};

export default Navtabs;
