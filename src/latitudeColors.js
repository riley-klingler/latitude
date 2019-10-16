/**
 * TEAM: frontend_infra
 *
 * @flow strict
 *
 * These colors are _new_ (07/25/2019) and will replace
 * styles/colors. Please continue using styles/colors.
 * All colors usages will be codemodded to these colors
 * according to the map declared in this file. The old
 * file will be deleted.
 *
 */

import type {Color} from "./styles/colors";

const latitudeColors = Object.freeze({
  black: "#14171B",
  white: "#FFFFFF",
  grey10: "#F7F9FD",
  grey20: "#DAE3F3",
  grey30: "#C5D2E7",
  grey40: "#67768D",
  grey50: "#4B5564",
  grey60: "#39414D",
  red10: "#FFF5F5",
  red20: "#FDA6A6",
  red30: "#FA5959",
  red40: "#D92736",
  red50: "#BA0202",
  red60: "#800000",
  orange10: "#FFF7F0",
  orange20: "#FAC69D",
  orange30: "#F5954D",
  orange40: "#DA5A00",
  orange50: "#A64300",
  orange60: "#5C2500",
  blue10: "#F5FCFF",
  blue20: "#C2E0EF",
  blue30: "#94C1DF",
  blue40: "#6294BE",
  blue50: "#326089",
  blue60: "#0F2943",
  green10: "#F5FFFC",
  green20: "#BAF8EA",
  green30: "#82F2DA",
  green40: "#45DABE",
  green50: "#1DB595",
  green60: "#008062",
  purple10: "#F9F5FF",
  purple20: "#CEA1FA",
  purple30: "#AF50F5",
  purple40: "#9200DA",
  purple50: "#7700A6",
  purple60: "#43005C",
  indigo10: "#F5F6FF",
  indigo20: "#A2ACF2",
  indigo30: "#566AE5",
  indigo40: "#0723D8",
  indigo50: "#031ABA",
  indigo60: "#00108C",
});
export type LatitudeColorPalette = typeof latitudeColors;
export type LatitudeColor = $Keys<LatitudeColorPalette>;
export type LatitudeColorValue = $Values<LatitudeColorPalette>;
export default latitudeColors;
export const transmissionColors = Object.freeze({
  green10: "#EBFFF1",
  green20: "#B0EBC3",
  green30: "#66CC86",
  green40: "#12B873",
  green50: "#2DA854",
  green60: "#124D25",
});
type ColorMap = {
  [oldColor: Color]: LatitudeColorValue,
};
export const v3ColorMap: ColorMap = Object.freeze({
  blackDoNotUse: latitudeColors.black,
  white: latitudeColors.white,
  grey10: latitudeColors.grey10,
  grey20: latitudeColors.grey20,
  grey30: latitudeColors.grey30,
  grey40: latitudeColors.grey40,
  grey50: latitudeColors.grey50,
  grey60: latitudeColors.black,
  red10: latitudeColors.red10,
  red20: latitudeColors.red20,
  red30: latitudeColors.red30,
  red40: latitudeColors.red40,
  red45: latitudeColors.red40,
  red50: latitudeColors.red50,
  red60: latitudeColors.red60,
  yellow10: latitudeColors.orange10,
  yellow20: latitudeColors.orange20,
  yellow30: latitudeColors.orange30,
  yellow40: latitudeColors.orange40,
  yellow50: latitudeColors.orange50,
  yellow60: latitudeColors.orange60,
  blue10: latitudeColors.blue10,
  blue20: latitudeColors.blue20,
  blue30: latitudeColors.indigo30,
  blue40: latitudeColors.indigo40,
  blue50: latitudeColors.indigo50,
  blue60: latitudeColors.indigo60,
  green10: latitudeColors.green10,
  green20: latitudeColors.green20,
  green30: latitudeColors.green30,
  green40: latitudeColors.green40,
  green50: latitudeColors.green50,
  green60: latitudeColors.green60,
  cyan10: latitudeColors.blue10,
  cyan20: latitudeColors.blue20,
  cyan30: latitudeColors.blue30,
  cyan40: latitudeColors.blue40,
  cyan50: latitudeColors.blue50,
  cyan60: latitudeColors.blue60,
  purple10: latitudeColors.purple10,
  purple20: latitudeColors.purple20,
  purple30: latitudeColors.purple30,
  purple40: latitudeColors.purple40,
  purple50: latitudeColors.purple50,
  purple60: latitudeColors.purple60,
});
