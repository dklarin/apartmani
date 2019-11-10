import React from "react";
import ActionButton from "../src/ui/actionButton";

import { action } from "@storybook/addon-actions";

export default {
  title: "ActionButton",
};

export const regular = () => (
  <ActionButton isBusy={false} onClick={action("Regular button clicked")}>
    Save As
  </ActionButton>
);
