/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import {
  type DemoFile,
  text,
  bool,
  textAlignKnob,
  demoCommonStyles,
  textInputSizeKnob,
  list,
  type Option,
} from "design_system/types/demoTypes";
import * as React from "react";
import TextInput, {type TextInputType} from "TextInput";
import Group from "Group";
import {css} from "aphrodite";

const textInputTypes: $ReadOnlyArray<Option<TextInputType>> = [
  "text",
  "password",
  "email",
].map(type => ({
  value: type,
  label: type,
}));

const knobs = {
  disabled: bool(false),
  readOnly: bool(false),
  isInvalid: bool(false),
  isPrefilled: bool(false),
  size: textInputSizeKnob,
  textAlign: textAlignKnob,
  placeholder: text(),
  type: list(textInputTypes),
};

const demos: DemoFile = {
  demos: [
    {
      type: "full",
      example: (elementToCodeFn, demoProps: Props) => {
        const component = <TextInputShim {...demoProps} />;
        elementToCodeFn(component);
        return component;
      },
      knobs,
    },
    {
      type: "code",
      title: "Add a Prefix / Suffix",
      description:
        "provide a `prefix` and/or `suffix` to have a sigil appear within the Input's field",
      example: elementToCodeFn => {
        const component = (
          <Group flexDirection="column">
            <TextInputShim prefix={{iconName: "airport"}} />
            <TextInputShim suffix="kg" />
          </Group>
        );

        elementToCodeFn(component);
        return component;
      },
    },
  ],
};

type Props = $Shape<React.ElementConfig<typeof TextInput>>;

function TextInputShim(demoProps: Props) {
  const [value, setValue] = React.useState("");

  return (
    <div className={css(demoCommonStyles.smallWrapper)}>
      <TextInput value={value} onChange={setValue} {...demoProps} />
    </div>
  );
}

export default demos;
