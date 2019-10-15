/**
 * TEAM: frontend_infra
 */
/* eslint-disable flowtype/require-valid-file-annotation */
/* eslint-disable flowtype/require-parameter-type */

import positions from "positions";

// HACK: This file is copied from https://github.com/react-component/tooltip/issues/54

// TODO(ethan): remove this when https://github.com/react-component/tooltip/pull/166 lands.

const placementsMap = {
  tc: "top center",
  bc: "bottom center",
  cl: "center right",
  cr: "center left",
};

export default function placeArrow(tooltipEl, align) {
  const arrowEl = tooltipEl.querySelector(".rc-tooltip-arrow");
  const targetEl = this.getRootDomNode(); // eslint-disable-line no-invalid-this

  const {width, height} = targetEl.getBoundingClientRect();

  const position = positions(
    arrowEl,
    placementsMap[align.points[0]],
    targetEl,
    placementsMap[align.points[1]]
  );

  if (align.points[0] === "tc" || align.points[0] === "bc") {
    arrowEl.style.top = "";
    arrowEl.style.left = `${Math.floor(position.left) + width / 2}px`;
  } else {
    arrowEl.style.top = `${Math.floor(position.top) + height / 2}px`;
    arrowEl.style.left = "";
  }
}
