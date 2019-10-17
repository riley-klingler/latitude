/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {demoCommonStyles, type DemoFile} from "../../design_system/types/demoTypes";
import SelectInput from "../SelectInput";
import {css} from "aphrodite";
import {characters} from "../../tools/demo";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic usage example",
      example: elementToCodeFn => (
        <SelectInputShim elementToCodeFn={elementToCodeFn} />
      ),
    },
    {
      type: "code",
      title: "SelectInput is nullable",
      description:
        "Set isNullable to true to allow the user to reset the input to null",
      example: elementToCodeFn => (
        <SelectInputShim elementToCodeFn={elementToCodeFn} isNullable={true} />
      ),
    },
  ],
};

export class SelectInputShim extends React.PureComponent<
  {+elementToCodeFn?: React.Node => void},
  {value: string | null}
> {
  state = {
    value: null,
  };

  handleChange = (value: ?string) => {
    this.setState({value});
  };

  render() {
    const options = characters.map(character => ({
      label: `${character.name} - ${character.team}`,
      value: character.name,
    }));
    const {elementToCodeFn, ...otherProps} = this.props;
    const element = (
      <SelectInput
        value={this.state.value}
        options={options}
        onChange={this.handleChange}
        {...otherProps}
      />
    );
    // eslint-disable-next-line no-unused-expressions
    elementToCodeFn && elementToCodeFn(element);
    return <div className={css(demoCommonStyles.smallWrapper)}>{element}</div>;
  }
}
export default demos;
