/**
 * TEAM: frontend_infra
 *
 * @flow
 */

import Overview from "design_system/interfaces/styles/components/Overview";
import Colors from "design_system/interfaces/styles/components/Colors";
import Whitespace from "design_system/interfaces/styles/components/Whitespace";

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
