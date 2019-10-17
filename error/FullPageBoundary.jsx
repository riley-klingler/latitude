/**
 * TEAM: frontend_infra
 * WATCHERS: uforic
 * @flow
 */
/* eslint-disable react/prefer-stateless-function */
import * as React from "react";
import {css, StyleSheet} from "aphrodite";
import Text from "../Text";
import {coreT as t} from "../config/I18n";
import Breakpoints from "../constants/Breakpoints";
import {margin, whitespaceSizeConstants} from "../styles/whitespace";
import Button from "../button/Button";
import Icon from "../Icon";
import errorBoundary, {type BoundaryError} from "./errorBoundary";

type WrappedErrorBoundaryProps = {|
  /** If the error boundary is rendered, there is an error that caused it. This is that error. */
  +errorState: BoundaryError,
  /** If your error boundary component has a "try again" button, you'll need to clear the current error. */
  +resetErrorState: () => void,
|};

/**
 * @short Use FullPageBoundary to stop the propogation of React errors past a large, full page component.
 * @category Error Boundary
 * @brandStatus V2
 * @status Stable
 * If you need to cover a smaller component, think about using ComponentBoundary instead. Check out the higher order
 * component `errorBoundary.jsx` to learn more about how this component works.
 * @extends React.Component */
class FullPageBoundaryInner extends React.PureComponent<WrappedErrorBoundaryProps> {
  render() {
    // window.location.reload.bind(window.location) fails in IE with "Invalid calling object"
    const onClickRefresh = window.navigate
      ? window.navigate.bind(window, window.location.href)
      : window.location.reload.bind(window.location);
    const {errorState} = this.props;

    return (
      <div data-qa="errorPage" className={css(styles.mainDiv)}>
        <div className={css(styles.inner)}>
          <div className={css(styles.mainText)}>
            <div className={css(styles.iconContainer)}>
              <Icon iconName="attention" color="yellow30" customSize={75} />
            </div>
            <Text scale="display" weight="bold" customLineHeight="1.75">
              {t("We’re sorry.")}
              <br />
              {t("Something went wrong.")}
            </Text>
          </div>
          <div className={css(margin.t.l)}>
            <Text display="block">
              {t(
                // TODO(dmnd): Re-suppress once Flow v110 is out.
                // FlowFixMe(nicolay) Flow doesn't keep track of super long keys
                ("We track these errors automatically, but if the problem persists feel free to contact us. In the meantime, try refreshing or navigating to another page.": any)
              )}
            </Text>
          </div>
          <div className={css(margin.t.m)}>
            <Text color="grey50" display="block">
              {JSON.stringify(errorState)}
            </Text>
          </div>
          <div className={css(margin.t.m)}>
            <Button
              kind="blank"
              intent="basic"
              size="s"
              onClick={onClickRefresh}
            >
              {t("Refresh page")}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default errorBoundary(FullPageBoundaryInner);

const styles = StyleSheet.create({
  mainDiv: {
    maxWidth: 500,
    margin: "auto",
  },
  inner: {
    marginTop: 100,

    [`@media (max-width:${Breakpoints.sm}px)`]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      margin: whitespaceSizeConstants.m,
    },
  },
  mainText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    [`@media (max-width:${Breakpoints.sm}px)`]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
  iconContainer: {
    marginRight: whitespaceSizeConstants.l,
  },
});
