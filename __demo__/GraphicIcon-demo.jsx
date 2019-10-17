/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import * as React from "react";
import {
  type DemoFile,
  getGraphicIconKnob,
  number,
  type DemoProps,
} from "../design_system/types/demoTypes";

import GraphicIcon from "../GraphicIcon";

const graphicIconKnobs = {
  icon: getGraphicIconKnob(),
  width: number(180),
};

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic Usage",
      description: "Select an icon and you're good to go!",
      example: fn => {
        const component = <GraphicIcon icon="truck" />;
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Modifiers",
      description:
        "Some graphic icons have pus signs or 0's to represent an action. This icon would be perfect for an emptystate on our invoices table.",
      example: fn => {
        const component = <GraphicIcon icon="invoices_none" />;
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Custom Size",
      description:
        "All graphic icons have square dimensions so specifying a width will apply an equal width and height to the element.",
      example: fn => {
        const component = <GraphicIcon icon="document_add" width={200} />;
        fn(component);
        return component;
      },
    },
    {
      type: "full",
      example: (elementToCodeFn, demoProps) => (
        <GraphicIconShim
          elementToCodeFn={elementToCodeFn}
          demoProps={demoProps}
        />
      ),
      knobs: graphicIconKnobs,
      defaultProps: {icon: "truck"},
    },
  ],
};

export class GraphicIconShim extends React.PureComponent<
  {
    +elementToCodeFn?: React.Node => void,
    +demoProps?: DemoProps<typeof graphicIconKnobs>,
  },
  {}
> {
  render() {
    const {elementToCodeFn, demoProps} = this.props;
    const element = <GraphicIcon {...demoProps} />;
    // eslint-disable-next-line no-unused-expressions
    elementToCodeFn && elementToCodeFn(element);
    return element;
  }
}

export default demos;
