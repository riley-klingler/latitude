/**
 * TEAM: frontend_infra
 * @flow strict
 */

import * as React from "react";
import {StyleSheet, css} from "aphrodite";
import Text from "./Text";
import IconButton from "./button/IconButton";

import latitudeColors from "./latitudeColors";

const sizes = {
  xs: 20,
  s: 24,
  m: 30,
  l: 40,
};

const spacing = {
  xs: 7,
  s: 7,
  m: 8,
  l: 12,
};

type Props = {|
  /** The information to display */
  +children: string,
  /** The function invoked when the icon is clicked. If no onDismiss is
   * specified, then the Pill will not be closeable and the close button
   * will be hidden */
  +onDismiss?: () => void,
  /** The size of the pill */
  +size?: $Keys<typeof sizes>,
  /** Called when the cursor enters the Pill */
  +onMouseEnter?: (e: Event) => void,
  /** Called when the cursor leaves the Pill */
  +onMouseLeave?: (e: Event) => void,
  /** Called when the Pill is focused */
  +onFocus?: (e: Event) => void,
|};

/**
 * @short A compact display component for dismissible information
 * @brandStatus V2
 * @status Beta
 * @category Data Display
 *
 * Pills are useful for organizing information like a group of H.S. codes
 * or product tags. Using pills to organize information can provide a
 * straightforward layout and give the user a simple ability to remove
 * one or multiple items.
 */
export default function Pill({
  children,
  onDismiss,
  size = "m",
  onMouseEnter,
  onMouseLeave,
  onFocus,
}: Props) {
  const style = {
    height: sizes[size],
    padding: `0 ${spacing[size]}px`,
    borderRadius: sizes[size] / 2,
  };

  return (
    <span
      className={css(styles.pill)}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
    >
      <Text
        scale="subtext"
        overflow="hidden"
        textOverflow="ellipsis"
        color="grey40"
        whiteSpace="nowrap"
      >
        {children}
      </Text>
      {onDismiss ? (
        <span style={{paddingLeft: "12px"}}>
          <IconButton
            type="button"
            kind="blank"
            iconName="cancel"
            onClick={onDismiss}
          />
        </span>
      ) : null}
    </span>
  );
}

const styles = StyleSheet.create({
  pill: {
    boxSizing: "border-box",
    display: "inline-flex",
    position: "relative",
    alignItems: "center",
    border: `solid 1px ${latitudeColors.grey20}`,
    maxWidth: "100%",
    background: latitudeColors.white,
    overflow: "hidden",
  },
});
