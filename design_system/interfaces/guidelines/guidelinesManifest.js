/**
 * TEAM: frontend_infra
 * @flow
 */

// $FlowFixMe(kaye)
import overview from "./Overview.txt";
import Iconography from "./Iconography";
import ColorSystem from "./ColorSystem";
import FilteringPage from "./v2/pages/FilteringPage";
import FormsPage from "./v2/pages/forms/FormsPage";
import TypographyPage from "./v2/pages/TypographyPage";
import ShipmentsPage from "./v2/pages/ShipmentsPage";

const guidelinesManifest = {
  overview: {
    content: overview,
    type: "markdown",
  },
  "color-system": {
    content: ColorSystem,
    type: "jsx",
  },
  iconography: {
    content: Iconography,
    type: "jsx",
  },
  typography: {
    content: TypographyPage,
    type: "jsx",
  },
  forms: {
    content: FormsPage,
    type: "jsx",
  },
  filtering: {
    content: FilteringPage,
    type: "jsx",
  },
  shipments: {
    content: ShipmentsPage,
    type: "jsx",
  },
};

export default guidelinesManifest;
