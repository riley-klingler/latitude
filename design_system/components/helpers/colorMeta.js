/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 *
 * @flow strict
 */

import colors, {type Color, type ColorPalette} from "../../../styles/colors";

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
      | "yellow"
      | "green"
      | "cyan"
      | "purple",
    +additionalInformation?: string,
  |}
> = {
  blackDoNotUse: {
    contrastColor: "white",
    classification: "brand",
    colorFamily: "base",
  },
  white: {
    contrastColor: "grey60",
    classification: "utility",
    colorFamily: "base",
  },
  grey10: {
    contrastColor: "grey60",
    classification: "utility",
    colorFamily: "grey",
  },
  grey20: {
    contrastColor: "grey60",
    classification: "utility",
    colorFamily: "grey",
  },
  grey30: {
    contrastColor: "grey60",
    classification: "utility",
    colorFamily: "grey",
  },
  grey40: {
    contrastColor: "grey60",
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
  blue10: {
    contrastColor: "grey60",
    colorFamily: "blue",
  },
  blue20: {
    contrastColor: "grey60",
    colorFamily: "blue",
  },
  blue30: {
    contrastColor: "white",
    description: "The primary product color.",
    classification: "product",
    colorFamily: "blue",
  },
  blue40: {
    contrastColor: "white",
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
  cyan10: {
    contrastColor: "grey60",
    colorFamily: "cyan",
  },
  cyan20: {
    contrastColor: "grey60",
    colorFamily: "cyan",
  },
  cyan30: {
    contrastColor: "grey60",
    classification: "product",
    colorFamily: "cyan",
  },
  cyan40: {
    contrastColor: "grey60",
    classification: "brand",
    colorFamily: "cyan",
  },
  cyan50: {
    contrastColor: "white",
    colorFamily: "cyan",
  },
  cyan60: {
    contrastColor: "white",
    colorFamily: "cyan",
  },
  green10: {
    contrastColor: "grey60",
    colorFamily: "green",
  },
  green20: {
    contrastColor: "grey60",
    colorFamily: "green",
  },
  green30: {
    contrastColor: "grey60",
    classification: "product",
    colorFamily: "green",
  },
  green40: {
    contrastColor: "white",
    classification: "brand",
    colorFamily: "green",
  },
  green50: {
    contrastColor: "white",
    colorFamily: "green",
  },
  green60: {
    contrastColor: "white",
    colorFamily: "green",
  },
  red10: {
    contrastColor: "grey60",
    colorFamily: "red",
  },
  red20: {
    contrastColor: "grey60",
    colorFamily: "red",
  },
  red30: {
    contrastColor: "white",
    colorFamily: "red",
  },
  red40: {
    contrastColor: "white",
    classification: "brand",
    colorFamily: "red",
  },
  red45: {
    contrastColor: "white",
    classification: "product",
    additionalInformation:
      "red45 meets AA contrast standards and therefore is the designated product color when used in critical UI",
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
    contrastColor: "grey60",
    colorFamily: "purple",
  },
  purple20: {
    contrastColor: "grey60",
    colorFamily: "purple",
  },
  purple30: {
    contrastColor: "white",
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
  yellow10: {
    contrastColor: "grey60",
    colorFamily: "yellow",
  },
  yellow20: {
    contrastColor: "grey60",
    colorFamily: "yellow",
  },
  yellow30: {
    contrastColor: "grey60",
    classification: "product",
    colorFamily: "yellow",
  },
  yellow40: {
    contrastColor: "grey60",
    classification: "brand",
    colorFamily: "yellow",
  },
  yellow50: {
    contrastColor: "white",
    classification: "product",
    colorFamily: "yellow",
  },
  yellow60: {
    contrastColor: "white",
    colorFamily: "yellow",
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
