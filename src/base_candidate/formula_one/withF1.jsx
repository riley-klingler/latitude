/**
 * TEAM: frontend_infra
 *
 * @flow
 */

import * as React from "react";
import {Field} from "formula-one";
import type {FieldLink, Validation} from "formula-one";

import Label from "Label";
import F1InputError from "base_candidate/formula_one/F1InputError";

export type F1FieldProps<T> = {|
  +link: FieldLink<T>,
  +validation?: Validation<T>,
  // TODO(zach): This should probably be optional/defaulted
  +label: string | null,
  +tooltipText?: string,
  +isRequired?: boolean,
|};

const withF1 = <
  T,
  WP: {
    +value: T,
    +onChange: T => void,
    +onBlur?: (event: Event) => void,
    +isInvalid: boolean,
  },
  WC: React.ComponentType<WP>
>(
  WrappedComponent: WC,
  // It would be nice to combine these two, but type spreading breaks coverage (0.83.0)
  fieldProps: F1FieldProps<T>,
  extraProps: $Diff<
    React.ElementConfig<WC>,
    {
      value: any,
      onBlur: any,
      onChange: any,
      isInvalid: any,
    }
  >
): React.Node => {
  const {link, validation, label, tooltipText, isRequired} = fieldProps;

  const field = (
    <Field link={link} validation={validation}>
      {(value, errors, onChange, onBlur) => (
        <F1InputError errors={errors}>
          <WrappedComponent
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            isInvalid={errors.length > 0}
            {...extraProps}
          />
        </F1InputError>
      )}
    </Field>
  );

  if (label) {
    return (
      <Label
        value={label}
        helpTooltip={tooltipText}
        indicateRequired={isRequired}
      >
        {field}
      </Label>
    );
  }

  return field;
};

export default withF1;
