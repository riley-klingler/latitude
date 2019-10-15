/**
 * TEAM: frontend_infra
 * @flow
 */
import * as React from "react";
import {mount} from "enzyme";

import Tooltip, {insideTestResetModuleState} from "Tooltip";

jest.mock(
  "rc-tooltip",
  () =>
    function MockRcTooltip({children}: {+children: React.Node}) {
      // eslint-disable-next-line flexport/no-oocss
      return <div className="rc-tooltip mock">{children}</div>;
    }
);

const CHILD_TEXT = "Some text";
function mountChild() {
  return mount(
    <Tooltip>
      {/* eslint-disable-next-line flexport/no-oocss */}
      <div className="child">{CHILD_TEXT}</div>
    </Tooltip>
  );
}

describe("<Tooltip />", () => {
  it("renders without RcTooltip while waiting for it to load", () => {
    const wrapper = mountChild();
    expect(wrapper.find(".child").text()).toMatch(CHILD_TEXT);
    expect(wrapper.find("MockRcTooltip")).toHaveLength(0);
  });

  it("throws when a child uses onMouseEnter or onMouseLeave", () => {
    expect(() =>
      mount(
        <Tooltip>
          <div onMouseEnter={() => {}}>{CHILD_TEXT}</div>
        </Tooltip>
      )
    ).toThrowErrorMatchingInlineSnapshot(`
"Defining onMouseEnter and onMouseLeave on children of Tooltip is
            currently not implemented! See this error in the source for more
            info"
`);
  });

  describe("when code has finished loading", () => {
    beforeEach(insideTestResetModuleState);

    it("renders the tooltip if user is still hovering", done => {
      const wrapper = mountChild();

      // trigger a fetch by hovering
      wrapper.simulate("mouseenter");

      // wait for the code to arrive
      process.nextTick(() => {
        wrapper.update();
        expect(wrapper.find("MockRcTooltip").prop("defaultVisible")).toBe(true);
        expect(wrapper.find(".child").text()).toMatch(CHILD_TEXT);
        done();
      });
    });

    it("does not render the tooltip if user is not hovering", done => {
      const wrapper = mountChild();

      // trigger a fetch by hovering
      wrapper.simulate("mouseenter");

      // but move the mouse away
      wrapper.simulate("mouseleave");

      // wait for the code to arrive
      process.nextTick(() => {
        wrapper.update();
        expect(wrapper.find("MockRcTooltip").prop("defaultVisible")).toBe(
          false
        );
        expect(wrapper.find(".child").text()).toMatch(CHILD_TEXT);
        done();
      });
    });

    it("re-renders all components", done => {
      const wrapper = mountChild();
      const wrapper2 = mountChild();

      // trigger a fetch by hovering
      wrapper.simulate("mouseenter");

      // wait for the code to arrive
      process.nextTick(() => {
        wrapper.update();
        expect(wrapper.find("MockRcTooltip")).toHaveLength(1);
        wrapper2.update();
        expect(wrapper2.find("MockRcTooltip")).toHaveLength(1);
        done();
      });
    });
  });

  it("immediately loads when visible is set to true", done => {
    const wrapper = mount(
      <Tooltip visible={true}>
        {/* eslint-disable-next-line flexport/no-oocss */}
        <div className="child">{CHILD_TEXT}</div>
      </Tooltip>
    );

    // wait for the code to arrive
    process.nextTick(() => {
      wrapper.update();
      expect(wrapper.find("MockRcTooltip").prop("visible")).toBe(true);
      expect(wrapper.find(".child").text()).toMatch(CHILD_TEXT);
      done();
    });
  });
});
