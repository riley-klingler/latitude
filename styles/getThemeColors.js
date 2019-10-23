/**
 * TEAM: frontend_infra
 *
 * @flow strict
 */

import type {Theme} from "../context/ThemeNameContext";
import themeColorMaps from "./themeColorMaps";

export type ThemeColors = {|
  +primary: "blue30",
  +brand: "blue40",
|} | {|
  +primary: "green40",
  +brand: "green30",
|};

export default function getThemeColors(theme: Theme): ThemeColors {
  return themeColorMaps[theme];
}
