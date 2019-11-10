import React from "react";
import ToggleSwitch from "../src/ui/toggleSwitch/";
import { action } from "@storybook/addon-actions";

export default {
  title: "ToggleSwitch",
};

export const Off = () => (
  <ToggleSwitch
    value={false}
    disabled={false}
    onChange={action("switch clicked")}
  />
);

export const on = () => (
  <ToggleSwitch
    value={true}
    disabled={false}
    onChange={action("switch clicked")}
  />
);

export const disabled = () => (
  <ToggleSwitch
    value={false}
    disabled={true}
    onChange={action("switch clicked")}
  />
);

/*export default storiesOf("Components|ToggleSwitch", module)
  .add("toggle switch off", () => (
    <ToggleSwitch
      value={false}
      disabled={false}
      onChange={action("switch clicked")}
    />
  ))
  .add("toggle switch on", () => (
    <ToggleSwitch
      value={true}
      disabled={false}
      onChange={action("switch clicked")}
    />
  ))
  .add("toggle switch disabled", () => (
    <ToggleSwitch value={false} disabled={true} onChange={action("disabled")} />
  ));*/
