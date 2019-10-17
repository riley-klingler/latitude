/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {mount} from "enzyme";
import ProgressBar from "../ProgressBar";

function mountProgressBar(propOverrides: {} = {}) {
  const defaultProps = {loaded: false};
  const mergedProps = {...defaultProps, ...propOverrides};
  return mount(<ProgressBar {...mergedProps} />);
}

describe("ProgressBar", () => {
  describe("it does the bare minimum", () => {
    it("matches snapshot", () => {
      const progressBar = mountProgressBar({loaded: false});
      expect(progressBar).toMatchSnapshot();
    });
    it("Renders children if loaded", () => {
      const testChild = "Hi, test.";
      const comp = mountProgressBar({loaded: true, children: testChild});
      expect(comp.html()).toContain(testChild);
    });
  });
});
