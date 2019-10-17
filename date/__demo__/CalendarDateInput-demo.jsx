/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {
  type DemoFile,
  text,
  bool,
  calendarDate,
  textInputSizeKnob,
} from "../../design_system/types/demoTypes";
import CalendarDateInput from "../CalendarDateInput";
import {type CalendarDate, today} from "../CalendarDateType";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Simple",
      description:
        "CalendarDateInput is both a visual calendar component and a functional text field.",
      example: elementToCodeFn => (
        <CalendarDateShim elementToCodeFn={elementToCodeFn} />
      ),
    },
    {
      type: "code",
      title: "Disabled",
      example: elementToCodeFn => (
        <CalendarDateShim
          elementToCodeFn={elementToCodeFn}
          demoProps={{disabled: true}}
        />
      ),
    },
    {
      type: "code",
      title: "Invalid",
      example: elementToCodeFn => (
        <CalendarDateShim
          elementToCodeFn={elementToCodeFn}
          demoProps={{isInvalid: true}}
        />
      ),
    },
    {
      type: "full",
      example: (elementToCodeFn, demoProps) => (
        <CalendarDateShim
          elementToCodeFn={elementToCodeFn}
          demoProps={demoProps}
        />
      ),
      knobs: {
        disabled: bool(false),
        isInvalid: bool(false),
        dateFormatString: text("YYYY-MM-DD"),
        minDate: calendarDate(),
        maxDate: calendarDate(),
        size: textInputSizeKnob,
        showWeekNumbers: bool(false),
      },
    },
  ],
};

type DemoProps = {disabled?: boolean, isInvalid?: boolean};

export class CalendarDateShim extends React.PureComponent<
  {+elementToCodeFn?: React.Node => void, +demoProps?: DemoProps},
  {value: CalendarDate | null}
> {
  static defaultProps = {disabled: false, isInvalid: false};
  state = {
    value: today("America/Los_Angeles"),
  };

  handleChange = (value: CalendarDate | null) => {
    this.setState({value});
  };

  render() {
    const element = (
      <CalendarDateInput
        value={this.state.value}
        onChange={this.handleChange}
        {...this.props.demoProps}
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
