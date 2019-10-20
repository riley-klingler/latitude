/**
 * TEAM: frontend_infra
 *
 * @flow
 */

import Overview from "./components/Overview";
import Colors from "./components/Colors";
import Whitespace from "./components/Whitespace";

const stylesManifest = {
  overview: {
    content: Overview,
    type: "jsx",
  },
  colors: {
    content: Colors,
    type: "jsx",
  },
  whitespace: {
    content: Whitespace,
    type: "jsx",
  },
};

export default stylesManifest;
