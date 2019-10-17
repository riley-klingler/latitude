/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {css} from "aphrodite";
import {
  type DemoFile,
  bool,
  text,
  demoCommonStyles,
  disabledKnob,
  textInputSizeKnob,
} from "../../design_system/types/demoTypes";
import SearchableSelectInput from "../SearchableSelectInput";
import Text from "../../Text";
import {characters} from "../../tools/demo";

const demos: DemoFile = {
  demos: [
    {
      type: "full",
      example: (elementToCodeFn, demoProps) => (
        <SearchableSelectInputShim
          elementToCodeFn={elementToCodeFn}
          demoProps={demoProps}
        />
      ),
      knobs: {
        disabled: disabledKnob,
        isNullable: bool(false),
        customView: bool(false),
        size: textInputSizeKnob,
        isInvalid: bool(false),
        hasHeader: bool(false),
        hasFooter: bool(false),
        placeholder: text("Select a character"),
      },
    },
    {
      type: "code",
      title: "SelectInput is nullable",
      description:
        "Set isNullable to true to allow the user to reset the input to null",
      example: elementToCodeFn => (
        <SearchableSelectInputShim
          elementToCodeFn={elementToCodeFn}
          demoProps={{isNullable: true, placeholder: "placeholder"}}
        />
      ),
    },
    {
      type: "code",
      title: "SelectInput can have custom rendered options",
      description:
        "Set customView in each of the options to render custom option markdown",
      example: elementToCodeFn => (
        <SearchableSelectInputShim
          elementToCodeFn={elementToCodeFn}
          demoProps={{customView: true, placeholder: "Select a character"}}
        />
      ),
    },
    {
      type: "code",
      title: "SelectInput can have a custom header / footer",
      description:
        "set a header or footer to add a sticky header / footer to your dropdown",
      example: elementToCodeFn => (
        <SearchableSelectInputShim
          elementToCodeFn={elementToCodeFn}
          demoProps={{
            hasHeader: true,
            hasFooter: true,
            placeholder: "Select a character",
          }}
        />
      ),
    },
  ],
};

type Props = {|
  +elementToCodeFn: React.Node => void,
  +demoProps: any,
|};

function SearchableSelectInputShim({elementToCodeFn, demoProps}: Props) {
  const [selected, setSelected] = React.useState(null);

  const handleChange = (value: string | null) => {
    setSelected(value);
  };

  const options = characters.map(character => ({
    label: `${character.name} - ${character.team}`,
    customView: demoProps.customView && (
      <CustomItem name={character.name} team={character.team} />
    ),
    value: character.name,
  }));

  const element = (
    <SearchableSelectInput
      {...demoProps}
      value={selected}
      options={options}
      onChange={handleChange}
      header={
        demoProps.hasHeader && (
          <div style={{padding: "4px"}}>
            <Text color="grey50">Custom Sticky Header</Text>
          </div>
        )
      }
      footer={
        demoProps.hasFooter && (
          <div style={{padding: "4px"}}>
            <Text color="grey50">Custom Sticky Header</Text>
          </div>
        )
      }
    />
  );

  elementToCodeFn(element);

  return <div className={css(demoCommonStyles.smallWrapper)}>{element}</div>;
}

type CustomItemProps = {|
  +name: string,
  +team: string,
|};

function CustomItem({name, team}: CustomItemProps) {
  return (
    <div style={{padding: "8px", width: "300px"}}>
      {name} <Text color="grey50"> -- {team}</Text>
    </div>
  );
}

export default demos;
