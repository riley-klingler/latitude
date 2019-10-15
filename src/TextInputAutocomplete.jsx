/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {Manager} from "react-popper";
import {StyleSheet, css} from "aphrodite";
import TextInput from "TextInput";
import DropdownList from "select/DropdownList";
import DeprecatedPopperTarget from "popup/DeprecatedPopperTarget";
import DeprecatedPopper from "popup/DeprecatedPopper";
import useDropdown from "tools/useDropdown";

type Option = string;

type TextInputProps = React.ElementConfig<typeof TextInput>;

type Props = {|
  /** all TextInput props will be passed into the TextInput */
  ...TextInputProps,
  +suggestions: $ReadOnlyArray<Option>,
  /** positively filters an option according to the callback */
  +optionsFilter: (query: string, option: Option) => boolean,
  /** the maximum number of suggestions that will be presented */
  +maximumOptions: number,
|};

export const defaultFilter = (query: string, option: Option) => {
  const trimmedOption = option.toLowerCase().trim();
  const trimmedQuery = query.toLowerCase().trim();

  return trimmedOption.includes(trimmedQuery);
};

const defaultProps = {
  optionsFilter: defaultFilter,
  maximumOptions: 10,
};

/**
 * @category Data Entry
 * @short Collect simple text input from the user with dropdown suggestions
 * @brandStatus V2
 * @status Stable
 * TextInputAutocomplete is a text input with a suggestions dropdown. By default a maximum
 * of 10 suggestions are displayed by the dropdown.
 */
export default function TextInputAutocomplete({
  suggestions,
  optionsFilter,
  maximumOptions,
  ...textInputProps
}: Props) {
  const filteredSuggestions = suggestions
    .filter((option: string) => optionsFilter(textInputProps.value, option))
    .slice(0, maximumOptions);

  const handleChange = (newValue: string) => {
    textInputProps.onChange(newValue);
  };

  const {
    isOpen,
    highlightedIndex,
    handlers: {
      handleInputMouseDown,
      handleInputFocus,
      handleInputBlur,
      handleListItemClick,
      handleInputKeyDown,
    },
  } = useDropdown(filteredSuggestions, handleChange, null);

  const handleMouseDown = (e: Event) => {
    handleInputMouseDown();

    if (textInputProps.onClick) {
      textInputProps.onClick(e);
    }
  };

  const handleFocus = (e: Event) => {
    handleInputFocus();

    if (textInputProps.onFocus) {
      textInputProps.onFocus(e);
    }
  };

  const handleBlur = (e: Event) => {
    handleInputBlur();

    if (textInputProps.onBlur) {
      textInputProps.onBlur(e);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    handleInputKeyDown(e);

    if (textInputProps.onKeyDown) {
      textInputProps.onKeyDown(e);
    }
  };

  return (
    <Manager>
      <div className={css(styles.container)}>
        <DeprecatedPopperTarget>
          <TextInput
            {...textInputProps}
            onChange={handleChange}
            onMouseDown={handleMouseDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        </DeprecatedPopperTarget>
        <DeprecatedPopper className={css(styles.dropdownContainer)}>
          <DropdownList
            options={filteredSuggestions.map(suggestion => ({
              label: suggestion,
            }))}
            highlightedOption={
              highlightedIndex !== null
                ? filteredSuggestions[highlightedIndex]
                : null
            }
            onClick={handleListItemClick}
            isOpen={isOpen}
          />
        </DeprecatedPopper>
      </div>
    </Manager>
  );
}

TextInputAutocomplete.defaultProps = defaultProps;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  dropdownContainer: {
    position: "absolute",
    left: "0",
    top: "100%",
    padding: "3px 0",
    minWidth: "100%",
    zIndex: "10",
    transform: "none",
  },
});
