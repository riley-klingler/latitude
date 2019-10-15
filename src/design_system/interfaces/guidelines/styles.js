/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 *
 * @flow strict
 */

import {StyleSheet} from "styles/aphrodite";

const formGuidelineStyles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginBottom: "256px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: "-10px",
    marginRight: "-10px",
    marginTop: "-10px",
    marginBottom: "20px",
    maxWidth: "100%",
  },
  col: {
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "10px",
  },
  colStack: {
    marginBottom: "20px",
  },
  colAuto: {
    flex: 1,
    minWidth: "296px",
  },
  section: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridRowGap: "36px",
    gridAutoRows: "max-content",
  },
  content: {
    maxWidth: "1024px",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridRowGap: "128px",
  },
  max: {
    maxWidth: "456px",
  },
  example: {
    padding: "56px",
  },
  graphic: {
    height: "auto",
    maxWidth: "100%",
  },
});

export default formGuidelineStyles;
