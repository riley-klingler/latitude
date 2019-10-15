/**
 * TEAM: frontend_infra
 * @flow
 */
import * as React from "react";
import {StyleSheet, css} from "aphrodite";
import {difference} from "lodash";
import {commonT} from "config/I18n";
import {InFilterContext} from "filter/BaseFilter";
import CheckboxList from "CheckboxList";
import Checkbox from "Checkbox";
import TextInput from "TextInput";
import colors from "styles/colors";
import {border, include, margin, padding} from "styles/index";

type FilterMode =
  | {|+type: "none"|}
  | {|+type: "filter", +placeholder?: string|};

export type Option<T> = {|
  /** The unique label associated with the option */
  +label: string,
  /** The unqiue value of the option */
  +value: T,
  /** Whether the option can be selected */
  +disabled?: boolean,
|};

type Props<T> = {
  /** The currently selected list of values */
  +values: $ReadOnlyArray<T>,
  /** Called whenever the selected items changes */
  +onChange: (values: $ReadOnlyArray<T>) => void,
  /** The list of options to pick from */
  +options: $ReadOnlyArray<Option<T>>,
  /** Displays a select all button as the first item of the list */
  +displaySelectAllButton: boolean,
  /**
   * If `filterSearchMode` is set to `filter`, a text input will be included
   * that will filter down on the visible options
   */
  +filterSearchMode: FilterMode,
};

const defaultSearchPlaceholder = "Search location";

/** determines if an option matches the search text */
function filterOptions(
  options: $ReadOnlyArray<Option<any>>,
  searchText: string
) {
  return options.filter(option =>
    option.label.toLowerCase().includes(searchText.toLowerCase())
  );
}

function areAllItemsSelected<T>(
  values: $ReadOnlyArray<T>,
  options: $ReadOnlyArray<Option<T>>
): boolean {
  const optionValues = options
    .filter(option => !option.disabled)
    .map(option => option.value);
  return difference(optionValues, values).length === 0;
}

/**
 * @short Select multiple values from a list of options.
 * @category Data Entry
 * @brandStatus V2
 * @status Stable
 */
function MultiselectOptions<T>({
  values,
  onChange,
  options,
  displaySelectAllButton,
  filterSearchMode,
}: Props<T>) {
  // DropdownList will drop its border styling if it's in a filter
  const inFilter = React.useContext(InFilterContext);

  const [searchText, setSearchText] = React.useState("");
  const placeholder = filterSearchMode.placeholder || defaultSearchPlaceholder;

  const displayOptions = filterOptions(options, searchText);

  const handleSelectAll = (selectAll: boolean) => {
    const disabledSelectedOptions = options
      .filter(option => option.disabled)
      .filter(option => values.includes(option.value));
    const nonDisabledOptions = options.filter(option => !option.disabled);

    if (selectAll) {
      onChange([
        ...disabledSelectedOptions.map(option => option.value),
        ...nonDisabledOptions.map(option => option.value),
      ]);
    } else {
      onChange([...disabledSelectedOptions.map(option => option.value)]);
    }
  };

  const searchBar =
    filterSearchMode.type !== "none" ? (
      <div className={css(styles.searchBox)}>
        <TextInput
          value={searchText}
          onChange={setSearchText}
          placeholder={placeholder}
          prefix={{iconName: "search"}}
        />
      </div>
    ) : null;

  const searchBarMsg =
    displayOptions.length === 0 ? (
      <div className={css(styles.filterMsg)}>No options available</div>
    ) : null;

  const selectAllButton = displaySelectAllButton ? (
    <div className={css(styles.selectAllCheckbox)}>
      <div style={{display: "inline-block"}}>
        <Checkbox
          onChange={handleSelectAll}
          label={commonT("Select all")}
          checked={areAllItemsSelected(values, options)}
        />
      </div>
    </div>
  ) : null;

  const optionsDisplay =
    displayOptions.length !== 0 ? (
      <div className={css(styles.checkboxList)}>
        <CheckboxList
          values={values}
          onChange={onChange}
          options={displayOptions}
          gap={12}
        />
      </div>
    ) : null;

  return (
    <div
      className={css(styles.listContainer, !inFilter && styles.listDecoration)}
    >
      {searchBar}
      {searchBarMsg}
      {selectAllButton}
      {optionsDisplay}
    </div>
  );
}

MultiselectOptions.defaultProps = {
  filterSearchMode: {type: "none"},
};

export default MultiselectOptions;

const MIN_WIDTH = "160px";
const MAX_DROPDOWN_HEIGHT = "256px";
const MAX_DROPDOWN_WIDTH = "256px";

export const styles = StyleSheet.create({
  selectAllCheckbox: {
    ...include(padding.b.s),
    ...include(margin.b.s),
    ...include(padding.h.m),
    ...border.b.s,
    borderColor: colors.grey20,
  },
  searchBox: {
    ...include(margin.l.s),
    ...include(margin.r.s),
    ...include(margin.t.s),
    ...include(margin.b.s),
  },
  checkboxList: {
    ...include(padding.h.m),
  },
  listContainer: {
    minWidth: MIN_WIDTH,
    backgroundColor: colors.white,
    ...include(padding.v.s),
    maxHeight: MAX_DROPDOWN_HEIGHT,
    maxWidth: MAX_DROPDOWN_WIDTH,
    overflowY: "auto",
  },
  listDecoration: {
    ...border.a.s,
    ...include(margin.t.s),
    borderRadius: 3,
    boxShadow: "2px 2px 2px rgba(0,0,0,0.06)",
  },
  filterMsg: {
    ...include(padding.l.m),
  },
});
