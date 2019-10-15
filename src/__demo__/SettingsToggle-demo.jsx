/**
 * TEAM: frontend_infra
 * @flow
 */

import type {DemoFile} from "design_system/types/demoTypes";
import * as React from "react";
import {StyleSheet, css} from "styles/aphrodite";
import SettingsToggle from "SettingsToggle";
import Table from "table/Table";
import StaticCell from "table/StaticCell";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic usage",
      description:
        "If given a label, the toggle will be aligned to the right edge of its container, and the label will be aligned to the left.",
      example: elementToCodeFn => (
        <SettingsToggleShim
          label="Show labels on map"
          elementToCodeFn={elementToCodeFn}
        />
      ),
    },
    {
      type: "code",
      showCode: false,
      title: "Table",
      example: elementToCodeFn => (
        <TableExample elementToCodeFn={elementToCodeFn} />
      ),
    },
  ],
};

export class SettingsToggleShim extends React.PureComponent<
  {+label: string, +elementToCodeFn?: React.Node => void},
  {value: boolean}
> {
  state = {
    value: false,
  };

  handleChange = (value: boolean) => {
    this.setState({value});
  };

  render() {
    const element = (
      <SettingsToggle
        checked={this.state.value}
        onChange={this.handleChange}
        label={this.props.label}
      />
    );
    // eslint-disable-next-line prefer-destructuring
    const elementToCodeFn = this.props.elementToCodeFn;
    // eslint-disable-next-line no-unused-expressions
    elementToCodeFn && elementToCodeFn(element);
    return element;
  }
}

export function TableExample({
  elementToCodeFn,
}: {
  +elementToCodeFn?: React.Node => void,
}) {
  const [sortBy, setSortBy] = React.useState(null);
  const table = (
    <Table
      data={[
        {
          id: "0",
          setting: <SettingsToggleShim label="Enable something" />,
        },
        {
          id: "1",
          setting: <SettingsToggleShim label="Enable another setting" />,
        },
        {
          id: "2",
          setting: <SettingsToggleShim label="Enable a third item" />,
        },
      ]}
      columnDefinitions={[
        {
          id: "settings",
          header: "Settings",
          render: row => (
            <StaticCell data={row}>
              {data => (
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    paddingTop: "5px", // to vertically center toggle in cell, because <label> has padding-bottom
                    marginLeft: "-12px", // to cancel out wrapper styles in StaticCell
                  }}
                >
                  {data.setting}
                </div>
              )}
            </StaticCell>
          ),
          width: 300,
          comparator: (_a, _b) => 0,
        },
      ]}
      getUniqueRowId={data => data.id}
      sortBy={sortBy}
      onSortByChange={setSortBy}
    />
  );
  // eslint-disable-next-line no-unused-expressions
  elementToCodeFn && elementToCodeFn(table);
  return <div className={css(styles.container)}>{table}</div>;
}

const styles = StyleSheet.create({
  container: {height: 200},
});

export default demos;
