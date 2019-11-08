/**
 * TEAM: frontend_infra
 * @flow
 */

import React, {useState} from "react";

import CalendarDateInput from "../CalendarDateInput";
import {today} from "../CalendarDateType";

/**
 * @title Invalid state
 * @description Use the `isInvalid` prop to indicate error
 */
export default function CalendarDateInputInvalid() {
  const [value, setValue] = useState(today("America/Los_Angeles"));

  return (
    <CalendarDateInput value={value} onChange={setValue} isInvalid={true} />
  );
}
