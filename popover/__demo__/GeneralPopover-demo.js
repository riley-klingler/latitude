/**
 * TEAM: frontend_infra
 * @flow
 */

import type {DemoFile} from "../../design_system/types/demoTypes";
import GeneralPopoverContent from "./GeneralPopoverContent.demo";
import GeneralPopoverImplementation from "./GeneralPopoverImplementation.demo";

const demos: DemoFile = {
  demos: [
    {
      type: "live",
      example: GeneralPopoverContent,
    },
    {
      type: "live",
      example: GeneralPopoverImplementation,
    },
  ],
};

export default demos;
