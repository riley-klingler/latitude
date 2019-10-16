/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import * as React from "react";
import { css } from "aphrodite";
import TextareaInput from "../TextareaInput";
import {
  type DemoFile,
  text,
  bool,
  textAlignKnob,
  demoCommonStyles,
  textInputSizeKnob,
  type DemoProps,
  number,
} from "../design_system/types/demoTypes";

const knobs = {
  disabled: bool(false),
  readOnly: bool(false),
  size: textInputSizeKnob,
  isInvalid: bool(false),
  textAlign: textAlignKnob,
  placeholder: text(),
  minRows: number(2),
  maxRows: number(10),
};

const demos: DemoFile = {
  demos: [
    {
      type: "full",
      example: (elementToCodeFn, demoProps) => (
        <InputShim elementToCodeFn={elementToCodeFn} demoProps={demoProps} />
      ),
      knobs,
    },
    {
      type: "code",
      title: "Static Row Count",
      fullWidth: true,
      description:
        "TextareaInput's row count can be set to a static value by specifying rows as a number",
      example: elementToCodeFn => (
        <RowsDemo elementToCodeFn={elementToCodeFn} />
      ),
    },
  ],
};

class InputShim extends React.PureComponent<
  {+elementToCodeFn?: React.Node => void, +demoProps: DemoProps<typeof knobs>},
  {value: string}
> {
  state = {
    value: "",
  };

  handleChange = (value: string) => {
    this.setState({value});
  };

  render() {
    const {elementToCodeFn, demoProps} = this.props;
    const {minRows, maxRows, ...otherDemoProps} = demoProps;
    const element = (
      <TextareaInput
        {...otherDemoProps}
        value={this.state.value}
        onChange={this.handleChange}
        rows={{
          min: minRows || 2,
          max: maxRows || 10,
        }}
      />
    );
    // eslint-disable-next-line no-unused-expressions
    elementToCodeFn && elementToCodeFn(element);
    return <div className={css(demoCommonStyles.smallWrapper)}>{element}</div>;
  }
}

type RowsDemoProps = {|
  +elementToCodeFn: React.Node => void,
|};

function RowsDemo({elementToCodeFn}: RowsDemoProps) {
  const [text, setText] = React.useState("");

  const component = <TextareaInput value={text} onChange={setText} rows={4} />;

  elementToCodeFn(component);

  return <div className={css(demoCommonStyles.smallWrapper)}>{component}</div>;
}

export default demos;
