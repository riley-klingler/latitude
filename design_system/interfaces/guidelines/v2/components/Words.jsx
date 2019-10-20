/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {StyleSheet, css} from "aphrodite";
import Text from "../../../../../Text";

type Props = {|
  +children: React.Node,
  +paragraph?: boolean,
  +weight?: "bold" | "regular",
|};

function Words({children, paragraph = false, weight = "regular"}: Props) {
  return (
    <div
      className={css(
        paragraph && styles.paragraph,
        !paragraph && styles.sentence
      )}
    >
      <Text weight={weight} display={paragraph ? "block" : "inline"}>
        {children}
      </Text>
    </div>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    marginBottom: 20,
  },
  sentence: {
    display: "inline",
  },
});

export default Words;
