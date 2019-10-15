/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {mount} from "enzyme";
import MultiselectOptions from "../MultiselectOptions";

function mountMultiselectOptions(propOverrides: {} = {}) {
  const defaultProps = {
    values: ["b"],
    options: [
      {value: "a", label: "A"},
      {value: "b", label: "B", disabled: true},
      {value: "c", label: "C", disabled: true},
      {value: "d", label: "D"},
    ],
    onChange: () => {},
    displaySelectAllButton: false,
  };

  return mount(<MultiselectOptions {...defaultProps} {...propOverrides} />);
}

describe("MultiselectOptions", () => {
  it("can select a value", () => {
    const handleChange = jest.fn();
    const wrapper = mountMultiselectOptions({onChange: handleChange});

    const firstCheckbox = wrapper.find("label").at(0);
    firstCheckbox.find("input").simulate("change");

    expect(handleChange.mock.calls[0][0]).toContain("a");
    expect(handleChange.mock.calls[0][0]).toContain("b");
  });

  it("can deselect a value", () => {
    const handleChange = jest.fn();
    const wrapper = mountMultiselectOptions({
      values: ["a", "b"],
      onChange: handleChange,
    });

    const firstCheckbox = wrapper.find("label").at(0);
    firstCheckbox.find("input").simulate("change");

    expect(handleChange.mock.calls[0][0]).not.toContain("a");
    expect(handleChange.mock.calls[0][0]).toContain("b");
  });

  it("selects all when select all is pressed (ignoring disabled)", () => {
    const handleChange = jest.fn();
    const wrapper = mountMultiselectOptions({
      displaySelectAllButton: true,
      onChange: handleChange,
    });

    const selectAllCheckbox = wrapper.find("label").at(0);
    selectAllCheckbox.find("input").simulate("change");

    expect(handleChange.mock.calls[0][0]).toContain("a");
    expect(handleChange.mock.calls[0][0]).toContain("b");
    // disabled options don't get toggled
    expect(handleChange.mock.calls[0][0]).not.toContain("c");
    expect(handleChange.mock.calls[0][0]).toContain("d");
  });

  it("deselects all when select all is pressed again (ignoring disabled)", () => {
    const handleChange = jest.fn();
    const wrapper = mountMultiselectOptions({
      values: ["a", "b", "d"],
      displaySelectAllButton: true,
      onChange: handleChange,
    });

    const selectAllCheckbox = wrapper.find("label").at(0);
    selectAllCheckbox.find("input").simulate("change");

    expect(handleChange.mock.calls[0][0]).not.toContain("a");
    // disabled options don't get toggled
    expect(handleChange.mock.calls[0][0]).toContain("b");
    expect(handleChange.mock.calls[0][0]).not.toContain("c");
    expect(handleChange.mock.calls[0][0]).not.toContain("d");
  });
});
