/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {css} from "aphrodite";

import {
  type DemoFile,
  text,
  bool,
  demoCommonStyles,
  type DemoProps,
  list,
  type ListKnob,
} from "../../design_system/types/demoTypes";

import DeprecatedVerticalGroup from "../../DeprecatedVerticalGroup";
import Button from "../../button/Button";

import Toast from "../Toast";
import ToastActions from "../ToastActions";

export function getToastIntentKnob(): ListKnob<"none" | "success" | "danger"> {
  const toastIntents = ["none", "success", "danger"];

  return list(
    toastIntents.map(intent => {
      const intentOption = {value: intent, label: intent};
      return intentOption;
    }),
    false,
    false,
    undefined,
    toastIntents[0]
  );
}

export function getToastActionKnob(): ListKnob<
  | void
  | {|
      +type: "undo",
      +onClick: () => void,
    |}
  | {|
      +type: "refresh",
      +onClick: () => void,
    |}
> {
  const toastActions = [
    {type: "undo", onClick: () => {}},
    {type: "refresh", onClick: () => {}},
  ];

  return list(
    toastActions.map(action => ({value: action, label: action.type})),
    false,
    true,
    // TODO(dmnd): Re-suppress once Flow v110 is out.
    // FlowFixMe(uforic): Need to fix some flow types here.
    value => (value: any).type
  );
}

const knobs = {
  intent: getToastIntentKnob(),
  message: text("Something happened and you should know 👍"),
  isLoading: bool(true),
  action: getToastActionKnob(),
};
const demos: DemoFile = {
  demos: [
    {
      type: "full",
      example: (elementToCodeFn, demoProps) => (
        <ToastShim elementToCodeFn={elementToCodeFn} demoProps={demoProps} />
      ),
      knobs,
    },
    {
      type: "code",
      title: "Anatomy",
      description:
        "The toast message should be concise and direct. Toasts consist of a signle line of text with a style that reflects the intent of the notification.",
      example: fn => {
        const component = (
          <Toast message="Email has been sent!" intent="success" />
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Intent",
      description:
        "The toast intent reinforces the message and help to convey meaning to the user.",
      example: fn => {
        const component = (
          <DeprecatedVerticalGroup>
            <Toast message="Cargo ready date has been updated" intent="none" />
            <Toast message="Email has been sent" intent="success" />
            <Toast message="Flex-456634 has been deleted" intent="danger" />
          </DeprecatedVerticalGroup>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Toast with an Undo",
      description:
        "The toast component can take in a undo parameter which if specified will cause an undo button to appear.",
      example: fn => {
        const callback = () => {};
        const component = (
          <DeprecatedVerticalGroup>
            <Toast
              message="Email has been archived"
              intent="none"
              undo={callback}
            />
            <Toast
              message="Transaction FLEX-852635 confirmed"
              intent="success"
              undo={callback}
            />
            <Toast
              message="Flex-950273 has been deleted"
              intent="danger"
              undo={callback}
            />
          </DeprecatedVerticalGroup>
        );
        fn(component);
        return component;
      },
    },
  ],
};
export class ToastShim extends React.PureComponent<
  {+elementToCodeFn?: React.Node => void, +demoProps: DemoProps<typeof knobs>},
  {}
> {
  static defaultProps = {intent: "none"};

  handleToast = () => {
    const {demoProps} = this.props;
    ToastActions.show(
      {
        ...demoProps,
      },
      4000
    );
  };

  render() {
    const {elementToCodeFn, demoProps} = this.props;
    const element = <Toast {...demoProps} />;
    // eslint-disable-next-line no-unused-expressions
    elementToCodeFn && elementToCodeFn(element);

    return (
      <div className={css(demoCommonStyles.smallWrapper)}>
        <Button onClick={this.handleToast}>Launch toast</Button>
      </div>
    );
  }
}
export default demos;
