/**
 * TEAM: frontend_infra
 * @flow
 */

import type {DemoFile} from "design_system/types/demoTypes";
import * as React from "react";
import TextInputAutocomplete from "TextInputAutocomplete";
import {characters} from "tools/demo";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic Usage",
      example: fn => {
        const component = (
          <TextInputAutocompleteHoist
            initialSuggestions={[
              ...characters.map(character => character.name),
              "this is a suggestion",
              "another suggestion",
              "this is another suggestion",
            ]}
          />
        );
        fn(component);
        return component;
      },
    },
  ],
};

type Props = {|
  +initialSuggestions: $ReadOnlyArray<string>,
|};

type State = {|
  +inputValue: string,
  +suggestions: $ReadOnlyArray<string>,
|};

class TextInputAutocompleteHoist extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      inputValue: "",
      suggestions: props.initialSuggestions,
    };
  }

  render() {
    const {inputValue, suggestions} = this.state;

    return (
      <TextInputAutocomplete
        value={inputValue}
        placeholder="enter text here"
        onChange={newValue => {
          this.setState({inputValue: newValue});
        }}
        suggestions={suggestions}
        maximumOptions={Infinity}
      />
    );
  }
}

export default demos;
