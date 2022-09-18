import { ComponentMeta } from "@storybook/react";

import Tab from "./Tab";
export default {
  title: "Tab",
  component: Tab,
} as ComponentMeta<typeof Tab>;

export const Default = () => <Tab>The tab</Tab>;
