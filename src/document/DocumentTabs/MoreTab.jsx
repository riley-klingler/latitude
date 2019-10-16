/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {StyleSheet, css} from "aphrodite";
import Dotdotdot from "react-dotdotdot";
import PopupWithClickAway from "../../popup/PopupWithClickAway";
import Text from "../../Text";
import Icon from "../../Icon";
import colors from "../../styles/colors";
import Clickable from "../../base_candidate/Clickable";
import typeof DocumentTab from "./DocumentTab";
import sizes, {type Size} from "./sizes";

type Props = {|
  +children: React.ChildrenArray<React.Element<DocumentTab>>,
  +width: number,
  +selectedLabel: string | null,
  +size: Size,
|};

export const ListPopupContext = React.createContext<{
  togglePopup: () => void,
}>({
  togglePopup: () => {},
});

function MoreTab({width, selectedLabel, size, children}: Props) {
  return (
    <PopupWithClickAway>
      {(Target, Popup, {togglePopup, isOpen}) => (
        <>
          <Target>
            <Clickable onClick={togglePopup}>
              <div
                className={css(
                  styles.container,
                  !!selectedLabel && styles.selected
                )}
                style={{width, height: sizes[size]}}
              >
                <Text
                  color={selectedLabel ? "grey60" : "blue30"}
                  weight="bold"
                  wordBreak="break-word"
                >
                  {selectedLabel ? (
                    <Dotdotdot clamp={size !== "s" ? 2 : 1}>
                      {selectedLabel}
                    </Dotdotdot>
                  ) : (
                    "More"
                  )}
                </Text>
                <div className={css(styles.buttonContainer)}>
                  <Icon iconName="downOpen" color="blue30" />
                </div>
              </div>
            </Clickable>
          </Target>
          {isOpen ? (
            <Popup>
              <div
                className={css(styles.listContainer)}
                style={{width: width + 2}}
              >
                <ListPopupContext.Provider value={{togglePopup}}>
                  {children}
                </ListPopupContext.Provider>
              </div>
            </Popup>
          ) : null}
        </>
      )}
    </PopupWithClickAway>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    padding: "4px 4px 4px 20px",
    background: colors.white,
  },
  listContainer: {
    marginTop: "4px",
    minWidth: "100%",
    border: `1px solid ${colors.grey30}`,
    background: "white",

    ":nth-child(1n) > :not(:last-child)": {
      borderBottom: `1px solid ${colors.grey30}`,
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    minWidth: "28px",
  },
  selected: {
    ":after": {
      content: '""',
      position: "absolute",
      left: "0",
      bottom: "0",
      width: "100%",
      height: "2px",
      backgroundColor: colors.blue30,
    },
  },
});

export default MoreTab;
