/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import {
  type DemoFile,
  text,
  getIconKnob,
  bool,
  iconAlignmentKnob,
  iconButtonSizeKnob,
  buttonIntentKnob,
  iconButtonKindKnob,
  buttonWidthKnob,
  type DemoProps,
} from "../../design_system/types/demoTypes";
import * as React from "react";
import IconButton from "../IconButton";
import DeprecatedHorizontalGroup from "../../DeprecatedHorizontalGroup";
import invariant from "../../tools/invariant";

const iconButtonKnobs = {
  label: text("demo"),
  iconName: getIconKnob(),
  iconAlignment: iconAlignmentKnob,
  size: iconButtonSizeKnob,
  intent: buttonIntentKnob,
  kind: iconButtonKindKnob,
  width: buttonWidthKnob,
  disabled: bool(false),
};

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic Usage",
      example: fn => {
        const component = (
          <IconButton iconName="ellipsis" type="button" onClick={() => null} />
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Bare icon button",
      description:
        "Bare buttons retain normal button padding but have no button styles besides hover and focus states.",
      example: fn => {
        const component = (
          <IconButton
            kind="bare"
            iconName="cog"
            type="button"
            onClick={() => null}
          />
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Blank Buttons",
      description:
        "Blank buttons abandon all button styles except hover and focus states.",
      example: fn => {
        const component = (
          <IconButton
            kind="blank"
            iconName="rocket"
            size="l"
            type="button"
            onClick={() => null}
          />
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Icon with label",
      example: fn => {
        const component = (
          <DeprecatedHorizontalGroup>
            <IconButton
              iconName="ship"
              kind="hollow"
              label="Shipments"
              type="button"
              onClick={() => null}
            />
            <IconButton
              iconName="truck"
              kind="bare"
              label="Deliveries"
              type="button"
              onClick={() => null}
            />
          </DeprecatedHorizontalGroup>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Sizes",
      example: fn => {
        const component = (
          <DeprecatedHorizontalGroup>
            <IconButton
              iconName="rocket"
              kind="hollow"
              size="s"
              type="button"
              onClick={() => null}
            />
            <IconButton
              iconName="rocket"
              kind="hollow"
              type="button"
              onClick={() => null}
            />
            <IconButton
              iconName="rocket"
              kind="hollow"
              size="l"
              type="button"
              onClick={() => null}
            />
            <IconButton
              iconName="rocket"
              kind="hollow"
              size="l"
              type="button"
              onClick={() => null}
              height={{type: "customDontUse", height: 60}}
            />
          </DeprecatedHorizontalGroup>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "full",
      example: (elementToCodeFn, demoProps) => (
        <IconButtonShim
          elementToCodeFn={elementToCodeFn}
          demoProps={demoProps}
        />
      ),
      knobs: iconButtonKnobs,
      defaultProps: {iconName: "rocket", type: "button"},
    },
    {
      type: "code",
      title: "Intents",
      example: fn => {
        const component = (
          <DeprecatedHorizontalGroup>
            <IconButton
              kind="hollow"
              iconName="print"
              intent="basic"
              type="button"
              onClick={() => null}
            />
            <IconButton
              kind="hollow"
              iconName="add"
              type="button"
              onClick={() => null}
            />
            <IconButton
              kind="hollow"
              iconName="cancel"
              intent="danger"
              type="button"
              onClick={() => null}
            />
          </DeprecatedHorizontalGroup>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Icon Alignment",
      example: fn => {
        const component = (
          <DeprecatedHorizontalGroup>
            <IconButton
              iconName="search"
              label="Container Id"
              type="button"
              onClick={() => null}
            />
            <IconButton
              iconName="search"
              iconAlignment="right"
              label="Container Id"
              type="button"
              onClick={() => null}
            />
          </DeprecatedHorizontalGroup>
        );
        fn(component);
        return component;
      },
    },
  ],
};

export class IconButtonShim extends React.PureComponent<
  {
    +elementToCodeFn?: React.Node => void,
    +demoProps: DemoProps<typeof iconButtonKnobs>,
  },
  {}
> {
  render() {
    const {elementToCodeFn, demoProps} = this.props;
    const {iconName} = demoProps;
    invariant(
      iconName != null,
      "Need iconName, iconName knob shouldn't be nullable."
    );
    const element = (
      <IconButton {...demoProps} iconName={iconName} type="button" />
    );
    // eslint-disable-next-line no-unused-expressions
    elementToCodeFn && elementToCodeFn(element);
    return element;
  }
}

export default demos;
