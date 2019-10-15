/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import Collection from "design_system/interfaces/guidelines/v2/components/Collection";
import Item from "design_system/interfaces/guidelines/v2/components/Item";

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
