/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import type {DemoFile} from "../design_system/types/demoTypes";

import TextLinkAction from "../TextLinkAction";
import Text from "../Text";

const demos: DemoFile = {
  demos: [
    {
      type: "text",
      title: "Why is this a component?",
      description:
        "In general, try and use a Link, which takes an href not an onClick. Links are more accessible (hovering over them shows the link preview in the browser), and don't require JavaScript. Sometimes, however, you need to have something that looks and feels like a Link but takes an onClick. This is rendered as a button, but can be nested in <Text> like a Link.",
    },
    {
      type: "code",
      title: "Basic Usage",
      description:
        "Just bring your link text and an onClick function and you're good to go!",
      example: fn => {
        const component = (
          <TextLinkAction onClick={() => {}}>Show me the world</TextLinkAction>
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
          <TextLinkAction linkStyle="subtle" onClick={() => {}}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Subtle links aren't blue.
          </TextLinkAction>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Font Weights",
      example: fn => {
        const component = (
          <TextLinkAction weight="bold" onClick={() => {}}>
            Bold font weight looks nice too
          </TextLinkAction>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Text and LinkAction 👭",
      example: fn => {
        const component = (
          <Text>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Wouldn't it be nice if everything were this{" "}
            <TextLinkAction onClick={() => {}}>easy</TextLinkAction>.
          </Text>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Text and LinkAction with onClick function",
      example: fn => {
        const component = (
          <Text>
            Click on{" "}
            <TextLinkAction
              onClick={() => {
                // eslint-disable-next-line no-alert
                alert("LinkAction alert");
              }}
            >
              me
            </TextLinkAction>{" "}
            to trigger an alert
          </Text>
        );
        fn(component);
        return component;
      },
    },
  ],
};
export default demos;
