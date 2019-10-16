/**
 * TEAM: frontend_infra
 * @flow strict
 */

import * as React from "react";
import Checkbox from "./Checkbox";
import Group from "./Group";
import invariant from "./tools/invariant";
import {StyleSheet, css} from "./styles";
import latitudeColors from "./latitudeColors";
import {whitespaceSizeConstants} from "./styles/whitespace";

export type Option<T> = {|
  +value: T,
  +label: string,
  +disabled?: boolean,
|};

export type Props<T> = {|
  /** values specify which checkboxes are in the `checked` state. */
  +values: $ReadOnlyArray<T>,
  /**
   * onChange is called with the array of the values of every checkbox that
   * is currently checked. The order of values is consistent with the order
   * in which they are provided via options.
   */
  +onChange: (values: $ReadOnlyArray<T>) => void,
  /**
   * The options the checkbox should display. The order options are provided
   * determines the order in which they appear in the Checkbox list.
   */
  +options: $ReadOnlyArray<Option<T>>,
  /**
   * Determines whether the checkboxes will run inline (horizontally), or
   * vertically.
   */
  +isInline?: boolean,
  /** The gap in pixels between Checkboxes. */
  +gap?: number,
  /** Whether the checkbox list is invalid */
  +isInvalid?: boolean,
  /** Whether the checkbox list has a select all checkbox at the top of the list */
  +showSelectAllOption?: boolean,
|};

/**
 * @short CheckboxList manages the states of multiple checkboxes via an array of options and values
 * @brandStatus V2
 * @status Stable
 * @category Data Entry
 */
export default function CheckboxList<T>({
  options,
  values,
  onChange,
  isInline = false,
  gap = 4,
  isInvalid = false,
  showSelectAllOption = false,
}: Props<T>) {
  invariant(
    !(isInline && showSelectAllOption),
    "Don't use the showSelectAllOption prop on inline checkbox lists"
  );
  const handleCheckboxChange = (option: Option<T>, checked: boolean) => {
    const newValues = values.slice();

    const selectedIndex = newValues.indexOf(option.value);
    if (selectedIndex >= 0) {
      newValues.splice(selectedIndex, 1);
    }

    if (checked) {
      newValues.push(option.value);
    }

    onChange(newValues);
  };

  const noneChecked = values.length === 0;
  const allChecked = options.length === values.length;
  const handleSelectAll = () =>
    allChecked ? onChange([]) : onChange(options.map(option => option.value));
  const indeterminate = !noneChecked && !allChecked;

  const selectAllCheckbox = showSelectAllOption ? (
    <Checkbox
      onChange={handleSelectAll}
      label={allChecked ? "Select None" : "Select All"}
      checked={allChecked}
      indeterminate={indeterminate}
    />
  ) : null;

  return (
    <Group flexDirection={isInline ? "row" : "column"} gap={gap}>
      {selectAllCheckbox}
      {showSelectAllOption ? <div className={css(style.hr)} /> : null}
      {options.map(option => (
        <Checkbox
          onChange={handleCheckboxChange.bind(this, option)}
          key={option.label}
          label={option.label}
          checked={values.some(value => value === option.value)}
          disabled={option.disabled}
          isInvalid={!!isInvalid}
        />
      ))}
    </Group>
  );
}

const style = StyleSheet.create({
  hr: {
    width: "100%",
    borderTop: `1px solid ${latitudeColors.grey30}`,
    marginTop: whitespaceSizeConstants.s,
    marginBottom: whitespaceSizeConstants.s,
  },
});
