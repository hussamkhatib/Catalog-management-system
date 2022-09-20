import { ComponentMeta } from "@storybook/react";

import Products from "./Products";

export default {
  title: "Products",
  component: Products,
} as ComponentMeta<typeof Products>;

export const Default = () => <Products />;
