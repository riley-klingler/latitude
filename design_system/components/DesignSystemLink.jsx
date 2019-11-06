/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 *
 * @flow
 */

// COPIED FROM Link.jsx, but using the "found" react routing library instead of <a>. Use the normal Link for leaving the page.

import * as React from "react";
import {StyleSheet} from "aphrodite";

import {typeScale, fontWeights} from "../../styles";
import linkStyles, {type LinkStyle} from "../../styles/linkStyles";
import {BASE} from "../../context/ThemeNameContext";
import typeof Text from "../../Text";

import Link from "../../Link";
import RouterContext from "../../context/RouterContext";

type Props = {|
  // Link tags can only wrap strings. If you find this restrictive, contact @theseus. The thought is we want to avoid the temptation for folks to wrap entire apps or components in Link tags, since that usually means a different component should be built.
  +children: ?React.ChildrenArray<string | React.Element<Text>>,
  // The url that the link component will direct to. Can't be used with onClick.
  +href: string,
  // Should it match the URL exactly
  +exact: boolean,
  +linkStyle: LinkStyle,
  // The size of the link which is is a subset of TypeScale's sizes.
  +scale: "base" | "subtext" | "title",
  // The boldness of the link.
  +weight: $Keys<typeof fontWeights>,
  // Select a custom display property depending on how you intend to use the link.
  +display:
    | "inline"
    | "inline-block"
    | "flex"
    | "block"
    | "inline-flex"
    | "none",
  // DO NOT USE this prop. _isNested is only for handling instances where <Text/> components are nested. Since semantic HTML text tags shouldn't be nested ever we use <span> for any nested <Text/> components.
  +_isNested: boolean,
  +activeStyles?: {},
|};

/**
 * short: Link anywhere on the world wide web with this simple component.
 * status: Stable
 * category: Interaction
 * @extends React.Component */
// eslint-disable-next-line flexport/puritan-extends-component,react
export default class DesignSys extends React.PureComponent<Props> {
  static contextType = RouterContext;

  static defaultProps = {
    scale: "base",
    exact: true,
    linkStyle: "default",
    weight: "regular",
    _isNested: false,
    display: "inline-block",
  };

  render() {
    const {
      activeStyles,
      children,
      exact,
      linkStyle,
      scale,
      weight,
      display,
      href,
    } = this.props;
    const isActive = this.context.isActive(href);
    return (
      <Link
        exact={exact}
        style={{
          ...styles.standardOverride._definition,
          ...typeScale[scale],
          fontWeight: fontWeights[weight],
          // $FlowUpgradeFixMe(0.110.1 -> 0.111.1)
          ...linkStyles(BASE)[linkStyle]._definition,
          display,
          ...(isActive && activeStyles),
        }}
        href={href}
      >
        {children}
      </Link>
    );
  }
}

const styles = StyleSheet.create({
  standardOverride: {
    // override for our questionable OOCSS bottom margins on all semantic type tags
    marginBottom: 0,
    marginTop: 0,
  },
});
