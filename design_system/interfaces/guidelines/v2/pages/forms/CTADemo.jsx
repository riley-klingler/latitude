/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";

import Group from "../../../../../../Group";
import TextInput from "../../../../../../TextInput";
import Label from "../../../../../../Label";
import Button from "../../../../../../button/Button";
import FormSection from "../../../../../../form/FormSection";
import FormRow from "../../../../../../form/FormRow";
import SectionExample from "./SectionExample";

function CTADemo() {
  return (
    <SectionExample>
      <FormSection columns={1} columnGap={20} minColumnWidth={160}>
        <FormRow columnSpans={[1]}>
          <Label value="Label" indicateRequired={true}>
            
            <TextInput onChange={() => undefined} value="" />
          </Label>
        </FormRow>
        <FormRow columnSpans={[1]}>
          <Group justifyContent="flex-end" gap={12}>
            <Button type="button" kind="bare">
              Delete
            </Button>
            <Button type="button" kind="hollow">
              Cancel
            </Button>
            <Button type="button" kind="solid" intent="basic">
              Save
            </Button>
          </Group>
        </FormRow>
      </FormSection>
    </SectionExample>
  );
}

export default CTADemo;
