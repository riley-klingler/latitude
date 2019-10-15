/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 *
 * @flow
 */
import * as React from "react";
import "design_system/components/markdown/styles/main.css";

import LatitudeMarkdown from "Markdown";

type MarkdownProps = {
  +text?: string,
};

class Markdown extends React.PureComponent<MarkdownProps> {
  render() {
    if (this.props.text) {
      return (
        // eslint-disable-next-line flexport/no-oocss
        <div className="parsedMarkdown">
          <LatitudeMarkdown source={this.props.text} enableHtml={true} />
        </div>
      );
    }
    return null;
  }
}

export default Markdown;
