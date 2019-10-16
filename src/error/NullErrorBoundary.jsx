/**
 * TEAM: frontend_infra
 * @flow
 */

// eslint-disable-next-line autofix/no-unused-vars
import * as React from "react";
import errorBoundary, {type BoundaryError} from "error/errorBoundary";

type WrappedErrorBoundaryProps = {
  // If the error boundary is rendered, there is an error that caused it. This is that error.
  +errorState: BoundaryError,
  // If your error boundary component has a "try again" button, you'll need to clear the current error.
  +resetErrorState: () => void,
};

/**
 * @short Use NullErrorBoundary to stop the propogation of React errors past a very small component (i.e. Icon).
 * @category Error Boundary
 * @brandStatus V2
 * @status Stable
 * A reasonable behavior for very small decorative components like Icon is to display
 * null if they fail, and enable the error with stack trace to be caught with componentDidCatch.
 * @extends React.Component */
// eslint-disable-next-line flexport/puritan-extends-component,react
class NullErrorBoundaryClass extends React.PureComponent<WrappedErrorBoundaryProps> {
  render() {
    return null;
  }
}

export default errorBoundary(NullErrorBoundaryClass);
