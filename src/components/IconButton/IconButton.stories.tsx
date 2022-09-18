import { XMarkIcon } from "@heroicons/react/24/solid";
import { ComponentMeta } from "@storybook/react";

import IconButton from "./IconButton";

export default {
  title: "IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

export const Default = () => (
  <IconButton
    onClick={function (): void {
      throw new Error("Function not implemented.");
    }}
  >
    <XMarkIcon className="h-5 w-5" aria-hidden />
  </IconButton>
);
