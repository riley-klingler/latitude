/**
 * TEAM: frontend_infra
 * @flow strict
 */
/* eslint-disable react/forbid-elements */

import * as React from "react";
import RouterContext from "context/RouterContext";

/* eslint-disable react/prefer-stateless-function */

type Props = {
  /** TextLink tags can only wrap strings. If you find this restrictive, contact @theseus. The thought is we want to avoid the temptation for folks to wrap entire apps or components in TextLink tags, since that usually means a different component should be built. */
  +children: ?React.Node,
  /** The url that the link component will direct to. */
  +href?: string,
  /** Should this link open in a new tab, i.e. target='_blank' */
  +openInNewTab: boolean,
  // determines if we download the target page content instead of navigation.
  /** download attribute will override the target (new tab) behaviour if set to true */
  +download: boolean,
  /**
   * our single page app routing (called spaMixin) hijacks all clicks on
   * anchor tags. You might not want this, most often for switching between
   * applications (you want a full page reload). Set this to true to disable that
   * behavior.
   */
  +disableSpaHijack: boolean,
  /** optional classname element */
  +className?: string,
};

/**
 * @short A thing wrapper around "a" that can be used if AnchorButton or TextLink is not sufficient.
 * @brandStatus V2
 * @status Stable
 * @category Interaction
 * If you find that there aren not enough props, feel free to add properties. Really, this is an HTML <a> element,
 * that does the correct thing when it comes to SinglePageApplication routing.
 * @extends React.Component */
class Link extends React.PureComponent<Props> {
  static defaultProps = {
    openInNewTab: false,
    disableSpaHijack: false,
    download: false,
  };

  render() {
    const {
      children,
      href,
      openInNewTab,
      download,
      disableSpaHijack,
      ...otherProps
    } = this.props;
    const rel = openInNewTab ? "noopener noreferrer" : undefined;
    return (
      <RouterContext.Consumer>
        {router => {
          const tagAnchorParams = {
            download,
            rel,
            "data-ignore-spa-route": disableSpaHijack || undefined,
            target: openInNewTab ? "_blank" : undefined,
          };

          const {SpaLinkElement} = router;
          // if we are disabling SpaHijack, just use a plain old anchor tag.
          // in specialist apps, this is sufficient. in older apps, data-ignore-spa-route is used
          const LinkElement = disableSpaHijack ? "a" : SpaLinkElement;
          return (
            <LinkElement href={href} {...tagAnchorParams} {...otherProps}>
              {children}
            </LinkElement>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}

export default Link;
