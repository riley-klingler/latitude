/**
 * TEAM: frontend_infra
 * @flow
 */

import {type DemoFile} from "../../design_system/types/demoTypes";

import ProgressTrackerBasicUsage from "./ProgressTrackerBasicUsage.demo";
import ProgressTrackerPending from "./ProgressTrackerPending.demo";
import ProgressTrackerActive from "./ProgressTrackerActive.demo";
import ProgressTrackerActiveError from "./ProgressTrackerActiveError.demo";
import ProgressTrackerCompleted from "./ProgressTrackerCompleted.demo";
import ProgressTrackerCompletedError from "./ProgressTrackerCompletedError.demo";

const demos: DemoFile = {
  demos: [
    {
      type: "live",
      example: ProgressTrackerBasicUsage,
    },
    {
      type: "live",
      example: ProgressTrackerPending,
    },
    {
      type: "live",
      example: ProgressTrackerActive,
    },
    {
      type: "live",
      example: ProgressTrackerActiveError,
    },
    {
      type: "live",
      example: ProgressTrackerCompleted,
    },
    {
      type: "live",
      example: ProgressTrackerCompletedError,
    },
  ],
};

export default demos;
