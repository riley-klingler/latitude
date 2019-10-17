/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {StyleSheet, css} from "aphrodite";
import {type DemoFile, bool} from "../../design_system/types/demoTypes";
import ComponentBoundary from "../ComponentBoundary";

const demos: DemoFile = {
  demos: [
    {
      type: "full",
      example: (elementToCodeFn, demoProps) => (
        <ComponentBoundaryShim
          elementToCodeFn={elementToCodeFn}
          demoProps={demoProps}
        />
      ),
      knobs: {
        enableRetry: bool(false),
      },
    },
  ],
};

type ComponentBoundaryShimProps = {
  +elementToCodeFn?: React.Node => void,
  +demoProps?: any,
};

class ComponentBoundaryShim extends React.PureComponent<ComponentBoundaryShimProps> {
  render() {
    const {elementToCodeFn, demoProps} = this.props;
    const errorContent = {
      error: new Error("This is a test error"),
      errorInfo: {
        componentStack: "This is a stack trace\nThis is the second line",
      },
      sentryEventId: "event-id",
    };

    const element = (
      <ComponentBoundary
        _forceRenderOfBoundary={errorContent}
        showRetry={
          demoProps && demoProps.enableRetry ? demoProps.enableRetry : false
        }
      >
        <div>Test</div>
      </ComponentBoundary>
    );
    // eslint-disable-next-line no-unused-expressions
    return (
      <div className={css(componentBoundaryShimStyles.wrappingContainer)}>
        {elementToCodeFn ? elementToCodeFn(element) : element}
      </div>
    );
  }
}

const componentBoundaryShimStyles = StyleSheet.create({
  wrappingContainer: {
    width: "100%",
  },
});

export default demos;
