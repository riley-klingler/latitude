/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 *
 * @flow strict
 */

const _sizes = {
  xxxs: {
    baseName: "xxxs",
    className: "Xxxs",
    svgSize: 10,
  },
  xxs: {
    baseName: "xxs",
    className: "Xxs",
    svgSize: 11,
  },
  xs: {
    baseName: "xs",
    className: "Xs",
    svgSize: 12,
  },
  s: {
    baseName: "sm",
    className: "Sm",
    alternateClassName: "Sml",
    svgSize: 16,
  },
  m: {
    baseName: "md",
    className: "Md",
    alternateClassName: "Med",
    svgSize: 18,
  },
  l: {
    baseName: "lg",
    className: "Lg",
    alternateClassName: "Lrg",
    svgSize: 22,
  },
  xl: {
    baseName: "xl",
    className: "Xl",
    svgSize: 25,
  },
  xxl: {
    baseName: "xxl",
    className: "Xxl",
    svgSize: 36,
  },
};

export type Size = $Keys<typeof _sizes>;

// eslint-disable-next-line import/prefer-default-export
export const sizes: {
  [name: Size]: {
    baseName: string,
    className: string,
    alternateClassName?: string,
    svgSize: number,
  },
} = _sizes;
