/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {StyleSheet, css} from "aphrodite";
import moment from "moment-timezone";
import type {DemoFile} from "../../design_system/types/demoTypes";
import DateRangeFilter, {type DateFilterValue} from "../DateRangeFilter";
import {addDaysFromCalendarDate, today} from "../../date/CalendarDateType";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic usage example",
      example: elementToCodeFn => (
        <DateRangeFilterShim elementToCodeFn={elementToCodeFn} />
      ),
    },
  ],
};

const TZ = moment.tz.guess();
const TODAY = today(TZ);

const PRESETS = [
  {
    label: "All time",
    startDate: addDaysFromCalendarDate(TODAY, -365),
    endDate: addDaysFromCalendarDate(TODAY, 365),
  },
  {
    label: "Last week",
    startDate: addDaysFromCalendarDate(TODAY, -7),
    endDate: TODAY,
  },
  {
    label: "Next month",
    startDate: addDaysFromCalendarDate(TODAY, -1),
    endDate: addDaysFromCalendarDate(TODAY, 30),
  },
];

export class DateRangeFilterShim extends React.PureComponent<
  {+elementToCodeFn: React.Node => void},
  {value: DateFilterValue}
> {
  state = {
    value: {
      type: "preset",
      ...PRESETS[0],
    },
  };

  handleChange = (value: DateFilterValue) => {
    this.setState({value});
  };

  render() {
    const {elementToCodeFn} = this.props;

    const element = (
      <DateRangeFilter
        label="Delivery date range"
        value={this.state.value}
        onChange={this.handleChange}
        presets={PRESETS}
      />
    );

    elementToCodeFn(element);

    return (
      <div className={css(selectFilterShimStyles.wrappingContainer)}>
        {element}
      </div>
    );
  }
}

const selectFilterShimStyles = StyleSheet.create({
  wrappingContainer: {
    maxWidth: "600px",
  },
});

export default demos;
