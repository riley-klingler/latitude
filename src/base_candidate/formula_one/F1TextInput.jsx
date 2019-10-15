/**
 * TEAM: frontend_infra
 *
 * @flow
 */

import * as React from "react";

import withF1, {
  type F1FieldProps,
} from "base_candidate/formula_one/withF1";
import TextInput from "TextInput";

type TextInputProps = $Exact<
  $Diff<
    React.ElementConfig<typeof TextInput>,
    {
      +value: any,
      +onChange: any,
      +onBlur: any,
      +isInvalid: any,
    }
  >
>;

type Props = {|
  ...TextInputProps,
  ...F1FieldProps<string>,
|};

const F1TextInput = (props: Props) => {
  const {link, validation, label, tooltipText, isRequired, ...rest} = props;
  const withF1Props = {link, validation, label, tooltipText, isRequired};
  return withF1(TextInput, withF1Props, rest);
};

export default F1TextInput;
