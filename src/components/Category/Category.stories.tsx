import { ComponentMeta } from "@storybook/react";

import Category from "./Category";
export default {
  title: "Category",
  component: Category,
} as ComponentMeta<typeof Category>;

export const Default = () => <Category>The tab</Category>;
