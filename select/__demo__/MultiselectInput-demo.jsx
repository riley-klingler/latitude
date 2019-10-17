/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import type {DemoFile} from "../../design_system/types/demoTypes";
import MultiselectInput from "../MultiselectInput";
import {StyleSheet, css} from "aphrodite";
import {type StarWarsCharacter, characters} from "../../tools/demo";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic usage example",
      example: elementToCodeFn => (
        <MultiselectFilterShim elementToCodeFn={elementToCodeFn} />
      ),
    },
  ],
};

export class MultiselectFilterShim extends React.PureComponent<
  {+elementToCodeFn?: React.Node => void},
  {values: $ReadOnlyArray<StarWarsCharacter>}
> {
  state = {
    values: [],
  };

  handleChange = (values: $ReadOnlyArray<StarWarsCharacter>) => {
    this.setState({values});
  };

  render() {
    const options = characters.map(character => ({
      label: `${character.name} - ${character.team}`,
      value: character,
    }));
    const {elementToCodeFn, ...otherProps} = this.props;
    const element = (
      <MultiselectInput
        value={this.state.values}
        options={options}
        onChange={this.handleChange}
        toKeyFn={character => character.id.toString()}
        {...otherProps}
      />
    );
    // eslint-disable-next-line no-unused-expressions
    elementToCodeFn && elementToCodeFn(element);
    return (
      <div className={css(selectFilterShimStyles.wrappingContainer)}>
        {element}
      </div>
    );
  }
}

const selectFilterShimStyles = StyleSheet.create({
  wrappingContainer: {
    maxWidth: "300px",
  },
});

export default demos;
