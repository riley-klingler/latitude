/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {StyleSheet, css} from "aphrodite";
import {type DemoFile, bool} from "../../design_system/types/demoTypes";
import MultiselectFilter, {
  getValueArrayFromFilterValue,
  getFilterValueFromArray,
  type ValueObj,
} from "../MultiselectFilter";
import {type StarWarsCharacter, characters} from "../../tools/demo";

const demos: DemoFile = {
  demos: [
    {
      type: "full",
      example: (elementToCodeFn, demoProps) => (
        <MultiselectFilterShim
          elementToCodeFn={elementToCodeFn}
          demoProps={demoProps}
        />
      ),
      knobs: {
        enableSearch: bool(false),
      },
    },
  ],
};

type State = {
  values: $ReadOnlyArray<StarWarsCharacter>,
};

export class MultiselectFilterShim extends React.PureComponent<
  {+elementToCodeFn?: React.Node => void, +demoProps?: any},
  State
> {
  state = {
    values: [],
  };

  handleChange = (values: ValueObj<StarWarsCharacter>) => {
    this.setState({
      values: getValueArrayFromFilterValue(values),
    });
  };

  render() {
    const options = characters.map(character => ({
      label: `${character.name} - ${character.team}`,
      value: character,
    }));
    const {elementToCodeFn, demoProps, ...otherProps} = this.props;
    const element = (
      <MultiselectFilter
        value={getFilterValueFromArray(this.state.values, options)}
        options={options}
        onChange={this.handleChange}
        label="Favorite Starwars Characters"
        filterSearchMode={
          demoProps && demoProps.enableSearch
            ? {
                type: "filter",
              }
            : {
                type: "none",
              }
        }
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
    maxWidth: "600px",
  },
});

export default demos;
