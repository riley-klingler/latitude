/**
 * TEAM: frontend_infra
 * WATCHERS: Stephane-Y
 *
 * @flow
 *
 * ATTN: DO NOT EDIT THIS FILE MANUALLY!
 * This data comes from route_config.yaml
 * If you need to change it, edit route_config.yaml, then run:
 *     bundle exec rake js:dynamic_routes
 */

import {type ModuleLoaded} from "tools/webpack";

/* eslint-disable camelcase, import/extensions, quotes, comma-spacing */
function DesignSystemApp_core_design(): Promise<ModuleLoaded> {
  const modulePath = "design_system/DesignSystemApp.jsx";
  const chunkName = "DesignSystemApp_core_design";
  return import(/* webpackChunkName: "DesignSystemApp_core_design" */ "design_system/DesignSystemApp.jsx").then(
    importedModule => ({importedModule, modulePath: `./${modulePath}`})
  );
}

const routeConfigs = {
  "./design_system/DesignSystemApp.jsx": {
    routes: ["core_design", "core_design_child"],
    static: false,
    fn: DesignSystemApp_core_design,
  },
};
export {routeConfigs};
// RouteConstants
export default Object.keys(routeConfigs).reduce((cs, c) => {
  for (const route of routeConfigs[c].routes) {
    cs[route] = route;
  }
  return cs;
}, {});
