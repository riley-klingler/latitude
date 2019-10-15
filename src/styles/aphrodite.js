/**
 * TEAM: frontend_infra
 * WATCHERS: uforic
 *
 * @flow strict
 */

import {StyleSheet, css} from "aphrodite";

export {StyleSheet, css};

// when we move our layout to Aphrodite, the stylesheets might not be injected
// upon componentDidMount. Specifically, this will happen on first page load.
// Per Aphrodite's recommendation:
// https://github.com/Khan/aphrodite#style-injection-and-buffering,
// we can call setTimeout(<blah>, 0), and the styles will have laoded before
// the computation.
export function executeAfterStylesLoad(styleDependentFn: () => void) {
  return setTimeout(styleDependentFn, 0);
}
