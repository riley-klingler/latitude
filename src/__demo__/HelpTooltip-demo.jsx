/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import * as React from "react";
import type {DemoFile} from "../design_system/types/demoTypes";
import DeprecatedHorizontalGroup from "../DeprecatedHorizontalGroup";
import Text from "../Text";
import HelpTooltip from "../HelpTooltip";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic Usage",
      example: fn => {
        const component = <HelpTooltip text="Check it out" />;

        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Help Tooltip next to Text",
      example: fn => {
        const component = (
          <DeprecatedHorizontalGroup>
            <Text>Check me out</Text>
            <HelpTooltip text="This is a tooltip" />
          </DeprecatedHorizontalGroup>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Custom Icon",
      example: fn => {
        const component = (
          <HelpTooltip iconName="attention" text="This is very important!" />
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Custom Tooltip Position",
      example: fn => {
        const component = (
          <HelpTooltip text="Look how flexible 🧜‍♀️" position="top" />
        );
        fn(component);
        return component;
      },
    },
  ],
};
export default demos;
