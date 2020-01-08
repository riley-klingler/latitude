/**
 * TEAM: frontend_infra
 * @flow strict
 */
import * as React from "react";

// https://github.com/4Catalyzer/farce#locations-and-location-descriptors
export type Location = {
  +action: "PUSH" | "REPLACE" | "POP",
  +delta: number,
  +hash: string,
  +index: number,
  +key?: string,
  +pathname: string,
  +query: {[key: string]: string},
  +search: string,
};

export type RouterType = {|
  +push: string => void,
  +replace: string => void,
  +isActive: (href: string, exact?: boolean) => boolean,
  +addTransitionHook: (
    (args: {pathname: string}) => void | Promise<boolean> | null
  ) => () => void,
  +SpaLinkElement: React.ComponentType<SpaLinkProps>,
  +location: Location,
|};

export type SpaLinkProps = {
  +href?: string,
  +Component?: React.ComponentType<mixed>,
  +children?: React.Node,
  +target?: string,
  +onClick?: MouseEvent => void,
};

export const SpaLinkElement = (props: SpaLinkProps) => {
  const {href, Component, children, ...otherProps} = props;
  const LinkComponent = Component || "a";
  return (
    // $FlowFixMe(ctan) Flow issue from upgrade (1.111.3 => 1.115.0)
    <LinkComponent href={href} {...otherProps}>
      {children}
    </LinkComponent>
  );
};

const BLANK_ROUTER = {
  addTransitionHook: () => () => {},
  isActive: () => false,
  SpaLinkElement,
  push: () => {},
  replace: () => {},
  // this won't work, but non specialist apps don't use this (yet), and it's basically window.location
  location: {
    pathname: "",
    delta: 0,
    index: 0,
    hash: "",
    search: "",
    query: {},
    action: "POP",
  },
};

const RouterContext: React.Context<RouterType> = React.createContext(
  BLANK_ROUTER
);
export default RouterContext;
