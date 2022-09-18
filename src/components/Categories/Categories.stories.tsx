import { ComponentMeta } from "@storybook/react";
import Categories from "./Categories";

export default {
  title: "Categories",
  component: Categories,
} as ComponentMeta<typeof Categories>;

export const Default = () => (
  <div className="grid ">
    <Categories categories={["category 1", "category 2", " category 3"]} />
  </div>
);
