/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {type DemoFile, bool} from "../design_system/types/demoTypes";
import DropdownButton from "../DropdownButton";
import ToggleButton from "../base_candidate/button/ToggleButton";

const demos: DemoFile = {
  demos: [
    {
      type: "full",
      example: (elementToCodeFn, demoProps) => (
        <DropdownButtonShim
          elementToCodeFn={elementToCodeFn}
          demoProps={demoProps}
        />
      ),
      knobs: {
        disabled: bool(false),
        menuAlignRight: bool(false),
      },
    },
    {
      type: "code",
      title: "Ellipsis Dropdown",
      description: "An example of an ellipsis dropdown menu",
      example: fn => {
        const component = (
          <DropdownButton
            button={<ToggleButton iconName="ellipsis" hideToggleIcon={true} />}
            options={[
              {label: "test", handleClick: () => {}, iconName: "cancel"},
              {
                label: "Second test",
                labelTitle: "Title:",
                handleClick: () => {},
                iconName: "satellite",
              },
            ]}
          />
        );

        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "Dropdown with Icon",
      description: "An example of a dropdown with an Icon",
      example: fn => {
        const component = (
          <DropdownButton
            button={<ToggleButton iconName="cog" label="Settings" />}
            options={[
              {label: "Ocean", handleClick: () => {}, iconName: "ship"},
              {
                label: "Air",
                handleClick: () => {},
                iconName: "plane",
              },
            ]}
          />
        );

        fn(component);
        return component;
      },
    },
  ],
};

export class DropdownButtonShim extends React.PureComponent<{
  +elementToCodeFn?: React.Node => void,
  +demoProps: any,
}> {
  render() {
    const element = (
      <DropdownButton
        button={<ToggleButton label="Toggle me" />}
        disabled={this.props.demoProps.disabled}
        menuAlignRight={this.props.demoProps.menuAlignRight}
        options={[
          {label: "test", handleClick: () => {}, iconName: "cancel"},
          {
            label: "Second test",
            labelTitle: "Title:",
            handleClick: () => {},
            iconName: "satellite",
          },
        ]}
      />
    );
    // eslint-disable-next-line prefer-destructuring
    const elementToCodeFn = this.props.elementToCodeFn;
    // eslint-disable-next-line no-unused-expressions
    elementToCodeFn && elementToCodeFn(element);
    return element;
  }
}

export default demos;
