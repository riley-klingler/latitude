/**
 * TEAM: frontend_infra
 *
 * @flow strict-local
 */
import * as React from "react";
import {StyleSheet, css} from "aphrodite";

import PopupWithClickAway from "../popup/PopupWithClickAway";
import IconButton from "../button/IconButton";
import Checkbox from "../Checkbox";
import CheckboxList from "../CheckboxList";
import Text from "../Text";
import Icon from "../Icon";
import colors from "../colors";
import Clickable from "../base_candidate/Clickable";
import InteractableCell from "./InteractableCell";

export type Style = { [string]: string | number };

export type ColumnDefinition<T> = {|
  +id: string,
  +header: string,
  +render: T => React.Node,
  +renderAggregate?: ($ReadOnlyArray<T>) => React.Node,
  +width: number,
  +comparator?: (T, T) => number,
  +aggregateComparator?: ($ReadOnlyArray<T>, $ReadOnlyArray<T>) => number,
  +headerAlignment?: "left" | "center" | "right",
  +tooltipText?: string,
|};

type Sort = {|
  +columnId: string,
  +direction: "asc" | "desc",
|};

type Pin = {|
  +columnId: string,
  +align: "left" | "right",
|};

type Hide = {|
  +columnId: string,
|};

type Column<T> = {
  id: string,
  Header: () => React.Node,
  Cell: React.ComponentType<{|
    +row: T,
  |}>,
  AggregateCell: React.ComponentType<{|
    +rows: $ReadOnlyArray<T>,
  |}>,
  pinned: "left" | "right" | null,
  width: number,
};

export const HEADER_HEIGHT = 32;
export const DEFAULT_ROW_HEIGHT = 44;
export const COLUMN_PADDING = 20;
export const FIRST_COLUMN_PADDING = 12;
export const PINNED_COLUMN_BORDER_WIDTH = 2;
export const ROW_EXPANSION_COLUMN_WIDTH = 48;
export const ROW_SELECTION_COLUMN_WIDTH = 48;

const noop = () => {
};

function handleCellClick(e: SyntheticEvent<HTMLDivElement>) {
  e.stopPropagation();
}

/**
 * @short Displays tabular data
 * @brandStatus V2
 * @status Beta
 * @category Data Display
 *
 * **DISCLAIMER: The table component is still under active development**
 *
 * `<Table />` efficiently displays large amounts of data, and supports column pinning,
 * row selection, sorting, and scrolling. Expandable rows, cell selection, drag-and-drop
 * column reordering, and other features are coming soon.
 */
