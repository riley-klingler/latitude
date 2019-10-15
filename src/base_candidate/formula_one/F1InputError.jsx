/**
 * TEAM: frontend_infra
 *
 * @flow
 */

import * as React from "react";
import InputError from "InputError";

type Props = {|
  // The F1 errors to be linked to the InputError component
  +errors: $ReadOnlyArray<string>,
  +children?: React.Node,
|};

const formatErrors = (errors: $ReadOnlyArray<string>): string =>
  errors.join(". ");

/**
 * @short Renders a list of Formula one errors for formula one components
 * @category Formula One
 * @status Experimental */
const F1InputError = (props: Props) => {
  const {errors, children} = props;

  return (
    <InputError showError={!!errors.length} errorText={formatErrors(errors)}>
      {children}
    </InputError>
  );
};

export default F1InputError;
export {formatErrors};
