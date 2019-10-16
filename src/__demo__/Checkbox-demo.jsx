/**
 * TEAM: frontend_infra
 * @flow
 */

import type {DemoFile} from "../design_system/types/demoTypes";
import * as React from "react";
import Checkbox from "../Checkbox";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic usage",
      example: elementToCodeFn => (
        <CheckboxButtonShim elementToCodeFn={elementToCodeFn} />
      ),
    },
  ],
};

export class CheckboxButtonShim extends React.PureComponent<
  {+elementToCodeFn?: React.Node => void},
  {value: boolean}
> {
  state = {
    value: false,
  };

  handleChange = (value: boolean) => {
    this.setState({value});
  };

  render() {
    const element = (
      <Checkbox
        checked={this.state.value}
        onChange={this.handleChange}
        label="Are these the droids you're looking for?"
      />
    );
    // eslint-disable-next-line prefer-destructuring
    const elementToCodeFn = this.props.elementToCodeFn;
    // eslint-disable-next-line no-unused-expressions
    elementToCodeFn && elementToCodeFn(element);
    return element;
  }
}

export default demos;
