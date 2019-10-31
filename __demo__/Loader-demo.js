/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import type {DemoFile} from "../design_system/types/demoTypes";

import LoaderBasicUsage from "./Loader/LoaderBasicUsage.demo";
import LoaderInline from "./Loader/LoaderInline.demo";
import LoaderCustomSize from "./Loader/LoaderCustomSize.demo";

const demos: DemoFile = {
  demos: [
    {
      type: "live",
      example: LoaderBasicUsage,
    },
    {
      type: "live",
      example: LoaderInline,
    },
    {
      type: "live",
      example: LoaderCustomSize,
    },
  ],
};

export default demos;
