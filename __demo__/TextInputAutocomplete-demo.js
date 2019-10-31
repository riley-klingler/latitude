/**
 * TEAM: frontend_infra
 * @flow
 */

import type {DemoFile} from "../design_system/types/demoTypes";
import TextInputAutocompleteBasicUsage from "./TextInputAutocompleteBasicUsage.demo";

const demos: DemoFile = {
  demos: [
    {
      type: "live",
      example: TextInputAutocompleteBasicUsage,
    },
  ],
};

export default demos;
