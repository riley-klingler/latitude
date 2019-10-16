/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import type {DemoFile} from "../design_system/types/demoTypes";
import * as React from "react";
import Text from "../Text";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Text scale",
      description:
        "Choosing a scale will set the type properties like line-height and size and will choose a corresponding semantic tag.",
      example: fn => {
        const component = (
          <Text scale="title">
            The freight forwarder for modern logistics teams
          </Text>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Text weight",
      example: fn => {
        // eslint-disable-next-line react/no-unescaped-entities
        const component = <Text weight="bold">I'm strong</Text>;
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Nested Text",
      example: fn => {
        const component = (
          <Text>
            Cool story, <Text weight="bold">bro</Text>.
          </Text>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Italicized Text",
      example: fn => {
        const component = <Text fontStyle="italic">I&apos;m in italics</Text>;
        fn(component);
        return component;
      },
    },
  ],
};

export default demos;
