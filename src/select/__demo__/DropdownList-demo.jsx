/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {StyleSheet, css} from "aphrodite";
import DropdownList, {type Option} from "../DropdownList";
import Group from "../../Group";
import Link from "../../Link";
import Text from "../../Text";

export default {
  demos: [
    {
      type: "code",
      title: "Basic DropdownList",
      description:
        "A dropdown list can be used to create custom dropdown menus",
      example: (elementToCodeFn: React.Node => void) => {
        const component = (
          <DropdownListHoist
            options={[
              {label: "AJD017391"},
              {label: "AJD017392"},
              {label: "AJD017393"},
              {label: "AJD017394"},
            ]}
          />
        );

        elementToCodeFn(component);

        return component;
      },
    },
    {
      type: "code",
      title: "DropdownList with Sections",
      description:
        "Group DropdownList items into sections. Each option specifies what section it belongs to, and a sectionOrder prop is specified to denote section order.",
      example: (elementToCodeFn: React.Node => void) => {
        const component = (
          <DropdownListHoist
            options={[
              {label: "AJD017391", section: "RECENTLY USED"},
              {label: "AJD017392", section: "RECENTLY USED"},
              {label: "AJD017393", section: "OTHER"},
              {label: "AJD017394", section: "OTHER"},
            ]}
            sectionOrder={["RECENTLY USED", "OTHER"]}
          />
        );

        elementToCodeFn(component);

        return component;
      },
    },
    {
      type: "code",
      title: "DropdownList with Custom views",
      description:
        "A customView parameter can be specified for custom item renders. Add a header or footer that will be stickied to the top or bottom of your list.",
      example: (elementToCodeFn: React.Node => void) => {
        const component = (
          <DropdownListHoist
            width="400px"
            footer={
              <div className={css(styles.footer)}>
                <Link href="/design/components/DropdownList">
                  Do Some Action
                </Link>
              </div>
            }
            options={[
              {
                label: "AJD017391",
                customView: <CustomView label="AJD017391" />,
              },
              {
                label: "AJD017392",
                customView: <CustomView label="AJD017392" />,
              },
              {
                label: "AJD017393",
                customView: <CustomView label="AJD017393" />,
              },
              {
                label: "AJD017394",
                customView: <CustomView label="AJD017394" />,
              },
            ]}
          />
        );

        elementToCodeFn(component);

        return component;
      },
    },
  ],
};

type Props = {|
  +options: $ReadOnlyArray<Option>,
  +sectionOrder?: $ReadOnlyArray<string>,
  +header?: React.Node,
  +footer?: React.Node,
  +width?: string,
|};

function DropdownListHoist({
  options,
  sectionOrder,
  header,
  footer,
  width = "200px",
}: Props) {
  const [selected, setSelected] = React.useState(options[0].label);

  return (
    <div style={{width}}>
      <Group>
        Selected: <b>{selected}</b>
      </Group>
      <br />
      <DropdownList
        header={header}
        footer={footer}
        options={options}
        sectionOrder={sectionOrder}
        onClick={setSelected}
      />
    </div>
  );
}

type CustomViewProps = {|
  +label: string,
|};

function CustomView({label}: CustomViewProps) {
  return (
    <div className={css(styles.customContainer)}>
      <Group flexDirection="column" gap={4}>
        <Text>{label}</Text>
        <Text color="grey50">
          Wrought aluminum, provided for in headings 7604, 7605, 7606, 7607,
          7608, 7609 and castings and forgings of aluminum provided for in
          subheading 7616.99.51
        </Text>
      </Group>
    </div>
  );
}

const styles = StyleSheet.create({
  customContainer: {
    padding: "8px 12px",
    width: "100%",
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "8px",
  },
});
