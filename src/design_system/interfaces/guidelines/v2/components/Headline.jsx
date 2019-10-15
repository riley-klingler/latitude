/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {StyleSheet, css} from "aphrodite";
import Text from "Text";

type Props = {|
  +children: React.Node,
|};

function Headline({children}: Props) {
  return (
    <div className={css(styles.headline)}>
      <Text scale="title">{children}</Text>
    </div>
  );
}

const styles = StyleSheet.create({
  headline: {
    marginBottom: 32,
  },
});

export default Headline;
