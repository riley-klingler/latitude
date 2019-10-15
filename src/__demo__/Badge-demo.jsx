/**
 * TEAM: frontend_infra
 * @flow
 */

import type {DemoFile} from "design_system/types/demoTypes";
import * as React from "react";
import Badge from "Badge";
import Button from "button/Button";
import Icon from "Icon";
import Text from "Text";
import Group from "Group";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic usage on an icon",
      description:
        "When wrapping an icon with the badge, it is recommended that the icon size be no smaller than 'l'.",
      example: elementToCodeFn => {
        const example = (
          <Badge count={12}>
            <Icon iconName="bell" size="l" />
          </Badge>
        );

        elementToCodeFn(example);

        return example;
      },
    },
    {
      type: "code",
      title: "Basic usage on a button",
      example: elementToCodeFn => {
        const example = (
          <Badge count={12}>
            <Button>Shipping Orders</Button>
          </Badge>
        );

        elementToCodeFn(example);

        return example;
      },
    },
    {
      type: "code",
      title: "Overflow",
      description:
        "The max property determines the maximum numerical value displayed. Anything higher will be rendered as the max value with a plus sign",
      example: elementToCodeFn => {
        const example = (
          <Badge count={54} max={10}>
            <Icon iconName="bell" size="xl" />
          </Badge>
        );

        elementToCodeFn(example);

        return example;
      },
    },
    {
      type: "code",
      title: "Standalone",
      description:
        "When the badge is not wrapping anything, it is standalone. It can then be positioned and used like a normal inline element",
      example: elementToCodeFn => {
        const example = (
          <Group>
            <Text>Notifications</Text>
            <Badge intent="pending" count={54} />
          </Group>
        );

        elementToCodeFn(example);

        return example;
      },
    },
    {
      type: "code",
      title: "Count is boolean",
      description:
        "When the count is a boolean, the badge is rendered as a dot as long as count is true",
      example: elementToCodeFn => {
        const example = (
          <Group>
            <Badge count={true}>
              <Button>Shipping Orders</Button>
            </Badge>
            <Badge count={true}>
              <Icon iconName="bell" size="xl" />
            </Badge>
          </Group>
        );

        elementToCodeFn(example);

        return example;
      },
    },
    {
      type: "code",
      title: "Intent",
      description:
        "The Intent prop can be used to create badges of different colors, conveying different meanings",
      example: elementToCodeFn => {
        const example = (
          <Group>
            <Badge intent="ready" count={12} />
            <Badge intent="ready-green" count={30} />
            <Badge intent="pending" count={54} />
            <Badge intent="error" count={8} />
            <Badge intent="complete" count={231} />
          </Group>
        );

        elementToCodeFn(example);

        return example;
      },
    },
  ],
};

export default demos;
