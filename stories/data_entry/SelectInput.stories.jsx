/**
 * TEAM: frontend_infra
 *
 * @flow
 */

import * as React from "react";
import {storiesOf} from "@storybook/react";
import sections from "sections";
import SelectInput from "select/SelectInput";
import SearchableSelectInput from "select/SearchableSelectInput";
import Label from "Label";
import {boolean, select, text, withKnobs} from "@storybook/addon-knobs";

const stories = storiesOf(`${sections.dataEntry}/Select Input`, module);
stories.addDecorator(withKnobs);
stories.add("SelectInput", () => <SelectInputHoist {...getSelectKnobs()} />);

const OPTIONS = [
  {
    value: {randomField: "startingValue"},
    label: "Starting Value",
    disabled: true,
  },
  {value: {randomField: "otherValue"}, label: "Other Value", disabled: false},
  {value: {randomField: "Third value"}, label: "Third Value", disabled: false},
  {value: {randomField: "4 value"}, label: "4 Value", disabled: false},
  {value: {randomField: "5 value"}, label: "5 Value", disabled: false},
  {value: {randomField: "6 value"}, label: "6 Value", disabled: false},
  {value: {randomField: "7 value"}, label: "7 Value", disabled: false},
  {value: {randomField: "8 value"}, label: "8 Value", disabled: false},
  {value: {randomField: "9 value"}, label: "9 Value", disabled: false},
  {value: {randomField: "10 value"}, label: "10 Value", disabled: false},
  {value: {randomField: "11 value"}, label: "11 Value", disabled: false},
];

export const getSelectKnobs = () => ({
  disabled: boolean("disabled", false),
  size: select("size", {small: "s", medium: "m", large: "l"}, "m"),
  isInvalid: boolean("isInvalid", false),
  placeholder: text("placeholder", "Select an option..."),
  isNullable: boolean("isNullable", false),
});

class SelectInputHoist extends React.PureComponent<
  *,
  {selectValue: {randomField: string} | null}
> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectValue: null,
    };
  }
  handleInputRecordChange = (value: {randomField: string} | null) => {
    this.setState({selectValue: value});
  };
  render() {
    return (
      <div>
        <Label value="This is another select input.">
          <SelectInput
            {...this.props}
            value={this.state.selectValue}
            options={OPTIONS}
            onChange={this.handleInputRecordChange}
            toKeyFn={value => value.randomField}
          />
        </Label>
        <Label value="This is a searchable select input">
          <SearchableSelectInput
            {...this.props}
            value={this.state.selectValue}
            options={OPTIONS}
            onChange={this.handleInputRecordChange}
            toKeyFn={value => value.randomField}
          />
        </Label>
      </div>
    );
  }
}
