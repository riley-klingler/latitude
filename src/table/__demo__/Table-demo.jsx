/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {type DemoFile} from "../../design_system/types/demoTypes";
import Table from "../Table";
import Text from "../../Text";
import TextCell from "../TextCell";
import Button from "../../button/Button";
import InteractableCell from "../InteractableCell";
import NotificationModal from "../../modal/NotificationModal";
import {StyleSheet, css} from "../../styles/aphrodite";
import data from "./data.json";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic Table",
      description: `Table with horizontal scrolling, column sorting, and row hover highlighting.
      Column sorting is enabled by passing a \`comparator\` into the column definition.
      `,
      example: (elementToCodeFn, demoProps) => (
        <BasicTableShim
          elementToCodeFn={elementToCodeFn}
          demoProps={demoProps}
        />
      ),
      showCode: false,
      fullWidth: true,
    },
    {
      type: "code",
      title: "Column Customization",
      description: `Adds a button to the top right of the table to customize which columns are shown.
      Controlled with the \`columnCustomizationEnabled\` prop, along with the \`hiddenColumns\`
      and \`onHiddenColumnsChange\` props.`,
      example: (elementToCodeFn, demoProps) => (
        <ColumnCustomizationTableShim
          elementToCodeFn={elementToCodeFn}
          demoProps={demoProps}
        />
      ),
      showCode: false,
      fullWidth: true,
    },
    {
      type: "code",
      title: "Row Clicking",
      description: "",
      example: (elementToCodeFn, demoProps) => (
        <RowClickingTableShim
          elementToCodeFn={elementToCodeFn}
          demoProps={demoProps}
        />
      ),
      showCode: false,
      fullWidth: true,
    },
    {
      type: "code",
      title: "Row Selection",
      description: `Adds a checkbox to the left side of the table that allows users to select rows.
      Controlled by the \`rowSelectionEnabled\` prop, along with the \`selectedRows\` and \`onSelectedRowsChange\` props.`,
      example: (elementToCodeFn, demoProps) => (
        <RowSelectionTableShim
          elementToCodeFn={elementToCodeFn}
          demoProps={demoProps}
        />
      ),
      showCode: false,
      fullWidth: true,
    },
    {
      type: "code",
      title: "Row Aggregation",
      example: (elementToCodeFn, demoProps) => (
        <RowAggregationTableShim
          elementToCodeFn={elementToCodeFn}
          demoProps={demoProps}
        />
      ),
      showCode: false,
      fullWidth: true,
    },
    {
      type: "code",
      title: "Row Aggregation and Row Selection",
      example: (elementToCodeFn, demoProps) => (
        <RowAggregationSelectionTableShim
          elementToCodeFn={elementToCodeFn}
          demoProps={demoProps}
        />
      ),
      showCode: false,
      fullWidth: true,
    },
    {
      type: "code",
      title: "Column Pinning",
      description:
        "Columns can be pinned to the left or right of the table. Controlled by the `pinnedColumns` prop.",
      example: (elementToCodeFn, demoProps) => (
        <PinnedColumnsTableShim
          elementToCodeFn={elementToCodeFn}
          demoProps={demoProps}
        />
      ),
      showCode: false,
      fullWidth: true,
    },
    {
      type: "code",
      title: "Scrolling Pagination",
      description:
        "You can fetch additional data when a user scrolls to the bottom of the table.",
      example: (elementToCodeFn, demoProps) => (
        <InfiniteLoadTableShim
          elementToCodeFn={elementToCodeFn}
          demoProps={demoProps}
        />
      ),
      showCode: false,
      fullWidth: true,
    },
  ],
};

