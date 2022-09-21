import { ComponentMeta } from "@storybook/react";
import { categoryArr } from "../../constants";

import Category from "./Category";
export default {
  title: "Category",
  component: Category,
} as ComponentMeta<typeof Category>;

export const Default = () => <Category>{categoryArr[0]}</Category>;
