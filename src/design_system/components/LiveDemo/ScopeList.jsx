/**
 * TEAM: frontend_infra
 * @flow
 */

import React from "react";
import PopupWithClickAway from "popup/PopupWithClickAway";
import GeneralPopover from "popover/GeneralPopover";
import IconButton from "button/IconButton";

type Props = {|
  +scope: {[key: string]: any},
|};

function ScopeList({scope}: Props) {
  return (
    <PopupWithClickAway>
      {(Target, Popup, {openPopup, closePopup, isOpen}) => (
        <>
          <Target>
            <IconButton
              size="m"
              kind="hollow"
              type="button"
              iconName="list"
              onClick={isOpen ? closePopup : openPopup}
            />
          </Target>
          {isOpen && (
            <Popup placement="bottom-end">
              <GeneralPopover title="Scope" buttons={[]}>
                <ul>
                  {Object.keys(scope)
                    .sort()
                    .map(name => (
                      <li key={name}>{name}</li>
                    ))}
                </ul>
              </GeneralPopover>
            </Popup>
          )}
        </>
      )}
    </PopupWithClickAway>
  );
}

export default ScopeList;
