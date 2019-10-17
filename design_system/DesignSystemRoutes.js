/**
 * TEAM: frontend_infra
 * @flow strict
 */

/**
 * This file will export one function per valid route.
 *
 * The type of the routes is an opaque type; the union of all routes for all apps
 * (i.e. CoreRoute | CustomsRoute | DesignSystemRoute) are valid application links.
 *
 * Eventually, this file will be auto-generated from a more detailed route_config setup.
 */

export type DesignSystemRoute = string;

export const design = (): DesignSystemRoute => ["", "design"].join("/");

export const components = (componentName?: string): DesignSystemRoute =>
  ["", "design", "components", componentName].join("/");

export const gettingStarted = (): DesignSystemRoute =>
  ["", "design", "components", "getting-started"].join("/");

export const contributing = (): DesignSystemRoute =>
  ["", "design", "components", "contributing"].join("/");

export const resources = (): DesignSystemRoute =>
  ["", "design", "resources"].join("/");

export const guidelines = (
  guidelineName?:
    | "color-system"
    | "iconography"
    | "typography"
    | "forms"
    | "form-examples"
    | "filtering"
    | "shipments"
): DesignSystemRoute => ["", "design", "guidelines", guidelineName].join("/");

export const styles = (
  styleName?: "whitespace" | "colors"
): DesignSystemRoute => ["", "design", "styles", styleName].join("/");

export const playground = (): DesignSystemRoute =>
  ["", "design", "playground"].join("/");
