/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import type {DemoFile} from "../design_system/types/demoTypes";
import ProgressBarIndefinite from "./ProgressBarIndefinite.demo";

const demos: DemoFile = {
  demos: [
    {
      type: "live",
      example: ProgressBarIndefinite,
    },
  ],
};

export default demos;
