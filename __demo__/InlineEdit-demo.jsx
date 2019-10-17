/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import type {DemoFile} from "../design_system/types/demoTypes";
import Group from "../Group";
import InlineEdit from "../InlineEdit";
import Label from "../Label";
import TextInput from "../TextInput";
import TextareaInput from "../TextareaInput";
import FloatInput from "../FloatInput";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic Usage",
      description:
        "Have a value be editable directly in on the page using Inline Edit. When the `edit` button is pressed, the user will be prompted to edit the value.",
      example: fn => <InlineEditShim elementToCodeFn={fn} />,
    },
    {
      type: "code",
      title: "Pencil Inline Edit",
      description:
        "InlineEdit also supports `pencil` style inline editting. In this mode, a pencil icon takes the place of the `Edit` Button.",
      example: fn => <InlineEditPencilShim elementToCodeFn={fn} />,
    },
    {
      type: "code",
      title: "Supports multiple Input Types",
      fullWidth: true,
      description:
        "InlineEdit supports inputs other than TextInput, so long as the value of the input can be stingified.",
      example: fn => <InlineEditInputsShim elementToCodeFn={fn} />,
    },
  ],
};

type Props = {
  +elementToCodeFn: React.Node => void,
};

function InlineEditShim({elementToCodeFn}: Props) {
  const [val, setVal] = React.useState("Theseus");

  const comp = (
    <Label value="Ship Name" indicateRequired={true}>
      <InlineEdit value={val} onChange={setVal}>
        {props => <TextInput {...props} />}
      </InlineEdit>
    </Label>
  );

  elementToCodeFn(`<Label value="Ship Name" indicateRequired={true}>
  <InlineEdit value={val} onChange={setVal}>
    {props => <TextInput {...props} />}
  </InlineEdit>
</Label>`);

  return <div style={{width: "240px"}}>{comp}</div>;
}

function InlineEditPencilShim({elementToCodeFn}: Props) {
  const [val, setVal] = React.useState("FLEX001234");

  const comp = (
    <Label value="Shipment ID" indicateRequired={true}>
      <InlineEdit
        editStyle="pencil"
        textWrap={true}
        value={val}
        onChange={setVal}
      >
        {props => <TextInput {...props} />}
      </InlineEdit>
    </Label>
  );

  elementToCodeFn(`<Label value="Shipment ID" indicateRequired={true}>
  <InlineEdit
    editStyle="pencil"
    textWrap={true}
    value={val}
    onChange={setVal}
  >
    {props => <TextInput {...props} />}
  </InlineEdit>
</Label>`);

  return <div style={{width: "240px"}}>{comp}</div>;
}

function InlineEditInputsShim({elementToCodeFn}: Props) {
  const [number, setNumber] = React.useState(1234);
  const [text, setText] = React.useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  );

  const comp = (
    <Group gap={20}>
      <div style={{width: "240px"}}>
        <Label value="Number Input" indicateRequired={true}>
          <InlineEdit value={number} onChange={setNumber}>
            {props => <FloatInput {...props} />}
          </InlineEdit>
        </Label>
      </div>

      <div style={{width: "240px"}}>
        <Label value="Text area Input" indicateRequired={true}>
          <InlineEdit
            editStyle="pencil"
            textWrap={true}
            value={text}
            onChange={setText}
          >
            {props => <TextareaInput {...props} rows={{min: 2, max: 10}} />}
          </InlineEdit>
        </Label>
      </div>
    </Group>
  );

  elementToCodeFn(`<Group gap={20}>
  <div style={{width: "240px"}}>
    <Label value="Number Input" indicateRequired={true}>
      <InlineEdit value={number} onChange={setNumber}>
        {props => <FloatInput {...props} />}
      </InlineEdit>
    </Label>
  </div>

  <div style={{width: "240px"}}>
    <Label value="Text area Input" indicateRequired={true}>
      <InlineEdit
        editStyle="pencil"
        textWrap={true}
        value={text}
        onChange={setText}
      >
        {props => <TextareaInput {...props} rows={{min: 2, max: 10}} />}
      </InlineEdit>
    </Label>
  </div>
</Group>`);

  return comp;
}

export default demos;
