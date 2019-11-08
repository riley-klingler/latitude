/**
 * TEAM: frontend_infra
 * @flow
 */

import React, {useState} from "react";

import CalendarDateInput from "../CalendarDateInput";
import {today} from "../CalendarDateType";

/**
 * @title Disabled Input
 * @description Use the `disabled` prop to disable the CalendarDateInput
 */
export default function CalendarDateInputDisabled() {
  const [value, setValue] = useState(today("America/Los_Angeles"));

  return (
    <CalendarDateInput value={value} onChange={setValue} disabled={true} />
  );
}
