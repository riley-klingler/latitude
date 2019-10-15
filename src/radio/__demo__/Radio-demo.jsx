/**
 * TEAM: frontend_infra
 * @flow
 */

import {
  type DemoFile,
  bool,
  textInputSizeKnob,
} from "design_system/types/demoTypes";
import * as React from "react";
import Radio from "radio/Radio";
import {type Size} from "sizes";

const demos: DemoFile = {
  demos: [
    {
      type: "full",
      example: (elementToCodeFn, demoProps) => (
        <RadioShim elementToCodeFn={elementToCodeFn} demoProps={demoProps} />
      ),
      knobs: {
        disabled: bool(false),
        size: textInputSizeKnob,
        isInvalid: bool(false),
      },
    },
  ],
};
type DemoProps = {disabled: boolean, size: Size};
export class RadioShim extends React.PureComponent<
  {+elementToCodeFn?: React.Node => void, +demoProps: DemoProps},
  {checked: boolean}
> {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState({checked: !this.state.checked});
  };

  render() {
    const {elementToCodeFn, demoProps} = this.props;

    const element = (
      <Radio
        name="Test"
        value="TestValue"
        key="Test-TestValue"
        checked={this.state.checked}
        onChange={this.handleChange}
        label="Test label"
        {...demoProps}
      />
    );
    // eslint-disable-next-line no-unused-expressions
    elementToCodeFn && elementToCodeFn(element);
    return element;
  }
}

export default demos;
