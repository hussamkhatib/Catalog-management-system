import { FC } from "react";

type Props = {
  children: JSX.Element; // Pass Icon only
  onClick: () => void;
};

const IconButton: FC<Props> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="rounded-full hover:bg-gray-200">
      {children}
    </button>
  );
};

export default IconButton;
