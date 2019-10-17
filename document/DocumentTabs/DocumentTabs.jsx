/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {StyleSheet, css} from "aphrodite";
import Icon from "../../Icon";
import colors from "../../styles/colors";
import DocumentTab from "./DocumentTab";
import MoreTab from "./MoreTab";
import type {Size} from "./sizes";

const MIN_ELEMENT_WIDTH = 130;
const MAX_ELEMENT_WIDTH = 200;
const ADD_BUTTON_WIDTH = 52;

type Props = {|
  /** A list of document names to be displayed. */
  +documentNameOptions: $ReadOnlyArray<{+key: number, +name: string}>,
  /** The key of the currently selected document. */
  +selectedKey: number,
  /** A callback called when the add button is pressed. */
  +onAdd: () => void,
  /** A callback called when a tab is selected. */
  +onSelect: (key: number) => void,
  /** A callback called when a document is deleted. */
  +onDelete: (key: number) => void,
  /** The size of document tabs. */
  +size?: Size,
|};

type Dimensions = {|
  tabWidth: number,
  slices: number,
|};

function calculateWidths(
  containerWidth: number,
  minWidth: number,
  maxWidth: number,
  elementCount: number
): Dimensions {
  if (elementCount * maxWidth < containerWidth) {
    return {tabWidth: maxWidth, slices: elementCount};
  }

  const maxSlicesCount = Math.floor(containerWidth / minWidth);
  const slices = Math.min(maxSlicesCount, elementCount);

  return {
    tabWidth: containerWidth / slices,
    slices,
  };
}

/**
 * @short A tab header for managing multiple documents
 * @brandStatus V2
 * @status Beta
 * @category Documents
 */
function DocumentTabs({
  documentNameOptions,
  selectedKey,
  onAdd,
  onSelect,
  onDelete,
  size = "m",
}: Props) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = React.useState({
    tabWidth: 0,
    slices: 0,
  });
  const {tabWidth, slices} = dimensions;

  React.useEffect(() => {
    if (containerRef.current !== null) {
      const dimensions = calculateWidths(
        // container size offset by size of addition button
        containerRef.current.offsetWidth - ADD_BUTTON_WIDTH,
        MIN_ELEMENT_WIDTH,
        MAX_ELEMENT_WIDTH,
        documentNameOptions.length
      );

      setDimensions(dimensions);
    }
  }, [documentNameOptions]);

  const isOverflowing = documentNameOptions.length > slices;
  const nonOverflowCount = isOverflowing ? slices - 1 : slices;

  return (
    <div
      className={css(styles.container, tabWidth === 0 && styles.hidden)}
      style={{display: documentNameOptions.length !== 0 ? "flex" : "none"}}
      ref={containerRef}
    >
      {documentNameOptions.slice(0, nonOverflowCount).map(({name, key}) => (
        <DocumentTab
          isOverflow={false}
          width={tabWidth}
          isSelected={key === selectedKey}
          onClick={() => onSelect(key)}
          onDelete={() => onDelete(key)}
          size={size}
          key={key}
        >
          {name}
        </DocumentTab>
      ))}

      {isOverflowing ? (
        <MoreTab
          width={tabWidth}
          size={size}
          selectedLabel={
            selectedKey < nonOverflowCount
              ? null
              : (documentNameOptions.find(({key}) => key === selectedKey) || {})
                  .name
          }
        >
          {documentNameOptions.slice(nonOverflowCount).map(({name, key}) => (
            <DocumentTab
              isOverflow={true}
              width={tabWidth}
              isSelected={key === selectedKey}
              onClick={() => onSelect(key)}
              onDelete={() => onDelete(key)}
              size={size}
              key={key}
            >
              {name}
            </DocumentTab>
          ))}
        </MoreTab>
      ) : (
        undefined
      )}

      {/* eslint-disable react/forbid-elements */}
      <button
        className={css(styles.addDocumentButton)}
        type="button"
        onClick={onAdd}
      >
        <Icon iconName="plus" color="blue30" />
      </button>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    ":nth-child(1n) > *": {
      borderRight: `1px solid ${colors.grey30}`,
    },
  },
  addDocumentButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: ADD_BUTTON_WIDTH,
    border: "none",
    outline: "none",
    padding: "0",
    margin: "0",
  },
  hidden: {
    visibility: "hidden",
  },
});

export default DocumentTabs;