export default function NewTable<T>({
  data,
  columnDefinitions,
  getUniqueRowId,
  onRowClick = null,
  customRow = null,
  hideHeader = null,
}: {
  /** An array of data for each row in the table */
  +data: $ReadOnlyArray<T>,
  /** Defines how each column of data is rendered. Each column definitions needs an id, a header, a Cell, a width, and a comparator for sorting */
  +columnDefinitions: $ReadOnlyArray<ColumnDefinition<T>>,
  /** A function to uniquely identify each row, this ID is what is returned in the row selections set */
  +getUniqueRowId: T => string,
  /** Whether or not checkboxes for row selection will be shown */
  +rowSelectionEnabled?: boolean,
  /** Whether or not the checkboxes for row selection will be pinned to the left of the table */
  +rowSelectionPinned?: boolean,
  /** Callback for when the user changes the selected rows */
  +onSelectedRowsChange?: ($ReadOnlySet<string>) => void,
  /** Which rows are selected, based on IDs returned from getUniqueRowId */
  +selectedRows?: $ReadOnlySet<string>,
  /** Controls the height of each row in the table */
  +rowHeight?: number,
  /** Which columns are pinned to either the left or right side of the table (other columns will scroll underneath) */
  +pinnedColumns?: $ReadOnlyArray<Pin>,
  /** Callback for when the user changes pinned columns */
  +onPinnedColumnsChange?: ($ReadOnlyArray<Pin>) => void,
  /** Whether or not to show the + for changing column visibility */
  +columnCustomizationEnabled?: boolean,
  /** Which columns are hidden */
  +hiddenColumns?: $ReadOnlyArray<Hide>,
  /** Callback for when the user changes which columns are hidden */
  +onHiddenColumnsChange?: ($ReadOnlyArray<Hide>) => void,
  /** Which column to sort by, and what direction to sort */
  +sortBy?: ?Sort,
  /** Callback for when the user changes which column and direction to sort */
  +onSortByChange?: (?Sort) => void,
  /** Whether or not rows will be grouped and an aggregation row is present */
  +rowAggregationEnabled?: boolean,
  /** Whether or not the arrows for row aggregation will be pinned to the left of the table */
  +rowAggregationPinned?: boolean,
  /** A function to determine which row group the row belongs to, this ID is what is returned in the row expansions set  */
  +getRowGroupId?: T => string,
  /** Which row groups are expanded, based on IDs returned from getRowGroupId */
  +expandedRows?: $ReadOnlySet<string>,
  /** Callback for when the user expands a row group */
  +onExpandedRowsChange?: ($ReadOnlySet<string>) => void,
  /** Whether additional data can be loaded from the server. Used for scrolling pagination */
  +hasNextPage?: boolean,
  /** Whether additional data is currently being loaded. Used for scrolling pagination */
  +isNextPageLoading?: boolean,
  /** Callback to load additional data when a user nears the end of the existing list of data. Used for scrolling pagination */
  +loadNextPage?: () => mixed,
  +rowClickingEnabled?: boolean,
  +clickedRow?: ?string,
  +onRowClick?: string => void | null,
  +rowGroupClickingEnabled?: boolean,
  +clickedRowGroup?: ?string,
  +onRowGroupClick?: string => void,
  /** Initial results are loading */
  +isLoading?: boolean,
  +customRow?: any => React.Node | null,
  +hideHeader?: boolean,
}) {
  const RenderRow = customRow ? CustomRow : Row;
  const width = columnDefinitions.reduce((sum, cell) => sum + cell.width, 0) + columnDefinitions.length * 40;
  return (
    <div style={{overflow: "scroll", maxHeight: "100%"}}>
      <div style={{width}}>
        <table style={{width: "100%", tableLayout: "fixed", borderCollapse: 'collapse'}}>
          {hideHeader ? null : <HeaderRow columns={columnDefinitions} />}
          <tbody>
          {data.map(item => {
            const rowId = getUniqueRowId(item);
            const props = {
              columnDefinitions,
              rowData: item,
              onClick: onRowClick?.bind(null, rowId),
            };
            if(customRow) props.children = customRow;
            return <RenderRow key={rowId} {...props} />
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

type CustomRowProps = {|
  +children: React.Node,
  +columnDefinitions: ColumnDefinition,
  +rowData: T,
|};

export function CustomRow({children, columnDefinitions, rowData}: CustomRowProps) {
  return (
    <tr className={css(styles.row)}>
      <td colSpan={columnDefinitions.length}>
        {children({columnDefinitions, rowData})}
      </td>
    </tr>
  )
}

function groupRows<T>(
  rows: $ReadOnlyArray<T>,
  getRowGroupId: T => string,
): $ReadOnlyArray<$ReadOnlyArray<T>> {
  const rowGroupIdToRows = new Map<string, $ReadOnlyArray<T>>();
  rows.forEach(row => {
    const rowGroupId = getRowGroupId(row);
    const rows = rowGroupIdToRows.get(rowGroupId);
    rowGroupIdToRows.set(rowGroupId, rows ? [...rows, row] : [row]);
  });
  return [...rowGroupIdToRows.values()];
}

export function withRowAggregation(WrappedTable: NewTable, getRowGroupId) {
  return function WithColumnCustomization({data, getUniqueRowId, ...props}) {
    const [rowGroups, setRowGroups] = React.useState(groupRows(data, getRowGroupId));

    function AggregationRow({columnDefinitions, rowData}) {
      const [showChildren, setShowChildren] = React.useState(false);
      return (
        <>
          <Row columnDefinitions={columnDefinitions} rowData={rowData[0]} onClick={setShowChildren.bind(null, !showChildren)} />
          {
            showChildren ?
            <NewTable
              data={rowData}
              columnDefinitions={columnDefinitions}
              getUniqueRowId={getUniqueRowId}
              hideHeader={true}
            /> : null
          }
        </>
      );
    }

    return <WrappedTable customRow={AggregationRow} data={rowGroups} getUniqueRowId={getUniqueRowId} {...props} />;
  }
}

export function RowAggregationTable({data, columnDefinitions, getUniqueRowId, getRowGroupId, ...props}) {
  const rowGroups = groupRows(data, getRowGroupId);

  function AggregationRow({columnDefinitions, rowData}) {
    const [showChildren, setShowChildren] = React.useState(false);
    return (
      <>
        <Row columnDefinitions={columnDefinitions} rowData={rowData[0]} onClick={setShowChildren.bind(null, !showChildren)} />
        {
          showChildren ?
            <NewTable
              data={rowData}
              columnDefinitions={columnDefinitions}
              getUniqueRowId={getUniqueRowId}
              hideHeader={true}
            /> : null
        }
      </>
    );
  }

  return (
    <NewTable
      customRow={AggregationRow}
      columnDefinitions={columnDefinitions}
      data={rowGroups}
      getUniqueRowId={getUniqueRowId}
      {...props}
    />
  );
}

function ColumnCustomization<T>({
  columnDefinitions,
  visibleColumnIds,
  onVisibleColumnIdsChange,
}: {|
  +columnDefinitions: $ReadOnlyArray<ColumnDefinition<T>>,
  +visibleColumnIds: $ReadOnlyArray<string>,
  +onVisibleColumnIdsChange: ($ReadOnlyArray<string>) => void,
|}) {
  return (
    <div className={css(styles.columnCustomizationContainer)}>
      <PopupWithClickAway>
        {(Target, Popup, {openPopup}) => (
          <>
            <Target>
              <IconButton
                size="s"
                kind="bare"
                iconName="add"
                type="button"
                onClick={openPopup}
              />
            </Target>
            <Popup placement="bottom-end">
              <div className={css(styles.columnCustomizationPopup)}>
                <div>
                  <CheckboxList
                    values={visibleColumnIds}
                    options={columnDefinitions.map(cd => ({
                      label: cd.header,
                      value: cd.id,
                    }))}
                    onChange={onVisibleColumnIdsChange}
                    gap={8}
                    showSelectAllOption={true}
                  />
                </div>
              </div>
            </Popup>
          </>
        )}
      </PopupWithClickAway>
    </div>
  );
}

function HeaderRow<T>({
  columns,
}: {|
  +columns: $ReadOnlyArray<Column<T>>,
|}) {
  // TODO reimplement column pinning
  // const leftPinnedColumns = columns.filter(({pinned}) => pinned === "left");
  // const unpinnedColumns = columns.filter(({pinned}) => pinned === null);
  // const rightPinnedColumns = columns.filter(({pinned}) => pinned === "right");

  return (
    <thead>
    <tr className={css(styles.headerRow)}>
      {columns.map(column => (
        <th style={{width: column.width + 40, paddingLeft: 20}} key={column.id}>
          {
            column.headerCell ? column.headerCell : <Text scale="subtext" color="grey50">
              {column.header}
            </Text>
          }
        </th>
      ))}
    </tr>
    </thead>
  );
}

function Row<T>({
  rowData,
  columnDefinitions,
  onClick,
}: {|
  +rowData: T,
  +columnDefinitions: $ReadOnlyArray<Column<T>>,
  +onClick: (() => void) | null,
|}) {
  // const leftPinnedColumns = columns.filter(({pinned}) => pinned === "left");
  // const unpinnedColumns = columns.filter(({pinned}) => pinned === null);
  // const rightPinnedColumns = columns.filter(({pinned}) => pinned === "right");

  return (
    <Clickable onClick={onClick}>
      <tr className={css(styles.row)}>
        {columnDefinitions.map(column => (
          <td style={{width: column.width + 40, paddingLeft: 20}}>{column.render(rowData)}</td>
        ))}
      </tr>
    </Clickable>
  );
}

// function AggregateRow<T>({
//   data,
//   columns,
//   className,
//   style,
//   onHighlightedChange,
//   onClick,
// }: {|
//   +data: $ReadOnlyArray<T>,
//   +columns: $ReadOnlyArray<Column<T>>,
//   +className: string,
//   +style: Style,
//   +onHighlightedChange: boolean => void,
//   +onClick: (() => void) | null,
// |}) {
//   const leftPinnedColumns = columns.filter(({pinned}) => pinned === "left");
//   const unpinnedColumns = columns.filter(({pinned}) => pinned === null);
//   const rightPinnedColumns = columns.filter(({pinned}) => pinned === "right");
//
//   return (
//     <Clickable onClick={onClick}>
//       <div
//         onMouseEnter={() => onHighlightedChange(true)}
//         onMouseLeave={() => onHighlightedChange(false)}
//         className={className}
//         style={style}
//       >
//         {leftPinnedColumns.length ? (
//           <div className={css(styles.leftPinnedDrawer)}>
//             {leftPinnedColumns.map(({id, AggregateCell}) => (
//               <AggregateCell key={id} rows={data} />
//             ))}
//           </div>
//         ) : null}
//         <div className={css(styles.unpinnedDrawer)}>
//           {unpinnedColumns.map(({id, AggregateCell}) => (
//             <AggregateCell key={id} rows={data} />
//           ))}
//         </div>
//         {rightPinnedColumns.length ? (
//           <div className={css(styles.rightPinnedDrawer)}>
//             {rightPinnedColumns.map(({id, AggregateCell}) => (
//               <AggregateCell key={id} rows={data} />
//             ))}
//           </div>
//         ) : null}
//       </div>
//     </Clickable>
//   );
// }

export function withColumnCustomization(WrappedTable: NewTable) {
  return function WithColumnCustomization({columnDefinitions, initialHiddenColumns = [], ...props}) {
    const [visibleColumnIds, setVisibleColumnIds] = React.useState(columnDefinitions.map(({id}) => id).filter(id => !initialHiddenColumns.includes(id)));
    const filteredColumnDefinitions = columnDefinitions.filter(({id}) => visibleColumnIds.includes(id));
    return (
      <div style={{position: 'relative', overflow: 'scroll', maxHeight: '100%'}}>
        <ColumnCustomization columnDefinitions={columnDefinitions} visibleColumnIds={visibleColumnIds} onVisibleColumnIdsChange={setVisibleColumnIds}/>
        <WrappedTable columnDefinitions={filteredColumnDefinitions} {...props} />
      </div>
      )
  }
}

export function withRowSelection(WrappedTable: NewTable) {
  return function WithRowSelection({columnDefinitions, getUniqueRowId, onSelectedRowsChange, ...props}) {
    const [selectedRows, setSelectedRows] = React.useState(new Set());
    const toggleRow = (rowId, isSelected) => {
      const currentSelectedRows = new Set(selectedRows);
      isSelected ? currentSelectedRows.add(rowId) : currentSelectedRows.delete(rowId);
      setSelectedRows(currentSelectedRows);
      onSelectedRowsChange(currentSelectedRows);
    };
    const rowSelectionColumn = {
      id: "row_selection",
      header: "",
      render: row => (
        <InteractableCell>
          <Checkbox checked={selectedRows.has(getUniqueRowId(row))} onChange={toggleRow.bind(null, getUniqueRowId(row))}/>
        </InteractableCell>
      ),
      width: 52,
    };
    return <WrappedTable columnDefinitions={[rowSelectionColumn, ...columnDefinitions]} getUniqueRowId={getUniqueRowId} {...props}/>
  }
}

export function withSorting(WrappedTable: NewTable) {
  return function WithSorting({data, columnDefinitions, ...props}) {
    // could maybe pull this all into a hook for people to use with table
    const [sortedData, setSortedData] = React.useState(data);
    const [sortDirection, setSortDirection] = React.useState(null);
    const [sortedColumn, setSortedColumn] = React.useState(null);

    const columnsWithSortableHeaders = columnDefinitions.map(columnDefinition =>
      ({
        ...columnDefinition,
        headerCell:
          <SortableHeader
            id={columnDefinition.id}
            text={columnDefinition.header}
            sortDirection={columnDefinition.id === sortedColumn ? sortDirection : null}
            setSortedColumn={id => {
              // i think this could be a hook that does this automatically
              setSortDirection('asc');
              setSortedColumn(id);
              setSortedData(data.sort((a, b) => columnDefinition.comparator(a, b)))
            }}
          />
      }));
    return <WrappedTable data={sortedData} columnDefinitions={columnsWithSortableHeaders} {...props} />;
  }
}

const SortableHeader = ({id, sortDirection, setSortedColumn, text}) => (
  <Clickable onClick={() => {setSortedColumn(id)}}>
    <div className={css(styles.cell,
      styles.header,
      styles.clickable)}
    >
      <Text
        scale="subtext"
        weight={sortDirection ? "bold" : "regular"}
        color={sortDirection ? "grey60" : "grey40"}
      >
        {text}
      </Text>
      {
        sortDirection ? <div className={css(styles.headerSortIcon)}>
          <Icon
            alignment="center"
            color="grey60"
            size="xxxs"
            iconName={getIcon(sortDirection)}
          />
        </div> : null
      }
    </div>
  </Clickable>
);

function getIcon(sortDirection: "asc" | "desc" | null) {
  const iconNames = {
    asc: "up",
    desc: "down",
  };

  return iconNames[sortDirection || "asc"];
}

const styles = StyleSheet.create({
  table: {
    height: "100%",
    overflow: "auto",
    position: "relative",
  },
  leftPinnedDrawer: {
    position: "sticky",
    display: "flex",
    left: 0,
    backgroundColor: "inherit",
    borderRight: `2px solid ${colors.grey30}`,
    paddingLeft: 12,
    zIndex: 1,
  },
  unpinnedDrawer: {
    display: "flex",
    paddingLeft: 12,
  },
  rightPinnedDrawer: {
    position: "sticky",
    display: "flex",
    right: 0,
    backgroundColor: "inherit",
    borderLeft: `2px solid ${colors.grey30}`,
    paddingLeft: 12,
    zIndex: 1,
  },
  rowExpansionCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: ROW_EXPANSION_COLUMN_WIDTH,
  },
  rowSelectionCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: ROW_SELECTION_COLUMN_WIDTH,
  },
  tooltipHeader: {
    borderBottom: `1px dashed ${colors.grey40}`,
  },
  tooltip: {
    display: "block",
    width: 150,
    wordWrap: "break-word",
  },
  cell: {
    display: "flex",
    textOverflow: "ellipsis",
    overflowX: "hidden",
    whiteSpace: "nowrap",
    minWidth: 0,
    paddingLeft: COLUMN_PADDING,
    paddingRight: COLUMN_PADDING,
  },
  alignCenter: {
    justifyContent: "center",
  },
  alignRight: {
    justifyContent: "flex-end",
  },
  headerRow: {
    // display: "inline-flex",
    backgroundColor: "white",
    borderTop: `1px solid ${colors.grey30}`,
    borderBottom: `1px solid ${colors.grey30}`,
    // position: "sticky",
    zIndex: 2,
    // top: 0,
    // left: 0,
    // width: "100%",
    height: HEADER_HEIGHT,
  },
  header: {
    alignItems: "center",
    color: colors.grey50,
    backgroundColor: "inherit",
    ":hover": {
      color: colors.grey60,
    },
  },
  sortableHeader: {
    position: "relative",
    display: "flex",
  },
  headerSortIcon: {
    position: "absolute",
    left: "calc(100% + 6px)",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  clickable: {
    cursor: "pointer",
  },
  row: {
    // display: "flex",
    // backgroundColor: colors.white, this could maybe break some things but it gets us row aggregation highlighting
    borderBottom: `1px solid ${colors.grey30}`,
    borderTop: `1px solid ${colors.grey30}`,
    // minHeight: 44,
    ':hover': {
      backgroundColor: colors.grey10,
      borderBottom: `1px solid ${colors.grey40}`,
      borderTop: `1px solid ${colors.grey40}`,
    }
  },
  columnCustomizationContainer: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    right: 0,
    zIndex: 3,
    borderTop: `1px solid ${colors.grey30}`,
    borderBottom: `1px solid ${colors.grey30}`,
    borderLeft: `1px solid ${colors.grey30}`,
    padding: "0 12px",
    background: "white",
    height: HEADER_HEIGHT,
  },
  columnCustomizationPopup: {
    background: "white",
    boxShadow: "0px 0px 20px rgba(57, 65, 77, 0.15)",
    minWidth: 200,
    marginTop: 4,
    padding: 12,
  },
  infiniteLoader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 0px",
  },
  loadingIndicator: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 0px",
  },
  isHighlighted: {
    backgroundColor: colors.grey10,
  },
  isSelected: {
    backgroundColor: colors.grey20,
    borderBottom: `1px solid ${colors.grey60}`,
  },
  isNextSelected: {
    borderBottom: `1px solid ${colors.grey60}`,
  },
});
