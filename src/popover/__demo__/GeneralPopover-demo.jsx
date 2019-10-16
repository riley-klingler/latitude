/**
 * TEAM: frontend_infra
 * @flow
 */

import type {DemoFile} from "../../design_system/types/demoTypes";
import * as React from "react";
import GeneralPopover from "../GeneralPopover";
import Button from "../../button/Button";
import PopupWithClickAway from "../../popup/PopupWithClickAway";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic usage",
      description:
        "A popover consists of a title, subtitle, body, and an array of action buttons",
      example: fn => {
        const popover = (
          <GeneralPopover
            title="Popover"
            subtitle="This is a popover"
            buttons={[
              <Button kind="bare" intent="none" key={1}>
                Cancel
              </Button>,
              <Button kind="bare" intent="basic" key={2}>
                Submit
              </Button>,
            ]}
          >
            Verified Gross Mass (VGM) rail transpacific east bound shipment less
            than container load.
          </GeneralPopover>
        );

        fn(popover);

        return popover;
      },
    },
    {
      type: "code",
      title: "Basic usage",
      description:
        "A popover consists of a title, subtitle, body, and an array of action buttons",
      example: fn => {
        const example = (
          <div style={{display: "flex", justifyContent: "start"}}>
            <PopupWithClickAway>
              {(Target, Popup, {openPopup, closePopup, isOpen}) => (
                <>
                  <Target>
                    <Button onClick={!isOpen ? openPopup : closePopup}>
                      Click me
                    </Button>
                  </Target>
                  <Popup placement="bottom-start">
                    <GeneralPopover
                      title="Popover"
                      subtitle="This is a popover"
                      buttons={[
                        <Button
                          kind="bare"
                          intent="none"
                          key={1}
                          onClick={closePopup}
                        >
                          Cancel
                        </Button>,
                        <Button
                          kind="bare"
                          intent="basic"
                          key={2}
                          onClick={closePopup}
                        >
                          Submit
                        </Button>,
                      ]}
                    >
                      Verified Gross Mass (VGM) rail transpacific east bound
                      shipment less than container load.
                    </GeneralPopover>
                  </Popup>
                </>
              )}
            </PopupWithClickAway>
          </div>
        );

        fn(`<PopupWithClickAway>
  {(Target, Popup, {openPopup, closePopup, isOpen}) => (
    <React.Fragment>
        <Target>
          <Button onClick={!isOpen ? openPopup : closePopup}>Click me</Button>
        </Target>
      <Popup placement="bottom-start">{popover}</Popup>
    </React.Fragment>
  )}
</PopupWithClickAway>`);
        return example;
      },
    },
  ],
};

export default demos;
