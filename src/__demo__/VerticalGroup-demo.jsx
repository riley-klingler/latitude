/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import type {DemoFile} from "../design_system/types/demoTypes";
import * as React from "react";
import Text from "../Text";
import DeprecatedVerticalGroup from "../DeprecatedVerticalGroup";
import DeprecatedHorizontalGroup from "../DeprecatedHorizontalGroup";
import {css, StyleSheet} from "aphrodite";

const demoStyles = StyleSheet.create({
  horizontalChild: {
    border: "1px dotted purple",
  },
  verticalChild: {
    border: "1px dotted red",
  },
});

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Vertical Group",
      example: fn => {
        const component = (
          <DeprecatedVerticalGroup>
            <div className={css(demoStyles.verticalChild)}>
              <Text scale="title">Flexport HQ</Text>
            </div>
            <div className={css(demoStyles.verticalChild)}>
              <Text display="block">760 Market St</Text>
              <Text display="block">San Francisco, CA 94102</Text>
            </div>
          </DeprecatedVerticalGroup>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Combo",
      description:
        "Vertical groups can easily be combined with horizontal groups for quick and easy layouts. In this example, horizontal groups are outlined in purple and vertical groups are outlined in red.",
      example: fn => {
        const component = (
          <DeprecatedVerticalGroup>
            <div className={css(demoStyles.verticalChild)}>
              <DeprecatedHorizontalGroup mainAlign="between">
                <div className={css(demoStyles.horizontalChild)}>
                  <Text weight="bold">Transportation Mode</Text>
                </div>
                <div className={css(demoStyles.horizontalChild)}>
                  <Text>Air</Text>
                </div>
              </DeprecatedHorizontalGroup>
            </div>
            <div className={css(demoStyles.verticalChild)}>
              <DeprecatedHorizontalGroup mainAlign="between">
                <div className={css(demoStyles.horizontalChild)}>
                  <Text weight="bold">Incoterm</Text>
                </div>
                <div className={css(demoStyles.horizontalChild)}>
                  <Text>FOB</Text>
                </div>
              </DeprecatedHorizontalGroup>
            </div>
          </DeprecatedVerticalGroup>
        );
        fn(component);
        return component;
      },
    },
  ],
};

export default demos;
