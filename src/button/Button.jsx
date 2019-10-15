/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow strict
 */

/* eslint-disable react/forbid-elements */
/* eslint-disable sketchy-null-bool */

import * as React from "react";
import {css} from "aphrodite";
import {getButtonStyle, sharedStyles} from "button/styles";
import ThemeNameContext, {type Theme} from "context/ThemeNameContext";
import Loader from "Loader";
import Icon from "Icon";
import invariant from "tools/invariant";
import stringOrFalse from "tools/stringOrFalse";

export type ButtonIntent = "basic" | "danger" | "none";
export type ButtonKind = "solid" | "hollow" | "bare" | "blank";
export type ButtonSize = "s" | "m" | "l";
export type ButtonWidth = "responsive" | "full";

export type Props = {|
  /** The text that represents the primary action of the button. */
  +label?: string,
  /** We skew toward only using specifying an intent when there is a direct correlation to the primary action. Intents convey meaning and reinforce importance. */
  +intent: ButtonIntent,
  /** Solid buttons usually constitute a primary action and hollow buttons are generally secondary. Bare buttons can be used for rows of buttons or for more subtle buttons. */
  +kind: ButtonKind,
  /** whether the icon is loading or not. Remember to set the loading state to none after loading is complete */
  +isLoading: boolean,
  /** Defines the height of the button. Button sizes correspond to the main form sizes. */
  +size: ButtonSize,
  /** Buttons should generally use auto width ("responsive"). Fixed widths are good for multiple buttons in a row. Full width buttons work great for tables. */
  +width: ButtonWidth,
  /** Give the button the disabled attribute, drop its opacity, and remove pointer-events. */
  +disabled: boolean,
  +children?: React.Node,
  +onClick?: (event: Event) => mixed,
  +onMouseDown?: (event: Event) => mixed,
  +onMouseUp?: (event: Event) => mixed,
  /**
   * type="button" is the default type and has no inherent behavior.
   * type="reset" will reset the form if the button is meant to be a reset button.
   * type="submit" will submit the form when used as a submission button.
   * type="menu" will tell the browser that the button is meant to trigger a menu popup.
   */
  +type: "button" | "submit" | "reset" | "menu",
|};

type State = {|
  // used to determine whether the button should display its `complete` animation
  wasLoading: boolean,
  // used to keep track of whether the button is currently loading
|};

/**
 * @short Buttons represent actions that trigger states, launch new UI, or link the user to new locations.
 * @brandStatus V2
 * @status Stable
 * @category Interaction
 * @extends React.Component */
export default class Button extends React.PureComponent<Props, State> {
  static contextType = ThemeNameContext;
  context: Theme;

  static defaultProps = {
    intent: "none",
    kind: "hollow",
    size: "m",
    width: "responsive",
    disabled: false,
    type: "button",
    isLoading: false,
  };

  timeoutId: ?TimeoutID;

  constructor(props: Props) {
    super(props);
    validateProps(props);
    this.timeoutId = null;

    this.state = {
      wasLoading: false,
    };
  }

  componentDidUpdate(prevProps: Props) {
    validateProps(this.props);

    if (prevProps.isLoading && !this.props.isLoading) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({wasLoading: true});
      this.timeoutId = setTimeout(() => {
        this.setState({wasLoading: false});
        this.timeoutId = null;
      }, 1000);
    }
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const {
      children,
      label: _label,
      type,
      intent,
      kind,
      size,
      onClick,
      onMouseDown,
      onMouseUp,
      disabled,
      width,
      isLoading,
    } = this.props;
    const {wasLoading} = this.state;

    const styles = getButtonStyle(
      this.context,
      kind,
      intent,
      size,
      width,
      disabled,
      {
        isLoading: isLoading || wasLoading,
      }
    );
    const label = stringOrFalse(_label);
    return (
      <button
        className={css(...styles.button)}
        type={type}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        disabled={disabled || isLoading || wasLoading}
      >
        {isLoading && (
          <div className={css(sharedStyles.loaderContainer)}>
            <Loader
              loaded={false}
              size={getLoaderSize(size)}
              isFullWidth={true}
            />
          </div>
        )}
        {!isLoading && wasLoading && (
          <div className={css(sharedStyles.loaderContainer)}>
            <Icon iconName="check" alignment="center" color="grey40" />
          </div>
        )}
        <div className={css(...styles.label)}>{label || children}</div>
      </button>
    );
  }
}

const getLoaderSize = (buttonSize: ButtonSize): number => {
  if (buttonSize === "s") {
    return 18;
  }

  return 24;
};

const validateProps = ({kind, intent}: $Shape<Props>): void => {
  invariant(
    !(kind === "solid" && intent === "none"),
    "Solid buttons must have an intent!"
  );
};