const columnDefinitions = [
  {
    id: "id",
    header: "ID",
    render: row => (
      <TextCell value={row.id} verticalAlign="center" horizontalAlign="start" />
    ),
    width: 50,
    comparator: (a, b) => a.id - b.id,
    aggregateComparator: (as, bs) => as.length - bs.length,
  },
  {
    id: "name",
    header: "Name",
    render: row => (
      <TextCell
        value={row.name}
        verticalAlign="center"
        horizontalAlign="start"
      />
    ),
    width: 150,
    comparator: (a, b) => a.name.localeCompare(b.name),
  },
  {
    id: "email",
    header: "Email",
    render: row => (
      <TextCell
        value={row.email}
        verticalAlign="center"
        horizontalAlign="start"
      />
    ),
    width: 200,
    comparator: (a, b) => a.email.localeCompare(b.email),
  },
  {
    id: "date",
    header: "Date",
    render: row => (
      <TextCell
        value={row.date}
        verticalAlign="center"
        horizontalAlign="start"
      />
    ),
    width: 200,
    comparator: (a, b) => new Date(a.date) - new Date(b.date),
  },
  {
    id: "city",
    header: "City",
    render: row => (
      <TextCell
        value={row.city}
        verticalAlign="center"
        horizontalAlign="start"
      />
    ),
    width: 150,
    comparator: (a, b) => a.city.localeCompare(b.city),
  },
  {
    id: "amount",
    header: "Amount",
    headerAlignment: "right",
    render: row => (
      <TextCell
        value={row.amount}
        verticalAlign="center"
        horizontalAlign="end"
      />
    ),
    width: 70,
    comparator: (a, b) => a.amount - b.amount,
  },
  {
    id: "company",
    header: "Company",
    render: row => (
      <TextCell
        value={row.company}
        verticalAlign="center"
        horizontalAlign="start"
      />
    ),
    width: 100,
  },
  {
    id: "cta",
    header: "",
    render: () => (
      <InteractableCell>
        <Button size="s" onClick={() => {}}>
          CTA
        </Button>
      </InteractableCell>
    ),
    width: 75,
  },
];

export function BasicTableShim({
  elementToCodeFn,
}: {
  +elementToCodeFn?: React.Node => void,
  +demoProps: any,
}) {
  const [sortBy, setSortBy] = React.useState({
    columnId: "id",
    direction: "asc",
  });

  const table = (
    <Table
      data={data.slice(0, 100)}
      columnDefinitions={columnDefinitions}
      getUniqueRowId={data => data.id}
      sortBy={sortBy}
      onSortByChange={setSortBy}
    />
  );
  if (elementToCodeFn) {
    elementToCodeFn(table);
  }
  return <div className={css(styles.container)}>{table}</div>;
}

export function ColumnCustomizationTableShim({
  elementToCodeFn,
}: {
  +elementToCodeFn?: React.Node => void,
  +demoProps: any,
}) {
  const [hiddenColumns, setHiddenColumns] = React.useState([
    {columnId: "city"},
  ]);
  const [sortBy, setSortBy] = React.useState({
    columnId: "id",
    direction: "asc",
  });
  const pinnedColumns = [
    {
      columnId: "id",
      align: "left",
    },
  ];

  const table = (
    <Table
      data={data.slice(0, 100)}
      columnDefinitions={columnDefinitions}
      getUniqueRowId={data => data.id}
      columnCustomizationEnabled={true}
      hiddenColumns={hiddenColumns}
      onHiddenColumnsChange={setHiddenColumns}
      sortBy={sortBy}
      onSortByChange={setSortBy}
      pinnedColumns={pinnedColumns}
    />
  );
  if (elementToCodeFn) {
    elementToCodeFn(table);
  }
  return <div className={css(styles.container)}>{table}</div>;
}

export function RowClickingTableShim({
  elementToCodeFn,
}: {
  +elementToCodeFn?: React.Node => void,
  +demoProps: any,
}) {
  const [clickedRow, setClickedRow] = React.useState(null);
  const [sortBy, setSortBy] = React.useState({
    columnId: "id",
    direction: "asc",
  });

  const table = (
    <Table
      data={data.slice(0, 100)}
      columnDefinitions={columnDefinitions}
      getUniqueRowId={data => data.id}
      sortBy={sortBy}
      onSortByChange={setSortBy}
      rowClickingEnabled={true}
      clickedRow={clickedRow}
      onRowClick={setClickedRow}
    />
  );
  if (elementToCodeFn) {
    elementToCodeFn(table);
  }
  return (
    <div className={css(styles.container)}>
      {table}
      {clickedRow ? (
        <NotificationModal
          title="Clicked Row"
          buttons={[]}
          onRequestClose={() => setClickedRow(null)}
        >
          <Text>You clicked the row with id {clickedRow}</Text>
        </NotificationModal>
      ) : null}
    </div>
  );
}

export function RowSelectionTableShim({
  elementToCodeFn,
  demoProps,
}: {
  +elementToCodeFn?: React.Node => void,
  +demoProps: any,
}) {
  const [selectedRows, setSelectedRows] = React.useState(new Set());
  const [sortBy, setSortBy] = React.useState({
    columnId: "id",
    direction: "asc",
  });

  const table = (
    <Table
      data={data.slice(0, 100)}
      columnDefinitions={columnDefinitions}
      getUniqueRowId={data => data.id}
      rowSelectionEnabled={true}
      selectedRows={selectedRows}
      onSelectedRowsChange={setSelectedRows}
      sortBy={sortBy}
      onSortByChange={setSortBy}
      {...demoProps}
    />
  );
  if (elementToCodeFn) {
    elementToCodeFn(table);
  }
  return <div className={css(styles.container)}>{table}</div>;
}

