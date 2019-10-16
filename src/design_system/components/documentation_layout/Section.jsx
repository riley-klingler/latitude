/**
 * TEAM: frontend_infra
 *
 * @flow
 */
import * as React from "react";
import Group from "../../../Group";
import Text from "../../../Text";

type Props = {
  +children?: React.Node,
  +title?: string,
  +subtitle?: string | React.Node,
};

export default class Section extends React.PureComponent<Props> {
  render() {
    const {children, title, subtitle} = this.props;
    return (
      <section>
        <Group flexDirection="column" gap={20}>
          <header>
            {title ? <Text scale="headline">{title}</Text> : null}
            {subtitle ? <Text scale="title"> ({subtitle})</Text> : null}
          </header>
          {children}
        </Group>
      </section>
    );
  }
}
