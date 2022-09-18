import { FC } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import IconButton from "../IconButton";

type Props = {
  children: string;
};

const Tab: FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center gap-x-1 px-1.5 py-2 w-max hover:text-black text-gray-600 bg-gray-100 border-r-[1px] border-gray-300">
      <span className="text-sm">{children}</span>
      <IconButton
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <XMarkIcon className="h-4 w-4" aria-hidden />
      </IconButton>
    </div>
  );
};

export default Tab;
