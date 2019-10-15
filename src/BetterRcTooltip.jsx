/**
 * TEAM: frontend_infra
 * @flow strict
 */

/**
 * A wrapper around rc-tooltip that adds facilities for positioning the caret.
 */

import * as React from "react";

// $FlowFixMe(ethan): this file is untyped
import placeArrow from "tools/placeArrow";

// $FlowFixMe(ethan): this file is untyped
import RcTooltip from "rc-tooltip";
import "vendor_stylesheets/rc-tooltip.css";

type Props = {
  +children: React.Node,
  +placement?: string,
  +defaultVisible?: boolean,
  +visible?: boolean,
  +mouseEnterDelay?: number,
};

export default function BetterRcTooltip(props: Props) {
  return (
    <RcTooltip mouseLeaveDelay={0.15} {...props} onPopupAlign={placeArrow} />
  );
}
