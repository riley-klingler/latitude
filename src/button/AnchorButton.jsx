/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow strict
 */
/* eslint-disable react/forbid-elements */
import * as React from "react";
import {css} from "aphrodite";

import {getButtonStyle} from "../button/styles";
import stringOrFalse from "../tools/stringOrFalse";
import invariant from "../tools/invariant";
import ThemeNameContext, {type Theme} from "../context/ThemeNameContext";
import type {ButtonIntent} from "./Button";
import Link from "../Link";

type AnchorButtonKind = "solid" | "hollow" | "bare" | "blank";
export type Props = {|
  /** We skew toward only using specifying an intent when there is a direct correlation to the primary action. Intents convey meaning and reinforce importance. */
  +intent: ButtonIntent,
  /** Defines the height of the button. Button sizes correspond to the main form sizes. */
  +size: "s" | "m" | "l",
  /** Solid buttons usually constitute a primary action and hollow buttons are generally secondary. Bare buttons can be used for rows of buttons or for more subtle buttons. */
  +kind: AnchorButtonKind,
  /** Buttons should generally use auto width ("responsive"). Full width buttons work great for tables. */
  +width: "responsive" | "full",
  /** The text that represents the primary action of the button. */
  +label?: string,
  /** Anchor tags can't technically be disabled so this prop removes the href, desaturates the color of the label, and removes pointer-events. */
  +disabled: boolean,
  /** The url that should be navigated to upon click */
  +href?: string,
  +children?: React.Node,
  /** Whether the link should be used to download the content of the href. */
  +download: boolean,
  /** Whether the url should be opened in a new tab */
  +openInNewTab: boolean,
  +onClick?: (event: Event) => void,
  +onMouseDown?: (event: Event) => mixed,
  +onMouseUp?: (event: Event) => mixed,
  /**
   * our single page app routing (called spaMixin) hijacks all clicks on
   * anchor tags. You might not want this, most often for switching between
   * applications (you want a full page reload). Set this to true to disable that
   * behavior.
   */
  +disableSpaHijack: boolean,
|};

const validateProps = (props: {
  +kind?: AnchorButtonKind,
  +intent?: ButtonIntent,
}) => {
  invariant(
    !(props.kind === "solid" && props.intent === "none"),
    "Solid buttons must have an intent!"
  );
};

/**
 * Consider removing unsafe lifecycle methods for future concurrent mode support!
 * See https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes
 */
/* eslint-disable react/no-unsafe */
/**
 * @short Just like button but with anchor tags and an href prop. AnchorButton can be used for launching downloads, linking to new in-app routes, or linking to an external resource.
 * @brandStatus V2
 * @status Stable
 * @category Interaction
 * @extends React.Component */
export default class AnchorButton extends React.PureComponent<Props> {
  static defaultProps = {
    disabled: false,
    download: false,
    size: "m",
    width: "responsive",
    kind: "hollow",
    intent: "none",
    openInNewTab: false,
    disableSpaHijack: false,
  };

  static contextType = ThemeNameContext;
  context: Theme;

  constructor(props: Props) {
    super(props);
    validateProps(props);
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    validateProps(nextProps);
  }

  render() {
    const {
      label,
      intent,
      kind,
      size,
      openInNewTab,
      onClick,
      onMouseDown,
      onMouseUp,
      href,
      download,
      children,
      disabled,
      width,
      disableSpaHijack,
    } = this.props;

    const buttonStyles = getButtonStyle(
      this.context,
      kind,
      intent,
      size,
      width,
      disabled
    );
    const labelOrFalse = stringOrFalse(label);

    return (
      <Link
        href={href}
        className={css(...buttonStyles.button)}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        download={download}
        openInNewTab={openInNewTab}
        disableSpaHijack={disableSpaHijack}
        role="button"
        onClick={onClick}
      >
        <div className={css(...buttonStyles.label)}>
          {labelOrFalse || children}
        </div>
      </Link>
    );
  }
}
