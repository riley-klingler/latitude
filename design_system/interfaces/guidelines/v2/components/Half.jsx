/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import Collection from "./Collection";
import Item from "./Item";

type Props = {|
  +children: React.Node,
  +collapse?: boolean,
|};

function Half({children, collapse = true}: Props) {
  return (
    <Collection collapse={collapse}>
      <Item>{children}</Item>
    </Collection>
  );
}

export default Half;
