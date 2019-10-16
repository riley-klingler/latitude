/**
 * TEAM: frontend_infra
 * WATCHERS: uforic
 * @flow
 */
import * as React from "react";

export type BoundaryError = {
  error: Error,
  errorInfo: {componentStack: string},
};

// IMPORTANT:
// When you create an error boundary React component, make sure to put these classes
// in the component, both in the parent (ERROR_BOUNDARY_CONTAINER_CLASSNAME) and the
// call to action (ERROR_BOUNDARY_BUTTON_CLASSNAME). We can use them later in FullStory
// for finding when users click to recover from an error boundary.
export const ERROR_BOUNDARY_CONTAINER_CLASSNAME = "errorBoundary";
export const ERROR_BOUNDARY_BUTTON_CLASSNAME = "errorBoundaryCTA";

type ErrorBoundaryHOCProps = {
  +children: React.Node,
  /**
   * optional, change this to clear the error state. This way, if a user navigates to a different URL, and
   * you are using the top level path as a change key, navigation will allow rendering of the rest of the page.
   */
  +changeKey?: string,
  /** used for testing, to force the rendering of the boundary */
  +_forceRenderOfBoundary?: BoundaryError,
};
type ErrorBoundaryHOCState = {errorState: void | BoundaryError};

export type InjectedProps = {
  /** If the error boundary is rendered, there is an error that caused it. This is that error. */
  +errorState: BoundaryError,
  /** If your error boundary component has a "try again" button, you'll need to clear the current error. */
  +resetErrorState: () => void,
};

export default function errorBoundary(
  WrappedComponent: React.ComponentType<InjectedProps & any>
): Class<React.Component<ErrorBoundaryHOCProps & any, ErrorBoundaryHOCState>> {
  /**
   * Consider removing unsafe lifecycle methods for future concurrent mode support!
   * See https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes
   */
  /* eslint-disable react/no-unsafe */
  /** @extends React.Component */
  class ErrorBoundaryHOC extends React.PureComponent<
    ErrorBoundaryHOCProps & any,
    ErrorBoundaryHOCState
  > {
    constructor(props: ErrorBoundaryHOCProps) {
      super(props);
      this.state = {errorState: undefined};
    }

    resetErrorState = () => {
      this.setState({errorState: undefined});
    };

    /**
     * For some errors, we'd like to recover from the
     * error, and rerender what this ErrorBoundary wraps
     * when the page tries to re-render the ErrorBoundary.
     *
     * As an example, if we wrap the main page in CoreApp,
     * we'd like clicking on links on the side of the page
     * or searches to allow recovery, and in those cases,
     * CoreApp would be re-rendered with the new route.
     */
    UNSAFE_componentWillReceiveProps(nextProps: ErrorBoundaryHOCProps) {
      const {changeKey} = this.props;
      const nextChangeKey = nextProps.changeKey;
      if (
        (changeKey != null || nextChangeKey != null) &&
        nextChangeKey !== changeKey
      ) {
        // reset error boundary if the key changes
        this.setState({
          errorState: undefined,
        });
      }
    }

    /**
     * This will only start getting called in React 16, so in React 15 this component
     * will be a no-op.
     * @param {*} error
     * @param {*} errorInfo
     */
    componentDidCatch(error: Error, errorInfo: {componentStack: string}) {
      this.setState({
        errorState: {
          error,
          errorInfo,
        },
      });
    }

    render() {
      const {
        children,
        changeKey,
        _forceRenderOfBoundary,
        ...otherProps
      } = this.props;
      const errorState = this.state.errorState || _forceRenderOfBoundary;
      if (errorState == null) {
        return children;
      }

      return (
        <WrappedComponent
          {...otherProps}
          errorState={errorState}
          resetErrorState={this.resetErrorState}
        />
      );
    }
  }
  return ErrorBoundaryHOC;
}
