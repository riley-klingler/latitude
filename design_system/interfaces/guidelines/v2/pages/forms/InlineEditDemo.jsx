/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";

import Group from "../../../../../../Group";
import TextInput from "../../../../../../TextInput";
import Label from "../../../../../../Label";
import InlineEdit from "../../../../../../InlineEdit";
import TextareaInput from "../../../../../../TextareaInput";
import SectionExample from "./SectionExample";

function FormLevelErrorsDemo() {
  return (
    <SectionExample>
      <Group flexDirection="column" gap={8}>
        <Label value="Client name" indicateRequired={true}>
          <InlineEdit
            value="Vandelay Industries"
            onChange={() => {}}
            editStyle="pencil"
            textWrap={true}
          >
            {props => <TextInput {...props} />}
          </InlineEdit>
        </Label>
        <Label value="Description" indicateRequired={true}>
          <InlineEdit
            value="Verified Gross Mass (VGM) rail transpacific east bound shipment less than container load freight charges."
            onChange={() => {}}
            textWrap={true}
            editStyle="pencil"
          >
            {props => <TextareaInput {...props} rows={4} />}
          </InlineEdit>
        </Label>
      </Group>
    </SectionExample>
  );
}

export default FormLevelErrorsDemo;
