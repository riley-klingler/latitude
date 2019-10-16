/**
 * TEAM: frontend_infra
 * WATCHERS: uforic
 * @flow
 */

import * as React from "react";
import {mount} from "enzyme";

import FullPageBoundary from "error/FullPageBoundary";
import Logo from "Logo";

function shallowErrorBoundary(propOverrides: {} = {}) {
  const mergedProps = {
    changeKey: "test",
    logo: <Logo />,
    ...propOverrides,
  };
  return mount(
    <FullPageBoundary {...mergedProps}>
      <div />
    </FullPageBoundary>
  );
}

const standardError = {
  error: new Error("test"),
  errorInfo: {componentStack: "stacktrace"},
};

describe("ErrorBoundary", () => {
  it("renders if set", () => {
    const wrapper = shallowErrorBoundary();
    expect(wrapper.find("label[data-qa='errorPage']").length).toBe(0);
    wrapper
      .instance()
      .componentDidCatch(standardError.error, standardError.errorInfo);
    wrapper.update();
    expect(wrapper.find("div[data-qa='errorPage']").length).toBe(1);
  });
  it("changed change key causes the error to go away on rerender", () => {
    const wrapper = shallowErrorBoundary({clearErrorOnRerender: true});
    expect(wrapper.find("label[data-qa='errorPage']").length).toBe(0);
    wrapper.setState({errorState: standardError});
    wrapper.update();
    expect(wrapper.find("div[data-qa='errorPage']").length).toBe(1);
    wrapper.setProps({changeKey: "test1"});
    expect(wrapper.find("div[data-qa='errorPage']").length).toBe(0);
  });
  it("_forceRenderOfBoundary causes the error appear no matter what", () => {
    const wrapper = shallowErrorBoundary({
      _forceRenderOfBoundary: standardError,
    });
    expect(wrapper.find("div[data-qa='errorPage']").length).toBe(1);
  });
  it("calling reset causes the HOC to render without the error", () => {
    const wrapper = shallowErrorBoundary();
    wrapper.setState({errorState: standardError});
    expect(wrapper.find("div[data-qa='errorPage']").length).toBe(1);
    wrapper.instance().resetErrorState();
    wrapper.update();
    expect(wrapper.find("div[data-qa='errorPage']").length).toBe(0);
  });
});
