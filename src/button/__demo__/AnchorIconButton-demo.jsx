/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import type {DemoFile} from "../../design_system/types/demoTypes";
import * as React from "react";
import AnchorIconButton from "../AnchorIconButton";

import DeprecatedHorizontalGroup from "../../DeprecatedHorizontalGroup";
import DeprecatedVerticalGroup from "../../DeprecatedVerticalGroup";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic Usage",
      example: fn => {
        const component = (
          <AnchorIconButton href="/design" iconName="print" intent="basic" />
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
          <DeprecatedVerticalGroup spacing="m">
            <AnchorIconButton
              href="/design"
              size="s"
              iconName="download"
              label="Download attachment"
            />
            <AnchorIconButton
              href="/design"
              size="m"
              iconName="download"
              label="Download attachment"
            />
            <AnchorIconButton
              href="/design"
              size="l"
              iconName="download"
              label="Download attachment"
            />
          </DeprecatedVerticalGroup>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Open in new tab",
      description: "Optionally specify that the link should open in a new tab.",
      example: fn => {
        const component = (
          <AnchorIconButton
            kind="blank"
            iconName="rocket"
            href="https://google.com"
            disableSpaHijack={true}
            openInNewTab={true}
          />
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Disabled",
      example: fn => {
        const component = (
          <DeprecatedHorizontalGroup spacing="m">
            <AnchorIconButton
              href="/design"
              size="m"
              iconName="download"
              label="Download attachment"
            />
            <AnchorIconButton
              href="/design"
              disabled={true}
              size="m"
              iconName="download"
              label="Download attachment"
            />
          </DeprecatedHorizontalGroup>
        );
        fn(component);
        return component;
      },
    },
  ],
};

export default demos;
