/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 *
 * @flow
 */
/* eslint-disable react/prefer-stateless-function */

import * as React from "react";
import {css, StyleSheet} from "aphrodite";

import Text from "../../../Text";
import Demo from "./Demo";
import type {DemoFile} from "../../types/demoTypes";

type Props = {|
  +demo: DemoFile,
|};

export default function ComponentDemo({demo}: Props) {
  return (
    <div className={css(styles.demosContainer)}>
      <Text scale="title" weight="bold">
        Examples
      </Text>
      <div className={css(styles.demos)}>
        {demo.demos.map((demo, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Demo demo={demo} key={i} />
        ))}
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  demosContainer: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridRowGap: "20px",
  },
  demos: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gridColumnGap: "36px",
    gridRowGap: "108px",
    marginTop: "36px",
  },
});
