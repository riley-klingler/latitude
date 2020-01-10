/**
 * TEAM: frontend_infra
 * WATCHERS: uforic
 *
 * @flow
 */

import * as React from "react";
import {storiesOf} from "@storybook/react";
import {boolean, text, withKnobs} from "@storybook/addon-knobs";
import sections from "../sections";
import TimeInput, {getTimeIntervals} from "../../date/TimeInput";
import {
  ZERO_OCLOCK,
  EOD_OCLOCK,
  type WallTime,
  wallTime,
} from "../../date/wallTime";
import {getTextInputKnobs} from "./TextInput.stories";

const stories = storiesOf(`${sections.dataEntry}/Time Input`, module);
stories.addDecorator(withKnobs);
stories.add("basic usage", () => (
  <TimeInputHoist {...getTextInputKnobs()} {...getTimeInputKnobs()} />
));

const getTimeInputKnobs = () => ({
  militaryTime: boolean("militaryTime", false),
  minTime: text("minTime", null),
  maxTime: text("maxTime", null),
});

type TimeWrapperState = {
  value: WallTime | null,
};

const defaultState = {
  value: wallTime("00:00:00.000"),
};

// eslint-disable-next-line import/prefer-default-export
export class TimeInputHoist extends React.Component<*, TimeWrapperState> {
  constructor() {
    super();
    this.state = {
      ...defaultState,
    };
  }

  handleChange = (wallTime: WallTime | null) => {
    this.setState({value: wallTime});
  };
  render() {
    return (
      <div>
        <TimeInput
          value={this.state.value}
          onChange={this.handleChange}
          options={getTimeIntervals(ZERO_OCLOCK, EOD_OCLOCK, 60)}
          {...this.props}
        />
      </div>
    );
  }
}
