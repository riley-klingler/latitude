/**
 * TEAM: frontend_infra
 * WATCHERS: uforic
 *
 * @flow
 */

import * as React from "react";
import {storiesOf} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";
import sections from "../sections";
import DateTimeInput from "../../date/DateTimeInput";
import type {WallTime} from "../../date/wallTime";
import type {CalendarDate} from "../../date/CalendarDateType";
import {getTextInputKnobs} from "./TextInput.stories";

const stories = storiesOf(`${sections.dataEntry}/Date Time Input`, module);
stories.addDecorator(withKnobs);
stories.add("DateTimeInput", () => (
  <DateTimeInputHoist {...getTextInputKnobs()} />
));

type DateTimeWrapperState = {
  value: {calendarDate: CalendarDate | null, wallTime: WallTime | null},
};

const defaultState = {
  value: {calendarDate: null, wallTime: null},
};

// eslint-disable-next-line import/prefer-default-export
export class DateTimeInputHoist extends React.Component<
  *,
  DateTimeWrapperState
> {
  constructor() {
    super();
    this.state = {
      ...defaultState,
    };
  }

  handleChange = (value: {
    calendarDate: CalendarDate | null,
    wallTime: WallTime | null,
  }) => {
    this.setState({value});
  };
  render() {
    return (
      <div>
        <DateTimeInput
          value={this.state.value}
          onChange={this.handleChange}
          {...this.props}
        />
      </div>
    );
  }
}
