import { FC } from "react";
import classNames from "classnames";

type Props = {
  color?: "primary" | "secondary";
  children: string;
  disabled?: boolean;
  onClick?: () => void;
};

const colorClassname = {
  primary: "text-white bg-gray-700 hover:bg-gray-600",
  secondary: "bg-gray-200 hover:bg-gray-100",
};

const baseStyles = "inline-flex items-center text-xs font-medium px-2 py-1 ";

const Button: FC<Props> = (props) => {
  const { children, color = "primary", ...restProps } = props;

  return (
    <button
      className={classNames(baseStyles, colorClassname[color])}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
