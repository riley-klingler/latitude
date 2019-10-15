/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import type {DemoFile} from "design_system/types/demoTypes";
import * as React from "react";
import Text from "Text";
import Button from "button/Button";
import Icon from "Icon";
import DeprecatedHorizontalGroup from "DeprecatedHorizontalGroup";
import {css, StyleSheet} from "aphrodite";

const demoStyles = StyleSheet.create({
  child: {
    border: "1px dotted purple",
  },
});

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic usage",
      example: fn => {
        const component = (
          <DeprecatedHorizontalGroup>
            <div className={css(demoStyles.child)}>
              <Icon iconName="attention" />
            </div>
            <div className={css(demoStyles.child)}>
              <Text>Always follow the rules</Text>
            </div>
          </DeprecatedHorizontalGroup>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Easily adjust standard spacing",
      example: fn => {
        const component = (
          <DeprecatedHorizontalGroup spacing="m">
            <div className={css(demoStyles.child)}>
              <Button intent="basic" kind="solid">
                Save
              </Button>
            </div>
            <div className={css(demoStyles.child)}>
              <Button kind="hollow">Cancel</Button>
            </div>
          </DeprecatedHorizontalGroup>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Horizontal distribution",
      description:
        "The mainAlign prop specifies the justify-content property which defines how flex elements are distributed on the main axis of the container. Read more at [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).",
      example: fn => {
        const component = (
          <DeprecatedHorizontalGroup mainAlign="between">
            <div className={css(demoStyles.child)}>
              <Text weight="bold">Transportation Mode</Text>
            </div>
            <div className={css(demoStyles.child)}>
              <Text>Air</Text>
            </div>
          </DeprecatedHorizontalGroup>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Vertical distribution",
      description:
        "The crossAlign prop specifies the align-items property which defines how flex elements are distributed on the cross-axis of the container. Read more at [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items). In this example, the message next to the button packs from the end of the flexbox element.",
      example: fn => {
        const component = (
          <DeprecatedHorizontalGroup crossAlign="end">
            <div className={css(demoStyles.child)}>
              <Button intent="danger" kind="solid">
                Delete
              </Button>
            </div>
            <div className={css(demoStyles.child)}>
              <Text>Some important info</Text>
            </div>
          </DeprecatedHorizontalGroup>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Fill",
      description:
        "In some scenarios it can be helpful to have the children grow to fill the container. When set to true, fill will set each child to fill it's flex container.",
      example: fn => {
        const component = (
          <DeprecatedHorizontalGroup spacing="m" fill={true}>
            <div className={css(demoStyles.child)}>
              <Button intent="basic" kind="solid" width="full">
                Save
              </Button>
            </div>
            <div className={css(demoStyles.child)}>
              <Button kind="hollow" width="full">
                Cancel
              </Button>
            </div>
          </DeprecatedHorizontalGroup>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Basis",
      description:
        "While limited in capabilities, setting the basis allows you to primatively allocate the portion of container to the flex children. Basis is limited to an equal allocation across all children—for more complex usage it is advised to write custom CSS.",
      example: fn => {
        const component = (
          <DeprecatedHorizontalGroup spacing="m" basis={25}>
            <div className={css(demoStyles.child)}>
              <Text>1</Text>
            </div>
            <div className={css(demoStyles.child)}>
              <Text>2</Text>
            </div>
            <div className={css(demoStyles.child)}>
              <Text>3</Text>
            </div>
            <div className={css(demoStyles.child)}>
              <Text>4</Text>
            </div>
          </DeprecatedHorizontalGroup>
        );
        fn(component);
        return component;
      },
    },
  ],
};

export default demos;
