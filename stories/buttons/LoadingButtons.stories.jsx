/**
 * TEAM: marketplace
 * @flow
 */

import * as React from "react";
import {storiesOf} from "@storybook/react";
import {withKnobs, select, boolean} from "@storybook/addon-knobs";
import sections from "../sections";
import {ThemeProvider} from "../../context/ThemeNameContext";
import DeprecatedVerticalGroup from "../../DeprecatedVerticalGroup";
import DeprecatedHorizontalGroup from "../../DeprecatedHorizontalGroup";
import Text from "../../Text";
import Button, {type ButtonKind, type ButtonSize} from "../../button/Button";
import IconButton from "../../button/IconButton";

storiesOf(`${sections.buttons}`, module)
  .addDecorator(withKnobs)
  .add("Loading Buttons", () => {
    const disabled = boolean("Disabled", false);
    const size = select("Size", ["s", "m", "l"], "m");

    return (
      <ThemeProvider theme={select("Theme", ["Base", "Transmission"], "Base")}>
        <DeprecatedVerticalGroup>
          <Text scale="headline">Loading Buttons</Text>

          <Button
            intent="basic"
            kind="solid"
            disabled={disabled}
            isLoading={false}
          >
            your average plain old button
          </Button>

          <Button
            intent="basic"
            kind="solid"
            disabled={disabled}
            isLoading={true}
          >
            You cannot read this
          </Button>

          <DeprecatedHorizontalGroup>
            <DeprecatedVerticalGroup>
              <LoadingButtonHoist intent="basic" kind="solid" size={size} />
              <LoadingButtonHoist intent="basic" kind="hollow" size={size} />
              <LoadingButtonHoist intent="basic" kind="bare" size={size} />
            </DeprecatedVerticalGroup>
            <DeprecatedVerticalGroup>
              <LoadingButtonHoist intent="danger" kind="solid" size={size} />
              <LoadingButtonHoist intent="danger" kind="hollow" size={size} />
              <LoadingButtonHoist intent="danger" kind="bare" size={size} />
            </DeprecatedVerticalGroup>
            <DeprecatedVerticalGroup>
              <LoadingButtonHoist intent="none" kind="hollow" size={size} />
              <LoadingButtonHoist intent="none" kind="bare" size={size} />
            </DeprecatedVerticalGroup>
          </DeprecatedHorizontalGroup>
        </DeprecatedVerticalGroup>
      </ThemeProvider>
    );
  });

type Props = {|
  +intent: "basic" | "danger" | "none",
  +kind: ButtonKind,
  +size: ButtonSize,
|};

type State = {|
  isLoading: boolean,
|};

class LoadingButtonHoist extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  handleClick = () => {
    this.setState({isLoading: true});

    setTimeout(() => {
      this.setState({isLoading: false});
    }, 1000);
  };

  render() {
    const {intent, kind, size} = this.props;
    const {isLoading} = this.state;

    return (
      <DeprecatedVerticalGroup>
        <Button
          intent={intent}
          kind={kind}
          isLoading={isLoading}
          onClick={this.handleClick}
          size={size}
        >
          Submit
        </Button>

        <IconButton
          type="button"
          iconName="ship"
          label="Submit"
          intent={intent}
          kind={kind !== "solid" ? kind : "blank"}
          isLoading={isLoading}
          onClick={this.handleClick}
          size={size}
        />
      </DeprecatedVerticalGroup>
    );
  }
}
