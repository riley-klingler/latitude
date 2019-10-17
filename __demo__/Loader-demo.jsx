/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import * as React from "react";
import type {DemoFile} from "../design_system/types/demoTypes";
import Loader from "../Loader";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Standard implementation",
      description:
        "By default, Loader will span the full width of it's container and center the spinner.",
      example: fn => {
        const component = (
          <Loader loaded={false}>
            This content only appears once loaded is true
          </Loader>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Inline",
      description:
        "The isFullWidth prop will return an inline-block Loader when set to false. This can be useful for times when you need to apply special formatting to the loader.",
      example: fn => {
        const component = <Loader loaded={false} isFullWidth={false} />;
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Custom Size",
      description:
        "Loaders are 50px square by default, but this size can be overridden using the size prop.",
      example: fn => {
        const component = <Loader loaded={false} size={36} />;
        fn(component);
        return component;
      },
    },
  ],
};

export default demos;
