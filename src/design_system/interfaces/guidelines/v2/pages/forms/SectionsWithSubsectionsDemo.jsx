/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";

import Text from "../../../../../../Text";
import Group from "../../../../../../Group";
import TextInput from "../../../../../../TextInput";
import Label from "../../../../../../Label";
import FormSection from "../../../../../../form/FormSection";
import FormRow from "../../../../../../form/FormRow";
import SectionExample from "./SectionExample";

function SectionsWithSubsectionsDemo() {
  return (
    <SectionExample>
      <Group flexDirection="column" gap={20}>
        <Text scale="title" weight="bold">
          Form
        </Text>
        <Text>
          Verified Gross Mass (VGM) rail transpacific east bound shipment less
          than container load freight charges.
        </Text>
        <FormSection
          minColumnWidth={120}
          sectionTitle="Sub Section"
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
          sectionTitle="Sub Section"
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
      </Group>
    </SectionExample>
  );
}

export default SectionsWithSubsectionsDemo;
