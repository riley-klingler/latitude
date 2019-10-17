/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {StyleSheet, css} from "aphrodite";

type Props = {|
  +children: React.Node,
  +type?: "ordered" | "unordered",
  +incog?: boolean,
  +align?: "left" | "right",
|};

function List({
  children,
  type = "unordered",
  incog = false,
  align = "left",
}: Props) {
  const items = React.Children.map(children, (child, index) => (
    /* eslint-disable react/no-array-index-key*/
    <li key={index} className={css(styles.item)}>
      {child}
    </li>
  ));

  const className = css(
    styles.list,
    incog && styles.incog,
    align === "left" && styles.alignLeft,
    align === "right" && styles.alignRight
  );

  if (type === "ordered") {
    return <ol className={className}>{items}</ol>;
  }
  return <ul className={className}>{items}</ul>;
}

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexFlow: "column nowrap",
    paddingLeft: 18,
  },
  incog: {
    listStyle: "none",
    padding: 0,
  },
  alignLeft: {
    alignItems: "flex-start",
  },
  alignRight: {
    alignItems: "flex-end",
  },
  item: {
    marginBottom: 8,
  },
});

export default List;
