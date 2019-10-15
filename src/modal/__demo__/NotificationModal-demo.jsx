/**
 * TEAM: frontend_infra
 * @flow
 */

import {type DemoFile, demoCommonStyles} from "design_system/types/demoTypes";
import * as React from "react";
import Button from "button/Button";
import NotificationModal from "modal/NotificationModal";
import {css} from "aphrodite";
import Text from "Text";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Simple example",
      example: elementToCodeFn => (
        <NotificationModalShim elementToCodeFn={elementToCodeFn} />
      ),
    },
  ],
};

export class NotificationModalShim extends React.PureComponent<
  {+elementToCodeFn?: React.Node => void},
  {isOpen: boolean}
> {
  state = {
    isOpen: false,
  };

  handleClose = () => {
    this.setState({isOpen: false});
  };

  handleOpen = () => {
    this.setState({isOpen: true});
  };

  render() {
    const element = (
      <>
        <NotificationModal
          onRequestClose={this.handleClose}
          title="Create New User"
          buttons={[
            <Button key="open" onClick={this.handleClose}>
              Close Modal
            </Button>,
          ]}
        >
          <Text>You cant _handle_ the truth!</Text>
        </NotificationModal>
      </>
    );

    return (
      <div className={css(demoCommonStyles.smallWrapper)}>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        {this.state.isOpen ? element : null}
      </div>
    );
  }
}

export default demos;
