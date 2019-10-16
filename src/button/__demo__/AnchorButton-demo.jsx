/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import * as React from "react";
import type {DemoFile} from "../../design_system/types/demoTypes";
import AnchorButton from "../AnchorButton";
import DeprecatedHorizontalGroup from "../../DeprecatedHorizontalGroup";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic Usage",
      description:
        "Solid buttons should be the singular and primary action on a page. Choose an intent that represents the goal and priority of the action.",
      example: fn => {
        const component = (
          <AnchorButton
            href="/design"
            intent="basic"
            kind="hollow"
            label="Open in NetCHB"
          />
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Disabled AnchorButton",
      example: fn => {
        const component = (
          <DeprecatedHorizontalGroup>
            <AnchorButton
              href="/design"
              intent="basic"
              kind="solid"
              label="Download"
              download={true}
            />
            <AnchorButton
              href="/design"
              intent="basic"
              kind="solid"
              disabled={true}
              label="Download"
              download={true}
            />
          </DeprecatedHorizontalGroup>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "AnchorButton kinds",
      example: fn => {
        const component = (
          <DeprecatedHorizontalGroup>
            <AnchorButton
              href="/design"
              intent="basic"
              kind="solid"
              label="Open"
            />
            <AnchorButton
              href="/design"
              intent="basic"
              kind="hollow"
              label="Open"
            />
            <AnchorButton
              href="/design"
              intent="basic"
              kind="blank"
              label="Open"
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
