/**
 * TEAM: frontend_infra
 * @flow
 */

import type {Node} from "react";
import React, {useState, useCallback, useContext} from "react";
import {css, StyleSheet} from "styles/aphrodite";
import PageIndex from "design_system/interfaces/guidelines/v2/components/PageIndex";

export type IndexEntry = {|
  +name: string,
  +element: HTMLElement,
|};

type UpdateIndexFn = ?(entry: IndexEntry) => void;

const UpdateIndexFnContext = React.createContext<UpdateIndexFn>(null);

export const useIndexing = (addToIndex: boolean, name: string) => {
  const updateIndexFn = useContext(UpdateIndexFnContext);

  const addRef = useCallback(
    (element: ?HTMLElement) => {
      if (addToIndex && updateIndexFn && element) {
        updateIndexFn({name, element});
      }
    },
    [addToIndex, updateIndexFn, name]
  );

  return addRef;
};

type Props = {|
  +children: Node,
|};

function IndexedPage({children}: Props) {
  const [indexEntries, setIndexEntries] = useState([]);

  const updateIndexFn: UpdateIndexFn = useCallback(
    newEntry => {
      setIndexEntries(oldIndexEntries => {
        let updated = false;

        const newIndexEntries = oldIndexEntries.map(oldEntry => {
          if (oldEntry.name === newEntry.name) {
            updated = true;
            return newEntry;
          }
          return oldEntry;
        });

        if (updated) {
          return newIndexEntries;
        }

        return [...newIndexEntries, newEntry];
      });
    },
    [setIndexEntries]
  );

  return (
    <UpdateIndexFnContext.Provider value={updateIndexFn}>
      <PageIndex entries={indexEntries} />
      <div className={css(styles.wrapper)}>{children}</div>
    </UpdateIndexFnContext.Provider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingRight: 160,
    "@media (max-width: 1023px)": {
      paddingRight: 0,
    },
  },
});

export default IndexedPage;
