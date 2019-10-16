/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import type {DemoFile} from "../../design_system/types/demoTypes";
import * as React from "react";
import Button from "../Button";
import DeprecatedHorizontalGroup from "../../DeprecatedHorizontalGroup";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic Usage",
      description:
        "Solid buttons should be the singular and primary action on a page. Choose an intent that represents the goal and priority of the action.",
      example: fn => {
        const component = <Button intent="basic" kind="solid" label="Dope" />;
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Button Intents",
      example: fn => {
        const component = (
          <DeprecatedHorizontalGroup>
            <Button intent="basic" kind="solid" label="Basic" />
            <Button intent="danger" kind="solid" label="Danger" />
          </DeprecatedHorizontalGroup>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "No Intent",
      description:
        "Hollow and bare buttons have the option to specify no intent. For a set of actions or an action that does not have special significance you can use intent='none'.",
      example: fn => {
        const component = (
          <DeprecatedHorizontalGroup>
            <Button kind="hollow" intent="none" label="Cancel" />
            <Button kind="bare" intent="none" label="Cancel" />
          </DeprecatedHorizontalGroup>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Hierarchy Example",
      example: fn => {
        const component = (
          <DeprecatedHorizontalGroup mainAlign="end">
            <Button intent="danger" kind="bare" label="Archive" />
            <Button intent="none" kind="hollow" label="Cancel" />
            <Button intent="basic" kind="solid" label="Save" />
          </DeprecatedHorizontalGroup>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Disabled buttons",
      example: fn => {
        const component = (
          <DeprecatedHorizontalGroup mainAlign="end">
            <Button
              intent="basic"
              kind="solid"
              label="Submit"
              disabled={true}
            />
            <Button
              intent="basic"
              kind="hollow"
              label="Print"
              disabled={true}
            />
            <Button
              intent="basic"
              kind="bare"
              label="Add Report"
              disabled={true}
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
