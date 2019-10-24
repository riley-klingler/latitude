/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";

import typeof DatePickerOverrideType from "./DatePickerOverride";

const LazyDatePicker = React.lazy(() => {
  const imports = [
    import(/* webpackChunkName: "react-datepicker" */ "./DatePickerOverride"),
    import(/* webpackChunkName: "react-datepicker" */ "../vendor_stylesheets/react-datepicker.css"),
    import(/* webpackChunkName: "react-datepicker" */ "./DatePickerStylesOverride.css"),
  ];

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
