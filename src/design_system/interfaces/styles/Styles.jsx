/**
 * TEAM: frontend_infra
 *
 * @flow
 */

import * as React from "react";
import stylesManifest from "./stylesManifest";

const DEFAULT_STYLE = "overview";

type Props = {
  +data: {|content: any, type: string|},
};

class Styles extends React.PureComponent<Props> {
  componentDidMount() {
    document.title = "Styles - Latitude Design System";
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    document.title = "Latitude Design System";
  }
  render() {
    const data = this.props.data
      ? this.props.data
      : stylesManifest[DEFAULT_STYLE];

    const Component = data.content;
    return <Component />;
  }
}

export default Styles;
