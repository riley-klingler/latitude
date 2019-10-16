/**
 * TEAM: frontend_infra
 * @flow strict
 */

/**
 * A wrapper around rc-tooltip that code splits off the third party code into a
 * separate bundle. rc-tooltip will be downloaded only if it is needed to render
 * a tooltip. Use this instead of rc-tooltip.
 */

import * as React from "react";
import invariant from "./tools/invariant";
import {
  makeCancelable,
  type CancelablePromise,
} from "./tools/cancelablePromise";

type Props = {
  +children: React.Node,
  +placement?: string,
  +defaultVisible?: boolean,
  +visible?: boolean,
  +mouseEnterDelay?: number,
};

// TODO(dmnd): rc-tooltip doesn't have types :(
type RcTooltipT = React.ComponentType<Props>;

// Module state. We only want to load RcTooltip once, so this state is stored
// at the module level.
let RcTooltip: null | RcTooltipT = null;
let waitForRcTooltipResolve = null;
let waitForRcTooltipReject = null;

function initModuleState() {
  return new Promise((resolve, reject) => {
    waitForRcTooltipResolve = resolve;
    waitForRcTooltipReject = reject;
  });
}
let waitForRcTooltip = initModuleState();

/**
 * Reset module state. Only useful during testing.
 */
export function insideTestResetModuleState() {
  RcTooltip = null;
  waitForRcTooltipResolve = null;
  waitForRcTooltipReject = null;
  waitForRcTooltip = initModuleState();
}

/**
 * Load rc-tooltip, then store a reference to the code via a side-effect, and
 * resolve the promise so that all components can re-render.
 */
function beginLoadingRcTooltip() {
  // disabling dynamic-import-webchunknamme here to bundle both assets together
  /* eslint-disable flexport/dynamic-import-webchunkname */
  const rcPromise = import(/* webpackChunkName: "rc-tooltip" */ "./BetterRcTooltip");
  // $FlowFixMe(uforic): Stylesheets don't have types
  const styleSheetPromise = import(/* webpackChunkName: "rc-tooltip" */ "vendor_stylesheets/rc-tooltip.css");
  return Promise.all([rcPromise, styleSheetPromise]).then(
    ([{default: RcTooltip}: {default: RcTooltipT}]) => {
      invariant(
        waitForRcTooltipResolve !== null,
        "Resolve function must be present"
      );
      waitForRcTooltipResolve(RcTooltip);
    },
    waitForRcTooltipReject
  );
}

type State = {
  RcTooltip: null | RcTooltipT,
};

/**
 * TODO(dmnd): Should this be documented and added to the component library?
 * Or do we want to hide it to encourage use of only HelpTooltip?
 * @extends React.Component
 */
export default class Tooltip extends React.PureComponent<Props, State> {
  defaultVisible: boolean | void = undefined;
  waitForRcTooltip: CancelablePromise<RcTooltipT> | null = null;

  constructor(props: Props) {
    super(props);

    // When RcTooltip hasn't yet been loaded, subscribe to the waitForRcTooltip
    // promise
    if (RcTooltip === null) {
      // cancellable promise that resolves when RcTooltip loads
      this.waitForRcTooltip = makeCancelable(
        new Promise((resolve, reject) => {
          waitForRcTooltip.then(resolve, reject);
        })
      );
      this.waitForRcTooltip.promise.then(
        // re-render once it's loaded
        RcTooltip => {
          // eslint-disable-next-line flexport/no-setState-in-constructor
          this.setState({RcTooltip});
        },
        error => {
          if (!(error && error.isCanceled)) {
            throw error;
          }
        }
      );

      if (props.visible === true) {
        beginLoadingRcTooltip();
      }
    }
    this.state = {RcTooltip};
  }

  componentWillUnmount() {
    if (this.waitForRcTooltip !== null) {
      this.waitForRcTooltip.cancel();
      this.waitForRcTooltip = null;
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.visible !== true && this.props.visible === true) {
      beginLoadingRcTooltip();
    }
  }

  handleMouseEnter = () => {
    this.defaultVisible = true;
    beginLoadingRcTooltip();
  };

  handleMouseLeave = () => {
    this.defaultVisible = false;
  };

  render() {
    const {RcTooltip} = this.state;

    // When RcTooltip isn't loaded, render the child and detect hovering
    if (RcTooltip === null) {
      return React.Children.map(this.props.children, child => {
        if (React.isValidElement(child)) {
          const {
            props: {onMouseEnter, onMouseLeave},
          } = child;
          // Hello. If you're here because the invariant below triggered, you
          // can add support for what you are doing by chaining the handlers on
          // children in the cloneElement call. This use case didn't exist when
          // I wrote this component so I didn't support it.
          invariant(
            onMouseEnter == null && onMouseLeave == null,
            `Defining onMouseEnter and onMouseLeave on children of Tooltip is
            currently not implemented! See this error in the source for more
            info`
          );
        }
        return React.cloneElement(child, {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
        });
      });
    }

    // If the user is hovering over the child element, and code has just
    // arrived, the tooltip should be immediately visible
    const defaultVisible =
      this.props.defaultVisible !== undefined
        ? this.props.defaultVisible
        : this.defaultVisible;

    return <RcTooltip {...this.props} defaultVisible={defaultVisible} />;
  }
}
