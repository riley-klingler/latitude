/**
 * TEAM: frontend_infra
 *
 * @flow
 */

// $FlowFixMe(kaye) the club can't handle me right now
import overview from "design_system/interfaces/guidelines/Overview.txt";
import Iconography from "design_system/interfaces/guidelines/Iconography";
import ColorSystem from "design_system/interfaces/guidelines/ColorSystem";
import FilteringPage from "design_system/interfaces/guidelines/v2/pages/FilteringPage";
import FormsPage from "design_system/interfaces/guidelines/v2/pages/forms/FormsPage";
import TypographyPage from "design_system/interfaces/guidelines/v2/pages/TypographyPage";
import ShipmentsPage from "design_system/interfaces/guidelines/v2/pages/ShipmentsPage";

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
