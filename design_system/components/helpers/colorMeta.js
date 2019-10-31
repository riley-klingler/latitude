/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 *
 * @flow strict
 */

import colors, {type Color, type ColorPalette} from "../../../colors";

export const colorMeta: $ObjMap<
  ColorPalette,
  <T>() => {|
    +contrastColor: Color,
    +description?: string,
    +classification?: "utility" | "brand" | "product",
    +colorFamily:
      | "base"
      | "grey"
      | "blue"
      | "red"
      | "orange"
      | "green"
      | "indigo"
      | "purple",
    +additionalInformation?: string,
  |}
> = {
  white: {
    contrastColor: "black",
    classification: "utility",
    colorFamily: "base",
  },
  grey10: {
    contrastColor: "black",
    classification: "utility",
    colorFamily: "grey",
  },
  grey20: {
    contrastColor: "black",
    classification: "utility",
    colorFamily: "grey",
  },
  grey30: {
    contrastColor: "black",
    classification: "utility",
    colorFamily: "grey",
  },
  grey40: {
    contrastColor: "white",
    classification: "utility",
    colorFamily: "grey",
  },
  grey50: {
    contrastColor: "white",
    classification: "utility",
    colorFamily: "grey",
  },
  grey60: {
    contrastColor: "white",
    classification: "utility",
    colorFamily: "grey",
  },
  black: {
    contrastColor: "white",
    classification: "brand",
    colorFamily: "base",
  },
  blue10: {
    contrastColor: "black",
    colorFamily: "blue",
  },
  blue20: {
    contrastColor: "black",
    colorFamily: "blue",
  },
  blue30: {
    contrastColor: "black",
    description: "The primary product color.",
    classification: "product",
    colorFamily: "blue",
  },
  blue40: {
    contrastColor: "black",
    classification: "brand",
    colorFamily: "blue",
  },
  blue50: {
    contrastColor: "white",
    colorFamily: "blue",
  },
  blue60: {
    contrastColor: "white",
    colorFamily: "blue",
  },
  indigo10: {
    contrastColor: "black",
    colorFamily: "indigo",
  },
  indigo20: {
    contrastColor: "black",
    colorFamily: "indigo",
  },
  indigo30: {
    contrastColor: "white",
    classification: "product",
    colorFamily: "indigo",
  },
  indigo40: {
    contrastColor: "white",
    classification: "brand",
    colorFamily: "indigo",
  },
  indigo50: {
    contrastColor: "white",
    colorFamily: "indigo",
  },
  indigo60: {
    contrastColor: "white",
    colorFamily: "indigo",
  },
  green10: {
    contrastColor: "black",
    colorFamily: "green",
  },
  green20: {
    contrastColor: "black",
    colorFamily: "green",
  },
  green30: {
    contrastColor: "black",
    classification: "product",
    colorFamily: "green",
  },
  green40: {
    contrastColor: "black",
    classification: "brand",
    colorFamily: "green",
  },
  green50: {
    contrastColor: "black",
    colorFamily: "green",
  },
  green60: {
    contrastColor: "white",
    colorFamily: "green",
  },
  red10: {
    contrastColor: "black",
    colorFamily: "red",
  },
  red20: {
    contrastColor: "black",
    colorFamily: "red",
  },
  red30: {
    contrastColor: "black",
    colorFamily: "red",
  },
  red40: {
    contrastColor: "white",
    classification: "brand",
    colorFamily: "red",
  },
  red50: {
    contrastColor: "white",
    colorFamily: "red",
  },
  red60: {
    contrastColor: "white",
    colorFamily: "red",
  },
  purple10: {
    contrastColor: "black",
    colorFamily: "purple",
  },
  purple20: {
    contrastColor: "black",
    colorFamily: "purple",
  },
  purple30: {
    contrastColor: "black",
    classification: "product",
    colorFamily: "purple",
  },
  purple40: {
    contrastColor: "white",
    classification: "brand",
    colorFamily: "purple",
  },
  purple50: {
    contrastColor: "white",
    colorFamily: "purple",
  },
  purple60: {
    contrastColor: "white",
    colorFamily: "purple",
  },
  orange10: {
    contrastColor: "black",
    colorFamily: "orange",
  },
  orange20: {
    contrastColor: "black",
    colorFamily: "orange",
  },
  orange30: {
    contrastColor: "black",
    classification: "product",
    colorFamily: "orange",
  },
  orange40: {
    contrastColor: "white",
    classification: "brand",
    colorFamily: "orange",
  },
  orange50: {
    contrastColor: "white",
    classification: "product",
    colorFamily: "orange",
  },
  orange60: {
    contrastColor: "white",
    colorFamily: "orange",
  },
};

const buildColorFamilies = () => {
  const colorFamilies = {};
  Object.keys(colors).forEach(color => {
    const fam = colorMeta[color].colorFamily;
    if (!colorFamilies[fam]) {
      colorFamilies[colorMeta[color].colorFamily] = [];
    }
    colorFamilies[colorMeta[color].colorFamily].push(color);
  });
  return colorFamilies;
};

export const colorFamilies = buildColorFamilies();
