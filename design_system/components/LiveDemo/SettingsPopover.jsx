/**
 * TEAM: frontend_infra
 * @flow
 */

import React from "react";
import PopupWithClickAway from "../../../popup/PopupWithClickAway";
import GeneralPopover from "../../../popover/GeneralPopover";
import IconButton from "../../../button/IconButton";
import SettingsToggle from "../../../SettingsToggle";
import Grid from "../../../grid/Grid";
import Row from "../../../grid/Row";
import Cell from "../../../grid/Cell";

type Props = {|
  +settings: {|
    +inline: boolean,
    +setInline: boolean => void,
    +split: boolean,
    +setSplit: boolean => void,
  |},
|};

function SettingsPopover({settings}: Props) {
  const {inline, setInline, split, setSplit} = settings;

  return (
    <PopupWithClickAway>
      {(Target, Popup, {openPopup, closePopup, isOpen}) => (
        <>
          <Target>
            <IconButton
              size="m"
              kind="hollow"
              type="button"
              iconName="cog"
              onClick={isOpen ? closePopup : openPopup}
            />
          </Target>
          {isOpen && (
            <Popup placement="bottom-end">
              <GeneralPopover title="Settings" buttons={[]}>
                <Grid gutter={20} rowGap={0}>
                  <Row>
                    <Cell span={6}>
                      <SettingsToggle
                        checked={inline}
                        onChange={newVal => setInline(newVal)}
                        label="Inline"
                      />
                    </Cell>
                    <Cell span={6}>
                      <SettingsToggle
                        checked={split}
                        onChange={newVal => setSplit(newVal)}
                        label="Split"
                      />
                    </Cell>
                  </Row>
                </Grid>
              </GeneralPopover>
            </Popup>
          )}
        </>
      )}
    </PopupWithClickAway>
  );
}

export default SettingsPopover;
