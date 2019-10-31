/**
 * TEAM: frontend_infra
 * @flow
 */

import type {DemoFile} from "../design_system/types/demoTypes";
import CheckboxBasicUsage from "./CheckboxBasicUsage.demo";

const demos: DemoFile = {
  demos: [
    {
      type: "live",
      example: CheckboxBasicUsage,
    },
  ],
};

export default demos;
