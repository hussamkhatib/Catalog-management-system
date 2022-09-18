import { ComponentMeta } from "@storybook/react";
import NavTabs from "./NavTabs";

export default {
  title: "NavTabs",
  component: NavTabs,
} as ComponentMeta<typeof NavTabs>;

export const Default = () => (
  <div className="grid ">
    <NavTabs tabs={["tab 1", "tab 2", "tab 3", "tab 4"]} />
  </div>
);
