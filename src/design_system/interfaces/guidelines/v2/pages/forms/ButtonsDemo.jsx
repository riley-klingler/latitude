/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";

import TextInput from "TextInput";
import Label from "Label";
import Button from "button/Button";
import FormSection from "form/FormSection";
import FormRow from "form/FormRow";
import SectionExample from "design_system/interfaces/guidelines/v2/pages/forms/SectionExample";

function ButtonsDemo() {
  return (
    <SectionExample>
      <FormSection columns={1} columnGap={12} minColumnWidth={160}>
        <FormRow columnSpans={[1]}>
          <Label value="Label" indicateRequired={true}>
            {/** $FlowFixMe(kaye) This is just a demo - it doesnt matter */}
            <TextInput onChange={() => undefined} />
          </Label>
        </FormRow>
        <FormRow columnSpans={[1]}>
          <Button type="button" kind="hollow" intent="basic">
            Add
          </Button>
        </FormRow>
      </FormSection>
    </SectionExample>
  );
}

export default ButtonsDemo;
