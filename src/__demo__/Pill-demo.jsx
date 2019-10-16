/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import type {DemoFile} from "../design_system/types/demoTypes";
import * as React from "react";
import Group from "../Group";
import Pill from "../Pill";
import Label from "../Label";

import reflectiveBind from "reflective-bind";
import {Form} from "formula-one";
import F1TextInput from "../base_candidate/formula_one/F1TextInput";
import Button from "../button/Button";
import Text from "../Text";
import DeprecatedHorizontalGroup from "../DeprecatedHorizontalGroup";
import DeprecatedVerticalGroup from "../DeprecatedVerticalGroup";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic Usage",
      example: fn => {
        const component = (
          <Pill onDismiss={() => {}}>ETD: Jan 01, 2019 CST</Pill>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "In-practice example",
      example: elementToCodeFn => (
        <PillShim elementToCodeFn={elementToCodeFn} />
      ),
    },
    {
      type: "code",
      title: "sizes",
      example: fn => {
        const component = (
          <Group flexDirection="column">
            <Label value="Extra Small" />
            <Pill size="xs" onDismiss={() => {}}>
              ETD: Jan 01, 2019 CST
            </Pill>
            <Label value="Small" />
            <Pill size="s" onDismiss={() => {}}>
              ETD: Jan 01, 2019 CST
            </Pill>
            <Label value="Medium" />
            <Pill size="m" onDismiss={() => {}}>
              ETD: Jan 01, 2019 CST
            </Pill>
            <Label value="Large" />
            <Pill size="l" onDismiss={() => {}}>
              ETD: Jan 01, 2019 CST
            </Pill>
          </Group>
        );
        fn(component);
        return component;
      },
    },
  ],
};

type Props = {+elementToCodeFn?: React.Node => void};
type State = {pills: Array<string>};

export class PillShim extends React.PureComponent<Props, State> {
  state = {
    pills: [],
  };

  handleAdd = (value: string) => {
    const newState = this.state.pills;
    newState.push(value);
    this.setState({pills: newState});
  };

  handleRemove = (index: number) => {
    const newState = this.state.pills;
    newState.splice(index, 1);
    this.setState({pills: newState});
  };

  render() {
    const element = (
      <Form initialValue="" onSubmit={this.handleAdd}>
        {(link, onSubmit) => (
          <DeprecatedVerticalGroup spacing="l">
            <DeprecatedHorizontalGroup crossAlign="end">
              <F1TextInput link={link} label="Add a tag" />
              <Button onClick={onSubmit}>Submit</Button>
            </DeprecatedHorizontalGroup>
            <DeprecatedHorizontalGroup>
              {this.state.pills.length > 0 ? (
                this.state.pills.map((_pill, i) => (
                  <Pill
                    key={this.state.pills[i]}
                    onDismiss={reflectiveBind(this.handleRemove, this, i)}
                  >
                    {this.state.pills[i]}
                  </Pill>
                ))
              ) : (
                <Text>No tags added.</Text>
              )}
            </DeprecatedHorizontalGroup>
          </DeprecatedVerticalGroup>
        )}
      </Form>
    );
    // eslint-disable-next-line prefer-destructuring
    const elementToCodeFn = this.props.elementToCodeFn;
    // eslint-disable-next-line no-unused-expressions
    elementToCodeFn && elementToCodeFn(element);
    return element;
  }
}

export default demos;
