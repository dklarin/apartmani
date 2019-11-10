import React from "react";
import { Label } from "../src/ui/label/";
import { action } from "@storybook/addon-actions";

import { Button } from "@storybook/react/demo";

export default {
  title: "Label",
};

export const label = () => (
  <Label onClick={action("clicked")} />
);

export const emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
