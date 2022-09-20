import { ComponentMeta } from "@storybook/react";
import Categories from "./Categories";

export default {
  title: "Categories",
  component: Categories,
} as ComponentMeta<typeof Categories>;

export const Default = () => <Categories />;
