/**
 * TEAM: frontend_infra
 * @flow
 */

import React, {useState} from "react";

import SettingsToggle from "../../SettingsToggle";

/**
 * @title Basic usage
 * @description If given a label, the toggle will be aligned to the right edge of its container, and the label will be aligned to the left.
 */
export default function SettingsToggleBasicUsage() {
  const [value, setValue] = useState(false);

  return (
    <SettingsToggle
      checked={value}
      onChange={setValue}
      label="Show labels on map"
    />
  );
}
