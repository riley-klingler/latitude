/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 *
 * @flow
 */

import * as React from "react";
import Infinite from "react-infinite";
import invariant from "../tools/invariant";
import {css, StyleSheet} from "aphrodite";

import Loader from "../Loader";

import Column, {type SortDirection} from "./Column";
import TableRow, {TableHeader, type RowPadding} from "./TableRow";
import StaticCell from "./StaticCell";

type ColumnComponent = React.Element<typeof Column>;

type Props<Data> = {|
  +children: React.ChildrenArray<ColumnComponent>,
  +keyExtractor: Data => string | number,
  +data: $ReadOnlyArray<Data>,
  +rowPadding: RowPadding,
  +loading: boolean,
  +onSortChange?: (string, SortDirection) => void,
  +sortColumn?: ?string,
  +sortDir: SortDirection,
  +showColumns?: $ReadOnlyArray<string>,
  +dataSelected?: Data,
  +emptyState: React.Node,
  /** react-infinite requires a known height for the table and rows */
  +rowHeight: number,
  /** If height is not provided, default to react-inifinite useWindowAsScrollContainer property */
  +height?: number,
  // isInfiniteLoading determines whether the infinite spinner is showing.
  // infinite loading is enabled when isInfiniteLoading is not undefined
  /** it can be intentionally disabled (e.g. when there are no more results) by passing undefined */
  +isInfiniteLoading?: ?boolean,
  +onInfiniteLoad?: () => void,
|};

export default class Table<Data> extends React.PureComponent<Props<Data>> {
  static defaultProps = {
    loading: false,
    rowPadding: "medium",
    sortDir: "none",
    emptyState: null,
  };

  filterColumns = (
    children: React.ChildrenArray<ColumnComponent>,
    showColumns: $ReadOnlyArray<string> | void
  ) => {
    const cells = [];
    const columns = [];
    const showColumnsSet = new Set(showColumns);
    React.Children.forEach(children, column => {
      if (!showColumns || showColumnsSet.has(column.props.value)) {
        let defaultCell;
        const {value, children} = column.props;
        if (value) {
          const getDefaultValue = val => value(val);
          defaultCell = (data: Data) => (
            <StaticCell data={data}>{getDefaultValue}</StaticCell>
          );
        }
        const cell = children || defaultCell;
        invariant(
          cell,
          "Column must define a value prop or contain a Cell component in its children"
        );
        cells.push(cell);
        columns.push(column);
      }
    });
    return {cells, columns};
  };

  itemRenderer = (rowData: Data, index: number) => {
    const {
      children,
      showColumns,
      dataSelected,
      rowPadding,
      rowHeight,
      keyExtractor,
    } = this.props;
    const {cells, columns} = this.filterColumns(children, showColumns);
    return (
      <TableRow
        key={keyExtractor(rowData)}
        i={index}
        cells={cells}
        columns={columns}
        rowPadding={rowPadding}
        rowData={rowData}
        rowHeight={rowHeight}
        isSelected={
          dataSelected
            ? keyExtractor(rowData) === keyExtractor(dataSelected)
            : false
        }
      />
    );
  };

  render() {
    const {
      children,
      data,
      showColumns,
      sortColumn,
      sortDir,
      onSortChange,
      height,
      rowHeight,
      loading,
      emptyState,
      isInfiniteLoading,
      onInfiniteLoad,
    } = this.props;
    const {columns} = this.filterColumns(children, showColumns);
    const isInfiniteLoadRelevant = isInfiniteLoading != null;

    const content =
      data.length > 0 ? (
        <Infinite
          containerHeight={height}
          useWindowAsScrollContainer={!height}
          elementHeight={rowHeight}
          className={css(styles.rowContainer)}
          infiniteLoadBeginEdgeOffset={
            isInfiniteLoadRelevant ? rowHeight * 4 : undefined
          }
          onInfiniteLoad={onInfiniteLoad}
          loadingSpinnerDelegate={
            <div className={css(styles.infiniteLoaderContainer)}>
              <Loader loaded={false} />
            </div>
          }
          isInfiniteLoading={isInfiniteLoading}
        >
          {/* $FlowFixMe(Dirak) type Data === type Data */}
          {data.map((datum: Data, index) => this.itemRenderer(datum, index))}
        </Infinite>
      ) : (
        emptyState
      );

    return (
      <div>
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          sortDir={sortDir}
          onSortChange={onSortChange}
        />
        <div style={{height}}>
          {loading ? (
            <div className={css(styles.loaderContainer)}>
              <Loader loaded={false} />
            </div>
          ) : (
            content
          )}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    // eslint-disable-next-line flexport/no-unknown-styles
    "-ms-overflow-style": "-ms-autohiding-scrollbar",
    overflow: "overlay",
  },
  loaderContainer: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  infiniteLoaderContainer: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 0px",
  },
});
