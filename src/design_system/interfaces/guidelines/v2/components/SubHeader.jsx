/**
 * TEAM: frontend_infra
 * @flow
 */

import React from "react";
import {StyleSheet, css} from "aphrodite";
import Text from "Text";

type Props = {|
  +children: string,
|};

function SubHeader({children}: Props) {
  return (
    <div className={css(styles.subHeader)}>
      <Text weight="bold">{children}</Text>
    </div>
  );
}

const styles = StyleSheet.create({
  subHeader: {
    marginBottom: 16,
  },
});

export default SubHeader;
