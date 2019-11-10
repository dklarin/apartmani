import React from "react";
import { themea } from "../../apartmani/src/ui/theme";

import TextInput from "../src/ui/textInput";

import { action } from "@storybook/addon-actions";
import { addParameters } from "@storybook/react";
import { storiesOf } from "@storybook/react";

addParameters({
  options: {
    theme: themea,
  },
});

export default {
  title: "Text input",
};

/*export const textInput = () => (
  <TextInput
    placeholder="type some text here"
    onChange={action("Input value changed")}
  />
);*/

storiesOf("Components|TextInput", module)
  .addParameters({ options: { theme: themea } })
  .add("input with placeholder", () => (
    <TextInput
      placeholder="type some text here"
      onChange={action("Input value changed")}
    />
  ));

/*export default storiesOf("Components|TextInput", module)
  .add("input with placeholder", () => (
    <TextInput
      placeholder="type some text here"
      onChange={action("Input value changed")}
    />
  ))
  .add("readonly input", () => (
    <TextInput
      value="cant change me"
      readOnly
      placeholder="type some text here"
      onChange={action("Input value changed")}
    />
  ));*/
