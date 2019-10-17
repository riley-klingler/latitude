/**
 * TEAM: frontend_infra
 * @flow
 */

import React from "react";
import {StyleSheet, css} from "aphrodite";
import Text from "../../../../../Text";
import {useIndexing} from "./IndexedPage";
import ElementLink from "./ElementLink";

type Props = {|
  +children: string,
  +addToIndex?: boolean,
  +indexText?: string,
|};

function MainHeader({children, addToIndex = true, indexText = null}: Props) {
  const addRef = useIndexing(addToIndex, indexText || children);

  return (
    <div ref={addRef} className={css(styles.mainHeader)}>
      <ElementLink name={indexText || children}>
        <Text scale="headline" weight="bold">
          {children}
        </Text>
      </ElementLink>
    </div>
  );
}

const styles = StyleSheet.create({
  mainHeader: {
    marginTop: 20,
    marginBottom: 36,
  },
});

export default MainHeader;
