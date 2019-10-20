/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";

import typeof DatePickerOverrideType from "./DatePickerOverride";

const LazyDatePicker = React.lazy(() => {
  // TODO(dmnd): Confusingly, one of these imports uses CSS loader despite the
  // comment on the guarded import below...
  const imports = [
    import(/* webpackChunkName: "react-datepicker" */ "./DatePickerOverride"),
    import(/* webpackChunkName: "react-datepicker" */ "./DatePickerStylesOverride.css"),
  ];

  // if server side rendering, don't call CSS Loader
  if (document) {
    imports.push(
      import(/* webpackChunkName: "react-datepicker" */ "../vendor_stylesheets/react-datepicker.css")
    );
  }

  return Promise.all(imports).then(([componentModule]) => componentModule);
});

export default function DatePicker(
  props: React.ElementConfig<DatePickerOverrideType>
) {
  return (
    <React.Suspense fallback={null}>
      <LazyDatePicker {...props} />
    </React.Suspense>
  );
}
