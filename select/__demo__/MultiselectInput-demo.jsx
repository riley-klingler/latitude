/**
 * TEAM: frontend_infra
 * @flow
 */

import type {DemoFile} from "../../design_system/types/demoTypes";
import MultiselectInputBasicUsage from "./MultiselectInputBasicUsage.demo";

const demos: DemoFile = {
  demos: [
    {
      type: "live",
      fullWidth: true,
      example: MultiselectInputBasicUsage,
    },
  ],
};

export default demos;
