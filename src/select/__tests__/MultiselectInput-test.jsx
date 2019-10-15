/**
 * TEAM: frontend_infra
 * WATCHERS: uforic
 * @flow
 */
import * as React from "react";
import {mount} from "enzyme";
import {_test} from "select/MultiselectInput";
import MultiselectOptions from "select/MultiselectOptions";

import {options} from "select/__tests__/generateOverviewText-test";
import {inputStyles} from "styles/input";
import {styleToClassname} from "styles/index";
import {isEqual} from "lodash";

const {MultiselectInputClass} = _test;

function mountMultiselect(propOverrides: {} = {}) {
  const defaultProps = {
    isPopupVisible: true,
    value: [options[0].value],
    options,
  };
  const mergedProps = {
    ...defaultProps,
    ...propOverrides,
  };
  // $FlowFixMe(uforic)
  return mount(<MultiselectInputClass {...mergedProps} />);
}

describe("Multiselect", () => {
  it("displays select all when flag enabled", () => {
    const wrapper = mountMultiselect({displaySelectAllButton: true});
    wrapper.find("SelectButton").simulate("click");
    // "Select all" appears in Checkbox and in the wrapped CheckboxClass
    expect(wrapper.find({label: "Select all"}).length).toBe(1);
  });
  it("doesn't display select all when flag not enabled", () => {
    const wrapper = mountMultiselect({displaySelectAllButton: false});
    wrapper.find("SelectButton").simulate("click");
    expect(wrapper.find({label: "Select all"}).length).toBe(0);
  });
  it("isValid works", () => {
    const wrapper = mountMultiselect({isInvalid: true});
    expect(
      wrapper.find("div[data-qa='select-button']").props().className
    ).toContain(styleToClassname(inputStyles.isInvalid));
  });
  it("isDisabled works", () => {
    const wrapper = mountMultiselect({disabled: true});
    expect(
      wrapper.find("div[data-qa='select-button']").props().className
    ).toContain(styleToClassname(inputStyles.disabled));
  });
  it("throws if no toKeyFn is provided and the type is not a string or number", () => {
    expect(() => mountMultiselect({value: [options[0]]})).toThrow();
  });
  it("record multiselect works", () => {
    const onChange = jest.fn();
    const recordOptions = [
      {
        label: "test",
        value: "test",
      },
      {
        label: "test1",
        value: "test1",
      },
    ];
    const selectedVals = [recordOptions[0].value];
    const wrapper = mountMultiselect({
      options: recordOptions,
      value: selectedVals,
      onChange,
    });
    wrapper.find("SelectButton").simulate("click");
    expect(
      isEqual(wrapper.find(MultiselectOptions).props().values, ["test"])
    ).toBe(true);
    wrapper
      .find(MultiselectOptions)
      .props()
      .onChange(["test", "test1"]);
    expect(onChange.mock.calls.length).toBe(1);
    expect(
      isEqual(
        onChange.mock.calls[0][0],
        recordOptions.map(option => option.value)
      )
    ).toBe(true);
  });
  it('does not exclude options when filtering and pressing "Select All"', () => {
    const onChange = jest.fn();
    const recordOptions = [
      {
        label: "test",
        value: "test",
      },
      {
        label: "filterOut",
        value: "filterOut",
      },
    ];
    const selectedVals = [];
    const wrapper = mountMultiselect({
      options: recordOptions,
      value: selectedVals,
      filterSearchMode: {type: "filter", placeholder: "Filter"},
      onChange,
    });
    wrapper.find("SelectButton").simulate("click");

    // Filter on letter "t"
    const filterInput = wrapper.find("input").at(0);
    filterInput.simulate("change", {target: {value: "test"}});

    const selectAll = wrapper
      .find(MultiselectOptions)
      .find("label")
      .at(0);
    selectAll.find("input").simulate("change");

    expect(onChange.mock.calls.length).toBe(1);
    expect(
      isEqual(
        onChange.mock.calls[0][0],
        recordOptions.map(option => option.value)
      )
    ).toBe(true);
  });
});
