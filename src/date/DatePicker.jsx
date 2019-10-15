/**
 * TEAM: frontend_infra
 * @flow
 */
/* eslint-disable flexport/dynamic-import-webchunkname */

import Loadable from "react-loadable";

const LazyDatePicker = () => {
  const imports = [
    import(/* webpackChunkName: "react-datepicker" */ "./DatePickerOverride"),
  ];

  // if server side rendering, don't call CSS Loader
  if (document) {
    imports.push(
      import(/* webpackChunkName: "react-datepicker" */ "vendor_stylesheets/react-datepicker.css")
    );
  }

  imports.push(
    import(/* webpackChunkName: "react-datepicker" */ "./DatePickerStylesOverride.css")
  );

  return Promise.all(imports).then(data => data[0]);
};

// $FlowUpgradeFixMe(0.84.0 -> 0.85.0)
const DatePicker = Loadable({
  loader: LazyDatePicker,
  loading: () => null,
});

export default DatePicker;
