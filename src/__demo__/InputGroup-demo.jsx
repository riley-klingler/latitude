/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import * as React from "react";
import {css} from "aphrodite";
import {type DemoFile, demoCommonStyles} from "../design_system/types/demoTypes";
import TextInput from "../TextInput";
import InputGroup from "../InputGroup";
import SelectInput from "../select/SelectInput";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Input groups smush inputs",
      description:
        "If you'd like to group your inputs, for things like a date AND time field, use InputGroup.",
      example: fn => {
        const component = <InputGroupDemo fn={fn} />;
        return component;
      },
    },
  ],
};

class InputGroupDemo extends React.PureComponent<
  {+fn: React.Node => void},
  {input1: string, input2: string, input3: string, input4: string | null}
> {
  state = {
    input1: "Left",
    input2: "Right",
    input3: "Center",
    input4: "Option A",
  };

  handleOneChange = (input1: string) => {
    this.setState({input1});
  };

  handleTwoChange = (input2: string) => {
    this.setState({input2});
  };

  handleThreeChange = (input3: string) => {
    this.setState({input3});
  };

  handleFourChange = (input4: ?string) => {
    this.setState({input4});
  };

  render() {
    const element = (
      <InputGroup
        customWidthSettings={[{flex: 1}, {flex: 1}, {flex: 3}, {flex: 1}]}
      >
        <TextInput
          value={this.state.input1}
          textAlign="right"
          onChange={this.handleOneChange}
        />
        <TextInput
          value={this.state.input3}
          textAlign="right"
          onChange={this.handleThreeChange}
        />
        <SelectInput
          value={this.state.input4}
          onChange={this.handleFourChange}
          options={[
            {value: "Option A", label: "Option A"},
            {value: "Option B", label: "Option B"},
            {value: "Option C", label: "Option C"},
          ]}
          isNullable={true}
        />
        <TextInput
          value={this.state.input2}
          textAlign="right"
          onChange={this.handleTwoChange}
        />
      </InputGroup>
    );
    this.props.fn(element);
    return <div className={css(demoCommonStyles.midWrapper)}>{element}</div>;
  }
}

export default demos;
