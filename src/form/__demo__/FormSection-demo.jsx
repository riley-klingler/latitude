/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

import type {DemoFile} from "../../design_system/types/demoTypes";
import * as React from "react";
import FormSection from "../FormSection";
import FormRow from "../FormRow";

import Label from "../../Label";
import TextInput from "../../TextInput";

const demos: DemoFile = {
  demos: [
    {
      type: "code",
      title: "Basic Usage",
      description:
        "A simple form can be composed from a single FormSection and a number of FormRows.",
      example: fn => {
        const component = (
          <FormSection columns={2} columnGap={20} minColumnWidth={160}>
            <FormRow columnSpans={[1, 1]}>
              <Label value="First name">
                <TextInput
                  disabled={false}
                  isInvalid={false}
                  onChange={() => undefined}
                  placeholder=""
                  size="m"
                  value=""
                />
              </Label>
              <Label value="Last name">
                <TextInput
                  disabled={false}
                  isInvalid={false}
                  onChange={() => undefined}
                  placeholder=""
                  size="m"
                  value=""
                />
              </Label>
            </FormRow>
            <FormRow columnSpans={[2]}>
              <Label value="Email">
                <TextInput
                  disabled={false}
                  isInvalid={false}
                  onChange={() => undefined}
                  placeholder=""
                  size="m"
                  value=""
                />
              </Label>
            </FormRow>
          </FormSection>
        );
        fn(component);
        return component;
      },
    },
    {
      type: "code",
      title: "minColumnWidth is important",
      description:
        "While specifying the number of columns will establish the basis for the form grid, specifying the minColumnWidth is crucially important for form responsiveness. The grid is auto generated based on a mixture of columns specified and minColumnWidth. If you specify 3 columns with a high minColumnWidth then it is likely that 3 columns will not fit on one line (since their collective min-widths would extend beyond the width of the container). In this case, the grid will auto-fill as many columns that will fit on one line without sacrificing the minColumnWidth.",
      example: fn => {
        const component = (
          <FormSection columns={3} columnGap={20} minColumnWidth={140}>
            <FormRow columnSpans={[1, 1, 1]}>
              <Label value="Length">
                <TextInput
                  disabled={false}
                  isInvalid={false}
                  onChange={() => undefined}
                  placeholder=""
                  size="m"
                  value=""
                />
              </Label>
              <Label value="Width">
                <TextInput
                  disabled={false}
                  isInvalid={false}
                  onChange={() => undefined}
                  placeholder=""
                  size="m"
                  value=""
                />
              </Label>
              <Label value="Height">
                <TextInput
                  disabled={false}
                  isInvalid={false}
                  onChange={() => undefined}
                  placeholder=""
                  size="m"
                  value=""
                />
              </Label>
            </FormRow>
          </FormSection>
        );
        fn(component);
        return component;
      },
    },
  ],
};

export default demos;
