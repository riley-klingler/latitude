/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import * as React from "react";
import type {DemoFile} from "../design_system/types/demoTypes";
import ProgressBar from "../ProgressBar";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Indefinite progress",
      example: fn => {
        const component = (
          <ProgressBar loaded={false}>
            This content only appears once loaded is true
          </ProgressBar>
        );
        fn(component);
        return component;
      },
    },
  ],
};

export default demos;
