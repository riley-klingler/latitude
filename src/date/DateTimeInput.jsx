/**
 * TEAM: frontend_infra
 * WATCHERS: uforic
 * @flow
 */

import * as React from "react";
import {
  type CalendarDate,
  momentToCalendarDate,
} from "date/CalendarDateType";
import {type Size} from "sizes";
import {
  momentToWallTime,
  type WallTime,
  EOD_OCLOCK,
  ZERO_OCLOCK,
} from "date/wallTime";
import CalendarDateInput from "date/CalendarDateInput";
import TimeInput, {getTimeIntervals} from "date/TimeInput";
import moment from "moment-timezone";
import momentT from "moment";
import SelectInput from "select/SelectInput";
import InputGroup from "InputGroup";

/**
 * To convert a date time value into a moment,
 * look into using momentFromCalDateWallTime.
 *
 * In order to determine if the date is a date_only
 * (for storing to the backend), check if calendarDate
 * is not null but wallTime is null.
 */
export type DateTimeValue = {
  calendarDate: CalendarDate | null,
  wallTime: WallTime | null,
};

/* Exported for F1 */
export type DateTimeInputProps = {
  /** from TextInput */
  +disabled: boolean,
  +size: Size,
  +isInvalid: boolean,
  +isPrefilled: boolean,
  /** how the date will be displayed on the CalendarDateInput */
  +dateFormatString: string,
  +minDate: CalendarDate | null,
  +maxDate: CalendarDate | null,
  /** used to filter calendar dates, like 'no mondays' */
  +filterDate: (CalendarDate => boolean) | null,
  /** the list of preset options to display on the time input */
  +timeInputOptions: $ReadOnlyArray<WallTime>,
  /** displayed next to the date and time inputs. */
  +timeZone: string,
  /** a date time value, defined in this component, is a CalendarDate and a WallTime, either one is optional. */
  +value: DateTimeValue,
  +onChange: DateTimeValue => void,
  +extraIgnoreReactOnclickoutsideClass: string,
};

export const EMPTY_DATE_TIME_VALUE = {
  calendarDate: null,
  wallTime: null,
};

/**
 * @short An input for date AND time.
 * @category Data Entry
 * @group Date and Time
 * @brandStatus V2
 * @status Stable
 * This component combines a CalendarDateInput with a TimeInput, allowing the user to set both.
 *
 * This component allows the user to input a date and time separately and in any order, hence a date
 * time value can have either value be null.
 *
 * You can convert the DateTimeValue with the exported method `momentFromCalDateWallTime` from wallTime.js.
 * @extends React.Component */
export default class DateTimeInput extends React.PureComponent<DateTimeInputProps> {
  static defaultProps = {
    size: "m",
    disabled: false,
    isInvalid: false,
    isPrefilled: false,
    minDate: null,
    maxDate: null,
    filterDate: null,
    dateFormatString: "MMM D, YYYY",
    timeInputOptions: getTimeIntervals(ZERO_OCLOCK, EOD_OCLOCK, 30),
    extraIgnoreReactOnclickoutsideClass: "",
  };

  handleDateChange = (newCalDate: CalendarDate | null) => {
    this.props.onChange({
      wallTime: this.props.value.wallTime,
      calendarDate: newCalDate,
    });
  };

  handleTimeChange = (newWallTime: WallTime | null) => {
    this.props.onChange({
      wallTime: newWallTime,
      calendarDate: this.props.value.calendarDate,
    });
  };

  render() {
    const {size} = this.props;
    // eslint-disable-next-line no-unused-expressions,no-nested-ternary
    size === "l" ? "title" : size === "m" ? "base" : "subtext";
    // eslint-disable-next-line prefer-destructuring
    const calendarDate = this.props.value.calendarDate;
    // eslint-disable-next-line prefer-destructuring
    const wallTime = this.props.value.wallTime;
    const timeZone = moment.tz(this.props.timeZone).format("z");
    return (
      <InputGroup customWidthSettings={[{minWidth: 100}, {}, {}]}>
        <CalendarDateInput
          disabled={this.props.disabled}
          isInvalid={this.props.isInvalid}
          isPrefilled={this.props.isPrefilled}
          dateFormatString={this.props.dateFormatString}
          minDate={this.props.minDate}
          maxDate={this.props.maxDate}
          filterDate={this.props.filterDate}
          value={calendarDate}
          onChange={this.handleDateChange}
          size={this.props.size}
          extraIgnoreReactOnclickoutsideClass={
            this.props.extraIgnoreReactOnclickoutsideClass
          }
          showIcon={true}
        />
        <TimeInput
          value={wallTime}
          disabled={this.props.disabled}
          isInvalid={this.props.isInvalid}
          isPrefilled={this.props.isPrefilled}
          onChange={this.handleTimeChange}
          options={this.props.timeInputOptions}
          size={this.props.size}
          extraIgnoreReactOnclickoutsideClass={
            this.props.extraIgnoreReactOnclickoutsideClass
          }
          showIcon={true}
        />
        <SelectInput
          readOnly={true}
          disabled={this.props.disabled}
          size={size}
          value={timeZone}
          isInvalid={this.props.isInvalid}
          options={[{value: timeZone, label: timeZone}]}
          onChange={() => {}}
        />
      </InputGroup>
    );
  }
}

export function momentWithTzToDateTimeValue(
  value: momentT,
  timeZone: string,
  dateOnly: boolean
) {
  const clonedMoment = value.clone();
  return {
    calendarDate: momentToCalendarDate(clonedMoment, timeZone),
    wallTime: dateOnly ? null : momentToWallTime(clonedMoment, timeZone),
  };
}
