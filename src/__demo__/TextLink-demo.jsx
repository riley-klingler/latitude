/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import type {DemoFile} from "design_system/types/demoTypes";
import * as React from "react";
import TextLink from "TextLink";
import Text from "Text";

const demos: DemoFile = {
  demos: [
    {
      type: "text",
      title: "Why is this a component?",
      description:
        "We use links quite often and this component makes styling and adding links easy and consistent.",
    },
    {
      type: "code",
      title: "Basic Usage",
      description:
        "Just bring your link text and an href and you're good to go!",
      example: fn => {
        const component = (
          <TextLink href="/design/components/contributing">
            Show me the world
          </TextLink>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Styles",
      example: fn => {
        const component = (
          <TextLink
            linkStyle="subtle"
            href="/careers/department/engineering"
            disableSpaHijack={true}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Subtle links aren't blue.
          </TextLink>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Text and Link 👭",
      example: fn => {
        const component = (
          <Text>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Wouldn't it be nice if everything were this{" "}
            <TextLink href="https://en.wikipedia.org/wiki/Freight_forwarder">
              easy
            </TextLink>
            .
          </Text>
        );
        fn(component);
        return component;
      },
    },
  ],
};
export default demos;
