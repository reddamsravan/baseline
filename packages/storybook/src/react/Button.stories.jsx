import React from "react";
import { Button } from "@baseline/react";

export default {
  title: "React/Button",
  component: Button
};

export const Primary = {
  args: {
    label: "Button"
  },
  render: (args) => <Button {...args} />
};
