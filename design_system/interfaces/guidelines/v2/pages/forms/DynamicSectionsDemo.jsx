/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";

import Group from "../../../../../../Group";
import Button from "../../../../../../button/Button";
import Rule from "../../../../../../form/Rule";
import TextInput from "../../../../../../TextInput";
import Label from "../../../../../../Label";
import FormSection from "../../../../../../form/FormSection";
import FormRow from "../../../../../../form/FormRow";
import SectionExample from "./SectionExample";

function DynamicSectionsDemo() {
  return (
    <SectionExample>
      <Group flexDirection="column" gap={20}>
        <FormSection
          columns={1}
          columnGap={20}
          minColumnWidth={140}
          sectionTitle="Sub section"
          onRequestDelete={() => undefined}
        >
          <FormRow columnSpans={[1]}>
            <Label value="Label" indicateRequired={true}>
              <TextInput onChange={() => undefined} value="" />
            </Label>
          </FormRow>
          <FormRow columnSpans={[1]}>
            <Label value="Label" indicateRequired={true}>
              <TextInput onChange={() => undefined} value="" />
            </Label>
          </FormRow>
        </FormSection>
        <Rule />
        <FormSection
          columns={1}
          columnGap={20}
          minColumnWidth={140}
          sectionTitle="Sub section"
          onRequestDelete={() => undefined}
        >
          <FormRow columnSpans={[1]}>
            <Label value="Label" indicateRequired={true}>
              <TextInput onChange={() => undefined} value="" />
            </Label>
          </FormRow>
          <FormRow columnSpans={[1]}>
            <Label value="Label" indicateRequired={true}>
              <TextInput onChange={() => undefined} value="" />
            </Label>
          </FormRow>
          <FormRow columnSpans={[1]}>
            <Button type="button" intent="basic" kind="hollow">
              Add another container
            </Button>
          </FormRow>
        </FormSection>
      </Group>
    </SectionExample>
  );
}

export default DynamicSectionsDemo;
