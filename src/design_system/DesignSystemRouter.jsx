/**
 * TEAM: frontend_infra
 * @flow
 */

import {createBrowserRouter, createRender} from "found";
import routeConfig from "design_system/routeConfig";
import {hot} from "react-hot-loader";

const BrowserRouter = createBrowserRouter({
  routeConfig,
  render: createRender(),
});

export default hot(module)(BrowserRouter);