export function RowAggregationTableShim({
  elementToCodeFn,
  demoProps,
}: {
  +elementToCodeFn?: React.Node => void,
  +demoProps: any,
}) {
  const [expandedRows, setExpandedRows] = React.useState(new Set());
  const [sortBy, setSortBy] = React.useState({
    columnId: "id",
    direction: "asc",
  });

  const table = (
    <Table
      data={data.slice(0, 100)}
      columnDefinitions={columnDefinitions}
      getUniqueRowId={row => row.id}
      rowAggregationEnabled={true}
      rowAggregationPinned={false}
      getRowGroupId={row => row.network}
      expandedRows={expandedRows}
      onExpandedRowsChange={setExpandedRows}
      sortBy={sortBy}
      onSortByChange={setSortBy}
      {...demoProps}
    />
  );
  if (elementToCodeFn) {
    elementToCodeFn(table);
  }
  return <div className={css(styles.container)}>{table}</div>;
}

export function RowAggregationSelectionTableShim({
  elementToCodeFn,
  demoProps,
}: {
  +elementToCodeFn?: React.Node => void,
  +demoProps: any,
}) {
  const [expandedRows, setExpandedRows] = React.useState(new Set());
  const [selectedRows, setSelectedRows] = React.useState(new Set());

  const [sortBy, setSortBy] = React.useState({
    columnId: "id",
    direction: "asc",
  });

  const table = (
    <Table
      data={data.slice(0, 100)}
      columnDefinitions={columnDefinitions}
      getUniqueRowId={row => row.id}
      rowSelectionEnabled={true}
      selectedRows={selectedRows}
      onSelectedRowsChange={setSelectedRows}
      rowAggregationEnabled={true}
      getRowGroupId={row => row.network}
      expandedRows={expandedRows}
      onExpandedRowsChange={setExpandedRows}
      sortBy={sortBy}
      onSortByChange={setSortBy}
      {...demoProps}
    />
  );
  if (elementToCodeFn) {
    elementToCodeFn(table);
  }
  return <div className={css(styles.container)}>{table}</div>;
}

export function PinnedColumnsTableShim({
  elementToCodeFn,
}: {
  +elementToCodeFn?: React.Node => void,
  +demoProps: any,
}) {
  const [sortBy, setSortBy] = React.useState({
    columnId: "id",
    direction: "asc",
  });

  const table = (
    <Table
      data={data.slice(0, 100)}
      columnDefinitions={columnDefinitions}
      getUniqueRowId={data => data.id}
      pinnedColumns={[
        {columnId: "id", align: "left"},
        {columnId: "name", align: "left"},
        {columnId: "cta", align: "right"},
      ]}
      sortBy={sortBy}
      onSortByChange={setSortBy}
    />
  );
  if (elementToCodeFn) {
    elementToCodeFn(table);
  }
  return <div className={css(styles.container)}>{table}</div>;
}

export function InfiniteLoadTableShim({
  elementToCodeFn,
}: {
  +elementToCodeFn?: React.Node => void,
}) {
  const [sortBy, setSortBy] = React.useState({
    columnId: "id",
    direction: "asc",
  });
  const [sliceIndex, setSliceIndex] = React.useState<number>(100);
  const [isLoading, setLoading] = React.useState(false);
  const timeoutRef = React.useRef();
  const handleLoadNextPage = React.useCallback(() => {
    setLoading(true);
    timeoutRef.current = setTimeout(() => {
      setSliceIndex(index => index + 100);
      setLoading(false);
      clearTimeout(timeoutRef.current);
    }, 3000);
  }, [setSliceIndex, setLoading]);
  React.useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    },
    []
  );

  const table = (
    <Table
      data={data.slice(0, sliceIndex)}
      columnDefinitions={columnDefinitions}
      getUniqueRowId={data => data.id}
      sortBy={sortBy}
      onSortByChange={setSortBy}
      hasNextPage={sliceIndex < data.length}
      isNextPageLoading={isLoading}
      loadNextPage={handleLoadNextPage}
    />
  );
  if (elementToCodeFn) elementToCodeFn(table);
  return <div className={css(styles.container)}>{table}</div>;
}

const styles = StyleSheet.create({
  container: {height: 400},
});

export default demos;
