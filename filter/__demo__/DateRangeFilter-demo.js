/**
 * TEAM: frontend_infra
 * @flow
 */

import {type DemoFile} from "../../design_system/types/demoTypes";
import DateRangeFilterBasic from "./DateRangeFilterBasicUsage.demo";

const demos: DemoFile = {
  demos: [
    {
      type: "live",
      fullWidth: true,
      example: DateRangeFilterBasic,
    },
  ],
};
export default demos;
