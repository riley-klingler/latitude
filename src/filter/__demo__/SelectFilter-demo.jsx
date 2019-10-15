/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";

import type {DemoFile} from "design_system/types/demoTypes";
import SelectFilter from "filter/SelectFilter";
import {type StarWarsCharacter, characters} from "tools/demo";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic usage example",
      example: elementToCodeFn => (
        <SelectFilterShim elementToCodeFn={elementToCodeFn} />
      ),
    },
    {
      type: "code",
      title: "SelectFilter is nullable",
      description:
        "Set isNullable to true to allow the user to reset the input to null",
      example: elementToCodeFn => (
        <SelectFilterShim elementToCodeFn={elementToCodeFn} isNullable={true} />
      ),
    },
  ],
};

export class SelectFilterShim extends React.PureComponent<
  {+elementToCodeFn: React.Node => void},
  {value: StarWarsCharacter | null}
> {
  state = {
    value: null,
  };

  handleChange = (value: StarWarsCharacter | null) => {
    this.setState({value});
  };

  render() {
    const options = characters.map(character => ({
      label: `${character.name} - ${character.team}`,
      value: character,
    }));
    const {elementToCodeFn, ...otherProps} = this.props;
    const element = (
      <SelectFilter
        value={this.state.value}
        options={options}
        onChange={this.handleChange}
        label="Favorite Starwars Character"
        shyLabel={true}
        {...otherProps}
      />
    );
    elementToCodeFn(element);
    return element;
  }
}

export default demos;
