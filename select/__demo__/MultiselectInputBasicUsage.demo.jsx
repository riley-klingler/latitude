/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import MultiselectInput from "../MultiselectInput";
import {characters} from "../../tools/demo";

/**
 * @title Basic Usage
 * @description Allows user to select multiple options.
 */
export default function MultiselectInputBasicUsage() {
  const [values, setValues] = React.useState([]);

  const options = characters.map(character => ({
    label: `${character.name} - ${character.team}`,
    value: character,
  }));

  return (
    <div
      style={{
        maxWidth: "300px",
      }}
    >
      <MultiselectInput
        value={values}
        options={options}
        onChange={values => setValues(values)}
        toKeyFn={character => character.id.toString()}
      />
    </div>
  );
}
