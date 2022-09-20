import classNames from "classnames";
import { FC } from "react";

type Props = {
  styles: string;
  children: string;
};

const Badge: FC<Props> = ({ children, styles }) => {
  return children ? (
    <span className={classNames(styles, "px-1")}>{children}</span>
  ) : null;
};

export default Badge;
