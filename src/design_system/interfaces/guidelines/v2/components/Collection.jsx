/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import Grid from "grid/Grid";
import Row from "grid/Row";
import Cell from "grid/Cell";

type Props = {|
  +children: React.Node,
  +columnsSpan?: 12 | 6 | 4 | 3,
  +hasGutters?: boolean,
  +hasRowGap?: boolean,
  +collapse?: boolean,
|};

function Collection({
  children,
  columnsSpan = 6,
  hasGutters = true,
  hasRowGap = false,
  collapse = true,
}: Props) {
  const cellChildren = React.Children.map(children, (child, index) => (
    /* eslint-disable react/no-array-index-key*/
    <Cell
      span={
        collapse
          ? {
              xs: {span: 12},
              lg: {span: columnsSpan},
            }
          : columnsSpan
      }
      key={index}
    >
      {child}
    </Cell>
  ));

  return (
    <Grid gutter={hasGutters ? 20 : 0} rowGap={hasRowGap ? 20 : 0}>
      <Row>{cellChildren}</Row>
    </Grid>
  );
}

export default Collection;
