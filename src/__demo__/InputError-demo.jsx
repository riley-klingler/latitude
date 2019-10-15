/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import {
  type DemoFile,
  text,
  bool,
  demoCommonStyles,
} from "design_system/types/demoTypes";
import * as React from "react";
import TextInput from "TextInput";
import InputError from "InputError";
import {css} from "aphrodite";

const demos: DemoFile = {
  demos: [
    {
      type: "full",
      example: (elementToCodeFn, demoProps) => (
        <InputShim elementToCodeFn={elementToCodeFn} demoProps={demoProps} />
      ),
      knobs: {
        errorText: text("The value is incorrect."),
        showError: bool(true),
      },
    },
  ],
};

export class InputShim extends React.PureComponent<
  {+elementToCodeFn?: React.Node => void, +demoProps?: any},
  {value: string}
> {
  state = {
    value: "Incorrect value.",
  };

  handleChange = (value: string) => {
    this.setState({value});
  };

  render() {
    const {elementToCodeFn, demoProps} = this.props;
    const element = (
      <InputError {...demoProps}>
        <TextInput
          value={this.state.value}
          onChange={this.handleChange}
          // $FlowFixMe(dirak) demoProps doesn't typecheck
          isInvalid={demoProps.showError}
        />
      </InputError>
    );
    // eslint-disable-next-line no-unused-expressions
    elementToCodeFn && elementToCodeFn(element);
    return <div className={css(demoCommonStyles.smallWrapper)}>{element}</div>;
  }
}

export default demos;
