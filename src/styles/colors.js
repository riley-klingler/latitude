/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 *
 * @flow strict
 */

const colors = Object.freeze({
  blackDoNotUse: "#000000", // 🚨 DO NOT USE IN PRODUCT 🚨
  white: "#FFFFFF",
  grey10: "#F7FAFC", // backgrounds and hovers
  grey20: "#EDF3F7", // selected states or hovers on grey10 backgrounds
  grey30: "#CED7DE", // borders, rules, or muted UI
  grey40: "#B0BAC2", // placeholder or disabled text
  grey50: "#6E7881", // secondary type color
  grey60: "#18191A", // Product "black" — used as the main text color
  red10: "#FFEBEB",
  red20: "#FCBDBD",
  red30: "#F2555F", // Product red
  red40: "#EF3340", // Brand red
  red45: "#D92736", // Accessible product red
  red50: "#A6212A",
  red60: "#591317",
  yellow10: "#FCF6DE",
  yellow20: "#FFE880",
  yellow30: "#FFDE4C", // Product yellow
  yellow40: "#FFD100", // Brand yellow
  yellow50: "#FF9419", // Product "orange"
  yellow60: "#662E00",
  blue10: "#E7F1FF",
  blue20: "#BAD2FF",
  blue30: "#3E6BE6", // Product blue
  blue40: "#265DF1", // Brand blue
  blue50: "#1942B3",
  blue60: "#0E2259",
  green10: "#EBFFF1",
  green20: "#B0EBC3",
  green30: "#66CC86", // Brand green // Should switch to #3DC468 once we decide with dispatch
  green40: "#12B873", // Product green
  green50: "#2DA854",
  green60: "#124D25",
  cyan10: "#E8F6FF",
  cyan20: "#BEE6FF",
  cyan30: "#8CDBFF", // Product cyan
  cyan40: "#66CFFF", // Brand cyan
  cyan50: "#0A8FCC",
  cyan60: "#00384C",
  purple10: "#F4EDFF",
  purple20: "#C4AEE8",
  purple30: "#8F62D9", // Product purple
  purple40: "#7B41D9", // Brand purple
  purple50: "#572E99",
  purple60: "#331B59",
});
export type ColorPalette = typeof colors;
export type Color = $Keys<ColorPalette>;
export type ColorValue = $Values<ColorPalette>;
export default colors;
