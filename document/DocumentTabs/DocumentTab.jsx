/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {StyleSheet, css} from "aphrodite";
import Dotdotdot from "react-dotdotdot";
import PopupWithClickAway from "../../popup/PopupWithClickAway";
import GeneralPopover from "../../popover/GeneralPopover";
import Button from "../../button/Button";
import IconButton from "../../button/IconButton";
import Tooltip from "../../Tooltip";
import Text from "../../Text";
import Clickable from "../../base_candidate/Clickable";
import colors from "../../styles/colors";
import sizes, {type Size} from "./sizes";
import {ListPopupContext} from "./MoreTab";

type Props = {|
  +children: string,
  +isOverflow: boolean,
  +width: number,
  +isSelected: boolean,
  +onClick: () => void,
  +onDelete: () => void,
  +size: Size,
|};

function DocumentTab({
  children,
  isOverflow,
  width,
  size,
  isSelected,
  onClick,
  onDelete,
}: Props) {
  const listPopupContext = React.useContext(ListPopupContext);

  return (
    <PopupWithClickAway>
      {(Target, Popup, {togglePopup}) => (
        <>
          <Target>
            <Clickable
              onClick={() => {
                onClick();
                listPopupContext.togglePopup();
              }}
            >
              {/* $FlowFixMe(dirak): Clickable effectively wraps a div here */}
              <Tooltip
                placement={isOverflow ? "right" : "bottom"}
                mouseEnterDelay={0.5}
                overlay={
                  <div style={{width, wordWrap: "break-word"}}>{children}</div>
                }
              >
                <div
                  className={css(
                    styles.container,
                    !isOverflow && styles.underline,
                    isOverflow && isSelected && styles.greyBackground,
                    isSelected && styles.selected
                  )}
                  style={{width, height: sizes[size]}}
                >
                  <div
                    className={css(styles.textContainer)}
                    // width offset by container margins
                    style={{width: width - 48}}
                  >
                    <Dotdotdot clamp={size !== "s" ? 2 : 1}>
                      {children}
                    </Dotdotdot>
                  </div>

                  <div
                    className={css(
                      styles.buttonContainer,
                      !isSelected && styles.hidden
                    )}
                  >
                    <IconButton
                      iconName="trash"
                      type="button"
                      intent="none"
                      kind="blank"
                      onClick={e => {
                        togglePopup();
                        e.stopPropagation();
                      }}
                    />
                  </div>
                </div>
              </Tooltip>
            </Clickable>
          </Target>
          <Popup placement={isOverflow ? "right-start" : "bottom-start"}>
            <div style={{margin: isOverflow ? "0 8px" : "8px 0"}}>
              <GeneralPopover
                title="Delete Shipping Order"
                buttons={[
                  <Button key={1} label="Cancel" onClick={togglePopup} />,
                  <Button
                    key={2}
                    label="Delete"
                    intent="danger"
                    kind="solid"
                    onClick={() => {
                      onDelete();
                      togglePopup();
                    }}
                  />,
                ]}
              >
                <div className={css(styles.popoverBody)}>
                  <Text display="inline">
                    Are you sure you want to delete <b>{children}</b>?
                  </Text>
                  <br />
                  <Text display="inline">
                    You will not be able to access this file once it is deleted.
                    Data from this file will be deleted as well.
                  </Text>
                  <br />
                </div>
              </GeneralPopover>
            </div>
          </Popup>
        </>
      )}
    </PopupWithClickAway>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    padding: "4px 0 4px 20px",
    cursor: "pointer",
    background: colors.white,
    ":hover": {
      background: colors.grey10,
      ":after": {
        backgroundColor: colors.grey30,
      },
    },
    ":hover > :nth-child(2)": {
      display: "flex",
    },

    ":active": {
      background: colors.grey20,
      ":after": {
        backgroundColor: colors.grey40,
      },
    },
  },
  underline: {
    ":after": {
      content: '""',
      position: "absolute",
      left: "0",
      bottom: "0",
      right: "0",
      height: "2px",
      backgroundColor: colors.white,
    },
  },
  selected: {
    fontWeight: "bold",
    ":after": {
      backgroundColor: colors.blue30,
    },
    ":hover": {
      ":after": {
        backgroundColor: colors.blue30,
      },
    },
    ":active": {
      ":after": {
        backgroundColor: colors.blue30,
      },
    },
  },
  textContainer: {
    display: "block",
    wordWrap: "break-word",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    minWidth: "28px",
    height: "100%",
    alignSelf: "flex-start",
  },
  hidden: {
    display: "none",
  },
  greyBackground: {
    background: colors.grey20,
  },
  popoverBody: {
    display: "flex",
    flexDirection: "column",
    wordWrap: "break-word",
  },
});

export default DocumentTab;
