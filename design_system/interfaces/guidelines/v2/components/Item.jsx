/**
 * TEAM: frontend_infra
 * @flow
 */

import React, {type Node} from "react";

type Props = {|
  +children: Node,
  +className?: string,
|};

function Item({children, className}: Props) {
  return <div className={className}>{children}</div>;
}

export default Item;
