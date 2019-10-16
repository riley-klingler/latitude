/**
 * TEAM: frontend_infra
 * WATCHERS: uforic
 * @flow
 */
/* eslint-disable react/prefer-stateless-function */
import * as React from "react";
import Button from "../button/Button";
import Text from "../Text";
import {css, StyleSheet} from "aphrodite";
import {coreT as t} from "../config/I18n";
import {include, margin, border, padding} from "../styles/index";
import errorBoundary, {
  type BoundaryError,
  ERROR_BOUNDARY_BUTTON_CLASSNAME,
  ERROR_BOUNDARY_CONTAINER_CLASSNAME,
} from "./errorBoundary";
import classnames from "classnames";

type WrappedErrorBoundaryProps = {
  // If the error boundary is rendered, there is an error that caused it. This is that error.
  /** $Hide(provided by higher order component) */
  +errorState: BoundaryError,
  // If your error boundary component has a "try again" button, you'll need to clear the current error.
  /** $Hide(provided by higher order component) */
  +resetErrorState: () => void,
  +showRetry: boolean,
};

/**
 * @short Use ComponentBoundary to stop the propogation of React errors past in page smaller components.
 * @category Error Boundary
 * @brandStatus V2
 * @status Stable
 * If you need to cover an entire page, think about using FullPageBoundary instead. Check out the higher order
 * component `errorBoundary.jsx` to learn more about how this component works.
 * @extends React.Component */
class ComponentBoundaryClass extends React.PureComponent<WrappedErrorBoundaryProps> {
  static defaultProps = {showRetry: true};
  render() {
    const {resetErrorState, showRetry} = this.props;
    return (
      <div
        className={classnames(
          ERROR_BOUNDARY_CONTAINER_CLASSNAME,
          css(style.mainDiv)
        )}
      >
        <div className={css(style.titleText)}>
          <Text scale="title" color="grey50">
            {t("We’re sorry. Something went wrong.")}
          </Text>
        </div>
        <div className={css(style.mainBody)}>
          <Text display="block">
            {t(
              // $FlowFixMe(dmnd) Flow doesn't keep track of super long keys
              "We track these errors automatically, but if the problem persists feel free to contact us. In the meantime, try refreshing or navigating to another page."
            )}
          </Text>
        </div>
        {showRetry ? (
          <div className={classnames(ERROR_BOUNDARY_BUTTON_CLASSNAME)}>
            <Button onClick={resetErrorState}>Retry</Button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default errorBoundary(ComponentBoundaryClass);

const style = StyleSheet.create({
  mainDiv: {
    ...include(margin.a.m),
  },
  titleText: {
    ...include(margin.t.m),
    ...include(margin.b.l),
    ...include(padding.b.l),
    ...border.b.s,
    clear: "both",
  },
  mainBody: {...include(margin.t.s), ...include(margin.b.l)},
});
