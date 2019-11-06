/**
 * TEAM: frontend_infra
 * @flow strict
 */

import * as React from "react";
import {StyleSheet, css} from "aphrodite";
import TooltipTrigger from "react-popper-tooltip";

import colors from "./colors";
import {zIndices} from "./tools/zIndices";

const verticalOffset = 8;

type Props = {|
  +placement?: "top" | "bottom" | "left" | "right",
  +overlay: React.Node,
  +mouseEnterDelay?: number, // seconds
  +mouseExitDelay?: number, // seconds
  +maxWidth?: number,
  +children: React.Node,
  +triggerClassName?: string,
|};

export default function Tooltip({
  placement = "right",
  overlay,
  children,
  mouseEnterDelay = 0,
  mouseExitDelay = 0.15,
  maxWidth = null,
  triggerClassName = "",
}: Props) {
  return (
    <TooltipTrigger
      placement={placement}
      trigger="hover"
      tooltip={makeContainer(overlay, maxWidth)}
      delayShow={mouseEnterDelay * 1000}
      delayHide={mouseExitDelay * 1000}
      modifiers={{
        offset: {
          offset: `0,${verticalOffset}px`,
        },
      }}
    >
      {makeTrigger(children, triggerClassName)}
    </TooltipTrigger>
  );
}

function makeContainer(children: React.Node, maxWidth: ?number) {
  return ({
    arrowRef,
    tooltipRef,
    getArrowProps,
    getTooltipProps,
    placement,
  }) => (
    <div
      {...getTooltipProps({
        ref: tooltipRef,
        className: css(styles.tooltipContainer),
        style: maxWidth != null ? {maxWidth} : {},
      })}
    >
      <div
        {...getArrowProps({
          ref: arrowRef,
          className: css(styles.tooltipArrow, getPlacementStyles(placement)),
        })}
      />
      <div className={css(styles.tooltipContent)}>{children}</div>
    </div>
  );
}

function makeTrigger(children: React.Node, className: string) {
  return ({getTriggerProps, triggerRef}) => (
    <div
      {...getTriggerProps({
        ref: triggerRef,
        className: className || css(styles.trigger),
      })}
    >
      {children}
    </div>
  );
}

function getPlacementStyles(placement: string) {
  switch (placement) {
    case "top":
      return styles.downArrow;
    case "bottom":
      return styles.upArrow;
    case "left":
      return styles.rightArrow;
    case "right":
      return styles.leftArrow;
    default:
      return null;
  }
}

const arrowVerticalOffset = "-14px";

const styles = StyleSheet.create({
  trigger: {
    display: "inline-block",
  },
  tooltipContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "0.4rem",
    transition: "opacity 0.3s",
    zIndex: zIndices.zIndex1500AboveModal.value,
  },
  tooltipContent: {
    backgroundColor: colors.grey60,
    boxShadow: "0 0 4px rgba(0, 0, 0, 0.17)",
    color: colors.white,
    padding: "12px",
    textAlign: "left",
    textDecoration: "none",
    wordBreak: "break-word",
  },
  tooltipArrow: {
    position: "absolute",
    width: 0,
    height: 0,
    borderColor: "transparent",
    borderStyle: "solid",
    borderWidth: "8px",
  },
  upArrow: {
    top: arrowVerticalOffset,
    borderBottomColor: colors.grey60,
  },
  downArrow: {
    bottom: arrowVerticalOffset,
    borderTopColor: colors.grey60,
  },
  leftArrow: {
    left: arrowVerticalOffset,
    borderRightColor: colors.grey60,
  },
  rightArrow: {
    right: arrowVerticalOffset,
    borderLeftColor: colors.grey60,
  },
});
