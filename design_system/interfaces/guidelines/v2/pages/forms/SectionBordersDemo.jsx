/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";

import Group from "../../../../../../Group";
import Text from "../../../../../../Text";
import Rule from "../../../../../../form/Rule";
import TextInput from "../../../../../../TextInput";
import RadioGroup from "../../../../../../radio/RadioGroup";
import Label from "../../../../../../Label";
import FormSection from "../../../../../../form/FormSection";
import FormRow from "../../../../../../form/FormRow";
import SectionExample from "./SectionExample";

function SectionBordersDemo() {
  return (
    <SectionExample>
      <Group flexDirection="column" gap={20}>
        <Text scale="title" weight="bold">
          Form
        </Text>
        <FormSection
          minColumnWidth={120}
          sectionTitle="Sub Section"
          columns={2}
          columnGap={20}
        >
          <FormRow columnSpans={[2]}>
            <Label value="Label">
              {/** $FlowFixMe(kaye) This is just a demo - it doesnt matter */}
              <TextInput onChange={() => undefined} />
            </Label>
          </FormRow>
          <FormRow columnSpans={[1, 1]}>
            <Label value="Label" indicateRequired={true}>
              {/** $FlowFixMe(kaye) This is just a demo - it doesnt matter */}
              <TextInput onChange={() => undefined} />
            </Label>
            <Label value="Label" indicateRequired={true}>
              {/** $FlowFixMe(kaye) This is just a demo - it doesnt matter */}
              <TextInput onChange={() => undefined} />
            </Label>
          </FormRow>
          <FormRow columnSpans={[2]}>
            <RadioGroup
              size="s"
              isInline={false}
              onChange={() => undefined}
              options={[
                {
                  label: "FCL (Full container load)",
                  value: "FCL",
                },
                {
                  label: "LCL (Less than container load)",
                  value: "LCL",
                },
              ]}
              value={null}
            />
          </FormRow>
        </FormSection>
        <Rule />
        <FormSection
          minColumnWidth={120}
          sectionTitle="Sub Section"
          columns={1}
          columnGap={20}
        >
          <FormRow columnSpans={[1]}>
            <Label value="Label" indicateOptional={true}>
              {/** $FlowFixMe(kaye) This is just a demo - it doesnt matter */}
              <TextInput onChange={() => undefined} />
            </Label>
          </FormRow>
        </FormSection>
      </Group>
    </SectionExample>
  );
}

export default SectionBordersDemo;
