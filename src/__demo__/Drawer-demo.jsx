/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {css} from "aphrodite";
import {type DemoFile, demoCommonStyles} from "../design_system/types/demoTypes";
import Button from "../button/Button";
import Drawer from "../Drawer";
import Text from "../Text";

const demos: DemoFile = {
  demos: [
    {
      type: "full",
      example: (elementToCodeFn, demoProps) => (
        <DrawerShim elementToCodeFn={elementToCodeFn} demoProps={demoProps} />
      ),
      knobs: {},
    },
  ],
};

type DemoProps = {};

export class DrawerShim extends React.PureComponent<
  {+elementToCodeFn?: React.Node => void, +demoProps: DemoProps},
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
      <Drawer
        onClose={this.handleClose}
        title="Messages"
        isOpen={this.state.isOpen}
        navOffset={0}
      >
        <Text>Testing!</Text>
      </Drawer>
    );
    const {elementToCodeFn} = this.props;
    // eslint-disable-next-line no-unused-expressions
    elementToCodeFn && elementToCodeFn(element);
    return (
      <div className={css(demoCommonStyles.smallWrapper)}>
        <Button
          onClick={this.state.isOpen ? this.handleClose : this.handleOpen}
        >
          {`${this.state.isOpen ? "Close" : "Open"} drawer`}
        </Button>
        {this.state.isOpen ? element : null}
      </div>
    );
  }
}

export default demos;
