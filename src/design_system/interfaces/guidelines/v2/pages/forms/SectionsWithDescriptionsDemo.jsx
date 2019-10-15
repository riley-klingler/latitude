/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";

import TextInput from "TextInput";
import Label from "Label";
import FormSection from "form/FormSection";
import FormRow from "form/FormRow";
import SectionExample from "design_system/interfaces/guidelines/v2/pages/forms/SectionExample";

function SectionsWithDescriptionsDemo() {
  return (
    <SectionExample>
      <FormSection
        minColumnWidth={120}
        sectionTitle="Section"
        description="Verified Gross Mass (VGM) rail transpacific east bound
shipment less than container load freight charges."
        columns={1}
        columnGap={20}
      >
        <FormRow columnSpans={[1]}>
          <Label value="Label">
            {/** $FlowFixMe(kaye) This is just a demo - it doesnt matter */}
            <TextInput onChange={() => undefined} />
          </Label>
        </FormRow>
      </FormSection>
      <FormSection
        minColumnWidth={120}
        sectionTitle="Section"
        description="Verified Gross Mass (VGM) rail transpacific east bound
      shipment less than container load freight charges."
        columns={1}
        columnGap={20}
      >
        <FormRow columnSpans={[1]}>
          <Label value="Label">
            {/** $FlowFixMe(kaye) This is just a demo - it doesnt matter */}
            <TextInput onChange={() => undefined} />
          </Label>
        </FormRow>
      </FormSection>
    </SectionExample>
  );
}

export default SectionsWithDescriptionsDemo;
