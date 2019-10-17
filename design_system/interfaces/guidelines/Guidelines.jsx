/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 *
 * @flow
 */
import * as React from "react";
import Markdown from "../../components/markdown/Markdown";
import guidelinesManifest from "./guidelinesManifest";

const DEFAULT_GUIDELINE = "overview";

type Props = {
  +data: {|content: any, type: string|},
};

class Guidelines extends React.PureComponent<Props> {
  componentDidMount() {
    document.title = "Guidelines - Latitude Design System";
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
      : guidelinesManifest[DEFAULT_GUIDELINE];

    const {content, type} = data;

    if (type === "markdown") {
      return <Markdown text={content} />;
    }
    const Component = content;
    return <Component />;
  }
}

export default Guidelines;
