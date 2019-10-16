/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";

import TextInput from "../../../../../../TextInput";
import Label from "../../../../../../Label";
import InputError from "../../../../../../InputError";
import FormSection from "../../../../../../form/FormSection";
import FormRow from "../../../../../../form/FormRow";
import SectionExample from "./SectionExample";

function InputLevelErrorsDemo() {
  return (
    <SectionExample>
      <FormSection columns={1} columnGap={20} minColumnWidth={160}>
        <FormRow columnSpans={[1]}>
          <Label value="Contract #" indicateRequired={true}>
            <InputError showError={true} errorText="Missing contract #">
              {/** $FlowFixMe(kaye) This is just a demo - it doesnt matter */}
              <TextInput onChange={() => undefined} isInvalid={true} />
            </InputError>
          </Label>
        </FormRow>
      </FormSection>
    </SectionExample>
  );
}

export default InputLevelErrorsDemo;
