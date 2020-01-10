/**
 * TEAM: frontend_infra
 * @flow
 */

import {createBrowserRouter, createRender} from "found";
import {hot} from "react-hot-loader";
import routeConfig from "./routeConfig";

const BrowserRouter = createBrowserRouter({
  routeConfig,
  render: createRender(),
});

export default hot(module)(BrowserRouter);
