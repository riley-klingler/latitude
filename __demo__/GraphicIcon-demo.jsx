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
import GraphicIconBasicUsage from "./GraphicIcon/GraphicIconBasicUsage.demo";
import GraphicIconModifiers from "./GraphicIcon/GraphicIconModifiers.demo";
import GraphicIconCustomSize from "./GraphicIcon/GraphicIconCustomSize.demo";

import GraphicIcon from "../GraphicIcon";

const graphicIconKnobs = {
  icon: getGraphicIconKnob(),
  width: number(180),
};

const demos: DemoFile = {
  demos: [
    {
      type: "live",
      example: GraphicIconBasicUsage,
    },
    {
      type: "live",
      example: GraphicIconModifiers,
    },
    {
      type: "live",
      example: GraphicIconCustomSize,
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
