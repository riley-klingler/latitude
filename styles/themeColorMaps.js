/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 *
 * @flow strict
 */

import {type Theme, TRANSMISSION, BASE} from "../context/ThemeNameContext";

export type ThemeColorMap = {|
  +primary: "blue30",
  +brand: "blue40",
|} | {|
  +primary: "green40",
  +brand: "green30",
|};

const themeColorMaps: {[Theme]: ThemeColorMap} = {
  [BASE]: Object.freeze({
    primary: "blue30",
    brand: "blue40",
  }),
  [TRANSMISSION]: Object.freeze({
    primary: "green40",
    brand: "green30",
  }),
};

export default themeColorMaps;
