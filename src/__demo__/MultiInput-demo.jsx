/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import type {DemoFile} from "../design_system/types/demoTypes";
import Group from "../Group";
import Label from "../Label";
import MultiInput from "../MultiInput";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic MultiInput",
      example: fn => <BasicDemo fn={fn} />,
    },
    {
      type: "code",
      title: "Paste comma separated content",
      description:
        "Paste me into the MultiInput:\n\n `HS001, HS002, HS003, HS004`",
      example: fn => <PasteDemo fn={fn} />,
    },
    {
      type: "code",
      title: "MultiInput Sizes",
      example: fn => <SizesDemo fn={fn} />,
    },
  ],
};

function BasicDemo({fn}: {|+fn: React.Node => void|}) {
  const [value, setValue] = React.useState(["HS0624"]);

  const demo = (
    <Label value="Shipment Codes">
      <MultiInput value={value} onChange={setValue} />
    </Label>
  );

  fn(demo);

  return <div style={{width: "400px"}}>{demo}</div>;
}

function PasteDemo({fn}: {|+fn: React.Node => void|}) {
  const [value, setValue] = React.useState([]);

  const demo = (
    <Label value="Shipment Codes">
      <MultiInput
        value={value}
        onChange={setValue}
        placeholder="place the items in the description text here"
      />
    </Label>
  );

  fn(demo);

  return <div style={{width: "400px"}}>{demo}</div>;
}

function SizesDemo({fn}: {|+fn: React.Node => void|}) {
  const [value, setValue] = React.useState([
    "first pill",
    "another pill",
    "one more pill",
    "another another",
    "final pill",
  ]);

  const demo = (
    <Group flexDirection="column">
      <div style={{width: "400px"}}>
        <Label value="MultiInput">
          <MultiInput
            value={value}
            onChange={setValue}
            placeholder="you can type whatever here"
          />
        </Label>
      </div>
      <div style={{width: "400px"}}>
        <Label value="MultiInput small">
          <MultiInput
            value={value}
            onChange={setValue}
            size="s"
            placeholder="you can type whatever here"
          />
        </Label>
      </div>
      <div style={{width: "400px"}}>
        <Label value="MultiInput large">
          <MultiInput
            value={value}
            onChange={setValue}
            size="l"
            placeholder="you can type whatever here"
          />
        </Label>
      </div>
    </Group>
  );

  fn(demo);
  return demo;
}

export default demos;
