/**
 * TEAM: frontend_infra
 * @flow
 */

import React, {useState} from "react";

import CalendarDateInput from "../CalendarDateInput";
import {today} from "../CalendarDateType";

/**
 * @title Simple Usage
 * @description CalendarDateInput is both a visual calendar component and a functional text field.
 */
export default function CalendarDateInputSimple() {
  const [value, setValue] = useState(today("America/Los_Angeles"));

  return <CalendarDateInput value={value} onChange={setValue} />;
}
