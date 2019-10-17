/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {mount, shallow} from "enzyme";
import CheckboxList, {type Option} from "../CheckboxList";
import Checkbox from "../Checkbox";

function mountCheckboxList(
  options: $ReadOnlyArray<Option<string>>,
  values: $ReadOnlyArray<string>,
  onChange: (values: $ReadOnlyArray<string>) => void
) {
  return mount(
    <CheckboxList options={options} values={values} onChange={onChange} />
  );
}

const empty: Array<Option<string>> = [];

const oneOption: Array<Option<string>> = [
  {
    label: "A",
    value: "a",
  },
];

const twoOptions: Array<Option<string>> = [
  {
    label: "A",
    value: "a",
  },
  {
    label: "B",
    value: "b",
  },
];

describe("CheckboxList", () => {
  describe("with no options", () => {
    it("renders an empty list", () => {
      const handleClick = jest.fn();
      const comp = mountCheckboxList(empty, [], handleClick);
      expect(comp).toHaveLength(1);

      const checkboxes = comp.find(".checkbox");
      expect(checkboxes).toHaveLength(0);
    });
  });

  describe("with one option", () => {
    it("renders a list with one unchecked checkbox", () => {
      const handleClick = jest.fn();
      const comp = mountCheckboxList(oneOption, [], handleClick);
      expect(comp).toHaveLength(1);

      const checkboxes = comp.find("input");
      expect(checkboxes).toHaveLength(1);

      const checkbox = checkboxes.at(0);
      expect(comp.find("span").text()).toBe("A");
      expect(checkbox.props().checked).toBe(false);

      checkbox.find("input").simulate("change");

      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(handleClick).toHaveBeenCalledWith(["a"]);
    });

    it("renders a list with one checked checkbox", () => {
      const handleClick = jest.fn();
      const comp = mountCheckboxList(oneOption, ["a"], handleClick);
      expect(comp).toHaveLength(1);

      const checkboxes = comp.find("label");
      expect(checkboxes).toHaveLength(1);

      const checkbox = checkboxes.at(0);
      expect(checkbox.find("span").text()).toBe("A");
      expect(checkbox.find("input").props().checked).toBe(true);

      checkbox.find("input").simulate("change");

      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(handleClick).toHaveBeenCalledWith([]);
    });
  });

  describe("with two options", () => {
    it("renders a list with two unchecked checkboxes", () => {
      const handleClick = jest.fn();
      const comp = mountCheckboxList(twoOptions, [], handleClick);
      expect(comp).toHaveLength(1);

      const checkboxes = comp.find("label");
      expect(checkboxes).toHaveLength(2);

      const aCheckbox = checkboxes.at(0);
      expect(aCheckbox.find("span").text()).toBe("A");
      expect(aCheckbox.find("input").props().checked).toBe(false);

      const bCheckbox = checkboxes.at(1);
      expect(bCheckbox.find("span").text()).toBe("B");
      expect(bCheckbox.find("input").props().checked).toBe(false);

      aCheckbox.find("input").simulate("change");

      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(handleClick).toHaveBeenCalledWith(["a"]);

      handleClick.mockClear();

      bCheckbox.find("input").simulate("change");

      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(handleClick).toHaveBeenCalledWith(["b"]);
    });

    it("renders a list with one unchecked checkbox and one checked checkbox", () => {
      const handleClick = jest.fn();
      const comp = mountCheckboxList(twoOptions, ["b"], handleClick);
      expect(comp).toHaveLength(1);

      const checkboxes = comp.find("label");
      expect(checkboxes).toHaveLength(2);

      const aCheckbox = checkboxes.at(0);
      expect(aCheckbox.find("span").text()).toBe("A");
      expect(aCheckbox.find("input").props().checked).toBe(false);

      const bCheckbox = checkboxes.at(1);
      expect(bCheckbox.find("span").text()).toBe("B");
      expect(bCheckbox.find("input").props().checked).toBe(true);

      aCheckbox.find("input").simulate("change");

      expect(handleClick).toHaveBeenCalledTimes(1);

      const selected = handleClick.mock.calls[0][0];
      expect(selected).toHaveLength(2);
      expect(selected).toContain("a");
      expect(selected).toContain("b");

      handleClick.mockClear();

      bCheckbox.find("input").simulate("change");

      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(handleClick).toHaveBeenCalledWith([]);
    });

    it("renders a list with two checked checkboxes", () => {
      const handleClick = jest.fn();
      const comp = mountCheckboxList(twoOptions, ["a", "b"], handleClick);
      expect(comp).toHaveLength(1);

      const checkboxes = comp.find("label");
      expect(checkboxes).toHaveLength(2);

      const aCheckbox = checkboxes.at(0);
      expect(aCheckbox.find("span").text()).toBe("A");
      expect(aCheckbox.find("input").props().checked).toBe(true);

      const bCheckbox = checkboxes.at(1);
      expect(bCheckbox.find("span").text()).toBe("B");
      expect(bCheckbox.find("input").props().checked).toBe(true);

      aCheckbox.find("input").simulate("change");

      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(handleClick).toHaveBeenCalledWith(["b"]);

      handleClick.mockClear();

      bCheckbox.find("input").simulate("change");

      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(handleClick).toHaveBeenCalledWith(["a"]);
    });

    it("supports generic value types", () => {
      const handleClick = jest.fn();
      const comp = mount(
        <CheckboxList
          values={[]}
          onChange={handleClick}
          options={[{value: "1", label: "a"}, {value: 1, label: "b"}]}
        />
      );

      const checkboxes = comp.find("label");
      expect(checkboxes).toHaveLength(2);

      const aCheckbox = checkboxes.at(0);
      aCheckbox.find("input").simulate("change");
      expect(handleClick).toHaveBeenCalledWith(["1"]);

      const bCheckbox = checkboxes.at(1);
      bCheckbox.find("input").simulate("change");
      expect(handleClick).toHaveBeenCalledWith([1]);
    });

    describe("when a selected value is not in the options", () => {
      it("does not affect the selected value when checkboxes are toggled", () => {
        const handleClick = jest.fn();
        const comp = mountCheckboxList(twoOptions, ["b", "c"], handleClick);
        expect(comp).toHaveLength(1);

        const checkboxes = comp.find("label");
        expect(checkboxes).toHaveLength(2);

        const aCheckbox = checkboxes.at(0);
        expect(aCheckbox.find("span").text()).toBe("A");
        expect(aCheckbox.find("input").props().checked).toBe(false);

        const bCheckbox = checkboxes.at(1);
        expect(bCheckbox.find("span").text()).toBe("B");
        expect(bCheckbox.find("input").props().checked).toBe(true);

        aCheckbox.find("input").simulate("change");

        expect(handleClick).toHaveBeenCalledTimes(1);

        const selected = handleClick.mock.calls[0][0];
        expect(selected).toHaveLength(3);
        expect(selected).toContain("a");
        expect(selected).toContain("b");
        expect(selected).toContain("c");

        handleClick.mockClear();

        bCheckbox.find("input").simulate("change");

        expect(handleClick).toHaveBeenCalledTimes(1);
        expect(handleClick).toHaveBeenCalledWith(["c"]);
      });
    });
  });

  describe("with the select all option", () => {
    it("should have a select all option when not all values are selected", () => {
      const options = [{label: "One", value: 1}];
      const wrapper = shallow(
        <CheckboxList
          showSelectAllOption={true}
          values={[]}
          options={options}
          onChange={jest.fn()}
        />
      );
      const selectAllCheckbox = wrapper.find(Checkbox).at(0);
      expect(selectAllCheckbox.prop("label")).toEqual("Select All");
    });

    it("'should have text 'Select None' when all the options are selected", () => {
      const options = [{label: "One", value: 1}];
      const values = [1];
      const wrapper = shallow(
        <CheckboxList
          showSelectAllOption={true}
          values={values}
          options={options}
          onChange={jest.fn()}
        />
      );
      const selectAllCheckbox = wrapper.find(Checkbox).at(0);
      expect(selectAllCheckbox.prop("label")).toEqual("Select None");
    });

    it("should select all the values", () => {
      const options = [{label: "One", value: 1}, {label: "Two", value: 2}];
      const onChangeSpy = jest.fn();
      const wrapper = shallow(
        <CheckboxList
          showSelectAllOption={true}
          values={[]}
          options={options}
          onChange={onChangeSpy}
        />
      );
      const selectAllCheckbox = wrapper.find(Checkbox).at(0);
      selectAllCheckbox.simulate("change");
      expect(onChangeSpy).toHaveBeenCalledWith([1, 2]);
    });
  });
});
