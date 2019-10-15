/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import Highlight from "react-highlight/lib/optimized";
import {StyleSheet, css} from "aphrodite";

type Props = {|
  +children: string,
  +hasMargin?: boolean,
|};

function CodeBlock({children, hasMargin = false}: Props) {
  return (
    <div className={css(styles.blockWrapper, hasMargin && styles.margin)}>
      <Highlight languages={["typescript"]}>{children.trim()}</Highlight>
    </div>
  );
}

const styles = StyleSheet.create({
  blockWrapper: {
    display: "block",
    width: "100%",
  },
  margin: {
    marginBottom: 20,
  },
});

export default CodeBlock;
