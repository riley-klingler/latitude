/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 *
 * @flow
 */
import * as React from "react";

import DocInterface from "design_system/components/documentation_layout/DocInterface";
import ComponentListing from "design_system/interfaces/components/ComponentListing";

type Props = {
  +params: {componentName?: string},
  +location: {pathname: string},
};

const setTitle = (componentName?: string) => {
  let title = "Latitude Design System";
  if (componentName) {
    title = `${componentName} - ${title}`;
  } else {
    title = `Components - ${title}`;
  }
  document.title = title;
};

class Components extends React.PureComponent<Props> {
  componentDidMount() {
    setTitle(this.props.params && this.props.params.componentName);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
    setTitle(this.props.params && this.props.params.componentName);
  }
  componentWillUnmount() {
    document.title = "Latitude Design System";
  }
  render() {
    const {params} = this.props;

    if (!params.componentName) {
      return <ComponentListing />;
    }

    const {componentName} = params;

    return <DocInterface componentName={componentName} />;
  }
}

export default Components;
