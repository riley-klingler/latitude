/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import * as React from "react";
import type {DemoFile} from "../design_system/types/demoTypes";
import Flag from "../Flag";
import Text from "../Text";
import DeprecatedVerticalGroup from "../DeprecatedVerticalGroup";

const demos: DemoFile = {
  demos: [
    {
      type: "text",
      title: "Information",
      description:
        "This component implements ~250 [ISO 3166-1 alpha 2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) flags. The flags have been standardized on a square grid, but the majority are rectangular which leads to vertical padding _built-in_ to the component (because most flags are rectangular). ",
    },
    {
      type: "code",
      title: "Basic Usage",
      example: fn => {
        const component = <Flag countryCode="AU" maxWidth={64} />;
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "In-practice example",
      example: fn => {
        const component = (
          <DeprecatedVerticalGroup>
            <Flag countryCode="CA" maxWidth={32} />
            <Text weight="bold" scale="title">
              Canada
            </Text>
            <Text>Pretty great, eh?</Text>
          </DeprecatedVerticalGroup>
        );
        fn(component);
        return component;
      },
    },
  ],
};

export default demos;
